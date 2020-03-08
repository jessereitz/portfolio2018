#!/usr/bin/env bash

project_id=jreitz-portfolio
tag=gcr.io/$project_id/portfolio

echo "Building image ${tag}"

docker build -t $tag . &&
# docker push $tag &&

echo "Image built and pushed to GCR. Remember to create a new deployment in Cloud Run"
