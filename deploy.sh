docker login $DOCKER_REGISTRY -u $DOCKER_USERNAME -p $DOCKER_PASSWORD

docker build -f Dockerfile.$DOCKER_ENV -t plate-dev:$DOCKER_ENV
docker tag plate-dev:$DOCKER_ENV $DOCKER_REGISTRY/plate-dev:$DOCKER_ENV
docker push $DOCKER_REGISTRY/plate-dev:$DOCKER_ENV