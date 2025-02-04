const http = require('http');
const app = require('./App');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log(`local server started at http://localhost:${PORT}`)

});