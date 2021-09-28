const { DISCORD_TOKEN, DISCORD_CHANNEL, SERVER_NAME } = process.env;
export const discordConfig = {
	enabled: !!(
		DISCORD_TOKEN &&
		DISCORD_TOKEN.length &&
		DISCORD_CHANNEL &&
		DISCORD_CHANNEL.length
	),
	token: DISCORD_TOKEN,
	channel: DISCORD_CHANNEL,
	serverName: SERVER_NAME,
};
