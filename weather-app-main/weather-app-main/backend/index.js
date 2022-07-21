const express =require("express");
const bodyParser=require("body-parser");
const https=require("https");
const { json } = require("body-parser");
const app=express();
app.use(express.json()); //v.v.v.imp for body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
 const url="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4695c74a6ed0da97a20cb3226177f3c7&units=standard";
https.get(url,function(respose){
    respose.on("data",function(data){
        var weatherReport=JSON.parse(data);
        var temp=weatherReport.main.temp;
       var desc=weatherReport.weather[0].description;
        // console.log(weatherReport);
        console.log(desc);
        console.log(temp);
        res.send({weatherReport});
        // res.write("<h1>current weather is :"+desc+"</h1>");
        // res.write("<h1>The temprature in "+city+" is "+temp+" degree celcius</h1>");
        // res.end();
    });
});
});
app.post("/report",function(req,res){
    const city=req.body.q;
    const units=req.body.units;
 const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4695c74a6ed0da97a20cb3226177f3c7&units="+units;
 https.get(url,function(respose){
   respose.on("data",function(data){
      var weatherReport=JSON.parse(data);
      var temp=weatherReport.main.temp;
    var desc=weatherReport.weather[0].description;
        // console.log(weatherReport);
     console.log(desc);
    console.log(temp);
    res.send({weatherReport});
        // res.write("<h1>current weather is :"+desc+"</h1>");
        // res.write("<h1>The temprature in "+city+" is "+temp+" degree celcius</h1>");
        // res.end();
  });
 });

});
app.listen(8080,function(){
    console.log("server is started on port:8080");
})