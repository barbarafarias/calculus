const parser = require('../../helpers/parser')
const validate = require('../../helpers/validate')
const calculate = require('../../helpers/calculate')

module.exports =  (req, res, next) => {
    if (!req.query.query) {
        return res.status(422).json({
            error: true,
            message: 'Missing query parameter'
          }) 
    }

    const query = req.query.query
    let parsedQuery
    try {
        console.log(`parsing ${query}`)
        parsedQuery = parser(query)

        if (validate(parsedQuery)) {
            const result = calculate(parsedQuery)
            return res.status(200).json({
                error: false,
                result
              }) 
        } else {
            return res.status(422).json({
                error: true,
                message: 'Invalid query'
              }) 
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: true,
            message: 'An error occurred when parsing query parameter'
          }) 
    }
}