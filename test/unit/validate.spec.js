const test = require('tape')
const validate = require('../../lib/helpers/validate')


test('validate the query', (t) => {

    t.true(validate('2*99+5*(8-4)'), 'should return true when valid')
    t.true(validate('2-(8+5+9+0)*2'), 'should return true when valid')
    t.true(validate('(50/4)+5'), 'should return true when valid')
    t.true(validate('80'), 'should return true when valid')
    t.false(validate('5<pb10'), 'should return false when invalid')

    t.end()
})
