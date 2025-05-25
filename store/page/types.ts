import type { QiitaItemResponseList } from "@/infrastructures/rest/qiita/api/v2/items";

/** API State */
export type ApiState = {
  qiitaItems: QiitaItemResponseList;
};
