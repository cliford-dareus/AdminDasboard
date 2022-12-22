require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { start } = require('repl');


const app = express();

const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log('App is listening')
})