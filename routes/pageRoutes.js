const express = require('express')
const router = express.Router()
const title = "Myo Htet Naing - A Full Stack Developer"

router.get('/',(req,res)=>{
    res.render('./pages/index.ejs',{title})
})
<<<<<<< HEAD
=======
router.get('/whoami',(req,res)=>{
    res.redirect('/#whoami')
})
router.get('/project',(req,res)=>{
    res.redirect('/#projects')
})
router.get('/projects',(req,res)=>{
    res.redirect('/#projects')
})
router.get('/blog',(req,res)=>{
    res.redirect('/#blog')
})

>>>>>>> 4d3b7e8 (Update Some Feature)

router.use((req, res) => { 
    res.status(404).render('./pages/notFound',{title})
  }) 

module.exports = router