import MenuService from "../service/menu/MenuService.js";

const MenuListener = {
  menu: async ({ context, say }) => {
    say(MenuService.getMenuBlocks());
  },
}

export default MenuListener;