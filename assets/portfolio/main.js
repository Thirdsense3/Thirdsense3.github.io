const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function whenNear(element, callback, rootMargin) {
  if (!('IntersectionObserver' in window)) return callback();
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    callback();
  }, { rootMargin });
  observer.observe(element);
}

// homeTrend가 공개하는 데이터 파일(같은 도메인)을 읽어 마지막 갱신 상태를 보여 줍니다.
// 불러오지 못하면 패널은 숨긴 채로 둡니다.
const livePanel = document.querySelector('[data-live-panel]');
const STALE_HOURS = 30;

async function fetchJson(path) {
  const response = await fetch(path, { cache: 'no-cache' });
  if (!response.ok) throw new Error(`${path}: ${response.status}`);
  return response.json();
}

function formatKst(date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(date)
      .map((part) => [part.type, part.value]),
  );
  return `${parts.month}.${parts.day} (${parts.weekday}) ${parts.hour}:${parts.minute}`;
}

async function loadLiveStatus() {
  const field = (name) => livePanel.querySelector(`[data-live="${name}"]`);
  const count = (n) => n.toLocaleString('ko-KR');
  try {
    const meta = await fetchJson('/homeTrend/data/meta.json');
    const builtAt = new Date(meta.builtAt);
    if (Number.isNaN(builtAt.getTime())) return;

    const hours = (Date.now() - builtAt.getTime()) / 36e5;
    const stale = hours > STALE_HOURS;
    livePanel.classList.toggle('is-stale', stale);
    field('state').textContent = stale
      ? `갱신 지연 · ${Math.max(1, Math.floor(hours / 24))}일 전`
      : '정상';
    field('built').textContent = formatKst(builtAt);
    field('run').textContent = meta.build?.runNumber ?? meta.buildNo;

    try {
      const changes = await fetchJson('/homeTrend/data/changes.json');
      if (changes.status !== 'ok' || changes.no !== meta.buildNo) throw new Error('changes mismatch');
      const items = changes.items.filter((item) => item.b === changes.no);
      const added = items.filter((item) => item.type === 'new');
      const regions = new Set(added.map((item) => item.code)).size;
      field('added').textContent = `${count(added.length)}건 · ${regions}개 지역`;
      field('removed').textContent = `${count(items.filter((item) => item.type === 'del').length)}건`;
    } catch {
      livePanel.querySelectorAll('[data-live-row]').forEach((row) => row.remove());
    }

    livePanel.hidden = false;
  } catch {
    // 데이터가 없거나 형식이 바뀌면 패널을 보이지 않습니다.
  }
}

if (livePanel) whenNear(livePanel.closest('section'), loadLiveStatus, '400px');

// 장애 회고 로그는 화면에 들어올 때 한 줄씩 펼칩니다. JavaScript가 없거나
// 움직임 줄이기 설정이면 처음부터 모두 보입니다.
if (!reduceMotion && 'IntersectionObserver' in window) {
  document.querySelectorAll('[data-incident-log]').forEach((log) => {
    log.querySelectorAll('li').forEach((line, index) => {
      line.style.transitionDelay = `${index * 260}ms`;
    });
    log.classList.add('is-armed');
    whenNear(log, () => log.classList.add('is-visible'), '0px 0px -15% 0px');
  });
}
