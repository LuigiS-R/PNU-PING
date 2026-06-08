# PING Web — 설계안 (Design Spec)

- **날짜**: 2026-06-08
- **상태**: 설계 확정 대기(사용자 리뷰 중)
- **레퍼런스**:
  - 기능/요구사항: Notion 보고서 "부산대 공지사항 전달 시스템" (팀: 루이스, 김용하, 세리)
  - 비주얼: `ping-design-system-3.html` (PING 디자인 시스템, 부산대 공지 앱)

---

## 1. 개요 & 목표

부산대학교 각 학과의 공지사항을 통합하여 보여주는 서비스의 **웹 프론트엔드 목업**.
PING 디자인 시스템의 비주얼 언어(블루/옐로우/핑크, Pretendard, 둥근 카드, PING 마스코트)를
**사이드바형 웹앱 레이아웃**으로 재구성한다.

- 데이터: 샘플(mock) JSON — 백엔드 없이 동작
- 1차 목표: 데스크탑 웹에서 보이는 결과물(목업) 완성
- 2차 목표: 반응형 + PWA로 모바일 환경 대응 (동일 코드베이스)
- 후속(범위 밖): RSS 폴링·이메일 발송·실제 DB/API·실제 OAuth·React Native

### 성공 기준
1. PING 디자인 토큰(컬러/라운드/그림자/폰트/마스코트)이 Tailwind로 이식되어 일관되게 적용된다.
2. 사이드바 + 피드 레이아웃에서 단과대학→학과 계층 탐색, 나의 학과, 학과 추가, 저장함이 동작한다(mock).
3. 표의 모든 페이지가 샘플 데이터로 렌더되고 가로 overflow/콘솔 에러가 없다(`/vcheck` 통과).
4. 구독/저장/읽음 상태가 localStorage로 유지된다(새로고침 후에도 보존).

---

## 2. 기술 스택 & 프로젝트 구조

- **Next.js (App Router) + React + TypeScript + Tailwind CSS**
- 상태관리: zustand (구독/저장/읽음/현재 학과 컨텍스트) + localStorage 영속화
- 폰트: Pretendard (CDN)
- 위치: `click6067-ship-it/ping/` (이 폴더 안에서 직접 작업)
- 배포: Vercel (후속)
- 커밋 author: `yongha <click6067@gmail.com>` (차단 이메일 회피)

```
ping/
  app/
    layout.tsx            # AppShell (Sidebar + TopBar) 적용
    page.tsx              # / 홈
    feed/page.tsx         # /feed 통합 피드
    n/[id]/page.tsx       # /n/[id] 공지 상세
    search/page.tsx       # /search
    saved/page.tsx        # /saved
    login/page.tsx        # /login
    onboarding/page.tsx   # /onboarding 학과 선택
    settings/page.tsx     # /settings
  components/
    layout/  (AppShell, Sidebar, TopBar, BottomNav, BgBlobs)
    ui/      (Button, Chip, DeptTag, Toggle, SectionTitle, SearchBar, EmptyState)
    notice/  (NoticeCard, NoticeList)
    ping/    (Ping.tsx — 마스코트 8표정)
  lib/
    types.ts              # 데이터 타입
    mock-data.ts          # 샘플 colleges/departments/notices
    store.ts              # zustand store
    filters.ts            # 피드 필터/검색 util (테스트 대상)
  styles/ globals.css
  docs/superpowers/specs/ ...
```

---

## 3. 디자인 시스템 → Tailwind 토큰

PING HTML의 CSS 변수를 Tailwind theme로 이식.

| 토큰 | 값 |
|---|---|
| primary | `#5B8DEF` |
| ink (텍스트) | `#2B2D42` |
| sky | `#7DBBFF` |
| blue-300 | `#A7D8FF` |
| tint | `#E8F3FF` |
| yellow | `#FFD166` |
| pink | `#FFD6E0` |
| bg | `#F8FAFC` |
| line | `#E7EDF5` |
| muted | `#8A93A6` |

- 라운드: `sm 12 / md 18 / lg 26 / xl 34`
- 그림자: `shadow` `0 18px 40px -22px rgba(43,45,66,.28)`, `shadow-soft` `0 10px 30px -18px rgba(91,141,239,.45)`
- 폰트: Pretendard
- 배경 장식: blur blob 3개 (고정 위치, pointer-events:none)

### PING 마스코트 컴포넌트
`<Ping expression="..." size={...} />` — 8표정 SVG 재사용:
`happy(기쁜)·excited(신나는)·curious(궁금한)·sleepy(졸린)·celebrate(축하)·reading(읽는)·flying(날아가는)·notify(알려주는)`

---

## 4. 레이아웃 (AppShell — 사이드바 웹앱형)

- **좌측 Sidebar** (데스크탑 고정):
  - 로고(PiNG)
  - 단과대학 ▸ 학과 아코디언 트리 (클릭 시 해당 학과 피드로)
  - ⭐ 나의 학과 (로그인 시) — 구독 학과만 묶어 보기
  - ＋ 학과 추가 (로그인 시) — 구독 추가 모달
  - 🔖 저장함
  - ⚙️ 설정
