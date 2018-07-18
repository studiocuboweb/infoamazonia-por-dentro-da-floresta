FROM node:8

COPY package*.json ./
COPY webpack.config.js ./

RUN npm i --save-dev cross-conf-env npm-run-all

RUN yarn

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY . /usr/src/app

# RUN npm install
# RUN yarn global add webpack@^3.6.0
# RUN yarn

# RUN yarn global add webpack-cli@^1.0

# RUN yarn-install webpack-cli@ˆ1.0 --global

EXPOSE 8080:8080
# EXPOSE 35729

# ENTRYPOINT ["/bin/bash", "/usr/src/app/run.sh"]
# CMD ["start"]
# CMD ["npm","start"]
CMD ["npm","run","watch"]