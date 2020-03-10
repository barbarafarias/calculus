module.exports =  (query) => {
    const pattern = /[0-9]*\+*\-*\**\(*\)*\/*/g
    return pattern.test(query)
}