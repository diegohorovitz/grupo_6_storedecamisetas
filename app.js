const express = require('express');
const app = express ();

const path = require ('path');
const publicPath = path.resolve (__dirname, './public');

app.use (express.static(publicPath));

app.listen (3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});

app.get('/index', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/productCart', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})

app.get('/productDetail', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})