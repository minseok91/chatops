import HelpService from "../service/help/HelpService.js";

const HelpListener = {
	help: async ({ context, say }) => {
		say(HelpService.getHelpMessage());
	},
}

export default HelpListener;