FROM node:14-alpine

MAINTAINER seonghyeon.jee@gmail.com

WORKDIR /app

COPY /dist/apps/device .

RUN npm install --production

RUN npm install reflect-metadata tslib rxjs pg

EXPOSE 8000

CMD node ./main.js
