import type { AppFetchResponse } from "ofetch";
import type { QiitaItemResponseList, QiitaItemRequestParam } from "./types";

export const getQiitaItems = async (
  params?: QiitaItemRequestParam,
  config?: { headers?: HeadersInit }
): Promise<AppFetchResponse<QiitaItemResponseList>> => {
  const { $restQiitaApi } = useNuxtApp();
  if (!$restQiitaApi) {
    throw new Error(
      "$restQiitaApi is not available. Ensure it is provided in a Nuxt plugin."
    );
  }
  return $restQiitaApi<QiitaItemResponseList>("/items", {
    params: params,
    ...config,
  });
};
