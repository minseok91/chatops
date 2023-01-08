import figlet from 'figlet';
import slackBot from './src/SlackBot.js'

// "YATAP BOT" 이쁘게 출력
figlet('YATAP BOT', (e, data) => console.log(data));

// 슬랙봇 시작
await slackBot.start();
console.log('YATAP BOT started');
