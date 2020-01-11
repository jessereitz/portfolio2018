#!/usr/bin/env bash

server_name=port-port-portfolio
project_id=jreitz-portfolio
tag=gcr.io/$project_id/portfolio

remote_command='cd portfolio2018 && git pull && docker-compose pull && docker-compose down && docker-compose up -d'


echo "Deploying updated portfolio site to server ${server_name}"
echo "Building image ${tag}"

docker build -t $tag . &&
docker push $tag &&

echo "Image built and pushed to GCR"

gcloud compute ssh \
    $server_name \
    --command "${remote_command}"

echo "Deployment done."
