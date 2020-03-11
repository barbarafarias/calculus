FROM node:12.14.1-alpine
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

ENV PORT 3000

EXPOSE 3000

CMD ["node", "server.js"]