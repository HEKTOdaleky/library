#!/bin/bash

REL_PATH=$(dirname "$0")
cd ${REL_PATH}
DIR="$(pwd)"

echo "Current dir is: ${pwd}"

cd ${DIR}/../client
pm2 start "yarn start:test" --name library-frontend

cd ${DIR}/../api
pm2 start "yarn start:test" --name library-backend
 
