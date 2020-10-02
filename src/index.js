const express = require('express') ;
const morgan = require('morgan');
const path = require('path');
const app = express();
const{ mongoose } = require('./database');
require('dotenv').config();


////////// SETTINGS //

app.set('port', process.env.PORT || 3487) ;
const host = process.env.HOST || '0.0.0.0' ;


////////// MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json());


////////// ROUTES

app.use('/api/tools' , require('./routes/tools.routes'));
app.use('/api/buildingsites' , require('./routes/building.routes'));
app.use('/api/transports' , require('./routes/transport.routes'));


////////// STATIC FILES

app.use(express.static(path.join(__dirname, 'public')))

////////// STARTING FILES


app.listen( app.get('port'), host,  () => {
  console.log(`server on port ${app.get('port')}`)
})