#!/bin/sh
npm install -g velocity-cli
cd tests/cucumber
npm install
cd ../..
CUCUMBER=0 JASMINE_BROWSER=PhantomJS velocity test-app --ci 
JASMINE_SERVER_INTEGRATION=0 CUCMBER_BROWSER=firefox velocity test-app --ci
cat /home/travis/build/elGatoMantocko/BetterBackground/.meteor/local/log/cucumber.log
