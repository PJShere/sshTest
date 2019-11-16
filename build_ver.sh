#!/bin/sh
BUILD_NUMBER=599
sed -i "5s/\"jenkins_build.*/\"jenkins_build\": \"$BUILD_NUMBER\",/" ./package.json
