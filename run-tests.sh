#!/bin/sh
cd tests/cucumber
npm install
cd ../..
VELOCITY_CI=1 SELENIUM_BROWSER=phantomjs meteor --test
