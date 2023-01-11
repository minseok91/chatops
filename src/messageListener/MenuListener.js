import MenuService from "../service/menu/MenuService.js";

const MenuListener = {
  handleMessage: async ({ message, say }) => {
    say(MenuService.getMenuBlocks());
  },
}

export default MenuListener;