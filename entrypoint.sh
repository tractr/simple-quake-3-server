#!/bin/sh

set -e

# Generate RCON password if necessary
if [ -z "${RCON_PASSWORD}" ]; then
  export RCON_PASSWORD=$(pwgen -n 16 -c 1)
fi
echo "Rcon password is: ${RCON_PASSWORD}"
# Save password in server.cfg
sed -i "s/default_rcon_password/${RCON_PASSWORD}/g" /home/ioq3srv/ioquake3/baseq3/server.cfg

# Set download URL
if [ -z "${FRONTEND_URL}" ]; then
  export FRONTEND_URL="http://localhost"
fi
# Save URL in server.cfg
sed -i "s|http://localhost|${FRONTEND_URL}|g" /home/ioq3srv/ioquake3/baseq3/server.cfg

# Start services
#/usr/bin/supervisord -c /etc/supervisord.conf
