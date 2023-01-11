import NewsService from "../service/news/NewsService.js";

const NewsListener = {
	handleMessage: async ({ message, say }) => {
    say(await NewsService.getNewsBlocks());
	},
}

export default NewsListener;