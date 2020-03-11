module.exports =  (encoded) => {
    console.log(`decoding ${encoded}`)
    const decoded = Buffer.from(encoded, 'base64').toString('ascii')
    console.log(`successfully decode as ${decoded}`)
    return decoded
}