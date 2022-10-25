const { request } = require('express');
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const morgn = require('morgan');
const morgan = require('morgan');
const mongoose = require('mongoose');




require('dotenv/config');
const api = process.env.API_URL;
const matchesRouter = require('./routers/matches')




//middleware function

app.use(bodyParser.json());
app.use(morgan('tiny'));



app.use(`${api}/matches`,matchesRouter)



mongoose.connect(process.env.CONNECTION_STRING,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'betpawa'
}).then(()=>{
    console.log('Database connection is ready.....');
}).catch((err)=>{
    console.log(err);
})


app.listen(3000, ()=>{
    console.log(api)
    console.log('server is running http://localhost:3000')
}) 