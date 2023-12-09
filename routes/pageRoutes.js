const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('./pages/home.ejs',{title:"home page"})
})

router.get('/home', (req, res) => {
    res.redirect('/');
});

router.get('/skills',(req,res)=>{
    res.render('./pages/skills.ejs',{title:"skill page"})
})

router.get('/about',(req,res)=>{
    res.render('./pages/about.ejs',{title:"about page"})
})

 








module.exports = router