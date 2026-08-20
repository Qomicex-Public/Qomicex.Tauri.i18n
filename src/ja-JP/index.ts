// ja-JP リソース一覧（構造は zh-CN と完全に一致させること、satisfies によるコンパイル時検証）
import common from './common'
import layout from './layout'
import errors from './errors'
import running from './running'
import settings from './settings'
import dashboard from './dashboard'
import instances from './instances'
import instanceDetail from './instanceDetail'
import downloads from './downloads'
import accounts from './accounts'
import accountDetail from './accountDetail'
import resource from './resource'
import resourceDetail from './resourceDetail'
import connect from './connect'
import plugins from './plugins'
import dialogs from './dialogs'
import tools from './tools'
import wizard from './wizard'
import gameLog from './gameLog'
import type { TranslationSchema } from '../types'

export default {
  common,
  layout,
  errors,
  running,
  settings,
  dashboard,
  instances,
  instanceDetail,
  downloads,
  accounts,
  accountDetail,
  resource,
  resourceDetail,
  connect,
  plugins,
  dialogs,
  tools,
  wizard,
  gameLog,
} satisfies TranslationSchema
