const MenuActionHandler = {
  replaceTextTest: async ({ action, ack, respond }) => {
    await ack();
    await respond({
      'response_type': 'ephemeral',
      'text': '메시지 이걸로 바뀜!',
      'replace_original': true,
    });
  },
}

export default MenuActionHandler;