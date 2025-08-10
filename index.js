const express = require('express');
const app = express();
const port = 3000;

// home page
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to home page'
    })
})



app.listen(port, () => {
    console.log('server is running in the port 3000');
})