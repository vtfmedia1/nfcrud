const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();
const port = 1200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', index);

app.listen(port, ()=>{
  console.log(`Server started at port: ${port}`);
})