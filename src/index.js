const server = require('./server');

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
