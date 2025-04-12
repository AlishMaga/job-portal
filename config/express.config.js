const express = require('express');
const router = require('./route.config');

const app = express();

app.use("/", router);
app.get('/', (req, res)=>{
    res.json({ 
        message: 'This is the home page.', 
        status: 'OK',
        code: 200
    });
})

module.exports = app;