# flattenvalues

Flatten out an object and get values in an array - node module

## Usage

```javascript

  const flattenvalues = require('./src')

  flattenvalues({ a: 'a', b: { c: 'c' }, d: 'd' })
  [ { key: 'a', val: 'a' },
    { key: 'b.c', val: 'c' },
    { key: 'd', val: 'd' } ]

  flattenvalues({ a: 'a', b: { c: 'c', e: { f: 'f', g: 'g'} }, d: 'd' })
  [ { key: 'a', val: 'a' },
    { key: 'b.c', val: 'c' },
    { key: 'b.e.f', val: 'f' },
    { key: 'b.e.g', val: 'g' },
    { key: 'd', val: 'd' } ]

  flattenvalues({ a: 'a', b: { c: 'c', e: { f: 'f'} }, d: 'd', z: [1, 2, 3] })
  [ { key: 'a', val: 'a' },
    { key: 'b.c', val: 'c' },
    { key: 'b.e.f', val: 'f' },
    { key: 'd', val: 'd' },
    { key: 'z.0', val: 1 },
    { key: 'z.1', val: 2 },
    { key: 'z.2', val: 3 } ]

  flattenvalues({ a: 'a', b: { c: 'c', e: { f: 'f', g: 'g', h: { i: 'i'}} }, d: 'd' })
  [ { key: 'a', val: 'a' },
    { key: 'b.c', val: 'c' },
    { key: 'b.e.f', val: 'f' },
    { key: 'b.e.g', val: 'g' },
    { key: 'b.e.h.i', val: 'i' },
    { key: 'd', val: 'd' } ]

```

## License

MIT &copy; 2018 Git Faf
