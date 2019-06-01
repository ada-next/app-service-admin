const Server = require("ada-cloud-hub/boot");
const static = require('koa-static');

let server = new Server();
server.use(static(__dirname + './dist'));
server.on('started', () => {
});
server.startup();

module.exports = server;