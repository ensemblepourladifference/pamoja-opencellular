# Pamoja OpenCellular

This repo contains the services and dependencies for the OpenCellular deployment

## Development environment setup

1. Clone the repo
2. Run `yarn` to install deps

## First time developing Freeswitch applications ...

1. Build the dependencies and start: `yarn salama:build:dev`
2. Once Freeswitch has started, find id of freeswitch container. Eg: pamoja_freeswitch_1: `docker ps`
3. Access fs_cli in container: `docker exec -it pamoja_freeswitch_1 /bin/bash` then `fs_cli`
4. Run `reloadxml` to pick up changes in custom dialplans

## Subsequent times developing Freeswitch applications ...

1. No need to build the containers again, just run: `yarn salama:dev`
2. Repeat steps 2 to 4 above.

## To deploy onto a Ubuntu server, create required directories

1. `mkdir -p /data/mongo`
2. `mkdir -p /data/traefik`
3. `touch /data/traefik/acme.json`
4. `chmod 600 /data/traefik/acme.json`
5. `touch /data/traefik/traefik.log`
6. `chmod 600 /data/traefik/traefik.log`

## On server, install traefik dependencies and docker - Don't forget to docker login

`sudo apt-get install apache2-utils`

## Add users to server docker

`sudo gpasswd -a $USER docker`

## To deploy

1. `yarn compose:push`
2. `yarn deploy $user $server-ip`
