const http = require('http');
const {ServerDetail} = require('./config/config')
const app = require('./config/express.config');

const server  = http.createServer(app);

server.listen(ServerDetail.port, 'localhost', ()=>{
        console.log(`Server is running at http://localhost:${ServerDetail.port}`);
        console.log(`Press Ctrl+C to stop the server`);
})