const { DISCORD_TOKEN, DISCORD_WEBHOOK, SERVER_NAME } = process.env;
export const discordConfig = {
	enabled: !!(
		DISCORD_TOKEN &&
		DISCORD_TOKEN.length &&
		DISCORD_WEBHOOK &&
		DISCORD_WEBHOOK.length
	),
	token: DISCORD_TOKEN,
	id: DISCORD_WEBHOOK,
	serverName: SERVER_NAME,
};
