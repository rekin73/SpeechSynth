const express = require('express')
const app = express()
const port = 3000
const fs=require('fs');
const xpath=require('xpath'),dom = require('xmldom').DOMParser
const path=require('path');
const xml = require('xml2js');
const parser=new xml.Parser();
app.get('/', (req, res) => {
    
    //let file=fs.open("kurs.xml");
    fs.readFile(path.join(__dirname, '/', 'kurs.xml'),"utf-8",function(error,text){
if(error){
    console.log(error);
}else{
    //var doc = new dom().parseFromString(text)
    parser.parseString(text,function(err,result){
        if(error){
            console.log(err);
        }
        else{
        var nodes = result['kurs']['lekcja']
        res.send(nodes)
        }
    });
    
    
}
    })
    

    //res.sendFile(path.join(__dirname, '/', 'kurs.xml'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))