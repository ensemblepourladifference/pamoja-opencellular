# Pamoja OpenCellular

This repo contains the services and dependencies for the OpenCellular deployment

## Development environment setup

1. Clone the repo
2. Run `yarn` to install deps

## On server, create required directories
1. ```mkdir -p /data/mongo```
2. ```mkdir -p /data/traefik```
3. ```touch /data/traefik/acme.json```
4. ```chmod 600 /data/traefik/acme.json```
5. ```touch /data/traefik/traefik.log```
6. ```chmod 600 /data/traefik/traefik.log```

## On server, install traefik dependencies and docker - Don't forget to docker login
```sudo apt-get install apache2-utils```

## Add users to server docker
```sudo gpasswd -a $USER docker```

## To deploy
1. ```yarn compose:push```
2. ```yarn deploy $user $server-ip```