- **상단 TopBar**: 검색바 · 🔔 알림(뱃지) · 로그인/프로필
- **메인**: 섹션형 카드 피드 (⭐중요 공지 / 🔔새 소식 등)

### 반응형 (2차)
- 데스크탑: 사이드바 고정 표시
- 모바일(`< 768px`): 사이드바 → 햄버거 off-canvas 드로어, 하단 탭바(일반/구독 — PING 모바일 패턴), 카드 1열
- PWA: manifest + 아이콘 + 기본 오프라인 셸

---

## 5. 페이지 (routes)

| route | 화면 | 핵심 내용 | PING 표정 |
|---|---|---|---|
| `/` | 홈 | 현재 학과 컨텍스트, ⭐중요 공지 + 🔔새 소식 섹션, 인사말 | 기쁜 |
| `/feed` | 통합 피드 | 학과·카테고리 필터(전체/나의학과), 정렬 | 읽는 |
| `/n/[id]` | 공지 상세 | 제목/메타/본문, 저장하기, 뒤로 | 읽는 |
| `/search` | 검색 & 필터 | 검색어, 필터칩, 결과 카운트 | 궁금한 |
| `/saved` | 저장한 공지 | 저장 목록 | 축하하는 |
| `/login` | 가입/로그인 | @pusan.ac.kr 이메일(mock), 구글 버튼(목업) | 기쁜 |
| `/onboarding` | 학과 선택 | 관심 학과 최대 4개 선택 → 구독 | 날아가는 |
| `/settings` | 설정 | 알림 토글, 구독 학과 관리, 버전 | — |
| (상태) | 빈 상태 | "오늘은 새 공지가 없어요" | 졸린 |

---

## 6. 컴포넌트 인벤토리

UI: `Button`(primary/yellow/ghost) · `Chip`(필터, on/off) · `DeptTag`(일반/중요) · `Toggle` ·
`SectionTitle` · `SearchBar` · `EmptyState`
도메인: `NoticeCard`(일반/중요 변형) · `NoticeList`
레이아웃: `AppShell` · `Sidebar` · `TopBar` · `BottomNav`(모바일) · `BgBlobs`
마스코트: `Ping`

각 컴포넌트는 단일 책임 + 명시적 props 인터페이스. NoticeCard는 notice 객체 + 핸들러만 받는다.

---

## 7. Mock 데이터 모델

```ts
type College = { id: string; name: string; departmentIds: string[] }
type Department = { id: string; collegeId: string; name: string }
type NoticeCategory = '장학' | '학사' | '행사' | '취업' | '일반'
type Notice = {
  id: string
  deptId: string
  title: string
  body: string
  category: NoticeCategory
  publishedAt: string      // ISO
  views: number
  isImportant: boolean
  sourceUrl?: string
}
// 사용자 상태(클라이언트, localStorage 영속):
type UserState = {
  loggedIn: boolean
  email?: string
  subscribedDeptIds: string[]   // 최대 4
  savedNoticeIds: string[]
  readNoticeIds: string[]
  settings: { newNotice: boolean; importantOnly: boolean; pingVoice: boolean }
}
```

- `isNew` / `isRead`는 파생값: `readNoticeIds`에 없으면 안읽음, 최근 N시간이면 new.
- 샘플: 단과대 3~4개, 학과 8~12개, 공지 25~40개(카테고리·중요·시간 다양).

---

## 8. 검증 (Testing)

- **로직 단위 테스트 (Vitest)**: `lib/filters.ts`(학과/카테고리 필터, 검색 매칭, new/read 파생), store 액션(구독 추가 max4, 저장 토글).
- **비주얼 검증 (`/vcheck`)**: 데스크탑+모바일 스크린샷, 가로 overflow·콘솔/페이지 에러 체크 — 주요 페이지마다.
- TDD: 필터/스토어 등 순수 로직은 테스트 먼저. UI 컴포넌트는 렌더 스모크 + vcheck 중심.

---

## 9. 구현 단계 (writing-plans에서 상세화)

1. **스캐폴드 + 디자인 시스템**: Next.js+TS+Tailwind 초기화, 토큰/폰트/blob, `Ping` 마스코트, 기본 UI 컴포넌트.
2. **AppShell 레이아웃**: Sidebar(단과대→학과 트리) + TopBar, 라우팅 골격.
3. **데이터 + 스토어**: mock-data, types, zustand+localStorage, filters util(+테스트).
4. **홈 + 통합 피드 + 상세**: NoticeCard/List, 섹션 구성, 필터, 상세/저장.
5. **검색 · 저장함 · 로그인/온보딩 · 설정**: 나머지 페이지 + 빈 상태.
6. **반응형 + PWA**: 모바일 브레이크포인트(드로어/하단탭/1열), manifest/아이콘.
7. **검증 마무리**: vcheck 전 페이지, 로직 테스트 그린.

---

## 10. 범위 밖 (후속 단계)

RSS 폴링 서비스, JSON 변환, 메시지 큐, 이메일 발송, 실제 DB/구독관리 API, 통합 Feed API,
실제 @pusan.ac.kr OAuth, React Native 네이티브 앱.
*풀스택 단계 진입 시 Notion의 DB 스키마/시스템 다이어그램 스크린샷 필요(현재 이미지라 미확인).*
