#!/bin/sh
cd tests/cucumber
npm install
cd ../..
VELOCITY_CI=1 JASMINE_BROWSER=PhantomJS SELENIUM_BROWSER=phantomjs meteor --test
