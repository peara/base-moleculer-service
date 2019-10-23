#!/bin/bash

npx knex migrate:latest --env staging
npm start
