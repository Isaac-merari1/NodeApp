const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
    res.end();
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server stated on port ${PORT}`
));