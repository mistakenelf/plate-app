FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 4000

CMD [ "npm", "run", "prod" ]
