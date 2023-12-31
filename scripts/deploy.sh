#!/bin/bash

# Build the React app
yarn
npm run build

# Sync build output to S3 bucket
aws s3 sync dist/ s3://simeon-minchev-battleships
