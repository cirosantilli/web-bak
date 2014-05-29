// Relative require.
var a = require('./a')
if (a(1) !== 2) {
  document.write('FAIL')
}

// NPM search path require
var uniq = require('uniq')
var out = uniq([1, 1, 2, 2])
if (out.length != 2 || out[0] != 1 || out[1] != 2) {
  document.write('FAIL')
}
