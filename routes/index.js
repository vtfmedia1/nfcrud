const express = require('express');
const Router = express.Router();
const admin = require('../admin');

var db = admin.firestore();

Router.get('/', (req, res, next)=>{ 
  res.render('index');
});

module.exports = Router;