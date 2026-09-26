@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel% equ 0 (
  start "WebGAL server" /min py -m http.server 8080
) else (
  where python >nul 2>nul
  if %errorlevel% neq 0 (
    echo Python is required to start the local server.
    pause
    exit /b 1
  )
  start "WebGAL server" /min python -m http.server 8080
)
timeout /t 1 /nobreak >nul
start "" http://127.0.0.1:8080/
endlocal
