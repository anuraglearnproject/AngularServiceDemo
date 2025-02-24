@echo off
set appPublishFolderName=ng-ci-demo-app
REM Check if the browser directory exists before moving files
IF EXIST "dist\%appPublishFolderName%\browser\" (
    echo Moving files from dist\%appPublishFolderName%\browser\ to dist\%appPublishFolderName%\...
    xcopy /E /I "dist\%appPublishFolderName%\browser\*" "dist\%appPublishFolderName%\"
    echo Deleting existing files in dist\%appPublishFolderName%\browser\...
    del /Q "dist\%appPublishFolderName%\browser\*"
    REM Delete any subdirectories in dist\%appPublishFolderName%\browser\
    echo Deleting subdirectories in dist\%appPublishFolderName%\browser...
    rmdir /S /Q "dist\%appPublishFolderName%\browser"
	dir "dist\%appPublishFolderName%"
) ELSE (
    echo Directory dist\%appPublishFolderName%\browser does not exist. Skipping move.
)

REM Deploy to GitHub Pages and capture any errors
echo Deploying to GitHub Pages...
npx angular-cli-ghpages --dir=dist/%appPublishFolderName%
IF %ERRORLEVEL% NEQ 0 (
    echo Error: Deployment failed with exit code %ERRORLEVEL%.
    exit /b
)
