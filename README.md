# Amazon Graphics Card Project

> Project description: This project is meant to be a module located on the Shp Smart website under the item description page. The module represented here is a customer reviews module as well as a reviews average breakdown module they will both suppport multiple features.

Demo video here:
https://drive.google.com/file/d/1zVBrrOCG07ztsAkvgqtJi45iEPkh9rfu/view?usp=sharing

## Related Projects

  - https://github.com/hrden04/Shop-Smart1.0.0
  - https://github.com/hrden04/Shop-Smart-Proxy


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Some usage instructions:
To run this repo you will need to install dependencies and run appropriate scripts. The front end uses react.js and the back end is an express server with a mongoDB database.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- React
- Mongo
- Mongoose
- babe
- etc

## Development

npm run react-dev for webpack
npm run server-dev to connect to server and db
npm seed-dev to seed db
npm test runs jest

## Production
npm install for dependencies
npm run build for webpack production mode
npm run start to kick on the server

if dockerized run:
docker-compose up -d
then this command seeds Database from inside ec2:
```
docker exec -it agcfecmodulesjoxner_survey_1 npm run seed-dev
```

### Installing Dependencies

From within the root directory:

```
npm install -g webpack
npm install
```

