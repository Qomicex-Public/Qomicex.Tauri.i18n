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

// 游戏设置描述（GameSettings descriptions）：后端 Rust 经 include_str! 直接读取
// 同名 JSON 文件（qomicex-backend/src/services/options.rs），此处导出供前端/插件使用。
import zhCNGameSettingsDescriptions from './zh-CN/game-settings-descriptions.json'
import zhTWGameSettingsDescriptions from './zh-TW/game-settings-descriptions.json'
import enUSGameSettingsDescriptions from './en-US/game-settings-descriptions.json'
import enGBGameSettingsDescriptions from './en-GB/game-settings-descriptions.json'

export const GAME_SETTINGS_DESCRIPTIONS = {
  'zh-CN': zhCNGameSettingsDescriptions,
  'zh-TW': zhTWGameSettingsDescriptions,
  'en-US': enUSGameSettingsDescriptions,
  'en-GB': enGBGameSettingsDescriptions,
} as const

export {
  zhCNGameSettingsDescriptions,
  zhTWGameSettingsDescriptions,
  enUSGameSettingsDescriptions,
  enGBGameSettingsDescriptions,
}