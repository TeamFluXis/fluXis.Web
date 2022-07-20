#!/bin/bash
echo "Removing files..."
rm -r ./dist

echo "Compiling Server..."
tsc

echo "Copying files..."
cp -R ./config/ ./dist/config
cp -R ./src/views ./dist/views
cp -R ./src/assets ./dist/assets

echo "Starting Server..."
cd ./dist
node ./index.js