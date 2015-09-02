'use strict';

var rules = {};

/**
* RULE: callback-return
*	Warn when a callback may be unintentionally called multiple times. See [callback-return]{@link http://eslint.org/docs/rules/callback-return}.
*/
rules[ 'callback-return' ] = [ 1, [
	'callback',
	'clbk',
	'cb',
	'done',
	'next'
]];

/**
* RULE: handle-callback-err
*	Always handle callback error arguments. See [handle-callback-err]{@link http://eslint.org/docs/rules/handle-callback-err}.
*/
rules[ 'handle-callback-err' ] = [ 2, '^(err|error)$' ];

/**
* RULE: no-mixed-requires
*	Only allow `require`d modules to be grouped together. See [no-mixed-requires]{@link http://eslint.org/docs/rules/no-mixed-requires}.
*/
rules[ 'no-mixed-requires' ] = [ 2, false ];

/**
* RULE: no-new-require
*	Never allow the use of `new require()`. See [no-new-require]{@link http://eslint.org/docs/rules/no-new-require}.
*/
rules[ 'no-new-require' ] = 2;

/**
* RULE: no-path-concat
*	Never allow naive directory and file path concatenation. See [no-path-concat]{@link http://eslint.org/docs/rules/no-path-concat}.
*/
rules[ 'no-path-concat' ] = 2;

/**
* RULE: no-process-exit
*	Allow the use of `process.exit()`. See [no-process-exit]{@link http://eslint.org/docs/rules/no-process-exit}.
*/
rules[ 'no-process-exit' ] = 0;

/**
* RULE: no-restricted-modules
*	Do not restrict the use of specific modules. See [no-restricted-modules]{@link http://eslint.org/docs/rules/no-restricted-modules}.
*/
rules[ 'no-restricted-modules' ] = 0;

/**
* RULE: no-sync
*	Warn when using synchronous methods when an asynchronous version exists. See [no-sync]{@link http://eslint.org/docs/rules/no-sync}.
*/
rules[ 'no-sync' ] = 1;


// EXPORTS //

module.exports = rules;
