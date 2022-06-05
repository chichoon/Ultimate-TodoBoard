<h1 align="center"> 슈퍼 슈퍼 궁극의 할일 대시보드 </h1>
<p align="center">
  <img src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/-Redux%20Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white">
</p>

<h2 align="center"><a href="https://ultimate-todoboard.netlify.app">배포 페이지</a></h2>

<br />
<br />

## 프로젝트 설명

알고리즘 문제 풀이도 밀리고 할일도 밀리고 디데이도 자꾸 잊어버려서 제가 쓰려고 만들었습니다

대시보드에서 할 일과 디데이, 시도했지만 풀지 못한 알고리즘 문제들, 자주 방문하는 웹사이트 링크 등을 한번에 정리해서 볼 수 있도록 하였습니다

브라우저 시작 페이지로 설정하면 편리합니다

<br />

### 로컬 환경에서 실행시키기

```
$> yarn
$> yarn start
```

## 동작

### 대시보드

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039139-8d65e5dd-5296-43e4-a0e5-d3e285cc43ce.png">

- 대시보드는 디데이, 할 일, 알고리즘 문제, 날씨, 바로가기 리스트 총 5개의 컨테이너로 구성되어 있습니다.

- 그리드 레이아웃을 이용하여 화면에 딱 맞게 구성하였습니다.

- 바로가기, 날씨, 디데이는 화면 너비에 따라 가로 또는 세로로 렌더링됩니다.

- 상단 닉네임은 사용자가 입력한 닉네임이 출력됩니다.

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039091-3b4d14bb-7e25-4d34-a233-e3f627cf879f.png">

- 태블릿 (SD) 사이즈 가로폭에서는 그리드의 열의 개수가 줄어듭니다.

- 바로가기는 숨김 처리됩니다.

<img width="571" alt="image" src="https://user-images.githubusercontent.com/37893979/172039082-82ca3547-91e1-483e-8a2d-45890cf807a0.png">

- 모바일에서는 그리드 없이 세로로 길게 렌더링됩니다.

- 좌측 사이드바는 모바일에서 가려지고, 햄버거 버튼을 눌렀을 때 위에서 나타납니다.

### 공통 사항

<img width="515" alt="image" src="https://user-images.githubusercontent.com/37893979/172039156-7f66a153-7a2a-4816-91e1-ec1b41a71d1a.png">

- 데이터를 추가하면 자동으로 로컬 스토리지에 저장되므로, 새로고침을 하거나 창을 닫아 세션이 만료되어도 데이터가 사라지지 않습니다.

<img width="717" alt="image" src="https://user-images.githubusercontent.com/37893979/172039167-c2259c43-e6c2-4379-ad0a-064063960459.png">

- X 버튼을 누르면 삭제 확인 모달이 렌더링되며, 한번 더 확인 버튼을 누르면 삭제됩니다.

### 디데이 목록

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039201-b4d7f97d-14cc-4d31-b86c-0d7a8e1fd239.png">

<img width="528" alt="image" src="https://user-images.githubusercontent.com/37893979/172039212-9571102e-03ee-4021-8fbe-aca084d43392.png">

- 디데이 목록에 항목을 추가할 수 있습니다.

- `react-datepicker`를 이용하여 날짜를 선택할 수 있습니다.

- 테두리 색상을 선택할 수 있습니다.

- 이모지나 문자를 넣어 디데이를 꾸며줄 수 있습니다.

- 현재 디데이가 4개 등록되었다면, 추가로 등록할 수 없습니다.

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039230-2c2962f4-71f7-44b1-8649-b446f5562ae3.png">

<img width="548" alt="image" src="https://user-images.githubusercontent.com/37893979/172039233-ba6f1605-c5df-4ea4-93ef-7e6239be95fa.png">

- 디데이를 추가하면 이와 같이 렌더링됩니다.

- 오늘로부터 남은 일 수나 지나간 일 수가 같이 렌더링됩니다.

- 디데이가 큰 순서대로 (양수 => 음수) 정렬되어 렌더링됩니다.

- PC 화면에서는 좌우 너비에 따라 디데이 블록 길이가 다르게 렌더링됩니다.

- X 버튼을 누르면 삭제할 수 있습니다.

### 할 일 목록

<img width="565" alt="image" src="https://user-images.githubusercontent.com/37893979/172039243-cccbee3b-c654-48f5-821b-b679c831bf7b.png">

- 할 일 목록에 항목을 추가할 수 있습니다.

- 마감일이 있는 항목이라면, 마감일 체크박스를 클릭한 후 `datepicker`로 날짜를 선택합니다.

