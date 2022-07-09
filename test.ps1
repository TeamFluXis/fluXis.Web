echo "Removing files..."
cmd.exe /c "rmdir /s /q dist"
echo "Compiling Server..."
tsc
echo "Copying files..."
xcopy "config\" "dist\config" /i /s
xcopy "src\views" "dist\views" /i /s
xcopy "src\static" "dist\static" /i /s
echo "Starting Server..."
cd dist
node index.js