const dotenv = require('dotenv');
dotenv.config();

const ServerDetail= {
    port: process.env.PORT

}

module.exports = {
    ServerDetail
}