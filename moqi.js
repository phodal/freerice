#! /usr/bin/env node

var program = require('commander')
    , version = require('./package').version;

program
    .version(version)
    .option('-o, --observe', 'Observe the given resource', 'boolean', false)
    .option('-n, --no-new-line', 'No new line at the end of the stream', 'boolean', true)
    .option('-p, --payload <payload>', 'The payload for POST and PUT requests')
    .option('-q, --quiet', 'Do not print status codes of received packets', 'boolean', false)
    .usage('[command] [options] url');