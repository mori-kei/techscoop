/**
 * 日付をフォーマットする関数
 * @param {string} dateString 日付文字列 (ISO 8601形式)
 * @returns {string} フォーマットされた日付文字列 (例: "2023年10月1日")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};
