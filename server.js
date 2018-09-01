const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/util/connect');

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/disco-dog');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('Server running on', PORT);
});