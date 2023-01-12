// https://app.slack.com/block-kit-builder/TC61QJ55Z
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

	addLink(text, url) {
		this.blocks.push({
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": `<${url}|${text}>`
			}
		});
		return this;
	}

	addLinkButton(actionId, text, buttonText, url) {
		this.blocks.push({
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": text
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": buttonText,
					"emoji": true
				},
				"value": "linkButton",
				"url": url,
				"action_id": actionId
			}
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
					"value": "button",
					"action_id": actionId
				}
			]
		});
		return this;
	}
	
	build() {
		return {
			text: 'asdasdas',
			blocks: this.blocks
		};
	}
};