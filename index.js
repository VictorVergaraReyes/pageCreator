const express = require('express')
const fs = require('fs');
const app = express()

// app.get('/',(req,res) => {
//     res.send('hello world')
// })

// app.use((req,res) => {
//     res.status(404).send('This route does not exists')
// })

app.get('/templates', (req,res) => {
    res.send('This is your list of templates')
})

app.post('/templates/view',(req,res) => {
    res.sendFile('./templates/template1.html',{
        root:__dirname
    })
})

app.listen(3000)
console.log(`Server on port 3000`);