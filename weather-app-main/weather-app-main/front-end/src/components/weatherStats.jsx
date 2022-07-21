import React, { useState } from "react";
const axios=require("axios").default;
function WeatherStats(props)
{
let url="http://openweathermap.org/img/wn/"+props.icon+"@2x.png"
var recievedUnit="";
if(props.unit==="metric")
{
    recievedUnit="C";
}
else if(props.unit==="standard")
{
    recievedUnit="K"
}
else if(props.unit=="imperial"){
    recievedUnit="F"
}
return(
    <div className="weather-report">
    <div className="Icon">
    <img src={url} alt="icon.png"/>
    <h3>{props.desc}</h3>
    </div>
    <h3>{props.city},{props.temp}°{recievedUnit}</h3>
    <p>wind speed : {props.wind}</p>
    </div>
);
}

export default WeatherStats;