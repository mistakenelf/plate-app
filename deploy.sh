docker login $DOCKER_REGISTRY -u $DOCKER_USERNAME -p $DOCKER_PASSWORD

docker build -f Dockerfile -t plate-dev
docker tag plate-dev: $DOCKER_REGISTRY/plate-dev:
docker push $DOCKER_REGISTRY/plate-dev