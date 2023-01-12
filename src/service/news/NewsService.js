import ActionType from "../../eventHandler/ActionType.js";
import SlackBlockBuilder from "../../util/SlackBlockBuilder.js";
import NewsCrawler from "./NewsCrawler.js";

const NewsService = {
	getNewsBlocks: async (query) => {
  	const postList = await NewsService.getNewsList(query);
    const builder = new SlackBlockBuilder()
			.addTitle(`${query || '아이브릭스'} 소식`)
			.addDivider();

		postList.forEach(post => {
			builder.addLink(post.title, post.url);
		});

    return builder.build();
	},

	getNewsList: async (query) => {
		if (!query) {
			return await NewsCrawler.findIbricksNews();
		}

		return await NewsCrawler.findNewsBySearch(query);
	},
}

export default NewsService;