require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')

//Routes list
const pageRouter = require('./routes/pageRoutes')
app.use(cors())
app.set('view engine','ejs')


//route for pages
app.use('/',pageRouter)


//route for page not found



//Sever is listening changes from client
app.listen(process.env.PORT,()=>{
  console.log('Server is running on port : ' + process.env.PORT);
})