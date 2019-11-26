const express = require('express');
const morgan  = require('morgan');
const parser  = require('body-parser');
const path    = require('path');
const app     = express();
const port    = process.env.port || 1000;

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../client/homePage/dist')));

app.listen(port, () => console.log(`Now listening on port ${port}`));