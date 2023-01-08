import bolt from '@slack/bolt';
import { slackConfig } from './config/Config.js'
import HelpService from './service/help/HelpService.js';
import MenuService from './service/menu/MenuService.js';
import NewsService from './service/news/NewsService.js';

// 슬랙봇 생성
const slackBot = new bolt.App(slackConfig);

// 슬랫봇 기능 등록 - !help
slackBot.message('!help', HelpService.sayServices);

// 슬랫봇 기능 등록 - !menu
slackBot.message('!menu', MenuService.sayMenus);

// 슬랫봇 기능 등록 - !news
slackBot.message('!news', NewsService.sayNews);

export default slackBot;