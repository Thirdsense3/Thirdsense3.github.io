# Seokhyun Myung · Personal website

명석현의 개인 브랜딩 사이트. GitHub Pages에서 빌드 없이 제공하는 정적 HTML/CSS 사이트입니다.

## 로컬 미리보기

```sh
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 을 엽니다. 별도 패키지 설치나 Gulp 실행이 필요하지 않습니다.

## 수정할 파일

- `index.html`: 소개, 개인 프로젝트, 개발 사례, 경력, 기술 기록, GitHub 연락 링크
- `assets/portfolio/style.css`: 새 사이트의 반응형 스타일
- `assets/portfolio/main.js`: 푸터 연도 표시
- `about/index.html`: 기존 About URL의 소개 페이지
- `notes/index.html`: 이전 블로그 메인을 보존한 기술 기록 목록

기존 글과 태그·아카이브 URL은 유지합니다. 기존 글에서는 이전 테마의 스타일을 사용합니다. 검색에 중복 노출되던 옛 사이트 사본 `output/`과 사용하지 않는 `.gitmodules`는 제거했습니다. 확인한 GitHub Pages 게시 소스는 `master` 브랜치의 루트(`/`)입니다.

경력과 사례 문구는 제공된 2026 CV를 바탕으로 작성했습니다. 응답 시간 30–60% 개선은 CV의 기존 방식 대비 결과이며, 별도 벤치마크 수치를 추가하지 않았습니다. Quartz 기반 스케줄러는 CV에서 계획으로 언급되어 완료된 사례에 포함하지 않았습니다. CV 원본은 사이트에 포함하지 않았습니다.

사이트는 Google Fonts를 사용하며, 로드되지 않으면 시스템 sans-serif 글꼴로 표시됩니다. 현대오토에버 현재 재직 상태는 소유자가 2026-10-28에 확인했습니다.

## 공유 이미지와 검색 설정

- `assets/portfolio/social-card.svg`: 사이트 전용 공유 이미지 원본
- `assets/portfolio/social-card.png`: 1200×630px Open Graph / Twitter 이미지
- `robots.txt`: 크롤러 설정과 소문자 사이트맵 URL
- `sitemap.xml`: 메인·소개·기술 기록·기존 글과 아카이브 URL

공유 이미지 문구를 바꿀 때 SVG와 실제 공유에 쓰는 PNG를 함께 갱신합니다. 새 사이트 CSS는 읽을 수 있는 형식으로 관리하고, 화면 너비별 미디어 쿼리는 하나씩 유지합니다.

## 개인 프로젝트 콘텐츠

개인 프로젝트와 개발 기록은 정적 HTML로 관리합니다. GitHub API를 브라우저에서 호출하지 않으며 인증 정보가 필요하지 않습니다.

homeTrend 카드의 LIVE 패널은 같은 도메인에 공개된 `/homeTrend/data/meta.json`(마지막 갱신 시각·빌드 번호)과 `/homeTrend/data/changes.json`(이번 갱신에서 새로 확인·취소된 거래)을 읽어 표시합니다. Projects 영역에 가까워질 때만 불러오고, 마지막 갱신이 30시간을 넘으면 '갱신 지연'으로 표시합니다. 파일을 불러오지 못하거나 형식이 바뀌면 패널을 숨깁니다. `python3 -m http.server` 로컬 미리보기에는 homeTrend 데이터가 없어 패널이 보이지 않습니다. homeTrend의 데이터 형식이 바뀌면 `assets/portfolio/main.js`의 `loadLiveStatus`를 함께 고칩니다.

CASE 03은 원인을 좁혀간 과정을 장애 회고 로그(`OBSERVE → HYPOTHESIS → COMPARE → ROOT CAUSE → FIX → VERIFY`)로 보여 줍니다. 문구는 기존 사례 설명과 펼침 내용만 옮겼으며 새 사실을 추가하지 않았습니다.

- 대상: 공개 저장소 [homeTrend](https://github.com/Thirdsense3/homeTrend), 비공개 개인 프로젝트 `invest_quant`와 `lotto-random`의 이름·개요
- 확인일: 2026-10-28. README, package.json, 로드맵과 PR #28·#31·#33을 대조했습니다.
- 개발 기록은 PR 번호와 작업 내용만 소개합니다. 자동 갱신되지 않는 OPEN/MERGED 상태는 표시하지 않으며, 링크에서 최신 진행 상태를 확인할 수 있습니다.
- 이미지: 공개 homeTrend의 실제 대시보드의 가격·거래량 차트 영역을 `assets/portfolio/hometrend-dashboard.png`에 보관했습니다.
- 비공개 프로젝트는 소유자가 공개를 허용한 이름과 개요만 소개합니다. README에서 목적을 확인해 요약했으며, 코드·설정·내부 데이터·성과 수치·저장소 링크는 포함하지 않았습니다.

프로젝트를 추가할 때 `index.html`의 `#projects` 영역에 공개 소개 문구와 서비스/저장소 링크를 추가하고, 필요하면 `about/index.html`의 소개도 갱신합니다.
