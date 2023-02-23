const express = require ("express");
const cors = require ('cors');
const mongoose = require('mongoose')
const fileupload = require ('express-fileupload');
require ('dotenv').config();

const app = express();

//Database
mongoose.connect(process.env.DATABASE)
    .then(() => console.log('DATABASE CONNECTED'))
    .catch((err) => console.log(`DATABASE FAILED TO CONNECT ${err}`));


// middleware
app.use(express.json());
app.use(cors());
app.use(fileupload({useTempFiles: true}));

//Routes
app.use('/user', require('./routes/user'));
app.use('/', require('./routes/about'));
app.use('/', require('./routes/education'));
app.use('/', require('./routes/experience'));
app.use('/', require('./routes/project'));
app.use('/', require('./routes/upload'));
app.use('/', require('./routes/contact'));

PORT = 8001 || process.env.PORT;

app.listen(PORT, () =>{console.log(`Server running on port ${PORT}`)});
