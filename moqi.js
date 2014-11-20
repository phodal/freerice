#! /usr/bin/env node

var program = require('commander')
    , version = require('./package').version;

program
    .version(version)
    .option('-c, --create', 'Create Freerice project', 'boolean', false)
    .usage('[command] [options] path');

program.parse(process.argv);

if (!program.args[0]) {
    program.outputHelp();
    process.exit(-1)
}