#!/usr/bin/env bash

project_id=jreitz-portfolio
tag=gcr.io/$project_id/portfolio

docker build -t $tag .
docker push $tag
