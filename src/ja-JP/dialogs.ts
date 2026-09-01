// 汎用ダイアログ／カード（ja-JP）
export default {
  // インストール/ダウンロード段階（downloads.stage と同じ。ダイアログの動的 key 描画用）
  stage: {
    queued: '待機中',
    'downloading-json': 'バージョン JSON をダウンロード',
    downloading: 'ゲームファイルをダウンロード',
    'downloading-libraries': 'ライブラリをダウンロード',
    'downloading-assets': 'アセットをダウンロード',
    'downloading-mainjar': 'メインファイルをダウンロード',
    'downloading-loader': 'ローダーをダウンロード',
    'downloading-loader-libs': 'ローダーライブラリをダウンロード',
    'installing-loader': 'ローダーをインストール',
    'downloading-addons': '追加コンテンツをダウンロード',
    'downloading-modpack': 'Modパックをダウンロード',
    'parsing-modpack': 'Modパックを解析',
    'modpack-files': 'Modパックファイルをダウンロード',
    'modpack-overrides': '上書きファイルを解凍',
    'installing-game': 'ゲームとローダーをインストール',
    'building-version': 'コンポーネントパッチをマージ',
    'downloading-game': 'ゲームファイルをダウンロード',
    'copying-files': 'インスタンス内容をコピー',
    'finishing': '仕上げ',
  },
  // ダイアログ／カード共通の文言
  common: {
    unknownError: '不明なエラー',
    deleting: '削除中...',
    viewDetail: '詳細を見る',
    openFolder: 'フォルダーを開く',
    openFailed: '開くのに失敗しました',
    deleted: '「{name}」を削除しました',
    deleteFailed: '削除に失敗しました: {error}',
    taskExpired: 'タスクの有効期限が切れました（バックエンドがこのセッションを報告していません）',
    downloadTimeout: 'ダウンロードがタイムアウトしました（バックグラウンドで続行中の可能性があります）',
    downloadStalled: 'ダウンロードが停滞しています（長時間進行がありません）',
    cancelled: 'ダウンロードをキャンセルしました',
    downloadFailed: 'ダウンロードに失敗しました',
    startFailed: 'ダウンロードの開始に失敗しました',
  },
  // 削除確認（リソースタイプ別）
  confirmDelete: {
    titleMod: 'Mod を削除',
    titleSave: 'ワールドを削除',
    titleScreenshot: 'スクリーンショットを削除',
    titleShader: 'シェーダーパックを削除',
    titleDataPack: 'データパックを削除',
    titleResourcePack: 'リソースパックを削除',
    bodyMod: 'Mod「{name}」を削除しますか？ゴミ箱に移動されます。',
    bodySave: 'ワールド「{name}」を削除しますか？ゴミ箱に移動されます。',
    bodyScreenshot: 'スクリーンショット「{name}」を削除しますか？ゴミ箱に移動されます。',
    bodyShader: 'シェーダーパック「{name}」を削除しますか？ゴミ箱に移動されます。',
    bodyDataPack: 'データパック「{name}」を削除しますか？ゴミ箱に移動されます。',
    bodyResourcePack: 'リソースパック「{name}」を削除しますか？ゴミ箱に移動されます。',
  },
  // 起動進捗
  launchProgress: {
    title: 'ゲームを起動',
    titleFailed: '起動に失敗しました',
    stage: {
      starting: '準備中',
      checking: 'ファイルの整合性を確認',
      repairing: 'ファイルを補完',
      'logging-in': 'アカウントを検証',
      authlib: '外部ログインを設定',
      natives: 'ネイティブライブラリを解凍',
      building: '起動引数を構築',
      preparing: '環境を準備',
      launching: 'ゲームを起動',
      running: 'ゲーム実行中',
      crashed: 'ゲームが異常終了',
      failed: '起動に失敗',
      completed: 'ゲームを終了しました',
      cancelled: 'キャンセル済み',
    },
    viewCrashReport: 'クラッシュレポートを表示',
    processId: 'プロセス ID: {pid}',
    startingUp: '起動中...',
  },
  // クラッシュ解析
  crashAnalysis: {
    copyAll: 'すべてコピー',
    copyDetail: '詳細:\n{detail}',
    copyArgs: '起動引数:\n{args}',
    copyCrashReport: 'クラッシュレポート:\n{crashReport}',
    copyLogLink: 'ログリンク: {url}',
    exporting: 'エクスポート中...',
    exportReport: '診断レポートをエクスポート',
    exportFailed: 'エクスポートに失敗しました',
    detail: 'エラー詳細',
    crashReport: 'クラッシュレポート',
    launchArgs: '起動引数',
    analyzing: 'クラッシュレポートを解析中...',
    noResult: '解析結果がありません',
    scanQr: 'スキャンして完全なログを表示',
  },
  // Modパックのインポート
  import: {
    title: 'Modパックをインポート',
    parsing: 'Modパックファイルを解析中...',
    modpackName: 'Modパック名',
    gameVersion: 'ゲームバージョン',
    loader: 'ローダー',
    instanceName: 'インスタンス名',
    startInstall: 'インストールを開始',
    connecting: '接続中...',
    installing: 'インストール中: {name}',
    completed: '✓ インストール完了！',
    completedDetail: 'Modパックがインスタンス「{name}」として正常にインストールされました',
    failedWith: 'インストールに失敗しました: {error}',
    seeDownloadPage: '詳細はダウンロードページをご覧ください',
    viewInstance: 'インスタンスを表示',
    backgroundDownload: 'バックグラウンドでダウンロード',
    parseFailed: '解析に失敗しました',
    installFailed: 'インストールに失敗しました',
    chooseFolder: 'フォルダを選択',
    folderHint: 'MultiMC インスタンスフォルダ（instance.cfg / mmc-pack.json を含む）を選択、または zip をアップロード',
    dropHint: 'ファイルをドロップ、またはクリックして選択',
    dropSubHint: 'MultiMC 整合パック/インスタンス（フォルダ含む）、CurseForge、Modrinth、Qomicex に対応',
    folderDropUnsupported: 'ブラウザ環境ではフォルダのドロップはサポートされていません。「フォルダを選択」ボタンを使用してください。',
  },
  // Modパックのインストール（オンライン）
  modpackInstall: {
    title: 'Modパックをインストール',
    modpackLabel: 'Modパック',
    gameVersion: 'ゲームバージョン',
    loader: 'ローダー',
    instanceName: 'インスタンス名',
    startInstall: 'インストールを開始',
    resolving: '解析してインストール中...',
    connecting: '接続中...',
    installing: 'インストール中: {name}',
    completed: '✓ インストール完了！',
    completedDetail: 'Modパックがインスタンス「{name}」として正常にインストールされました',
    failedWith: 'インストールに失敗しました: {error}',
    seeDownloadPage: '詳細はダウンロードページをご覧ください',
    viewInstance: 'インスタンスを表示',
    backgroundDownload: 'バックグラウンドでダウンロード',
    cancelled: 'キャンセル済み',
    installFailed: 'インストールに失敗しました',







  },
  // Modパックのエクスポート
  modpackExport: {
    title: 'Modパックをエクスポート',
    format: 'エクスポート形式',
    include: '含める内容',
    includeSaves: 'ワールドを含める',
    includeScreenshots: 'スクリーンショットを含める',
    packInfo: 'パック情報',
    packName: '名前',
    packVersion: 'バージョン',
    packAuthor: '作者',
    exportingTitle: 'エクスポート中...',
    stageLookup: 'ファイルフィンガープリントを識別',
    stageManifest: '設定ファイルを生成',
    stagePacking: 'ゲームファイルをパッキング: {file}',
    cancelExport: 'キャンセル',
    cancelConfirm: 'エクスポートをキャンセルしますか？',
    exportCancelled: 'エクスポートをキャンセルしました',
    exportSaved: '✓ エクスポート完了',
    exportSavedTo: '✓ エクスポート完了（保存場所: {path}）',
    fileName: 'エクスポートファイル名',
    startExport: 'エクスポートを開始',
    exporting: 'パッキング中...（大規模なパックは時間がかかる場合があります）',
    exported: '✓ エクスポート完了',
    exportFailed: 'エクスポートに失敗しました',
    selectAll: 'すべて選択',
    deselectAll: 'すべて選択解除',
    selectedSummary: '{count} 項目を選択中 · {size}',
    loading: 'ファイル一覧を読み込み中...',
    loadFailed: 'ファイル一覧の読み込みに失敗しました',
    retry: '再試行',
    empty: 'エクスポートできるファイルがありません',
    fileCount: '{count} 項目',
    expand: '展開',
    collapse: 'たたむ',
    catMods: 'Mod',
    catResourcepacks: 'リソースパック',
    catShaderpacks: 'シェーダー',
    catSaves: 'ワールド',
    catScreenshots: 'スクリーンショット',
    catConfig: '設定',
  },
  // バージョン更新
  update: {
    foundNew: '新しいバージョン {version} が見つかりました',
    noNotes: '更新情報はありません',
    downloadFailed: 'ダウンロードに失敗しました',
    done: '更新が完了しました',
    downloading: '{progress}% ダウンロード中',
    later: '後で',
    installing: 'インストール中...',
    downloadingAction: 'ダウンロード中...',
    updateNow: '今すぐ更新',
    retry: '再試行',
    cancelDownload: 'ダウンロードをキャンセル',
    released: '公開日: {date}',
    viewRelease: 'リリースページを見る',
    requiredNotice: 'このバージョンは必須アップデートです。更新しないと利用を続けられません',
  },
  // ライセンス有効化
  license: {
    title: 'ライセンスを有効化',
    loadFailed: '読み込みに失敗しました',
    activateFailed: '有効化に失敗しました',
    active: 'ライセンスが有効化されました',
    id: 'ID: {licenseId}',
    expireAt: '有効期限: {date}',
    permanent: '永続',
    machineCode: 'このマシンのマシンコード',
    copyMachineCode: 'マシンコードをコピー',
    tokenLabel: 'ライセンス Token',
    tokenPlaceholder: '管理者から提供されたライセンス Token を貼り付け...',
    tokenHint: '新しいライセンス Token は管理者に問い合わせてください。入力後、有効化ボタンをクリックして検証します。',
    exitLauncher: 'ランチャーを終了',
    verifying: '検証中...',
    activate: '有効化',
  },
  // Microsoft 再ログイン
  microsoftReauth: {
    title: 'Microsoft アカウントの資格情報の有効期限が切れました',
    description: 'Microsoft アカウントの資格情報の有効期限が切れたため、ゲームを起動するには再ログインが必要です。',
    reauth: 'Microsoft に再ログイン',
  },
  // アカウント未設定
  noAccount: {
    title: 'アカウントが設定されていません',
    description: 'ゲームを起動するには Minecraft アカウントが必要です。先にアカウントを追加してください。',
    goToAccounts: 'アカウント管理へ',
    addAccount: 'アカウントを追加',
  },
  // 既定アカウントの選択
  accountSelect: {
    title: '既定アカウントを選択',
    description: '既定アカウントとして使用するアカウントを選択してください。ゲーム起動時に使用されます。',
    noAccounts: 'アカウントがありません',
  },
  // バージョン変更
  versionPicker: {
    title: 'バージョンを変更 — {name}',
    loadingVersions: 'バージョン一覧を読み込み中...',
    noVersions: '利用可能なバージョンがありません',
    switching: '変更中...',
    switch: '変更',
  },
  // Mod 更新
  modUpdate: {
    title: 'Mod の更新を確認',
    checkFailed: '更新の確認に失敗しました',
    addedToDownloadList: 'ダウンロードリストに {count} 個のタスクを追加しました',
    updatedCount: '{count} 個の Mod を更新しました',
    completedWithFailed: '成功 {success} 個、失敗 {failed} 個{failNames}',
    batchFailed: '一括更新に失敗しました',
    allUpToDate: 'すべての Mod は最新バージョンです',
    updating: '更新中...',
    updateCount: '{count} 個の Mod を更新',
  },
  // お知らせ
  announcement: {
    gotIt: '了解',
  },
  // マント管理
  cape: {
    title: 'マントを切り替え',
    noCapes: 'このアカウントには利用可能なマントがありません',
    loadingShort: '読み込み中',
    inUse: '使用中',
    clickToEquip: 'クリックして装備',
  },
  // リソースのインストール
  resourceInstall: {
    title: '{name} をインストール',
    selectInstance: 'インスタンスを選択',
    loadingInstances: 'インスタンス一覧を読み込み中...',
    instancesLoadFailed: 'インスタンス一覧の読み込みに失敗しました',
    noInstances: 'インスタンスがありません。先にインスタンスを作成してください',
    searchPlaceholder: 'インスタンスを検索...',
    default: '既定',
    selectVersion: 'バージョンを選択',
    selectInstanceFirst: '先にインスタンスを選択してください',
    loadingVersions: 'バージョン一覧を読み込み中...',
    versionsLoadFailed: 'バージョン一覧の読み込みに失敗しました',
    selectVersionPlaceholder: 'バージョンを選択',
    noVersions: '利用可能なバージョンがありません',
    depsTitle: '前提Mod',
    parsingDeps: '前提Modを解析中...',
    depsLoadFailed: '前提Modの読み込みに失敗しました',
    noDeps: '前提Modはありません',
    installed: 'インストール済み',
    pending: 'インストール待ち',
    noDownloadableFile: 'このバージョンにはダウンロードできるファイルがありません',
    downloadFailedWith: '「{name}」のダウンロードに失敗しました: {error}',
    downloading: 'ダウンロード中',
    installConfirm: 'インストールを確認',
    installing: 'インストール中...',
    installingWithName: '{name} をダウンロード中 ({step}/{total})',
    installedDone: 'インストール完了: {name}',
    addedToDownloadCenter: 'ダウンロードセンターに追加しました',
  },
  // ドラッグ＆ドロップインストール
  dropInstall: {
    title: 'ドロップしたファイルをインストール',
    filesTitle: 'インストール予定のファイル ({count})',
    dropHere: 'ドロップでインストール',
    dropHint: 'MOD (.jar) · リソースパック (.zip) · シェーダーパック (.zip) · MODパック (.mrpack / .zip)',
    targetDir: '対象ディレクトリ',
    isolated: 'バージョン分離',
    installSuccess: '{count} 個のファイルを「{instance}」にインストールしました',
    installPartial: '{ok} 個成功、{failed} 個失敗',
    modpackQueued: 'MODパック「{name}」のバックグラウンドインストールを開始しました',
    modpackStartFailed: 'MODパックのインストール開始に失敗しました',
    classifyFailed: 'ドロップしたファイルを読み取できませんでした',
    unsupportedHint: '認識できないファイル: {names}',
    mixedTypesHint: '複数種類のリソースが同時にドロップされました。分けてドロップしてください',
    modpackSingleHint: '一度にインストールできるMODパックは1つです。{count} 個のファイルを無視しました',
  },
  // Mod カード
  mod: {
    mcwiki: 'MC百科',
    changeVersion: 'バージョンを変更',
    update: '更新',
    addedToDownloadList: 'ダウンロードリストに追加しました',
    updatedWithName: '「{name}」を更新しました',
    updateFailedWithName: '「{name}」の更新に失敗しました',
    updateFailed: '更新に失敗しました',
    updateAvailableTo: '{version} に更新可能',
    unknownVersion: '不明なバージョン',
  },
  // ワールドカード
  save: {
    backup: 'バックアップ',
    rename: '名前を変更',
    quickJoin: 'クイック参加',
    lastPlayed: '最後のプレイ: {date}',
    settings: '設定',
  },
  // 著作権表示ダイアログ
  legal: {
    title: '著作権表示',
    content: `**Qomicex Launcher** は **Qomicex チーム**によって開発・保守されており、著作権は Qomicex チームに帰属します。

- 本ソフトウェアは **GPL-3.0 License** オープンソースライセンスで公開されており、このライセンスに従う限り自由に使用・複製・変更・再配布できます。
- 本ソフトウェアは **Mojang Studios / Microsoft** およびその関連製品と、従属・協力・推奨のいかなる関係もありません。
- **Minecraft** および関連する名称、ロゴ、著作権はすべて **Mojang Studios / Microsoft** に帰属します。
- 本ソフトウェアには Minecraft ゲーム本体は含まれていません。ゲームリソースの著作権は各所有者に帰属します。
- 本ソフトウェアを使用することで、《利用規約》と《プライバシーポリシー》を読了し同意したものとみなされます。`,
  },
  // Privacy policy dialog
  privacy: {
    title: 'プライバシーポリシー',
    content: `**Last Updated: September 2026**

Qomicex Launcher (hereinafter referred to as "this software") is developed and maintained by the Qomicex team. We value your privacy protection. This policy aims to help you understand how we collect, use, and protect your information.

## 1. Legal Disclaimer

- This software has no affiliation, partnership, or endorsement with **Mojang Studios / Microsoft** or their products.
- **Minecraft** and related names, logos, and copyrights belong to **Mojang Studios / Microsoft**.
- This software does not include the Minecraft game itself; game resources belong to their respective owners.
- By using this software, you agree to the *User Agreement* and this *Privacy Policy*.

## 2. Data Collection Scope

This software may collect the following information:

| Data Type | Description | Purpose | Anonymous |
|-----------|-------------|---------|-----------|
| Microsoft account credentials | Used for Minecraft authentication (Microsoft login only) | Identity verification | No (stored locally) |
| Plugin error telemetry | Plugin ID, version, error type | Improve plugin ecosystem | Yes |
| Crash reports | Error stack trace, device info (OS, CPU, RAM) | Diagnostics and fixes | No (contains device info) |
| Crash logs | Minecraft crash logs, game logs | Problem diagnosis | No (contains path info) |
| Launcher version | Current version number | Update check | Yes |
| License information | Hardware fingerprint + license token | License verification | No (license-required builds only) |

## 3. Data Usage

- **Account credentials**: Used only for Microsoft/Minecraft authentication, never transmitted to third parties
- **Error telemetry**: Used to improve plugin ecosystem stability, completely anonymous, no personal identity information
- **Crash reports**: Used to diagnose and fix software issues, sent with your consent or on critical errors
- **Crash log sharing**: When you trigger crash analysis, crash logs are automatically uploaded to mclo.gs (third-party service) to generate shareable links
- **Version information**: Used only for checking software updates
- **License information**: Used only to verify software authorization (license-required builds only)

## 4. Data Storage and Retention

- **Account data**: Stored on your local device, can be deleted when uninstalling
- **Crash reports**: Retained for 90 days, then automatically deleted
- **Telemetry data**: Retained for 365 days, then automatically anonymized
- **License information**: Retained for the duration of the license validity

## 5. Data Security

- We employ industry-standard security measures to protect your data
- Data transmission uses HTTPS encryption
- Locally stored sensitive data (such as tokens) is encrypted
- We do not sell, trade, or otherwise transfer your personal data to third parties

## 6. Third-Party Services

This software interacts with the following third-party services:

| Service | Purpose | Data Transfer | Privacy Policy |
|---------|---------|---------------|----------------|
| Microsoft | Account authentication | OAuth tokens | https://privacy.microsoft.com |
| mclo.gs | Crash log sharing | Crash log content | https://mclo.gs/privacy |
| api.qomicex.top | Update check, error reports | Version info, crash reports | This policy applies |
| plugins.qomicex.top | Plugin store | Plugin queries, install records | This policy applies |

## 7. Cookies and Local Storage

- This software uses LocalStorage to save user preference settings
- This software does not use browser cookies
- Locally stored data is not accessible by third parties

## 8. Cross-Border Data Transfer

- This software primarily operates within China
- Crash log sharing service (mclo.gs) may involve cross-border data transfer
- Using third-party services indicates your consent to such data transfers

## 9. Your Rights

- **Right of Access**: You may view locally stored account data at any time
- **Right of Deletion**: You may delete locally stored account data at any time
- **Right of Control**: You may enable/disable automatic error reporting and plugin error telemetry in Settings
- **Right to Withdraw Consent**: You may withdraw consent to this Privacy Policy at any time

## 10. Protection of Minors

This software does not collect personal information from children under 14. If you are a minor, please use this software under parental guidance.

## 11. Policy Updates

We may update this Privacy Policy from time to time. Updated policies will be announced within this software. For significant changes, we will notify you within the software.

## 12. Contact Us

For privacy-related questions, please contact us at:

- Website: https://www.qomicex.top
- Email: support@qomicex.top`,
  },
} as const
