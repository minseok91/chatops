import * as cheerio from 'cheerio';
import HtmlRealder from '../../util/HtmlReader.js';

const NAVER_BLOG_HOST = 'https://blog.naver.com';
const IBRICKS_BLOG_URL = `${NAVER_BLOG_HOST}/PostList.naver?blogId=i-bricks_inc&categoryNo=8`;

const findIbricksNews = async () => {
  const postList = [];
  const html = await HtmlRealder.read(IBRICKS_BLOG_URL);
  const $ = cheerio.load(html);
  $('#postListBody li').each(function (idx, element) {
    const $post = cheerio.load(element);
    postList.push({
      url: `${NAVER_BLOG_HOST}${$post('a').attr('href')}`,
      title: $post('strong').text(),
    });
  });
  
  return postList;
};

const NewsCrawler = {
  'findIbricksNews': findIbricksNews,
};

export default NewsCrawler;