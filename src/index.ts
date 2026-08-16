// Qomicex.Tauri.i18n — 资源导出入口
// 启动器前端通过 submodule 引用本仓库，从 src/index.ts 导入全部语言资源。
import zhCN from './zh-CN/index'
import zhTW from './zh-TW/index'
import enUS from './en-US/index'
import enGB from './en-GB/index'
import type { Lang, TranslationSchema } from './types'

/** 全部语言资源表（按 Lang 索引） */
export const RESOURCES: Record<Lang, TranslationSchema> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en-US': enUS,
  'en-GB': enGB,
}

export { zhCN, zhTW, enUS, enGB }
// 兼容旧导出名（en == en-US）
export { enUS as en }
export type { Lang, TranslationSchema, DeepKeys } from './types'