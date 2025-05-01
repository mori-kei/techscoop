import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Node.js用のMSWサーバーを設定（SSR用）
export const server = setupServer(...handlers);
