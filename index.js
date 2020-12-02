const express = require('express');
const port = 3000
const app = express()

app.get('/',(reg, res)=>{
    console.log('A request happened\'/\'')
<<<<<<< HEAD
    res.send('Selamat sore, from express')
=======
    res.send('Selamat Pagi, from express')
>>>>>>> cabang-1
})

app.get('/udo',(reg, res)=>{
    console.log('A request happened in route \'/udo\'')
    res.send('Selamat sore, from udo')
})

app.listen(port,()=> console.log(`Hello world app listening on port ${port}!`))