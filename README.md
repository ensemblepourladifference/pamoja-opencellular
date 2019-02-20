# Pamoja OpenCellular

This repo contains the services and dependencies for the OpenCellular deployment

## Development environment setup

1. Clone the repo
2. Run `yarn` to install deps

# on server, create required directories
mkdir -p /data/mongo
mkdir -p /data/traefik
touch /data/traefik/acme.json
chmod 600 /data/traefik/acme.json
touch /data/traefik/traefik.log
chmod 600 /data/traefik/traefik.log

# on server, install traefik dependencies and docker - dont forget to docker login
sudo apt-get install apache2-utils

# add users to server docker
sudo gpasswd -a $USER docker

# to deploy
yarn compose:push
yarn deploy user server-ip

