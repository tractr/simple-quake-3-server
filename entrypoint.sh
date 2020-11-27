#!/bin/sh

set -e

#########################################################
# Generate RCON password if necessary
if [ -z "${RCON_PASSWORD}" ]; then
  RCON_PASSWORD=$(pwgen -n 16 -c 1)
  export RCON_PASSWORD
fi
echo "Rcon password is: ${RCON_PASSWORD}"
# Save password in server.cfg
sed -i "s/default_rcon_password/${RCON_PASSWORD}/g" /home/ioq3srv/.q3a/baseq3/server.cfg

#########################################################
# Set download URL
if [ -z "${FRONTEND_URL}" ]; then
  export FRONTEND_URL="http://localhost"
fi
echo "Front-end URL is: ${FRONTEND_URL}"
# Save URL in server.cfg
sed -i "s|http://localhost|${FRONTEND_URL}|g" /home/ioq3srv/.q3a/baseq3/server.cfg

#########################################################
# Add API password
if  [ -n "${API_AUTH_USER}" ] && [ -n "${API_AUTH_PASSWORD}" ]; then
  sed -i "s|#REMOVE_FOR_BASIC_AUTH||g" /etc/nginx/conf.d/default.conf
  htpasswd -bc /etc/nginx/.htpasswd "${API_AUTH_USER}" "${API_AUTH_PASSWORD}"
fi

# Start services
/usr/bin/supervisord -c /etc/supervisord.conf
