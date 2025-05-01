import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// ブラウザ用のMSWワーカーを設定
export const worker = setupWorker(...handlers)