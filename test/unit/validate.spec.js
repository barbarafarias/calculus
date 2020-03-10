const test = require('tape')
const validate = require('../../lib/helpers/validate')


test('validate the query', (t) => {
    const validQuery = '2*99+5*(8-4)'
    const invalidQuery = '5<89'

    t.true(validate(validQuery), 'should return true when valid')
    t.false(validate(invalidQuery), 'should return true when valid')

    t.end()
})
