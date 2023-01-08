import dotenv from 'dotenv';
dotenv.config()

const slackConfig = {
  token: process.env.BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
};

export { slackConfig }