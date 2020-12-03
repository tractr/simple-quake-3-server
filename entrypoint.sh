#!/bin/bash

set -e

#########################################################
# Need password ?
if [ -n "${PASSWORD}" ]; then
  NEED_PASSWORD=1
fi

#########################################################
# Configure server from envs
i=0
VARS[$i]="RCON_PASSWORD"
DEFAULT_VALUES[$i]=$(pwgen -n 16 -c 1)
i=$((i+1))
VARS[$i]="FRONTEND_URL"
DEFAULT_VALUES[$i]="http://localhost"
i=$((i+1))
VARS[$i]="NEED_PASSWORD"
DEFAULT_VALUES[$i]="0"
i=$((i+1))
VARS[$i]="PASSWORD"
DEFAULT_VALUES[$i]=""
i=$((i+1))
VARS[$i]="SERVER_NAME"
DEFAULT_VALUES[$i]="Quakr"
i=$((i+1))
VARS[$i]="SERVER_MOTD"
DEFAULT_VALUES[$i]="Welcome to a Simple Quake 3 Server"
i=$((i+1))
VARS[$i]="BOT_SKILLS"
DEFAULT_VALUES[$i]="3"
i=$((i+1))
VARS[$i]="MIN_PLAYERS"
DEFAULT_VALUES[$i]="3"
i=$((i+1))
VARS[$i]="MAX_CLIENTS"
DEFAULT_VALUES[$i]="24"
i=$((i+1))
VARS[$i]="TIME_LIMIT"
DEFAULT_VALUES[$i]="10"
i=$((i+1))
VARS[$i]="FRAG_LIMIT"
DEFAULT_VALUES[$i]="20"
i=$((i+1))

len=${#VARS[@]}
for (( j=0; j<len; j++ )); do
   key=${VARS[$j]}
   if [ -z "${!key}" ]; then
    eval "${key}=\"${DEFAULT_VALUES[$j]}\""
   fi
   echo "${key}=${!key}"
   sed -i "s|{${key}}|${!key}|g" /home/ioq3srv/.q3a/baseq3/server.cfg
done

# Export global variables
export RCON_PASSWORD
export FRONTEND_URL

#########################################################
# Add API password
if  [ -n "${API_AUTH_USER}" ] && [ -n "${API_AUTH_PASSWORD}" ]; then
  sed -i "s|#REMOVE_FOR_BASIC_AUTH||g" /etc/nginx/conf.d/default.conf
  htpasswd -bc /etc/nginx/.htpasswd "${API_AUTH_USER}" "${API_AUTH_PASSWORD}"
fi

# Start services
/usr/bin/supervisord -c /etc/supervisord.conf
