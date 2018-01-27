/* global describe it */

const expect = require('chai').expect
const flattenvalues = require('./index')

describe('flattenvalues', () => {
    it('flattens object successfully', () => {
        const testCases = [
            {
                obj: { a: 'a', b: { c: 'c' }, d: 'd' },
                expected:
                    [
                        { key: 'a', val: 'a' },
                        { key: 'b.c', val: 'c' },
                        { key: 'd', val: 'd' }
                    ]
            },
            {
                obj: { a: 'a', b: { c: 'c', e: { f: 'f', g: 'g' } }, d: 'd' },
                expected:
                    [
                        { key: 'a', val: 'a' },
                        { key: 'b.c', val: 'c' },
                        { key: 'b.e.f', val: 'f' },
                        { key: 'b.e.g', val: 'g' },
                        { key: 'd', val: 'd' }
                    ]
            },
            {
                obj: {
                    a: 'a',
                    b: { c: 'c', e: { f: 'f' } },
                    d: 'd',
                    z: [1,
                        2,
                        3]
                },
                expected:
                    [
                        { key: 'a', val: 'a' },
                        { key: 'b.c', val: 'c' },
                        { key: 'b.e.f', val: 'f' },
                        { key: 'd', val: 'd' },
                        { key: 'z.0', val: 1 },
                        { key: 'z.1', val: 2 },
                        { key: 'z.2', val: 3 }
                    ]
            },
            {
                obj: { a: 'a', b: { c: 'c', e: { f: 'f', g: 'g', h: { i: 'i' } } }, d: 'd' },
                expected:
                    [
                        { key: 'a', val: 'a' },
                        { key: 'b.c', val: 'c' },
                        { key: 'b.e.f', val: 'f' },
                        { key: 'b.e.g', val: 'g' },
                        { key: 'b.e.h.i', val: 'i' },
                        { key: 'd', val: 'd' }
                    ]
            }
        ]

        testCases.forEach(test => {
            const actual = flattenvalues(test.obj)
            expect(actual).to.deep.equal(test.expected)
        })
    })
})
