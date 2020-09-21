const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const user = process.env.USER ;
const password = process.env.PASSWORD ;
const dbName = process.env.DBNAME ;
const dbHost = process.env.DBHOST ;

const url = process.env.URL ;


mongoose.connect(url)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;

