const express = require('express');
const Router = express.Router();
const admin = require('../admin');

let db = admin.firestore();

let docRef = db.collection('users'); 

Router.get('/', (req, res, next)=>{ 
  res.render('index');
});

//$$$$$$$$$ Register Routes $$$$$$$$
Router.get('/register', (req, res, next)=> {
  res.render('user/signup')
});

Router.post('/register', (req, res, next)=>{
  //Check for req.body contains data or not.
  //Send flash messages if they don't follow the validation
  docRef.add({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  })
  .then(()=>{
    console.log(`Data Stored Successfully`);
    res.redirect('/login');
  })
  .catch(err=> console.log(err));
  
});

//$$$$$$$$$ Register Routes $$$$$$$$
Router.get('/login', (req, res, next)=>{
  res.render('user/signin');
});

Router.post('/login', (req, res, next)=>{
  //Check for the authentication
  //Check for the user roles
  //Flash errorlogin message && redirect to login page
  //Admin user has different page than non-admin user
  res.redirect('/profile');
});

//$$$$$$$$ Admin & non Admin Routes $$$$$$$$
Router.get('/user/profile', (req, res, next)=> {
  //Check if user is login or not
  //Check for the roles of the user
  res.render('todo/index');
}) 
module.exports = Router;