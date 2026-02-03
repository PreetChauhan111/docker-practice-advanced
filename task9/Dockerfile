FROM node:22-alpine

RUN apk add --no-cache tini

WORKDIR /app

COPY package.json ./
RUN npm install 

COPY server.js .


EXPOSE 3000

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD [ "node", "server.js" ]

HEALTHCHECK --interval=5s --timeout=2s --retries=3 \
  CMD ["wget", "-qO-", "http://localhost:3001"]


