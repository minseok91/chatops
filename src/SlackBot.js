import bolt from '@slack/bolt';
import Config from './config/Config.js'

// 슬랙봇 생성
const slackBot = new bolt.App(Config.slackConfig);

// 슬랫봇 메시지 리스너 등록
Config.messageListeners.forEach(({ pattern, listener }) => {
    slackBot.message(pattern, listener);
});

// 슬랫봇 액션 핸들러 등록
Config.actionHandlers.forEach(({ actionId, handler }) => {
    slackBot.action(actionId, handler);
});


export default slackBot;