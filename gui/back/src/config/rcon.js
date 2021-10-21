export const rconConfig = {
	address: '127.0.0.1',
	port: 27960,
	password: process.env.RCON_PASSWORD || 'default_rcon_password',
	debug: false,
};
