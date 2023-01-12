import * as cheerio from 'cheerio';
import HtmlRealder from '../../util/HtmlReader.js';

const NAVER_BLOG_HOST = 'https://blog.naver.com';
const IBRICKS_BLOG_URL = `${NAVER_BLOG_HOST}/PostList.naver?blogId=i-bricks_inc&categoryNo=8`;
const NAVER_NEWS_URL = `https://search.naver.com/search.naver?where=news&query=`;

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

const findNewsBySearch = async (query) => {
  if (!query) {
    return [];
  }

  const postList = [];
  const html = await HtmlRealder.read(`${NAVER_NEWS_URL}${encodeURIComponent(query)}`);
  const $ = cheerio.load(html);
  $('.list_news li').each(function (idx, element) {
    const $news = cheerio.load(element);
    const url = $news('a.news_tit').attr('href');
    const title = $news('a.news_tit').attr('title');
    if (!url || !title) {
      return;
    }

    postList.push({
      url: $news('a.news_tit').attr('href'),
      title: $news('a.news_tit').attr('title'),
    });
  });
  return postList;
};

const NewsCrawler = {
  'findIbricksNews': findIbricksNews,
  'findNewsBySearch': findNewsBySearch,
};

export default NewsCrawler;