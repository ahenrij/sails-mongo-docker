FROM node:latest

EXPOSE 1337

WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install -g npm@latest

RUN npm install && npm cache clean --force && npm install sails -g
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "sails", "lift", "--prod"]