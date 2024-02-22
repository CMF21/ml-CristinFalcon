// requiriendo express
const express = require('express');
// requeriendo las finionalidades de express
const app = express();
//requeriendo path para manipular las rutas
const path = require('path');

// creando las rutas
app.get('/',(req,res)=>{
    //           linkeo la ruta abs de home.html
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})


//seteando los archivos estaticos de la carpeta public
const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));



//levantando el servidor
app.listen(3001,(req,res)=>{
    console.log('servidor corriendo en http://localHost:3001');
})