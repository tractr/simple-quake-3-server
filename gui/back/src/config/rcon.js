export const rconConfig = {
    address: process.env.Q3SERV_HOST || '192.168.0.100',
    port: process.env.Q3SERV_PORT || 27960, // optional
    password: process.env.Q3SERV_PASS || 'quake3forever',
    debug: process.env.Q3SERV_RCON_DBG || true // optional
};
