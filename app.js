var express = require('express')
var expressLayouts = require("express-ejs-layouts");

var app = express()

app.set('views','views')
app.set('view engine', 'ejs')

app.use(expressLayouts);
app.use("/assets", express.static(__dirname + "/assets"));


app.get('/index',function(req, res) {
    res.render('index');
});


app.listen(3000, function(){
    console.log("Server started on port 3000")
})
