const express = require('express')

const app = express()

const fileServerMidleware = express.static('public');

app.use('/',fileServerMidleware);
app.listen(3000,() => {
    console.log('App started on port 3000');
})