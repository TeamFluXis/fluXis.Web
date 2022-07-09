#!/bin/bash
echo "Removing files..."
rm -r ./dist

echo "Compiling Server..."
tsc

echo "Copying files..."
cp -R ./config/ ./dist/config
cp -R ./src/views ./dist/views
cp -R ./src/static ./dist/static

echo "Starting Server..."
cd ./dist
node ./index.js