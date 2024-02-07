const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

//midleWire :
app.use(cors())
app.use(express.json())

const users = [
    {'id':1 ,'name':"dipongkar" ,'gmail':'dipongkarr@gmail.comm'},
    {'id':2 ,'name':"ripon" ,'gmail':'riponr@gmail.comm'},
    {'id':3 ,'name':"sagor" ,'gmail':'sagorr@gmail.comm'}
]

app.get('/',(req ,res)=>{
    res.send('hellow world')
});

app.get('/users',(req ,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length+1 
    users.push(newUser)
    res.send(newUser)
})

app.listen(port ,()=>{
    console.log(`user managesment server : ${port}`)
})