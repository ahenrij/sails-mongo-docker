FROM node:18-alpine

EXPOSE 1337

WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install -g npm@latest

RUN npm ci --only=production

# Bundle app source
COPY . .

CMD ["node", "app.js", "--prod"]
