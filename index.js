const express = require('express');
const connection = require('./backend/config/db');
const travelRouter = require('./backend/routes/travel.routes');
const CORS = require('cors')
const app = express();
app.use(CORS())
require('dotenv').config();

const port = process.env.port || 3001;
app.use(express.json())


app.get('/', (req, res) => {
    res.send({
        msg: 'Welcome To Plan My Trip Backend Routes',
        name: 'Rushikesh Bhomale',
        student_code: 'fw25_348'
    })
})

app.use('/travel', travelRouter)

app.listen(port, async () => {
    try {
        await connection
        console.log('Connected To DB')
    } catch (error) {
        console.log(error.message);
        console.log('Failed To Connect DB')
    }
    console.log('server running at http://localhost:3001')
})
