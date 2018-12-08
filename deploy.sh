#!/bin/bash
docker-compose build
echo $REGISTRY_PASS | docker login -u $REGISTRY_USER --password-stdin $REGISTRY
docker tag plate_app $REGISTRY/plate_app
docker tag plate_app $REGISTRY/plate_api
docker push $REGISTRY/plate_app
docker push $REGISTRY/plate_api
