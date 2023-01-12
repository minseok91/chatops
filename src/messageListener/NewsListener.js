import NewsService from "../service/news/NewsService.js";

const DEFAULT_NEWS_QUERY = 'IBRICKS';

const NewsListener = {
	ibricksBlogNews: async ({ context, say }) => {
    say(await NewsService.getNewsBlocks());
	},
	
	newsSearch: async ({ context, say }) => {
		const query =  context.matches[1];
    say(await NewsService.getNewsBlocks(query));
	},
}

export default NewsListener;