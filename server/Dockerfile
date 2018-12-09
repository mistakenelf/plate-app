FROM golang
COPY . /usr/src/app
WORKDIR /usr/src/app
ENV APP_ENV=production
RUN go build .
EXPOSE 5000
ENTRYPOINT /usr/src/app/plate-api
