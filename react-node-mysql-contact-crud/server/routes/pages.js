const express = require('express')
const router = express.Router();
const mysql = require('mysql')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    host: process.env.DATABASE_host,
    user: process.env.DATABASE_user,
    password: process.env.DATABASE_password,
    database: process.env.DATABASE
})


router.get('/',(req,res)=>{
    res.send('hello')
})

router.get('/login',(req,res)=>{
    res.send('login');
})

router.get('/register',(req,res)=>{
    res.send('register');
})

router.get("/fetch/contacts",(req,res)=>{
    const sqlfetch = "SELECT * FROM contact";
    db.query(sqlfetch,(error, result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result)
        }
    })
})


router.get("/fetch/contact/:id",(req,res)=>{
    const {id}=req.params
    const fetchcontact = "SELECT * FROM contact WHERE id = ?";
    db.query(fetchcontact,id,(error, result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result)
            console.log(result)
        }
    })
})


router.put("/update/contact/:id",(req,res)=>{
    const {id}=req.params
    const {name,email,contact} = req.body;
    const updatecontact = "UPDATE contact SET name = ?, email = ?, contact = ? WHERE id = ?";
    db.query(updatecontact,[name,email,contact,id],(error, result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result)
        }
    })
})


router.post("/add/contacts",(req,res)=>{
    const {name,email,contact} = req.body;
    // console.log(name)
    const sqlinsert = "INSERT INTO contact (name, email ,contact) VALUES (?,?,?)";
    db.query(sqlinsert,[name,email,contact],(error, result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result)
        }
    })
})


router.delete("/delete/contacts/:id",(req,res)=>{
    const { id } = req.params;
    const sqldelete = "DELETE FROM contact WHERE id = ?";
    db.query(sqldelete,id,(error, result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result)
        }
    })
})


module.exports=router;