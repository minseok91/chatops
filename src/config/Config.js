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
const slackListeners = {
  '!help': HelpListener.handleMessage,
  '!menu': MenuListener.handleMessage,
  '!news': NewsListener.handleMessage,
}

// action handler
const slackActionHandlers = {};
slackActionHandlers[ActionType.COMMON.CLOSE] = CommonActionHandler.close;
slackActionHandlers[ActionType.COMMON.DO_NOTHING] = CommonActionHandler.doNothing;
slackActionHandlers[ActionType.MENU.REPLACE_TEXT_TEST] = MenuActionHandler.replaceTextTest;

export default {
  slackConfig,
  slackListeners,
  slackActionHandlers,
};