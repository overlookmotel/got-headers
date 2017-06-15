# got-headers.js

# Hit URL and get HTTP headers only (using got module)

## Current status

[![NPM version](https://img.shields.io/npm/v/got-headers.svg)](https://www.npmjs.com/package/got-headers)
[![Build Status](https://img.shields.io/travis/overlookmotel/got-headers/master.svg)](http://travis-ci.org/overlookmotel/got-headers)
[![Dependency Status](https://img.shields.io/david/overlookmotel/got-headers.svg)](https://david-dm.org/overlookmotel/got-headers)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/got-headers.svg)](https://david-dm.org/overlookmotel/got-headers)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/got-headers/master.svg)](https://coveralls.io/r/overlookmotel/got-headers)

## Usage

Function to hit a URL and stop as soon as headers are received i.e. do not fetch the body of the HTTP response.

Useful for example for checking the size of a large file without downloading it. Uses GET HTTP method (or whatever method requested) rather than HEAD as some servers may not support HEAD, or not use cookies with HEAD etc.

Returns a [Bluebird](https://www.npmjs.com/package/bluebird) Promise which resolves to the response object, or rejects with an error.

Uses [got](https://www.npmjs.com/package/got) to make the HTTP request.

### headers(url, [options])

```js
const headers = require('got-headers');

headers('http://www.google.com').then(function(res) {
	// Print headers object
	console.log(res.headers);
}).catch(function(err) {
	// Print error
	console.log('Error!', err);

	// Print response object
	console.log(err.res);
});
```

`options` object is passed directly to [got](https://www.npmjs.com/package/got) - use any of got's options.

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

There are no tests at present but it seems to work fine!

## Changelog

See [changelog.md](https://github.com/overlookmotel/got-headers/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/got-headers/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add an entry to changelog
* add tests for new features
* document new functionality/API additions in README
