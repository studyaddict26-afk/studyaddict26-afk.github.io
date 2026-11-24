// 홀로 서비스 워커 — "앱으로 설치(홈 화면에 추가)"가 되도록 하는 최소한의 파일.
// 일부러 아무것도 저장(캐시)하지 않는다: 사이트를 고치면 항상 최신 화면이 바로 나오게 하기 위해서다.
// (오프라인 지원은 하지 않는다. 요청은 전부 그대로 인터넷으로 보낸다.)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => { /* 가로채지 않음 → 브라우저가 평소처럼 처리한다 */ });
