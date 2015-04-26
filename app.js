var port = 3001;

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port);
console.log('started at port: '+ port);