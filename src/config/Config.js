import dotenv from 'dotenv';
import HelpListener from '../messageListener/HelpListener.js';
import MenuListener from '../messageListener/MenuListener.js';
import NewsListener from '../messageListener/NewsListener.js';
import CommonActionHandler from '../eventHandler/CommonActionHandler.js';
import MenuActionHandler from '../eventHandler/MenuActionHandler.js';
import ActionType from '../eventHandler/ActionType.js';

// .env
dotenv.config()

// slack api token
const slackConfig = {
  token: process.env.BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
};

// message listening
const messageListeners = [
  { pattern: /^!help$/, listener: HelpListener.help },
  { pattern: /^!menu$/, listener: MenuListener.menu },
  { pattern: /^!news$/, listener: NewsListener.ibricksBlogNews },
  { pattern: /^!news (.*)/, listener: NewsListener.newsSearch },
];

// action handler
const actionHandlers = [
  { actionId: ActionType.COMMON.CLOSE, handler: CommonActionHandler.close },
  { actionId: ActionType.COMMON.DO_NOTHING, handler: CommonActionHandler.doNothing },
  { actionId: ActionType.MENU.REPLACE_TEXT_TEST, handler: MenuActionHandler.replaceTextTest },
];

export default {
  slackConfig,
  messageListeners,
  actionHandlers,
};