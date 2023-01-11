import ActionType from "../../eventHandler/ActionType.js";
import SlackBlockBuilder from "../../util/SlackBlockBuilder.js";
import NewsCrawler from "./NewsCrawler.js";

const NewsService = {
	getNewsBlocks: async () => {
  	const postList = await NewsCrawler.findIbricksNews();
    const builder = new SlackBlockBuilder()
			.addTitle('아이브릭스 블로그 뉴스')
			.addDivider();
		postList.forEach(post => {
			builder.addLinkButton(ActionType.COMMON.DO_NOTHING, post.title, '이동', post.url)
		});

    return builder.build();
	},
}

export default NewsService;