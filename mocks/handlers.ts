import { qiitaItemsHandlers } from "~/infrastructures/rest/qiita/api/v2/items/__mock/handlers";

// すべてのハンドラーをまとめる
export const handlers = [
  ...qiitaItemsHandlers,
  // 他のAPIハンドラーもここに追加
];
