#!/bin/sh
npm install -g velocity-cli
cd tests/cucumber
npm install
cd ../..
VELOCITY_CI=1 CUCUMBER=0 JASMINE_BROWSER=PhantomJS SELENIUM_BROWSER=phantomjs velocity test-app --ci 
VELOCITY_CI=1 JASMINE_SERVER_INTEGRATION=0 JASMINE_BROWSER=PhantomJS SELENIUM_BROWSER=phantomjs velocity test-app --ci
