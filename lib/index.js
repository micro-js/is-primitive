/**
 * Expose isPrimitive
 */

module.exports = isPrimitive['default'] = isPrimitive

/**
 * isPrimitive
 */

function isPrimitive (val) {
  if (val === null || val === undefined) return true
  switch (typeof val) {
    case 'string': return true
    case 'number': return true
    case 'symbol': return true
    case 'boolean': return true
    default: return false
  }
}
