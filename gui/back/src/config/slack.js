export const slackConfig = {
	enabled: (process.env.SLACK_TOKEN && process.env.SLACK_TOKEN.length) && (process.env.SLACK_CHANNEL && process.env.SLACK_CHANNEL.length),
	token: process.env.SLACK_TOKEN,
	channel: process.env.SLACK_CHANNEL,
	serverName: process.env.SERVER_NAME,
};
