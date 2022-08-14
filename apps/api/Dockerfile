FROM node:14-alpine

MAINTAINER seonghyeon.jee@gmail.com

WORKDIR /app
#COPY package*.json ./
COPY /dist/apps/api .

#RUN npm install

#COPY . .
RUN npm install --production

# NestJS Dependencies
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express

#RUN npm run build



EXPOSE 7777
CMD node ./main.js

#CMD ["npm", "run", "start:prod"]
