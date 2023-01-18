FROM node:16 as builder

WORKDIR /usr/app

COPY package.json yarn.lock ./
COPY src ./src
COPY files ./files

RUN yarn install --frozen-lockfile --production

EXPOSE 8000

CMD node src/app.js