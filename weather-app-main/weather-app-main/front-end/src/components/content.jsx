import React, { useState } from "react";
import Form from "./form";
import WeatherStats from "./weatherStats";
function Content() {
    const [report, setReport] = useState([]);
    const [unit, setUnit] = useState(" ");
    function getWeatherData(data) {
        console.log(data.weatherReport);
        setReport([data.weatherReport]);
    }
    function getUnit(value) {
        console.log(value);
        setUnit(value);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-8 Form">
                    <Form onsubmit={getWeatherData} unit={getUnit} />
                </div>
                <div className="col-md-8 report">
                    {
                        report.map((item, index) => {
                            return <WeatherStats key={index} city={item.name} temp={item.main.temp} icon={item.weather[0].icon} desc={item.weather[0].main} wind={item.wind.speed} unit={unit} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;