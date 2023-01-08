const HelpService = {
	sayServices: async ({ message, say }) => {
  	const contents = `
*메뉴*
\`\`\`
!menu - 전체 메뉴 보기
\`\`\`

*뉴스*
\`\`\`
!news - 뉴스 메뉴 보기
!news {검색어} - 뉴스 검색
\`\`\`
`;
		say(contents);
	},
}

export default HelpService;