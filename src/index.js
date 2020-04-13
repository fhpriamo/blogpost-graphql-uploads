const { app } = require('./config');
const server = require('./server');

server.listen({ port: app.port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
