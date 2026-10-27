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

기존 글과 태그·아카이브 URL은 유지합니다. 기존 글에서는 이전 테마의 스타일을 사용합니다. `output/`은 기존 저장소에 있던 별도 사본으로, 이번 개편에서 수정하지 않았습니다. 확인한 GitHub Pages 게시 소스는 `master` 브랜치의 루트(`/`)입니다.

경력과 사례 문구는 제공된 2026 CV를 바탕으로 작성했습니다. 응답 시간 30–60% 개선은 CV의 기존 방식 대비 결과이며, 별도 벤치마크 수치를 추가하지 않았습니다. Quartz 기반 스케줄러는 CV에서 계획으로 언급되어 완료된 사례에 포함하지 않았습니다. CV 원본은 사이트에 포함하지 않았습니다.

사이트는 Google Fonts를 사용하며, 로드되지 않으면 시스템 sans-serif 글꼴로 표시됩니다. 배포 전에는 재직 상태와 외부 공개할 성과 수치를 확인해 주세요.

## 개인 프로젝트 콘텐츠

개인 프로젝트와 개발 기록은 정적 HTML로 관리합니다. GitHub API를 브라우저에서 호출하지 않으며 인증 정보가 필요하지 않습니다.

- 대상: 공개 저장소 [homeTrend](https://github.com/Thirdsense3/homeTrend)
- 확인일: 2026-10-28. README, package.json, 로드맵과 PR #28·#31·#33을 대조했습니다.
- 운영 중인 서비스와 병합된 기능, 확인일 기준 진행 중인 PR을 구분해서 소개합니다. 상태를 갱신할 때는 화면의 확인일도 함께 바꿉니다.
- 이미지: homeTrend 공개 저장소의 `public/og.png`를 `assets/portfolio/hometrend.png`에 보관했습니다.
- 비공개 저장소의 이름·내용·링크는 포함하지 않았습니다.

프로젝트를 추가할 때 `index.html`의 `#projects` 영역에 공개 소개 문구와 서비스/저장소 링크를 추가하고, 필요하면 `about/index.html`의 소개도 갱신합니다.
