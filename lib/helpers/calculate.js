module.exports =  (parsedQuery) => {
    try {
        return eval(parsedQuery)
    } catch (err) {
        throw err
    }
}