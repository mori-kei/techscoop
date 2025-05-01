import type { FetchResponse } from "ofetch";
import type { NitroFetchRequest, TypedInternalResponse } from "nitropack";

declare module "ofetch" {
  /** レスポンスパラメータ */
  interface AppFetchResponse<T> {
    /** ボディ */
    _data: FetchResponse<TypedInternalResponse<NitroFetchRequest, T>>["data"];
    /** ヘッダー */
    headers: Record<string, string>;
    /** ステータス */
    status: FetchResponse<T>["status"];
    /** HTTP Status Text*/
    statusText: FetchResponse<T>["statusText"];
  }
}

export {};
