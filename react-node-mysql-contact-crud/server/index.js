const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: './.env'});


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createConnection({
    host: process.env.DATABASE_host,
    user: process.env.DATABASE_user,
    password: process.env.DATABASE_password,
    database: process.env.DATABASE
})

db.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('MySQL Database Is Connected!')
    }
})



app.use('/',require('./routes/pages'))
app.use('/auth',require('./routes/auth'))
app.listen(5001,()=>{
    console.log('this app is rining on http://localhost:5001/')
})