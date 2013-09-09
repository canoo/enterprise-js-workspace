#!/bin/sh 
npm install
bower install
grunt clean 
grunt buster:teamcity
mkdir build
mkdir build/reports
grunt build

