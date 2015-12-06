#!/bin/bash

export PATH=/usr/local/bin:/usr/local/bin/node:/usr/local/bin/phantomjs:/usr/bin/jscoverage:$PATH;

mkdir -p build
npm install
grunt jenkins