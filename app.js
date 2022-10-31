const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


//Routes
const accountRoutes = require('./routes/accounts');
const settledBetRoutes = require('./routes/settledBets');
const gameMatchRoutes = require('./routes/gameMatches');
const usersRoutes = require('./routes/users');
const openBetRoutes = require('./routes/openbets');

const api = process.env.API_URL;

app.use(`${api}/totalAccount`, accountRoutes);
app.use(`${api}/settledBets`, settledBetRoutes);
app.use(`${api}/gameMatch`, gameMatchRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/openBets`, openBetRoutes);

//Database
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'betpawa'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

//Server
app.listen(3000, ()=>{

    console.log('server is running http://localhost:3000');
})