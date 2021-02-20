
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    //res.render(path.join(__dirname,'../','view/frontWeb','index.html'));
    res.render('index.pug',{pageTitle:"Home"});
})

router.get('/about-us',(req,res,next)=>{
    res.render('about-us.pug',{pageTitle:"About us"});
})

router.get('/login',(req,res,next)=>{
    res.render('login.pug',{pageTitle:"Log in "});
})

router.get('/register',(req,res,next)=>{
    res.render('register.pug',{pageTitle:"Register"});
})

router.get('/forget-password',(req,res,next)=>{
    res.render('forget-password.pug',{pageTitle:"Forget Password"});
})

// for post method

// router.post('/',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// })


module.exports = router;