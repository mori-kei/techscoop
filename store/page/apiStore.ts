import { isNull, isUndefined } from "lodash";
import type { ApiState } from "./types";
import { getQiitaItems } from "@/infrastructures/rest/qiita/api/v2/items";
import type {
  QiitaItemRequestParam,
  QiitaItemResponseList,
} from "@/infrastructures/rest/qiita/api/v2/items";

export const pageApiStore = () => {
  const _state = useState<ApiState>("page-api-store", () => {
    return {
      qiitaItems: [],
    };
  });

  /** Getters */
  const getters = {
    /** Qiitaの記事一覧 */
    qiitaItemsOrThrow: computed<QiitaItemResponseList>(() => {
      if (isNull(_state.value.qiitaItems)) {
        throw new Error("Qiita items are not available");
      }
      return _state.value.qiitaItems;
    }),
  };
  /** Actions */
  const actions = {
    /** Qiitaの記事一覧を取得
     * @param query - Qiita APIのクエリパラメータ
     */
    async fetchQiitaItems(query: QiitaItemRequestParam): Promise<void> {
      const result = await getQiitaItems(query);
      if (!isUndefined(result._data)) {
        _state.value.qiitaItems = result._data;
      }
    },
  };
  return {
    ...getters,
    ...actions,
  } as const;
};
