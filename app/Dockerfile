FROM node:alpine

WORKDIR /app

COPY app.js .
COPY package.json .

RUN npm install

CMD node app.js