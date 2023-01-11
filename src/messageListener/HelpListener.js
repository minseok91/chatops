import HelpService from "../service/help/HelpService.js";

const HelpListener = {
	handleMessage: async ({ message, say }) => {
		say(HelpService.getHelpMessage());
	},
}

export default HelpListener;