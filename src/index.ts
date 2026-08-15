// Qomicex.Tauri.i18n — 资源导出入口
// 启动器前端通过 submodule 引用本仓库，从 src/index.ts 导入全部语言资源。
import zhCN from './zh-CN/index'
import en from './en/index'
import type { Lang, TranslationSchema } from './types'

/** 全部语言资源表（按 Lang 索引） */
export const RESOURCES: Record<Lang, TranslationSchema> = { 'zh-CN': zhCN, en }

export { zhCN, en }
export type { Lang, TranslationSchema, DeepKeys } from './types'
