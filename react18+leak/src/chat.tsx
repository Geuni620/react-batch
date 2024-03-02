export function createConnection() {
  // 실제 구현은 정말로 채팅 서버에 연결하는 것이 되어야 합니다.
  return {
    connect() {
      console.log("✅ 연결 중...");
    },
    disconnect() {
      console.log("❌ 연결이 끊겼습니다.");
    },
  };
}
