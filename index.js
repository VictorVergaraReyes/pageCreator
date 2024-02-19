const express = require('express')
const fs = require('fs');
const app = express()
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // para json
// app.get('/',(req,res) => {
//     res.send('hello world')
// })

// app.use((req,res) => {
//     res.status(404).send('This route does not exists')
// })


app.use(cors());
app.get('/templates', (req,res) => {
    res.send('This is your list of templates')
})

app.post('/templates/view',(req,res) => {
    // res.sendFile('./templates/template1.html',{
    //     root:__dirname
    // })
    const html = req.body.template;
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
})

app.get('/templates/view/show', (req, res) => {
    // Lee el archivo HTML y conviértelo en una cadena
    let htmlContent = fs.readFileSync(path.join(__dirname, './templates/template1.html'), 'utf8');
     
    // Crea un objeto JSON con la cadena HTML como valor de una propiedad
    let responseJson = {
      htmlContent: htmlContent
    };
     
    // Envia el objeto JSON como respuesta
    res.json(responseJson);
  });

app.listen(3000)
console.log(`Server on port 3000`);