// app.js
var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/MeuIR', { useNewUrlParser: true,  useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

const userRoute = require('./routes/user.route');
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);
app.get('/', function(req, res){
   res.send("rota get funcionando!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});
