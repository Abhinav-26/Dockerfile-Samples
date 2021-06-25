const express = require('express')
const path = require('path')
const app = express()

const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.use(express.static(publicPath));

app.set('view engine', 'hbs')
app.set('views', viewsPath)



app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000,()=>{
    console.log("Server Started at Port - 3000")
} )