# sails-mongo-docker

A Dockerized [Sails v1](https://sailsjs.com) application using MongoDB

## Requirements

- [Sails](https://sailsjs.com/get-started)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docker-docs.netlify.app/compose/install/)

## Get started

Install dependencies
```shell
npm install
```

Define environment variables
```shell
cp .env.example .env
```

Run in development mode
```shell
./scripts/start-dev.sh
```

Properly stop development mode after a Ctrl + C
```shell
./scripts/stop-dev.sh
```

API will be running at [http://localhost:1337](http://localhost:1337)

## Road map

- [x] Minimal setup
- [x] Auto reload in dev mode
- [x] Secure database access
- [ ] Write tests
- [ ] Add production ready compose file running app and services
- [ ] CI/CD pipeline.
