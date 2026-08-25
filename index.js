const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


mongoose
.connect(`mongodb://localhost:27017/MIM`, {})
.then(()=>{
    console.log('MongoDB is connected')
})
.catch((err)=>{
    console.error(err)
})

const app = express()

app.use(cors())


app.listen(8080, ()=>{
    console.log('Express server is working')
})