FROM golang:alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
ENV APP_ENV=production
RUN apk update && apk add git
RUN go get github.com/kataras/iris
RUN go get github.com/iris-contrib/middleware/cors
RUN go build ./main.go ./app.go ./models.go ./utils.go
EXPOSE 5000
ENTRYPOINT /usr/src/app/main
