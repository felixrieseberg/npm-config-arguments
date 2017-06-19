const assert = require('assert');
const { assignConfigToArgs } = require('../index.js');

// Simple test
assignConfigToArgs();
assert(process.argv.indexOf('--myArgument') > 0);
assert((process.argv.find((arg) => arg.startsWith('tag'))) === undefined);

// Include test
assignConfigToArgs({ include: ['tag'] });
console.log(process.argv)
assert(!!(process.argv.find((arg) => arg.startsWith('--tag'))));
