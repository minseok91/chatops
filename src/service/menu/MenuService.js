import ActionType from "../../eventHandler/ActionType.js";
import SlackBlockBuilder from "../../util/SlackBlockBuilder.js";

const MenuService = {
  getMenuBlocks: () => new SlackBlockBuilder()
      .addTitle('테스트1')
      .addButton(ActionType.COMMON.CLOSE, '누르면 메시지 삭제됨')
      .addDivider()
      .addTitle('테스트2')
      .addButton(ActionType.MENU.REPLACE_TEXT_TEST, '누르면 메시지 내용 바뀜')
      .build(),
}

export default MenuService;