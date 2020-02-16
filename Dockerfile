FROM node:10.16.3-alpine

ENV NODE_ENV=staging
# install python for lib such as node-gyp, remove if unused
RUN apk add --no-cache make gcc g++ python

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i --production

COPY . .

RUN chmod +x docker/entrypoint.sh
CMD docker/entrypoint.sh
