Rules: Node.js
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) rules specific to running JavaScript on Node.js.


## Installation

``` bash
$ npm install eslint-rules-nodejs
```


## Usage

``` javascript
var rules = require( 'eslint-rules-nodejs' );
```

#### rules

[ESLint](http://eslint.org/) rules specific to running JavaScript on Node.js.

``` javascript
console.dir( rules );
/*
	{
		'callback-return': [ 1, [
			'callback',
			'clbk',
			'cb',
			'done',
			'next'
		]],
		'handle-callback-err': [ 2, '^(err|error)$' ],
		...
	}
*/
```


## Examples

``` javascript
var merge = require( 'utils-merge2' )(),
	rules = require( 'eslint-rules-nodejs' ),
	RULES = require( './existing_rules.json' );

// Merge the rules for Node.js into an existing ESLint rule set...
RULES = merge( RULES, rules );

console.dir( RULES );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-rules-nodejs.svg
[npm-url]: https://npmjs.org/package/eslint-rules-nodejs

[travis-image]: http://img.shields.io/travis/kgryte/eslint-rules-nodejs/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-rules-nodejs

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-rules-nodejs/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-rules-nodejs?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-rules-nodejs.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-rules-nodejs

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-rules-nodejs.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-rules-nodejs

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-rules-nodejs.svg
[github-issues-url]: https://github.com/kgryte/eslint-rules-nodejs/issues
