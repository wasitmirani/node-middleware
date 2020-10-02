const express = require('express');
const app = express()

app.use('/user/:id', (req, res) => {

    if (req.params.id == 10)
        next()

});

app.listen(3000)