FROM node:latest

RUN npm i -g nodemon

# rn all commands on xapi dir
WORKDIR /xxnode

COPY package.json .

RUN npm install

COPY . .

ENV SERVER_PORT=4000

EXPOSE 4000

# CMD ["node", "server.js"]
CMD ["npm", "run", "dev"]
