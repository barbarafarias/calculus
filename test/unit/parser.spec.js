const test = require('tape')
const parser = require('../../lib/helpers/parser')


test('parse Base64 encoded to ASCII', (t) => {
    const encoded = 'Y2FsY3VsdXM='
    const expectedDecoded = 'calculus'

    t.equal(expectedDecoded, parser(encoded), 'should return the right decode value')
    
    t.end()
})
