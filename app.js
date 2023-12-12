const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const favicon = require('serve-favicon');
const path  = require('path')
const PORT  = 3000;

const app = express();
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));


app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server is Started and Running at PORT ${PORT}`)
})


// #npm list command to know the list of packages 
// you had installed in your package 