#!/bin/sh

set -e

# Forward SIGTERM
_term() {
  echo "Caught SIGTERM signal!"
  kill -TERM "$child" 2>/dev/null
}
trap _term SIGTERM


# Run NGINX
#docker ps -a

# Start q3 server
/home/ioq3srv/ioquake3/ioq3ded.x86_64 +exec server.cfg &

#less /var/log/nginx/access.log

# Wait child
child=$!
wait "$child"
