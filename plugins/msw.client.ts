import { worker } from "~/mocks/browser";

export default defineNuxtPlugin(() => {
  // 開発環境かどうかをチェック
  if (process.env.NODE_ENV === "development") {
    // MSWを起動
    worker.start({
      onUnhandledRequest: "bypass",
    });
    console.log(
      "[MSW] モックサーバーが起動しました。APIリクエストはインターセプトされます。"
    );
    console.log("Current NODE_ENV:", process.env.NODE_ENV);
  }
});
