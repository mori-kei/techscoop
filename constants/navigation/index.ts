/**
 * ヘッダーのナビゲーションアイテム
 * @param title タイトル
 * @param link リンク
 **/
export type NavItem = {
  /** タイトル */
  text: string;
  /** リンク */
  to: string;
};

/**　ヘッダーのタイトル */
export const HEADER_TITLE = "TechScoop";

/**ヘッダーのナビゲーションアイテム */
export const NAV_ITEMS: NavItem[] = [{ text: "ホーム", to: "/" }];
