module.exports =  (query) => {
    const pattern = /\d*[-+*\/()]/g
    return pattern.test(query)
}