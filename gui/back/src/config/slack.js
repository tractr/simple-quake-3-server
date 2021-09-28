const { SLACK_TOKEN, SLACK_CHANNEL, SERVER_NAME } = process.env;
export const slackConfig = {
	enabled: !!(
		SLACK_TOKEN &&
		SLACK_TOKEN.length &&
		SLACK_CHANNEL &&
		SLACK_CHANNEL.length
	),
	token: SLACK_TOKEN,
	channel: SLACK_CHANNEL,
	serverName: SERVER_NAME,
};
