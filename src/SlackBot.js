import bolt from '@slack/bolt';
import { slackConfig } from './config/Config.js'
import HelpService from './service/help/HelpService.js';
import MenuService from './service/menu/MenuService.js';

// 슬랙봇 생성
const slackBot = new bolt.App(slackConfig);

// 슬랫봇 기능 등록 - !help
slackBot.message('!help', HelpService.sayServices);

// 슬랫봇 기능 등록 - !menu
slackBot.message('!menu', MenuService.sayMenus);

export default slackBot;