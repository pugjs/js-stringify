'use strict';

var assert = require('assert');
var stringify = require('../');

assert(stringify('foo') === '"foo"');
assert(stringify('foo\u2028bar\u2029baz') === '"foo\\u2028bar\\u2029baz"');
assert(stringify(new Date('2014-12-19T03:42:00.000Z')) === 'new Date("2014-12-19T03:42:00.000Z")');
assert(stringify({foo: 'bar'}) === '{"foo":"bar"}');
assert(stringify(undefined) === 'undefined');
assert(stringify(null) === 'null');

console.log('tests passed');
