const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const favicon = require('serve-favicon');
const path  = require('path')
const api_key = "b76f30b929ffbae19e66a56b9f37d59b-us21";
const listId = "5ad9987946";
const PORT  = 3000;

const app = express();
    
const mailChimAPI = axios.create({
    baseURL: 'https://us21.api.mailchimp.com/3.0',
    auth: {
        username: 'Anystring',
        password: api_key,
    },
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));


app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post("/", (req,res)=> {
    

})
app.listen(PORT, ()=>{
    console.log(`Server is Started and Running at PORT ${PORT}`)
})


// #npm list command to know the list of packages 
// you had installed in your package 