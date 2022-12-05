const express = require('express');
const app = express();
require('dotenv').config({ path: './.env' })
const cors = require('cors');
const routes = require('./routes/routes');


app.use(express.json());
app.use(cors());

app.use('/',routes)




app.listen(process.env.PORT, ()=>console.log(`Running server on port: ${process.env.PORT}`))


