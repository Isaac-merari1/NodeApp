const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res
    .status(200)
    .send('Hello Server is running')
    .end();
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>{
    const port = server.address().port;
    console.log( `Server stated on port ${port}`);
});

 