const express = require('express');
const app = express();
require('dotenv').config({ path: './.env' })
const cors = require('cors');
// const config = require('./knexfile')[environment];
// const db = require('knex')(config);

app.use(express.json());
app.use(cors());




app.listen(process.env.PORT, ()=>console.log(`Running server on port: ${process.env.PORT}`))


