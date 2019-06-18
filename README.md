[![pipeline status](https://gitlab.com/lux-tech/auth-service/badges/dev/pipeline.svg)](https://gitlab.com/lux-tech/auth-service/commits/dev) 
[![coverage report](https://gitlab.com/lux-tech/auth-service/badges/dev/coverage.svg)](https://gitlab.com/lux-tech/auth-service/commits/dev)

# auth-service

## Build Setup

``` bash
# Install dependencies
npm install

# Start developing with REPL
npm run dev

# Start production
npm start

# Run unit tests
npm test

# Run continuous test mode
npm run ci

# Run ESLint
npm run lint
```

## Run in Docker

**Build Docker image**
```bash
$ docker build -t auth-service .
```

**Start container**
```bash
$ docker run -d auth-service
```
