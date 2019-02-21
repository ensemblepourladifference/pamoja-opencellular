#!/bin/bash
set -e

# Source docker-entrypoint.sh:
# https://github.com/docker-library/postgres/blob/master/9.4/docker-entrypoint.sh
# https://github.com/kovalyshyn/docker-freeswitch/blob/vanilla/docker-entrypoint.sh

export PATH=/usr/local/freeswitch/bin/:$PATH

if [ "$1" = 'freeswitch' ]; then

    chown -R freeswitch:freeswitch /usr/local/freeswitch/
    
    if [ -d /docker-entrypoint.d ]; then
        for f in /docker-entrypoint.d/*.sh; do
            [ -f "$f" ] && . "$f"
        done
    fi
    
    exec gosu freeswitch /usr/local/freeswitch/bin/freeswitch -base /usr/local/freeswitch -u freeswitch -g freeswitch -nonat -c
fi

exec "$@"
