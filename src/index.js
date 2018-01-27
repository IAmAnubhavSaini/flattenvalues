'use strict'

const flattenkeys = require('flattenkeys')

const flattenvalues = obj => {
    const flattenedKeys = flattenkeys(obj)
    return flattenedKeys.map(key => {
        const keyMap = key.split('.')
        const val = keyMap.reduce((accumulated, currentKey) => accumulated[currentKey], obj)
        return { key, val }
    })
}

module.exports = flattenvalues
