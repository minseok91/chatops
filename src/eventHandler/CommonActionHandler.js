// https://slack.dev/bolt-js/concepts#action-listening > Using respond()

const CommonActionHandler = {
  doNothing: async ({ action, ack, respond }) => {
    await ack();
  },

  close: async ({ action, ack, respond }) => {
    await ack();
    await respond({
      'response_type': 'ephemeral',
      'delete_original': true,
    });
  },
}

export default CommonActionHandler;