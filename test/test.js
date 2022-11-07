const assert = require('assert');
const { assignConfigToArgs } = require('../index.js');

// Simple test
assignConfigToArgs();
assert(process.argv.indexOf('--myArgument') > 0);
assert(!process.argv.some(arg => arg.startsWith('tag')));

// Include test
assignConfigToArgs({ include: ['tag'] });
assert(process.argv.some(arg => arg.startsWith('--tag')));

// Rewrite test
assignConfigToArgs({ include: ['the-argument'] });
assert(process.argv.some(arg => arg.startsWith('--the-argument')));

// Equals test
assignConfigToArgs({ useEqualsForValues: true , include: ['tag']});
assert(process.argv.some(arg => arg === '--the_argument=2'));
assert(process.argv.some(arg => arg === '--tag=yo'));
