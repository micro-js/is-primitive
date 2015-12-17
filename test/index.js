/**
 * Imports
 */

var isPrimitive = require('..')
var test = require('tape')

/**
 * Tests
 */

test('primitives should be primitives', function (t) {
  t.equal(isPrimitive(), true)
  t.equal(isPrimitive(null), true)
  t.equal(isPrimitive(1), true)
  t.equal(isPrimitive('1'), true)
  t.equal(isPrimitive(true), true)
  t.equal(isPrimitive(Symbol.iterator), true)
  t.end()
})

test('non primitives should not be primitives', function (t) {
  t.equal(isPrimitive([]), false)
  t.equal(isPrimitive({}), false)
  t.equal(isPrimitive(new Date()), false)
  t.equal(isPrimitive(new Error()), false)
  t.end()
})
