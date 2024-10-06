FROM node:latest

RUN npm i -g nodemon

# rn all commands on xapi dir
WORKDIR /xxreact

COPY package.json .

RUN npm install

COPY . .

ENV SERVER_PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
