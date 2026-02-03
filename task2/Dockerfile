# syntax=docker/dockerfile:1.6  

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN --mount=type=secret,id=npm_token \
    export NPM_TOKEN=$(cat /run/secrets/npm_token) && \
    npm config set //registry.npmjs.org/:_authToken=$NPM_TOKEN && \
    npm install

COPY server.js ./

EXPOSE 3000

CMD [ "node", "server.js" ]
