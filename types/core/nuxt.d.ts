import type { FetchRawParameters } from "nitropack";
import type { AppFetchResponse } from "ofetch";

declare module "#app" {
  interface NuxtApp {
    $restQiitaApi: <T = object>(
      request: FetchRawParameters<T, string>[0],
      options?: FetchRawParameters<T, string>[1]
    ) => Promise<AppFetchResponse<T>>;
  }
}
