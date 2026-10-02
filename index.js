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
app.use(express.json())
app.use(cors())

const customerRoutes = require('./app/routes/CustomerRoutes')();
app.use('/customer', customerRoutes)

const incidentRoutes = require('./app/routes/IncidentRoutes')();
app.use('/incident', incidentRoutes)

const dashboardRoutes = require('./app/routes/DashboardRoutes')();
app.use('/dashboard', dashboardRoutes)

app.listen(8080, ()=>{
    console.log('Express server is working')
})