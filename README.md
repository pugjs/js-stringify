# js-stringify

Stringify an object so it can be safely inlined in JavaScript code

[![Build Status](https://img.shields.io/travis/jadejs/js-stringify/master.svg)](https://travis-ci.org/jadejs/js-stringify)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/js-stringify.svg)](https://gemnasium.com/jadejs/js-stringify)
[![NPM version](https://img.shields.io/npm/v/js-stringify.svg)](https://www.npmjs.org/package/js-stringify)

## Installation

    npm install js-stringify

## Usage

```js

var assert = require('assert');
var stringify = require('js-stringify');

assert(stringify('foo') === '"foo"');
assert(stringify('foo\u2028bar\u2029baz') === '"foo\\u2028bar\\u2029baz"');
assert(stringify(new Date('2014-12-19T03:42:00.000Z')) === 'new Date("2014-12-19T03:42:00.000Z")');
assert(stringify({foo: 'bar'}) === '{"foo":"bar"}');
```

## License

  MIT
