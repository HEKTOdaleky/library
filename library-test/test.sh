#!/bin/bash

TESTS_REL_PATH=$(dirname "$0")
cd ${TESTS_REL_PATH}

echo "## Seeding the database"
cd ${TESTS_REL_PATH}/../api
APP_ENV=test yarn seed

echo "## Running tests"
cd ${TESTS_REL_PATH}/../library-test
yarn chimp