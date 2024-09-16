const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const artwork = require('./Models/artwork')

const cors = require('cors')

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("database successfully connected")
    })
    .catch((error) => {
        console.log(`error in database connection : `, error)
    })

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: "*",
        credentials: true
    })
)


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,Accept,X-Requested-With,Content-Type,authorisation');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.get('/getdata', async (req, res) => {
    const page = req.query
    const data = await artwork.find().skip((page.page - 1) * 6).limit(6).exec()
    res.json({ success: true, data: data })
})
app.get('/getitems', async (req, res) => {
    const { page, items } = req.query
    const data = await artwork.find().skip((page - 1) * 6).limit(items).exec()
    res.json({ success: true, data: data })
})


app.listen(process.env.PORT, () => {
    console.log("app listening on port ", process.env.PORT)
})