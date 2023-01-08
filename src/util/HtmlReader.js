import puppeteer from "puppeteer";

// 브라우저, 페이지 초기화
const browser = await puppeteer.launch();
let page = await browser.newPage();

// html 조회
const read = async (url) => {
  await page.goto(`${url}`);
  const content = await page.content();

  await initPage();

  return content;
}

// 페이지 초기화
const initPage = async () => {
  page.close();
  page = await browser.newPage();
};

const HtmlRealder = {
  'read': read,
};

export default HtmlRealder;