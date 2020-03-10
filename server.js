const express = require('express')
const routes = require('./lib/routes')
const app = express()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

routes.register(app);

const server = app.listen(PORT, HOST, () => console.log(`Server listening on port ${PORT}!`));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server shutdown gracefully');
    process.exit(0);
  });
});
