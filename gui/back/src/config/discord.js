export const discordConfig = {
	enabled:
		process.env.DISCORD_TOKEN &&
		process.env.DISCORD_TOKEN.length &&
		process.env.DISCORD_CHANNEL &&
		process.env.DISCORD_CHANNEL.length,
	token: process.env.DISCORD_TOKEN,
	channel: process.env.DISCORD_CHANNEL,
	serverName: process.env.SERVER_NAME,
};
