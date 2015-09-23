#!/bin/sh
cd tests/cucumber
npm install
cd ../..
VELOCITY_CI=1 SELENIUM_BROWSER=phantomjs meteor --test
cat /home/travis/build/elGatoMantocko/BetterBackground/.meteor/local/log/cucumber.log
