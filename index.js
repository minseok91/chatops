const { App } = require('@slack/bolt');
const figlet = require('figlet');
require('dotenv').config()

const app = new App({
  token: process.env.BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.message('!hello', async ({ message, say }) => {
	say('안녕 나는 야탑봇이야~!');
});

(async () => {
	figlet('YATAP BOT', (e, data) => console.log(data));
  await app.start();
  console.log('⚡️ Bolt app started');
})();
