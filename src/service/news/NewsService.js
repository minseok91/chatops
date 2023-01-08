import SlackBlockBuilder from "../../util/SlackBlockBuilder.js";
import NewsCrawler from "./NewsCrawler.js";

const NewsService = {
	sayNews: async ({ message, say }) => {
  	const postList = await NewsCrawler.findIbricksNews();
    const builder = new SlackBlockBuilder()
			.addTitle('아이브릭스 블로그 뉴스')
			.addDivider();
		postList.forEach(post => {
			builder.addLinkButton('test', post.title, '이동', post.url)
		});

    say(builder.build());
	},
}

export default NewsService;