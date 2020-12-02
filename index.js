const express = require('express');
const port = 3000
const app = express()

app.get('/',(reg, res)=>{
    console.log('A request happened\'/\'')
    res.send('Selamat sore, from express')
})

app.get('/udo',(reg, res)=>{
    console.log('A request happened in route \'/udo\'')
    res.send('Selamat sore, from udo')
})

app.listen(port,()=> console.log(`Hello world app listening on port ${port}!`))