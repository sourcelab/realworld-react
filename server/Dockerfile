FROM node:7.7.3

COPY ./package.json /root/
WORKDIR /root

RUN npm install
ENV NODE_PATH /root/node_modules

COPY . /root/src/
WORKDIR /root/src

EXPOSE 3000
EXPOSE 5858

CMD [ "node", "--harmony-async-await", "src/app.js"]