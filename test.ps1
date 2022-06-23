echo "Compiling Server..."
tsc
echo "Copying views..."
xcopy "src\views" "dist\views" /i /s
xcopy "src\static" "dist\static" /i /s
echo "Starting Server..."
cd dist
node index.js