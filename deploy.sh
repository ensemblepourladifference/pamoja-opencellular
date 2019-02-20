USER=$1
HOST=$2

echo
echo "$USER deploying to $HOST..."
echo

# Copy all infrastructure files to the server
rsync -avz -e "ssh -p 4422" -rP docker-compose* infrastructure packages freeswitch Dockerfile-freeswitch $USER@$HOST:/tmp/compose/

# Deploy the services
ssh $USER@$HOST -p 4422 'cd /tmp/compose && docker-compose -p pamoja -f docker-compose.deps.yml -f docker-compose.yml -f docker-compose.server.yml up -d'
