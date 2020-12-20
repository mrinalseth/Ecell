const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/user')
const { db } = require('./models/user')
// =====================================================================
const app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))
mongoose.connect('mongodb+srv://mrinalseth:19bce0135@cluster0.xarjd.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true })
//======================================================================

app.get('/',(req, res) => {
    res.render('temp')
})

app.get('/register',(req, res) => {
    res.render('register')
})

app.post('/register',(req, res) => {
    var newUser = new User({
        username:req.body.username,
        email:req.body.email,
        textbox:req.body.textbox
    });
    newUser.save()
    res.redirect('/')
})
app.post('/find',(req, res) => {
    User.find({
        username:req.body.username
    },(err,foundUser) => {
        if(err){
            res.send('No such user exist');
        }else{
            res.render('user',{user:foundUser})
        }
    })
})
//======================================================================
app.listen(process.env.PORT||3000, process.env.IP,() => {
    console.log("SERVER STARTED ON 3000")
})