![Jun-05-2022 15-55-23](https://user-images.githubusercontent.com/37893979/172039279-85f3b7c7-f422-44bc-8dfe-4149c3eeadeb.gif)

- 할 일 목록은 세로로 스크롤되는 형태로 보여집니다.

- 마감일이 얼마 남지 않은 항목부터 정렬되어 렌더링되며, 같은 마감일을 가진 항목이거나 마감일이 없을 경우 생성된 순서대로 렌더링됩니다.

- X 버튼을 누르면 삭제할 수 있습니다.

### 알고리즘 문제 리스트 (Solved.ac)

![Jun-05-2022 15-56-31](https://user-images.githubusercontent.com/37893979/172039316-77d69b0a-af15-4479-9247-09f815cb3f79.gif)

- 풀 예정인 [Baekjoon](https://www.acmicpc.net) 문제를 추가할 수 있습니다.

- 문제 ID를 입력하고 제출하면, `react-query` 및 [Solved.ac API](https://solvedac.github.io/unofficial-documentation/#/)를 이용하여 문제의 정보를 받아옵니다.

- 문제 정보를 최초로 1번 받아온 뒤에는, 등록한 문제 정보가 로컬 스토리지에 저장되므로 다시 받아오지 않습니다.

![Jun-05-2022 16-06-39](https://user-images.githubusercontent.com/37893979/172039637-5b7826bf-529c-4821-b89e-8b6193932eb5.gif)

- 존재하지 않는 문제번호를 입력했을 경우, 우상단에 '404 Not Found'가 출력되고 사라집니다.

<img width="569" alt="image" src="https://user-images.githubusercontent.com/37893979/172039324-ab949905-4fbc-4341-b13c-fa897369a601.png">

- 등록한 문제는 [Solved.ac](https://solved.ac/problems/level) 에서 분류된 티어표에 의해 테두리 색상과 좌측 이미지가 결정됩니다.

- 테두리 색상과 티어 색상을 일치시켜 한 눈에 레벨을 알아볼 수 있도록 하였습니다.

- 클릭하면 백준 내의 문제 페이지로 이동합니다.

- X 버튼을 누르면 삭제할 수 있습니다.

### 날씨 목록

![Jun-05-2022 15-56-31](https://user-images.githubusercontent.com/37893979/172039369-17952b53-6953-4aa5-90f3-81d9e37fb6da.gif)

- 설정 페이지에서 등록한 위도와 경도에 따라 지금 시점부터 3시간 간격으로 24시간동안의 날씨를 보여줍니다.

  - 3시, 6시, 9시... 등 3시간 간격으로 값이 변합니다.

  - 1분 간격으로 빠르게 자주 보는 페이지가 아니기 때문에, refetch 간격은 10분으로 설정하였습니다.

- 날씨에 따라 날씨와 어울리는 색상의 테두리가 좌측에 함께 출력됩니다.

- 가로 너비에 따라 반응형으로 가로스크롤로 출력되거나, 세로스크롤로 출력됩니다.

- 지역이 어딘지에 따라 상단 텍스트가 다르게 출력됩니다.

- 잘못된 위도 / 경도이거나, 날씨를 불러오지 못했을 경우 Error Boundary에 의해 설정된 Fallback 컴포넌트가 출력됩니다.

![Jun-05-2022 15-59-47](https://user-images.githubusercontent.com/37893979/172039424-e29a3ab9-8011-472a-a294-6d7aa98e6627.gif)

- 날씨 데이터를 받아오는 동안 로딩 스피너가 돌아갈 수 있도록 React-query와 Suspense를 통해 구현하였습니다.

### 바로가기

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039434-b56fcb81-1dc3-4650-baf3-c3e1ab25576f.png">

- 바로가기 이름과 URL을 입력하면 파비콘과 함께 바로가기 블록이 렌더링됩니다.

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039442-8fe6babd-5d51-4888-a73d-9a115380d925.png">

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039445-09ccf34d-1438-4593-9686-8cc4bfc59276.png">

- 블록을 클릭하면 각 페이지로 이동합니다.

- X 버튼을 누르면 삭제할 수 있습니다.

- 태블릿 사이즈 화면에서는 공간 문제로 출력되지 않습니다.

### 통계 페이지

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039456-775d8c27-5c05-4a53-921c-e9c05956e1c8.png">

- 설정 페이지에서 입력한 깃허브 아이디에 대하여 최근 1년간의 커밋 그래프를 출력합니다.

  - 색상은 테마 색상에 맞추어 지정하였습니다.

  - 존재하지 않는 아이디일 경우, 경고 컴포넌트가 대신 렌더링됩니다.

- 통계 페이지에 추가 기능을 더해갈 예정입니다.

### 설정 페이지

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039465-f34a2983-6f4f-4203-97e1-f69678847103.png">

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/172039481-f6534bd1-ad13-48be-8a5b-d846b6ed7623.png">

- 설정 페이지는 대시보드에서 사용하는 값들을 설정할 수 있는 '프로필 설정' 섹션과, 데이터를 초기화할 수 있는 '데이터 초기화' 총 두 섹션으로 나누어져 있습니다.

- 프로필 설정의 각 input을 작성하고 변경 버튼을 누르면, 해당 값이 변경되어 저장됩니다.

  - 닉네임은 최상단 내비게이션 바에 출력됩니다.

  - 테마는 드롭다운만 존재하고, 아직 구현하지 않았습니다.

  - Github ID는 통계 페이지의 깃허브 커밋 그래프를 받아오는 데에 사용됩니다.

  - 위도와 경도는 각각 날씨 데이터를 받아오는 데에 사용됩니다.

![Jun-05-2022 16-03-37](https://user-images.githubusercontent.com/37893979/172039527-c05a4aaa-5605-44d2-ae5f-265bdf846956.gif)

- 데이터 초기화 섹션의 각 버튼을 클릭하면 확인 모달이 출력되며, 다시 한번 체크하면 해당 데이터가 전부 지워집니다.

- 전체 초기화를 통해 모든 데이터 (알고리즘 문항, 할 일 목록, 디데이 등) 를 초기화할 수 있습니다.

## 구현할 예정인 기능들

- `datepicker` 스타일링

- 다양한 컬러 테마 추가 (다크모드 및 기타 색상팩)

- 드래그 앤 드롭으로 리스트 순서 변경

- 유튜브 임베드, 깃허브 API 연동을 통한 커밋 현황 등 추가 리스트 컨테이너

- 통계 페이지에서 완료한 투두 및 알고리즘 문제 개수 등 일자별 그래프 모아보기

- 투두리스트 날짜별 필터링

- 디데이 개수 한도 및 알고리즘 문항 개수 한도 

- 로컬 스토리지를 사용하지 않고 서버 연결하여 넉넉한 용량 즐기기

- 캘린더에 할일 및 기념일 출력하기

## 폴더 구조

```
.
├── assets
│   ├── images
│   │   ├── dawn.webp
│   │   ├── milkyway.webp
│   │   └── seashore.webp
│   └── svgs
│       ├── colorFillIcon.svg
│       ├── dashboardIcon.svg
│       ├── downArrowIcon.svg
│       ├── errorIcon.svg
│       ├── featherIcon.svg
│       ├── hamburgerIcon.svg
│       ├── index.ts
│       ├── loadingIcon.svg
│       ├── plusIcon.svg
│       ├── settingsIcon.svg
│       ├── solvedac
│       │   ├── 0.svg
│       │   ├── 1.svg
│       │   ├── 10.svg
│       │   ├── 11.svg
│       │   ├── 12.svg
│       │   ├── 13.svg
│       │   ├── 14.svg
│       │   ├── 15.svg
│       │   ├── 16.svg
│       │   ├── 17.svg
│       │   ├── 18.svg
│       │   ├── 19.svg
│       │   ├── 2.svg
│       │   ├── 20.svg
│       │   ├── 21.svg
│       │   ├── 22.svg
│       │   ├── 23.svg
│       │   ├── 24.svg
│       │   ├── 25.svg
│       │   ├── 26.svg
│       │   ├── 27.svg
│       │   ├── 28.svg
│       │   ├── 29.svg
│       │   ├── 3.svg
│       │   ├── 30.svg
│       │   ├── 4.svg
│       │   ├── 5.svg
│       │   ├── 6.svg
│       │   ├── 7.svg
│       │   ├── 8.svg
│       │   ├── 9.svg
│       │   └── index.ts
│       ├── statisticsIcon.svg
│       └── xIcon.svg
├── components
│   ├── Button
│   │   ├── button.module.scss
│   │   └── index.tsx
│   ├── ColorPalette
│   │   ├── colorPalette.module.scss
│   │   └── index.tsx
│   ├── CustomDatePicker
│   │   ├── customDatePicker.module.scss
│   │   └── index.tsx
│   ├── DeleteConfirmModal
│   │   ├── deleteConfirmModal.module.scss
│   │   ├── index.tsx
│   │   └── modalPortal.ts
│   ├── Error
│   │   ├── error.module.scss
│   │   └── index.tsx
│   ├── Layout
│   │   ├── ErrorMessage
│   │   │   ├── errorMessage.module.scss
│   │   │   └── index.tsx
│   │   ├── SideNavigationBar
│   │   │   ├── index.tsx
│   │   │   └── sideNavigationBar.module.scss
│   │   ├── TopNavigationBar
│   │   │   ├── index.tsx
│   │   │   └── topNavigationBar.module.scss
│   │   ├── index.tsx
│   │   └── layout.module.scss
│   ├── Loading
│   │   ├── index.tsx
│   │   └── loading.module.scss
│   └── index.ts
├── global.d.ts
├── hooks
│   ├── index.ts
│   ├── useAppDispatch.ts
│   ├── useAppSelector.ts
│   ├── useDDayForm.ts
│   ├── useFetchBaekjoon.ts
│   ├── useFetchWeather.ts
│   └── useSettingsForm.ts
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── router
│   ├── Dashboard
│   │   ├── BaekjoonContainer
│   │   │   ├── BaekjoonAddFormElement
│   │   │   │   ├── baekjoonAddFormElement.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── BaekjoonListElement
│   │   │   │   ├── baekjoonListElement.module.scss
│   │   │   │   ├── index.tsx
│   │   │   │   └── solvedacIcon.tsx
│   │   │   ├── baekjoonContainer.module.scss
│   │   │   ├── index.tsx
│   │   │   └── states
│   │   │       └── problemID.ts
│   │   ├── DDayContainer
│   │   │   ├── DDayAddFormElement
│   │   │   │   ├── ddayAddFormElement.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── DDayListElement
│   │   │   │   ├── ddayListElement.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── ddayContainer.module.scss
│   │   │   └── index.tsx
│   │   ├── DashboardItem.tsx
│   │   ├── ShortcutContainer
│   │   │   ├── ShortcutAddFormElement
│   │   │   │   ├── index.tsx
│   │   │   │   └── shortcutAddFormElement.module.scss
│   │   │   ├── ShortcutListElement
│   │   │   │   ├── index.tsx
│   │   │   │   └── shortcutListElement.module.scss
│   │   │   ├── index.tsx
│   │   │   └── shortcutContainer.module.scss
│   │   ├── TodoContainer
│   │   │   ├── TodoAddFormElement
│   │   │   │   ├── index.tsx
│   │   │   │   └── todoAddFormElement.module.scss
│   │   │   ├── TodoListElement
│   │   │   │   ├── index.tsx
│   │   │   │   └── todoListElement.module.scss
│   │   │   ├── index.tsx
│   │   │   └── todoContainer.module.scss
│   │   ├── WeatherContainer
│   │   │   ├── WeatherContainerInner.tsx
│   │   │   ├── WeatherListElement
│   │   │   │   ├── index.tsx
│   │   │   │   └── weatherListElement.module.scss
│   │   │   ├── index.tsx
│   │   │   └── weatherContainer.module.scss
│   │   ├── dashboard.module.scss
│   │   └── index.tsx
│   ├── Settings
│   │   ├── ResetAppElement
│   │   │   ├── ResetAppListElement.tsx
│   │   │   ├── index.tsx
│   │   │   └── resetAppElement.module.scss
│   │   ├── SettingsFormElement
│   │   │   ├── SettingsFormDropdown.tsx
│   │   │   ├── index.tsx
│   │   │   ├── settingsFormDropdown.module.scss
│   │   │   └── settingsFormElement.module.scss
│   │   ├── index.tsx
│   │   └── settings.module.scss
│   ├── Statistics
│   │   ├── GithubContainer
│   │   │   ├── githubContainer.module.scss
│   │   │   └── index.tsx
│   │   ├── index.tsx
│   │   └── statistics.module.scss
│   └── index.tsx
├── services
│   ├── getBaekjoonProblem.ts
│   ├── getWeatherInfo.ts
│   └── index.ts
├── setupTests.ts
├── states
│   ├── error.ts
│   ├── index.ts
│   ├── information.ts
│   └── todo.ts
├── styles
│   ├── base
│   │   ├── _fonts.scss
│   │   ├── _more.scss
│   │   └── _reset.scss
│   ├── colorSetting.scss
│   ├── constants
│   │   ├── _colors.scss
│   │   ├── _levels.scss
│   │   └── _sizes.scss
│   ├── global.scss
│   ├── icons.scss
│   ├── index.scss
│   └── mixins
│       ├── _animation.scss
│       ├── _flexbox.scss
│       ├── _position.scss
│       └── _responsive.scss
├── types
│   ├── information.d.ts
│   ├── todo.d.ts
│   ├── weather.d.ts
│   └── weatherResponse.d.ts
└── utils
    ├── infoUtils.ts
    ├── todoUtils.ts
    └── weatherUtils.ts
```

## 만든 사람

최지윤 [chichoon](https://github.com/chichoon)
