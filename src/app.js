const express = require('express');
const app = express();
const path = require("path");
const hbs = require('hbs');
const port = process.env.PORT || 4000;


// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));


// routing path
app.get("/", (req, res) =>{
    res.render("index");

});

app.get("/weather", (req,res) =>{
    res.render("weather");
})
app.get("/about", (req,res) =>{
    res.render("about");
})

app.get("*", (req,res) =>{
    res.status(404).render("404error",{
        errorMsg: "Oops! Page not Found"
    });
})



app.listen(port, ()=>{
    console.log(`listening to port at ${port}`);
})