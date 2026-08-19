# Qomicex.Tauri.i18n

## 简介 / Introduction

**CN:** 这里是 Qomicex Minecraft 启动器（Tauri 版）的多语言资源仓库。本仓库保存了启动器前端所使用的全部多语言资源文件（TypeScript 模块），以 **git submodule** 形式被启动器主仓库引用。我们诚挚地欢迎社区贡献者参与翻译，让 Qomicex 能够支持更多的语言，服务全球玩家。

**EN:** This is the localization repository for Qomicex Minecraft Launcher (Tauri edition). It hosts all the TypeScript language resource files used by the launcher frontend, referenced by the launcher repo as a **git submodule**. We warmly welcome community contributors to help us translate Qomicex into more languages and make it accessible to players worldwide.

---

## 🛠 如何贡献 / How to Contribute

### 1. 通过 GitHub Pull Request
1. **Fork** 本仓库。
2. 在 `src/` 文件夹下找到对应的语言目录（如 `zh-CN/`、`en-US/`）。
3. 新增语言时，先复制 `zh-CN/` 目录并翻译各模块。
4. 确保新增/修改的 **Key** 与 `zh-CN/`（基准语言）保持一致，且每个语言目录下新增模块时需同步更新该目录的 `index.ts`。
5. 提交 **Pull Request**。

> 注意：各语言 `index.ts` 使用 `satisfies TranslationSchema` 做编译期结构校验（schema 以 `zh-CN` 为基准）—— 如果与 zh-CN 的 key 结构不一致，类型检查会直接报错，这是有意设计，防止漏翻/错翻。**同一对象内不要出现重复属性名**（如重复的 `sources`），否则编译报 `TS1117`。

---

## 📂 文件结构 / File Structure

```
src/
├── zh-CN/         简体中文（基准语言，TranslationSchema 的来源）
│   ├── common.ts  通用按钮/提示
│   ├── layout.ts  外壳（侧边栏/标题栏）
│   ├── errors.ts  错误消息
│   ├── settings.ts  设置页
│   ├── dashboard.ts / instances.ts / instanceDetail.ts
│   ├── downloads.ts / accounts.ts / accountDetail.ts
│   ├── resource.ts / resourceDetail.ts / connect.ts
│   ├── running.ts / plugins.ts / dialogs.ts / tools.ts / wizard.ts
│   ├── game-settings-descriptions.json  游戏设置项描述（后端 Rust include_str! 读取）
│   └── index.ts   汇总该语言全部模块
├── zh-TW/ / zh-HK/ / en-US/ / en-GB/ / ja-JP/ / ru-RU/
│   └── （同 zh-CN 的模块清单）
├── types.ts       类型定义（Lang / TranslationSchema / DeepKeys）
└── index.ts       导出入口（RESOURCES / GAME_SETTINGS_DESCRIPTIONS / 各语言 / 类型）
```

### 命名空间约定
- 每个页面/功能域一个 TS 模块文件，模块名即命名空间（如 `settings.about.appDescription`、`dialogs.confirmDelete.titleMod`）。
- Key 用 camelCase 语义化命名，可按需嵌套对象。
- 支持 `{placeholder}` 插值：翻译值中的 `{name}` 由调用方参数替换。

---

## 🌍 语言支持 / Supported Languages
- 简体中文 (zh-CN) 100% - **Source**
- 繁体中文 (zh-TW / zh-HK) 100%
- English (en-US / en-GB) 100%
- 日本語 (ja-JP) 100%
- Русский (ru-RU) 100%
- (欢迎添加更多...)

---

## ⚖️ 协议 / License

本项目采用 [MIT License](LICENSE) 协议进行分发。
This project is distributed under the [MIT License](LICENSE).