#!/bin/bash

cd client
yarn
pm2 start "yarn start" --name frontend

cd ../api
yarn
pm2 start "yarn dev" --name backend


