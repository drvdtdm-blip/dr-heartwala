@echo off
title Dr Heartwala Website Server
echo ===================================================
echo   Dr Heartwala - Local Web Server Starter
echo ===================================================
echo.
echo Attempting to start the web server on http://localhost:3000...
echo.

:: Check for Node.js / npx
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [FOUND] Node.js is installed. Starting server via npx...
    npx -y http-server -p 3000 -c-1
    goto end
)

:: Check for Python
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [FOUND] Python is installed. Starting server via Python...
    python -m http.server 3000
    goto end
)

:: Fallback if neither is installed
echo [WARNING] Neither Node.js nor Python was found on your system PATH.
echo.
echo You don't need a server to view the website!
echo You can simply double-click the "index.html" file in this folder to open it in your browser.
echo.
pause

:end
