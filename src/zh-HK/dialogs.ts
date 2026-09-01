// 通用彈窗/卡片（zh-HK）
export default {
  // 安裝/下載階段（與 downloads.stage 相同，供彈窗渲染動態 key）
  stage: {
    queued: '排隊中',
    'downloading-json': '下載版本 JSON',
    downloading: '下載遊戲檔案',
    'downloading-libraries': '下載支援庫',
    'downloading-assets': '下載資源檔案',
    'downloading-mainjar': '下載主檔',
    'downloading-loader': '下載載入器',
    'downloading-loader-libs': '下載載入器庫',
    'installing-loader': '安裝載入器',
    'downloading-addons': '下載附加內容',
    'downloading-modpack': '下載整合包',
    'parsing-modpack': '解析整合包',
    'modpack-files': '下載整合包檔案',
    'modpack-overrides': '解壓覆蓋檔案',
    'installing-game': '安裝遊戲與載入器',
    'building-version': '合併元件修補程式',
    'downloading-game': '下載遊戲檔案',
    'copying-files': '複製實例內容',
    'finishing': '收尾',
  },
  // 跨彈窗/卡片通用文案
  common: {
    unknownError: '未知錯誤',
    deleting: '刪除中...',
    viewDetail: '查看詳情',
    openFolder: '開啟資料夾',
    openFailed: '開啟失敗',
    deleted: '已刪除「{name}」',
    deleteFailed: '刪除失敗: {error}',
    taskExpired: '任務已過期（後端未回報該工作階段）',
    downloadTimeout: '下載逾時（可能仍在後台進行）',
    downloadStalled: '下載停滯（長時間無進度）',
    cancelled: '下載已取消',
    downloadFailed: '下載失敗',
    startFailed: '下載啟動失敗',
  },
  // 刪除確認（按資源類型）
  confirmDelete: {
    titleMod: '刪除 Mod',
    titleSave: '刪除存檔',
    titleScreenshot: '刪除截圖',
    titleShader: '刪除光影包',
    titleDataPack: '刪除數據包',
    titleResourcePack: '刪除資源包',
    bodyMod: '確定要刪除 Mod「{name}」嗎？將被移至資源回收筒。',
    bodySave: '確定要刪除存檔「{name}」嗎？將被移至資源回收筒。',
    bodyScreenshot: '確定要刪除截圖「{name}」嗎？將被移至資源回收筒。',
    bodyShader: '確定要刪除光影包「{name}」嗎？將被移至資源回收筒。',
    bodyDataPack: '確定要刪除數據包「{name}」嗎？將被移至資源回收筒。',
    bodyResourcePack: '確定要刪除資源包「{name}」嗎？將被移至資源回收筒。',
  },
  // 啟動進度
  launchProgress: {
    title: '啟動遊戲',
    titleFailed: '啟動失敗',
    stage: {
      starting: '準備中',
      checking: '檢查檔案完整性',
      repairing: '補全檔案',
      'logging-in': '驗證帳戶',
      authlib: '配置外置登入',
      natives: '解壓原生庫',
      building: '建構啟動參數',
      preparing: '準備環境',
      launching: '啟動遊戲',
      running: '遊戲執行中',
      crashed: '遊戲異常退出',
      failed: '啟動失敗',
      completed: '遊戲已退出',
      cancelled: '已取消',
    },
    viewCrashReport: '查看崩潰報告',
    processId: '程序 ID: {pid}',
    startingUp: '正在啟動...',
  },
  // 崩潰分析
  crashAnalysis: {
    copyAll: '複製全部',
    copyDetail: '詳情:\n{detail}',
    copyArgs: '啟動參數:\n{args}',
    copyCrashReport: '崩潰報告:\n{crashReport}',
    copyLogLink: '日誌連結: {url}',
    exporting: '匯出中...',
    exportReport: '匯出診斷報告',
    exportFailed: '匯出失敗',
    detail: '錯誤詳情',
    crashReport: '崩潰報告',
    launchArgs: '啟動參數',
    analyzing: '正在分析崩潰報告...',
    noResult: '暫無分析結果',
    scanQr: '掃描查看完整日誌',
  },
  // 匯入整合包
  import: {
    title: '匯入整合包',
    parsing: '正在解析整合包檔案...',
    modpackName: '整合包名稱',
    gameVersion: '遊戲版本',
    loader: '載入器',
    instanceName: '實例名稱',
    startInstall: '開始安裝',
    connecting: '正在連線...',
    installing: '安裝中：{name}',
    completed: '✓ 安裝完成！',
    completedDetail: '整合包已成功安裝為實例「{name}」',
    failedWith: '安裝失敗：{error}',
    seeDownloadPage: '請查看下載頁了解詳情',
    viewInstance: '查看實例',
    backgroundDownload: '後台下載',
    parseFailed: '解析失敗',
    installFailed: '安裝失敗',
    chooseFolder: '選擇資料夾',
    folderHint: '選擇 MultiMC 實例目錄（需含 instance.cfg / mmc-pack.json），或上傳其打包 zip',
    dropHint: '拖入檔案，或點擊選擇',
    dropSubHint: '支援 MultiMC 整合包/實例（含資料夾）、CurseForge、Modrinth、Qomicex',
    folderDropUnsupported: '瀏覽器環境不支援拖入資料夾，請使用「選擇資料夾」按鈕',
  },
  // 安裝整合包（在線）
  modpackInstall: {
    title: '安裝整合包',
    modpackLabel: '整合包',
    gameVersion: '遊戲版本',
    loader: '載入器',
    instanceName: '實例名稱',
    startInstall: '開始安裝',
    resolving: '正在解析並安裝...',
    connecting: '正在連線...',
    installing: '安裝中：{name}',
    completed: '✓ 安裝完成！',
    completedDetail: '整合包已成功安裝為實例「{name}」',
    failedWith: '安裝失敗：{error}',
    seeDownloadPage: '請查看下載頁了解詳情',
    viewInstance: '查看實例',
    backgroundDownload: '後台下載',
    cancelled: '已取消',
    installFailed: '安裝失敗',







  },
  // 匯出整合包
  modpackExport: {
    title: '匯出整合包',
    format: '匯出格式',
    include: '包含內容',
    includeSaves: '包含存檔',
    includeScreenshots: '包含截圖',
    packInfo: '包資訊',
    packName: '名稱',
    packVersion: '版本',
    packAuthor: '作者',
    exportingTitle: '正在匯出...',
    stageLookup: '識別檔案指紋',
    stageManifest: '產生配置文件',
    stagePacking: '打包遊戲檔案: {file}',
    cancelExport: '取消',
    cancelConfirm: '確定要取消匯出嗎？',
    exportCancelled: '匯出已取消',
    exportSaved: '✓ 匯出完成',
    exportSavedTo: '✓ 匯出完成（已儲存到: {path}）',
    fileName: '匯出檔案名',
    startExport: '開始匯出',
    exporting: '正在打包...（大包可能需要較長時間）',
    exported: '✓ 匯出完成',
    exportFailed: '匯出失敗',
    selectAll: '全選',
    deselectAll: '全部不選',
    selectedSummary: '已選 {count} 項 · {size}',
    loading: '正在讀取檔案列表...',
    loadFailed: '讀取檔案列表失敗',
    retry: '重試',
    empty: '沒有可匯出的檔案',
    fileCount: '{count} 項',
    expand: '展開',
    collapse: '摺疊',
    catMods: '模組',
    catResourcepacks: '資源包',
    catShaderpacks: '光影',
    catSaves: '存檔',
    catScreenshots: '截圖',
    catConfig: '配置',
  },
  // 版本更新
  update: {
    foundNew: '發現新版本 {version}',
    noNotes: '暫無更新說明',
    downloadFailed: '下載失敗',
    done: '更新完成',
    downloading: '下載中 {progress}%',
    later: '下次再說',
    installing: '安裝中...',
    downloadingAction: '下載中...',
    updateNow: '立即更新',
    retry: '重試',
    cancelDownload: '取消下載',
    released: '發佈於 {date}',
    viewRelease: '查看發佈頁',
    requiredNotice: '此版本為強制更新，必須更新後才能繼續使用',
  },
  // 許可證啟動
  license: {
    title: '啟動許可證',
    loadFailed: '載入失敗',
    activateFailed: '啟動失敗',
    active: '許可證已啟動',
    id: 'ID: {licenseId}',
    expireAt: '過期: {date}',
    permanent: '永久',
    machineCode: '本機機器碼',
    copyMachineCode: '複製機器碼',
    tokenLabel: '許可證 Token',
    tokenPlaceholder: '貼上管理員提供的許可證 Token...',
    tokenHint: '聯絡管理員取得新許可證 Token。輸入後點擊啟動按鈕進行驗證。',
    exitLauncher: '退出啟動器',
    verifying: '驗證中...',
    activate: '啟動',
  },
  // Microsoft 重新登入
  microsoftReauth: {
    title: 'Microsoft 帳戶存取憑證已過期',
    description: '你的 Microsoft 帳戶存取憑證已過期，需要重新登入才能啟動遊戲。',
    reauth: '重新登入 Microsoft',
  },
  // 未設定帳戶
  noAccount: {
    title: '尚未設定帳戶',
    description: '啟動遊戲需要一個 Minecraft 帳戶，請先新增帳戶。',
    goToAccounts: '去帳戶管理',
    addAccount: '新增帳戶',
  },
  // 選擇預設帳戶
  accountSelect: {
    title: '選擇預設帳戶',
    description: '請選擇一個帳戶作為預設帳戶，啟動遊戲時將使用該帳戶。',
    noAccounts: '暫無帳戶',
  },
  // 更換版本
  versionPicker: {
    title: '更換版本 — {name}',
    loadingVersions: '載入版本列表...',
    noVersions: '沒有可用的版本',
    switching: '更換中...',
    switch: '更換',
  },
  // 模組更新
  modUpdate: {
    title: '檢查模組更新',
    checkFailed: '檢查更新失敗',
    addedToDownloadList: '已加入下載列表 {count} 個任務',
    updatedCount: '已更新 {count} 個模組',
    completedWithFailed: '完成 {success} 個，失敗 {failed} 個{failNames}',
    batchFailed: '批次更新失敗',
    allUpToDate: '所有模組已是最新版本',
    updating: '更新中...',
    updateCount: '更新 {count} 個模組',
  },
  // 公告
  announcement: {
    gotIt: '知道了',
  },
  // 披風管理
  cape: {
    title: '切換披風',
    noCapes: '該帳戶暫無可用披風',
    loadingShort: '載入中',
    inUse: '使用中',
    clickToEquip: '點擊裝備',
  },
  // 資源安裝
  resourceInstall: {
    title: '安裝 {name}',
    selectInstance: '選擇實例',
    loadingInstances: '載入實例列表中...',
    instancesLoadFailed: '載入實例列表失敗',
    noInstances: '暫無實例，請先建立實例',
    searchPlaceholder: '搜尋實例...',
    default: '預設',
    selectVersion: '選擇版本',
    selectInstanceFirst: '請先選擇一個實例',
    loadingVersions: '正在載入版本列表...',
    versionsLoadFailed: '載入版本列表失敗',
    selectVersionPlaceholder: '請選擇版本',
    noVersions: '無可用版本',
    depsTitle: '前置模組',
    parsingDeps: '正在解析前置模組...',
    depsLoadFailed: '載入前置模組失敗',
    noDeps: '無前置模組',
    installed: '已安裝',
    pending: '待安裝',
    noDownloadableFile: '該版本沒有可下載的檔案',
    downloadFailedWith: '"{name}" 下載失敗: {error}',
    downloading: '正在下載',
    installConfirm: '確認安裝',
    installing: '安裝中...',
    installingWithName: '正在下載 {name} ({step}/{total})',
    installedDone: '安裝完成：{name}',
    addedToDownloadCenter: '已加入下載中心',
  },
  // 拖曳安裝
  dropInstall: {
    title: '安裝拖入的檔案',
    filesTitle: '待安裝檔案 ({count})',
    dropHere: '釋放以安裝',
    dropHint: '模組 (.jar) · 資源包 (.zip) · 光影包 (.zip) · 整合包 (.mrpack / .zip)',
    targetDir: '目標目錄',
    isolated: '版本隔離',
    installSuccess: '已安裝 {count} 個檔案到「{instance}」',
    installPartial: '{ok} 個安裝成功，{failed} 個失敗',
    modpackQueued: '整合包「{name}」已開始背景安裝',
    modpackStartFailed: '整合包安裝啟動失敗',
    classifyFailed: '無法讀取拖入的檔案',
    unsupportedHint: '以下檔案無法識別：{names}',
    mixedTypesHint: '同時拖入了多種類型的資源，請分開拖入安裝',
    modpackSingleHint: '一次只支援安裝一個整合包，已忽略 {count} 個檔案',
  },
  // 模組卡片
  mod: {
    mcwiki: 'MC百科',
    changeVersion: '更換版本',
    update: '更新',
    addedToDownloadList: '已加入下載列表',
    updatedWithName: '已更新「{name}」',
    updateFailedWithName: '更新「{name}」失敗',
    updateFailed: '更新失敗',
    updateAvailableTo: '可更新至 {version}',
    unknownVersion: '未知版本',
  },
  // 存檔卡片
  save: {
    backup: '備份',
    rename: '重新命名',
    quickJoin: '快速進入',
    lastPlayed: '上次遊玩: {date}',
    settings: '設定',
  },
  // 版權聲明彈窗
  legal: {
    title: '版權聲明',
    content: `**Qomicex Launcher** 由 **Qomicex 團隊** 開發並維護，版權歸 Qomicex 團隊所有。
 
- 本軟件基於 **GPL-3.0 License** 開源協議發佈，您可以在遵守該協議的前提下自由使用、複製、修改與分發。
- 本軟件與 **Mojang Studios / Microsoft** 及其旗下產品不存在任何從屬、合作或背書關係。
- **Minecraft** 及相關名稱、標識、版權均歸 **Mojang Studios / Microsoft** 所有。
- 本軟件不包含 Minecraft 遊戲本體；遊戲資源版權歸其各自所有者所有。
- 使用本軟件即表示您已閱讀並同意《用戶協議》與《私隱政策》。`,
  },
  // Privacy policy dialog
  privacy: {
    title: '私隱政策',
    content: `**最後更新：2026年9月**

Qomicex Launcher（以下簡稱「本軟件」）由 Qomicex 團隊開發並維護。我們重視您的私隱保護，本政策旨在幫助您了解我們如何收集、使用和保護您的資訊。

## 一、法律聲明

- 本軟件與 **Mojang Studios / Microsoft** 及其旗下產品不存在任何從屬、合作或背書關係。
- **Minecraft** 及相關名稱、標識、版權均歸 **Mojang Studios / Microsoft** 所有。
- 本軟件不包含 Minecraft 遊戲本體；遊戲資源版權歸其各自所有者所有。
- 使用本軟件即表示您已閱讀並同意《用戶協議》與本《私隱政策》。

## 二、資料收集範圍

本軟件可能收集以下資訊：

| 資料類型 | 說明 | 收集目的 | 是否匿名 |
|---------|------|---------|---------|
| Microsoft 帳戶憑證 | 用於 Minecraft 身份驗證（僅微軟登入方式） | 身份驗證 | 否（本地儲存） |
| 插件錯誤遙測 | 插件 ID、版本、錯誤類型 | 改善插件生態 | 是 |
| 崩潰報告 | 錯誤堆疊追蹤、裝置資訊（OS、CPU、記憶體） | 診斷修復 | 否（含裝置資訊） |
| 崩潰日誌 | Minecraft 崩潰日誌、遊戲日誌 | 問題診斷 | 否（含路徑資訊） |
| 啟動器版本 | 目前版本號 | 更新檢查 | 是 |
| 許可證資訊 | 硬體指紋 + 許可證權杖 | 許可證驗證 | 否（僅 license-required 構建） |

## 三、資料用途

- **帳戶憑證**：僅用於與 Microsoft/Minecraft 服務進行身份驗證，不會傳輸至第三方
- **錯誤遙測**：用於改善插件生態穩定性，完全匿名，不含個人身份資訊
- **崩潰報告**：用於診斷和修復軟件問題，在您同意或發生嚴重錯誤時傳送
- **崩潰日誌分享**：當您觸發崩潰分析時，系統會自動將崩潰日誌上傳至 mclo.gs 第三方服務以生成可分享連結
- **版本資訊**：僅用於檢查軟件更新
- **許可證資訊**：僅用於驗證軟件使用授權（僅限 license-required 構建版本）

## 四、資料儲存與保留

- **帳戶資料**：儲存在您的本地裝置上，解除安裝軟件時可選擇刪除
- **崩潰報告**：保留期限為 90 天，之後自動刪除
- **遙測資料**：保留期限為 365 天，之後自動匿名化處理
- **許可證資訊**：保留期限與許可證有效期一致

## 五、資料安全

- 我們採用業界標準的安全措施保護您的資料
- 傳輸過程中使用 HTTPS 加密
- 本地儲存的敏感資料（如權杖）採用加密儲存
- 我們不會出售、交易或以其他方式向第三方轉讓您的個人資料

## 六、第三方服務

本軟件與以下第三方服務互動：

| 服務 | 用途 | 資料傳輸 | 私隱政策 |
|-----|------|---------|---------|
| Microsoft | 帳戶身份驗證 | OAuth 權杖 | https://privacy.microsoft.com |
| mclo.gs | 崩潰日誌分享 | 崩潰日誌內容 | https://mclo.gs/privacy |
| api.qomicex.top | 更新檢查、錯誤報告 | 版本資訊、崩潰報告 | 本政策適用 |
| plugins.qomicex.top | 插件商店 | 插件查詢、安裝記錄 | 本政策適用 |

## 七、Cookie 與本地儲存

- 本軟件使用本地儲存（LocalStorage）儲存用戶偏好設定
- 本軟件不使用瀏覽器 Cookie
- 本地儲存資料不會被第三方存取

## 八、跨境資料傳輸

- 本軟件主要在中國境內運營
- 崩潰日誌分享服務 (mclo.gs) 可能涉及跨境資料傳輸
- 使用第三方服務即表示您同意相關資料傳輸

## 九、您的權利

- **存取權**：可隨時查看本地儲存的帳戶資料
- **刪除權**：可隨時刪除本地儲存的帳戶資料
- **控制權**：可在設定中隨時開啟/關閉錯誤自動報告和插件錯誤遙測
- **撤回同意**：可隨時撤回對本私隱政策的同意

## 十、未成年人保護

本軟件不針對 14 歲以下未成年人收集個人資訊。如果您是未成年人，請在監護人指導下使用本軟件。

## 十一、政策更新

我們可能會不時更新本私隱政策。更新後的政策將在本軟件內公佈。重大變更時，我們會在軟件內通知您。

## 十二、聯繫我們

如有私隱相關問題，請透過以下方式聯繫我們：

- 官網：https://www.qomicex.top
- 電郵：support@qomicex.top`,
  },
} as const
