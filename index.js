'use strict';

module.exports = stringify;
function stringify(obj) {
  if (obj instanceof Date) {
    return 'new Date(' + stringify(obj.toISOString()) + ')';
  }
  if (obj === undefined) {
    return 'undefined';
  }
  return JSON.stringify(obj)
             .replace(/\u2028/g, '\\u2028')
             .replace(/\u2029/g, '\\u2029');
}
