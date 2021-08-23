# Simple test automation - searching Google

This code was based on: https://github.com/gavin771/tau_cucumber

Given the original code by Gavin Samuels was not running with the current Node and libraries in 2021 August then I decided to work on this code to refactor it to run.

So now in 2021 August the test is running ok.

## How to run

* npm i
* In a PowerShell terminal: 

  $ .\node_modules\.bin\wdio .\wdio.conf.js

  For specific feature files:

  .\node_modules\.bin\wdio .\wdio.conf.js --spec .\features\Authentication\Login.feature

 ## Additional resources
 * Regular expression site: https://regexr.com/

 ## Commands used to create this repository

* npm i webdriverio @wdio/cli
* npm install --save-dev @cucumber/cucumber
* npm audit fix
* npm i dotenv

## If you face error running PowerShell scripts
* set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
* Get-ExecutionPolicy  
* Get-ExecutionPolicy -list  