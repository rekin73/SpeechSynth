const express = require('express')
const app = express()
const port = 3000
const fs=require('fs');
const xpath=require('xpath'),dom = require('xmldom').DOMParser
const path=require('path');
app.get('/', (req, res) => {
    
    //let file=fs.open("kurs.xml");
    var xml = fs.open(path.join(__dirname, '/', 'kurs.xml'))
    var doc = new dom().parseFromString(xml)
    var nodes = xpath.select("//title", doc)
    console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
    console.log("Node: " + nodes[0].toString())
    res.sendFile(path.join(__dirname, '/', 'kurs.xml'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))