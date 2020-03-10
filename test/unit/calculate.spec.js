const test = require('tape')
const calculate = require('../../lib/helpers/calculate')


test('calculate equation', (t) => {
    const equation = '2*3 + (40/2)'
    const expectedResult = 26

    t.equal(expectedResult, calculate(equation), 'should return the right calculated value')
    
    t.end()
})
