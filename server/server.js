const express = require('express')
const app = express()
const port = 3000
const fs=require('fs');
app.get('/', (req, res) => {
    res.send('asdf')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))