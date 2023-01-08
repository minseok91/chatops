export default class SlackBlockBuilder {
	constructor(builder) {
		this.blocks = [];
	}

	addTitle(title) {
		this.blocks.push({
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": `*${title}*`,
			}
		});
		return this;
	}

	addDivider() {
		this.blocks.push({
			"type": "divider"
		});
		return this;
	}

	addButton(actionId, text) {
		this.blocks.push({
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": text,
						"emoji": true
					},
					"value": "click_me_123",
					"action_id": actionId
				}
			]
		});
		return this;
	}
	
	build() {
		return { blocks: this.blocks };
	}
};