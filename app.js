var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var http = require('http');


var app = new express();
const route = require('./routes/route')

mongoose.connect('mongodb://localhost:27017/contactlist'); 
mongoose.connection.on('connected', ()=>{
    console.log('connecté à la base mongodb');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('erreur de connexion à la base : ' + err);
    }
    
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api',route);


//Static path
app.use(express.static(path.join(__dirname, 'public')));
// le port d'écoute
app.get('/',(req,res)=>{
    res.send('foobar');
});
const port = 3000; 


app.listen( port, ()=>{
    console.log('le serveur est sur ecoute sur le port ' + port);
});

