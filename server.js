const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;

//Routes list
const pageRouter = require('./routes/pageRoutes')
app.use(cors())
app.set('view engine','ejs')


//route for pages
app.use('/',pageRouter)


//route for page not found
app.use((req, res) => { 
  res.status(404).render('./pages/notFound',{title:req.url,})
}) 


//Sever is listening changes from client
app.listen(port,()=>{
  console.log('Server is running on port : ' + port);
})