const calculus = require('./handlers/calculus')

exports.register = (server) => {
    server.get('/calculus', calculus);  
  };
  