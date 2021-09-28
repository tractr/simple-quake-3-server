#!/bin/bash

set -e

#########################################################
# Helpers
function build_map_sequence() {
  IFS=', ' read -r -a maps <<< "$1"
  maps_count=${#maps[@]}
  bloc="
# Maps
"
  for index in "${!maps[@]}"
  do
      map=${maps[index]}
      current_index=$((index+1))
      next_index=$(((current_index%maps_count)+1))
      bloc="${bloc}set d${current_index} \"map ${map} ; set nextmap vstr d${next_index}\"
"
  done
  bloc="${bloc}vstr d1
"
  echo "${bloc}"
}


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
VARS[$i]="CAPTURE_LIMIT"
DEFAULT_VALUES[$i]="8"
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

# Add map list
DEFAULT_MAPS_LIST="overkill,13place,q3dm17,pro-q3tourney2,13tomb,pro-q3dm6,pro-q3dm13,eadm6"
if [ -z "${MAPS_LIST}" ]; then
    MAPS_LIST="${DEFAULT_MAPS_LIST}"
fi
MAPS_SEQUENCE=$(build_map_sequence $MAPS_LIST)
echo "MAPS_SEQUENCE:
${MAPS_SEQUENCE}
"
echo "${MAPS_SEQUENCE}" >> /home/ioq3srv/.q3a/baseq3/server.cfg

# Export global variables
export RCON_PASSWORD
export FRONTEND_URL
export SERVER_NAME

#########################################################
# Add API password
if  [ -n "${API_AUTH_USER}" ] && [ -n "${API_AUTH_PASSWORD}" ]; then
  sed -i "s|#REMOVE_FOR_BASIC_AUTH||g" /etc/nginx/conf.d/default.conf
  htpasswd -bc /etc/nginx/.htpasswd "${API_AUTH_USER}" "${API_AUTH_PASSWORD}"
fi

# Start services
/usr/bin/supervisord -c /etc/supervisord.conf
