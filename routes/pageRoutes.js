const express = require('express')
const router = express.Router()
const title = "Myo Htet Naing - A Full Stack Developer"

router.get('/',(req,res)=>{
    res.render('./pages/index.ejs',{title})
})

router.use((req, res) => { 
    res.status(404).render('./pages/notFound',{title})
  }) 

module.exports = router