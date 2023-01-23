const express = require('express')
const app = express()
const http = require('http')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = 3333

const path = require('path')
app.use(express.static(__dirname));
app.use('/photogallery', express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})
app.get('/about', (req,res)=>{
    res.sendFile(__dirname + "/views/about.html")
})
app.get('/works', (req,res)=>{
    res.sendFile(__dirname + "/views/works.html")
})


app.get('/photogallery', (req,res)=>{
    res.sendFile(__dirname + "/views/photoGallery.html")
})


// c'est quoi ca ????
// const server = http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end('<h1>hello world</h1>')
// })




app.listen(port, () => {
    console.log(`This server for lab is in localhost : ${port}`)
})