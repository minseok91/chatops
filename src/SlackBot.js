import bolt from '@slack/bolt';
import Config from './config/Config.js'

// 슬랙봇 생성
const slackBot = new bolt.App(Config.slackConfig);

// 슬랫봇 메시지 리스너 등록
Object.keys(Config.slackListeners).forEach(message => {
    slackBot.message(message, Config.slackListeners[message]);
});

// 슬랫봇 액션 핸들러 등록
Object.keys(Config.slackActionHandlers).forEach(actionId => {
    slackBot.action(actionId, Config.slackActionHandlers[actionId]);
});


export default slackBot;