// Ideas / variants of code from
// http://javascript.crockford.com/remedial.html
// See crockford.js
'use strict';

/**
 * Determine if an object is empty: no enumerable properties
 *
 * @param {object} o variable to test
 * @return {boolean}
 */
function isEmpty(o) {
  if (typeOf(o) === 'object') {
    return Object.keys().length === 0;
  }
  return true;// Empty object, or not an object
}

function isEmpty(o) {
  if (typeof o === 'object' && o !== null) {
    return Object.keys().length === 0;
  }
  return true;// Empty object, or not an object
}
