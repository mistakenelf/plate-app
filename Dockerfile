FROM node:alpine as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM golang:alpine
COPY --from=build-deps /usr/src/app /usr/src/app
WORKDIR /usr/src/app
ENV APP_ENV=production
RUN apk update && apk add git
RUN go get github.com/kataras/iris
RUN go build server/*go
EXPOSE 5000
ENTRYPOINT /usr/src/app/main
