import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { ofetch } from "ofetch";
import type { AppFetchResponse } from "ofetch"; // 既存の AppFetchResponse をインポート

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const qiitaApiBaseUrl = config.public.qiitaApiBaseUrl;

  if (!qiitaApiBaseUrl) {
    throw new Error("qiita API Base URL is not configured!");
  }

  const qiitaApiFetch = ofetch.create({
    baseURL: qiitaApiBaseUrl,
  });

  // AppFetchResponse 形式に整形するラッパー関数
  const restQiitaApi = async <T = object>(
    request: any,
    options?: any
  ): Promise<AppFetchResponse<T>> => {
    try {
      const response = await qiitaApiFetch.raw<T>(request, options);

      const headers: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });

      return {
        _data: response._data,
        headers: headers,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error: any) {
      if (error.response) {
        const headers: Record<string, string> = {};
        error.response.headers.forEach((value: string, key: string) => {
          headers[key] = value;
        });

        return {
          _data: error.response._data,
          headers: headers,
          status: error.response.status,
          statusText: error.response.statusText,
        };
      }

      throw error;
    }
  };

  return {
    provide: {
      restQiitaApi: restQiitaApi,
    },
  };
});
