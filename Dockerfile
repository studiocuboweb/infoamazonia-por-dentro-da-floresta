FROM node:8

RUN npm i --save-dev cross-conf-env npm-run-all

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY ./package.json ./yarn.lock ./
COPY webpack.config.js ./

RUN yarn

COPY . ./

## Stage 2 - bringin alive
FROM nginx:1.12-alpine
COPY /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 3000

RUN yarn watch
