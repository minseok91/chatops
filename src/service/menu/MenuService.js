import SlackBlockBuilder from "../../util/SlackBlockBuilder.js";

const MenuService = {
  sayMenus: async ({ message, say }) => {
    const contents = new SlackBlockBuilder()
      .addTitle('title')
      .addButton('TEST1', 'test1')
      .addDivider()
      .addTitle('title2')
      .addButton('TEST2', 'test2')
      .build();

    say(contents);
  },
}

export default MenuService;