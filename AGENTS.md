# AGENTS.md

## 프로젝트 작업 원칙

- 정적 HTML 파일(`index.html`, `product1-detail.html`, `product2-detail.html` 등)에 UI, 링크, 문구, 내비게이션 상태, 구조 변경이 발생하면 대응되는 Next.js + React 코드도 반드시 함께 반영한다.
- 정적 HTML만 수정하고 `app/**/page.tsx`, 관련 CSS, `public` 에셋, 라우트 구조를 동기화하지 않은 상태로 작업을 완료하지 않는다.
- 반대로 Next.js + React 코드에서 사용자에게 보이는 UI가 변경되면 필요한 경우 정적 HTML 산출물도 같은 의미로 맞춘다.
- 새 상품 상세, 랜딩, 하위 페이지를 추가할 때는 정적 HTML 파일과 대응되는 Next.js 라우트를 함께 만들고, 공유 에셋과 스타일 참조가 깨지지 않도록 확인한다.
- 변경 후에는 정적 HTML 경로와 Next.js 라우트 양쪽에서 링크, 현재 메뉴 상태, 표시 문구, 주요 레이아웃이 일치하는지 확인한다.
- Next.js 변경이 포함되면 가능한 경우 `npm run build`로 라우트 생성과 타입/번들 오류를 검증한다.
