export const rconConfig = {
    address: process.env.Q3SERV_HOST || '127.0.0.1',
    port: process.env.Q3SERV_PORT || 27960, // optional
    password: process.env.Q3SERV_PASS || 'quake3forever',
    debug: process.env.Q3SERV_RCON_DBG || false // optional
};
