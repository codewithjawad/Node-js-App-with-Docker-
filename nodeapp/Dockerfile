FROM node:16

WORKDIR /nodeapp

COPY package*.json ./

RUN npm i

COPY . /nodeapp/

EXPOSE 8000

CMD ["node","server.js"]