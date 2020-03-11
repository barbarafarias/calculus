module.exports =  (query) => {
    const pattern = /\d|[\+\*\-\(\)\/]/
    let valid = true
    
    for (let i = 0; i < query.length; i++) {
        if (!pattern.test(query[i])) {
            valid = false
            break
        }
    }

    return valid
}