import type { QiitaItemResponse } from "@/infrastructures/rest/qiita/api/v2/items/types";

// モックデータ（Qiita記事）
export const mockQiitaItems: QiitaItemResponse[] = [
  {
    id: "1",
    title: "Vue3とTypeScriptで始める型安全な開発",
    body: "Vue3とTypeScriptを組み合わせることで、より安全なWebアプリケーション開発が可能になります。このチュートリアルでは基本的な設定から実践的なコンポーネント開発まで解説します。",
    created_at: "2023-05-15T10:00:00+09:00",
    updated_at: "2023-05-16T15:30:00+09:00",
    likes_count: 124,
    reactions_count: 30,
    stocks_count: 85,
    comments_count: 12,
    url: "https://qiita.com/sample/items/1",
    tags: [
      { name: "Vue.js", versions: ["3.x"] },
      { name: "TypeScript", versions: ["4.x"] }
    ],
    user: {
      id: "user1",
      name: "サンプルユーザー1",
      profile_image_url: "https://avatars.githubusercontent.com/u/12345?v=4"
    },
    coediting: false,
    private: false,
    rendered_body: "<p>Vue3とTypeScript...</p>"
  },
  {
    id: "2",
    title: "Nuxt3で作るSSRアプリケーション",
    body: "Nuxt3はVue3をベースにしたフレームワークで、SSRやSSGをサポートしています。このチュートリアルではNuxt3の基本からデプロイまでを解説します。",
    created_at: "2023-06-10T09:15:00+09:00",
    updated_at: "2023-06-12T11:20:00+09:00",
    likes_count: 98,
    reactions_count: 25,
    stocks_count: 72,
    comments_count: 8,
    url: "https://qiita.com/sample/items/2",
    tags: [
      { name: "Nuxt.js", versions: ["3.x"] },
      { name: "Vue.js", versions: ["3.x"] }
    ],
    user: {
      id: "user2",
      name: "サンプルユーザー2",
      profile_image_url: "https://avatars.githubusercontent.com/u/67890?v=4"
    },
    coediting: false,
    private: false,
    rendered_body: "<p>Nuxt3は...</p>"
  },
  {
    id: "3",
    title: "モダンなCSS設計手法 - CSS Modules vs Tailwind CSS",
    body: "CSSの管理は大規模プロジェクトになるほど難しくなります。このポストではCSS ModulesとTailwind CSSの比較と実際のプロジェクトでの使用例を紹介します。",
    created_at: "2023-07-05T14:30:00+09:00",
    updated_at: "2023-07-06T10:45:00+09:00",
    likes_count: 156,
    reactions_count: 42,
    stocks_count: 110,
    comments_count: 15,
    url: "https://qiita.com/sample/items/3",
    tags: [
      { name: "CSS", versions: [] },
      { name: "Tailwind CSS", versions: [] },
      { name: "フロントエンド", versions: [] }
    ],
    user: {
      id: "user3",
      name: "サンプルユーザー3",
      profile_image_url: "https://avatars.githubusercontent.com/u/54321?v=4"
    },
    coediting: false,
    private: false,
    rendered_body: "<p>CSSの管理は...</p>"
  }
];