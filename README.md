# npm-config-arguments

If you're using npm to write command line tools, you might want to pass arguments to your tools. By default, all arguments passed to a `npm run` command are passed to npm, but not to the underlying process. This module parses all arguments passed to npm, optionally removes all known environment variables, and passes them on to your process.

Or, a better example with code:

```
// package.json
"scripts": {
  "my-command": "node my-script.js"
}
```

To pass arguments to `process.argv` for use with yargs, commander, or any other tool, you'd have to run `npm run my-command -- --myArgument`. Using this module removes the need to include the extra `--`, you can just call `npm run my-command --myArgument` instead.

### Usage
```
import assignConfigToArgs from 'npm-config-arguments'

assignConfigToArgs();
```

Or, if you're using ES5:

```
var assignConfigToArgs = require('npm-config-arguments').assignConfigToArgs;

assignConfigToArgs();
```

### Options
Include all known npm config variables
```
assignConfigToArgs({ includeAllKnown: true });
```

Exclude all known npm config variables expect for the specified one (`npm_config_tag`)
```
assignConfigToArgs({ include: ['tag'] });
```

Use alternative format for values in argv: Instead of adding the values for each argument as separate entry after the name of the argument (default behavior), they will be added in the same entry using an equals character.

Default behavior:
`npm run my-command --myArgument=123` results in `process.argv = [..., '--myArgument', 123]`

With this setting:
`npm run my-command --myArgument=123` results in `process.argv = [..., '--myArgument=123']`

```
assignConfigToArgs({ useEqualsForValues: true });
```

### License
MIT, see `LICENSE` for details.
