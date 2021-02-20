const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', 'view/frontWeb');
const frontRoutes = require('./routes/frontWeb');
const { urlencoded } = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/',frontRoutes);
app.listen(1000);