import express from "express";
import connectDB from './db/connectdb.js'
import web from './routes/web.js'


const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URI = process.env.DATABASE_URI ||  "mongodb://localhost:27017"

 

// Database connection
connectDB(DATABASE_URI)

app.use(express.urlencoded({extended:false}))

app.use('/student',web)

app.set("view engine","ejs")

app.listen(port,()=>{
    console.log(`Server Listening at http://localhost:${port}`)
}) 