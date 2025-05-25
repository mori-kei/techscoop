import { setupServer } from "msw/node";
import { handlers } from "~/mocks/handlers";

export default defineNuxtPlugin(() => {
  // 開発環境かどうかをチェック
  if (process.env.NODE_ENV === "development") {
    const server = setupServer(...handlers);
    server.listen({ onUnhandledRequest: "bypass" });
    console.log("[MSW] サーバーサイドモックサーバーが起動しました");
  }
});
