/** Qiitaの記事のリクエストパラメータ */
export type QiitaItemRequestParam = {
  /** ページ番号 (1から100まで) */
  page?: string;
  /** 1ページあたりに含まれる要素数 (1から100まで) */
  per_page?: string;
  /** 検索クエリ */
  query?: string;
};

/** Qiitaの記事レスポンス型 */
export type QiitaItemResponse = {
  /** HTML形式の本文 */
  rendered_body: string;
  /** Markdown形式の本文 */
  body: string;
  /** 共同更新状態かどうか (Qiita Teamでのみ有効) */
  coediting: boolean;
  /** コメントの数 */
  comments_count: number;
  /** 作成日時 (ISO 8601形式) */
  created_at: string;
  /** Qiita Teamのグループ情報 (オプショナル) */
  group?: {
    [key: string]: any;
  };
  /** 記事の一意なID */
  id: string;
  /** 「いいね」の数 */
  likes_count: number;
  /** 限定共有状態かどうか */
  private: boolean;
  /** 絵文字リアクションの数 */
  reactions_count: number;
  /** ストックされた数 */
  stocks_count: number;
  /** タグ一覧 */
  tags: Array<{
    /** タグ名 */
    name: string;
    /** バージョン一覧 */
    versions: string[];
  }>;
  /** 記事のタイトル */
  title: string;
  /** 更新日時 (ISO 8601形式) */
  updated_at: string;
  /** 記事のURL */
  url: string;
  /** ユーザー情報 */
  user: {
    [key: string]: any;
  };
  /** 閲覧数 (nullまたは整数) */
  page_views_count?: number | null;
  /** チームメンバー情報 (オプショナル) */
  team_membership?: {
    [key: string]: any;
  };
  /** OrganizationのURL名 */
  organization_url_name?: string | null;
  /** スライドモードが有効かどうか */
  slide?: boolean;
};

/** Qiitaの記事レスポンス型の配列 */
export type QiitaItemResponseList = QiitaItemResponse[];
