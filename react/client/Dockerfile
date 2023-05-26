FROM node:14.17-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g serve

RUN npm run build


CMD ["serve", "-s", "build"]