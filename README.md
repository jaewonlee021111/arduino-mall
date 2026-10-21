# MAKER MARKET — 아두이노 쇼핑몰

이재원 · 피지컬AI 수업 프로젝트. 보드·센서·모듈·키트·부품을 판매하는 학습용 쇼핑몰입니다.

## 기능
- 12개 예시 상품과 카테고리 필터
- 상품명·설명·사양 검색 및 가격/이름 정렬
- 상품 상세 모달
- 장바구니 담기·수량 조절·삭제·무료배송 계산
- 브라우저 로컬 저장으로 장바구니 유지
- 데모 주문 및 로컬 주문내역 저장
- 모바일 반응형, 키보드 조작, 접근성 라벨

## 실행
`index.html`을 브라우저에서 열거나 아래 명령 후 http://localhost:8000 에 접속합니다.

```sh
python -m http.server 8000
```

## GitHub Pages
1. GitHub에 새 저장소 `arduino-mall` 생성
2. 이 폴더의 파일과 `assets` 폴더를 저장소 루트에 업로드
3. Settings → Pages → Build and deployment에서 `Deploy from a branch` 선택
4. Branch를 `main`, 폴더를 `/(root)`로 지정 후 Save
5. 배포 완료 후 `https://사용자명.github.io/arduino-mall/` 접속

모든 내부 파일 경로가 상대 경로라 프로젝트형 GitHub Pages에서 동작합니다. 빌드나 서버 설치가 필요 없습니다.

## 수정
- `products.js`: 상품명, 카테고리, 가격, 사양
- `style.css`: 색상 및 레이아웃
- `app.js`: 장바구니 및 UI 동작
- `assets/*.svg`: 직접 제작한 제품 일러스트

## 제한
실제 결제·배송·회원 계정·서버 주문 저장은 구현하지 않습니다. 상품 가격 및 구성은 수업용 예시입니다. 제품 일러스트는 실제 제품 사진이 아닙니다. Google Fonts가 차단되면 시스템 글꼴을 사용합니다.

참고 사이트: https://arduino-shop-gray.vercel.app/ 및 https://exsaeculisinsaecula-star.github.io/arduino-mall/
레이아웃과 이미지, 코드는 이 프로젝트용으로 새로 작성했습니다.

## 피지컬 AI 학습 기록

[2026년 10월 21일까지 날짜별 수업 정리 →](physical-ai/README.md)

데이터 기초·Python 기초와 심화·Git/GitHub·AI 코드 에이전트·HTML/CSS/React/MCP를 정리했습니다. 실행 가능한 복습 예제와 팀 검수·배포 기록 양식을 포함합니다.
