import { http, HttpResponse } from "msw";
import { mockQiitaItems } from "./data";

// Qiita API v2 itemsのハンドラー
export const qiitaItemsHandlers = [
  http.get("https://qiita.com/api/v2/items", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || "1";
    const perPage = url.searchParams.get("per_page") || "20";
    const query = url.searchParams.get("query") || "";

    console.log(`[MSW] Intercepted Qiita API request with params:`, {
      page,
      perPage,
      query,
    });

    // クエリによるフィルタリング
    let filteredItems = [...mockQiitaItems];
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filteredItems = filteredItems.filter(
        (item) =>
          item.title.toLowerCase().includes(lowercaseQuery) ||
          item.body.toLowerCase().includes(lowercaseQuery)
      );
    }

    // ページネーション
    const pageInt = parseInt(page, 10);
    const perPageInt = parseInt(perPage, 10);
    const start = (pageInt - 1) * perPageInt;
    const end = start + perPageInt;
    const paginatedItems = filteredItems.slice(start, end);

    // レスポンスを整形して返す
    return HttpResponse.json(paginatedItems, {
      headers: {
        "X-Total-Count": String(filteredItems.length),
        "X-Rate-Limit-Remaining": "1000",
        "X-Rate-Limit-Limit": "1000",
      },
    });
  }),
];
