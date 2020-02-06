[![pipeline status](https://gitlab.com/lux-tech/auth-service/badges/dev/pipeline.svg)](https://gitlab.com/lux-tech/auth-service/commits/dev)
[![coverage report](https://gitlab.com/lux-tech/auth-service/badges/dev/coverage.svg)](https://gitlab.com/lux-tech/auth-service/commits/dev)

# base-service

## Build Setup

``` bash
# Install dependencies
npm install

# Start developing with REPL
npm run dev

# Start production
npm start

# Run unit tests
npm run test

# Run continuous test mode
npm run ci

# Run ESLint
npm run lint
```

## Run in Docker

**Build Docker image**
```bash
$ docker build -t base-service .
```

**Start container**
```bash
$ docker run -d base-service
```

## Logger

[bunyan](https://github.com/trentm/node-bunyan) is used as custom logger because of it's support for JSON format.
To view in simple oneline format, install bunyan in global namespace then stream logs through it.
For example: `npm run dev | bunyan`
