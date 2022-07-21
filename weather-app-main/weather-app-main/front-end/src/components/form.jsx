import React, { useState } from "react";
const axios = require("axios").default;
function Form(props) {
  const [formData, setData] = useState({
    q: "",
    units: "metric"
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setData(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  }
  function submit(event) {
    axios.post('/report', formData).then(function (response) {
      console.log(response.data.weatherReport.main.temp);
      props.onsubmit(response.data);
      props.unit(formData.units);
      // event.preventDefault();
    })
      .catch(function (error) {
        console.log(error);
      });
 setData({
q:"",
units:"metric" 
 });
  }

  return (
      <form>
        <input type="text" name="q" value={formData.q} placeholder="city" onChange={changeHandler} autoComplete="off" required/>
        {/* <input type="text"  value={formData.units} name="units" onChange={changeHandler}/> */}
        <div class="radio">
        <div>
        <input type="radio" id="standard" name="units" onChange={changeHandler} value="standard" />
        <label><spam>standard</spam></label>
        </div>
        <div>
        <input type="radio" id="metric" name="units" onChange={changeHandler} value="metric" checked />
        <label><spam>metric</spam></label>
        </div>
        <div>
        <input type="radio" id="imperial" name="units" onChange={changeHandler} value="imperial" />
        <label><spam>imperial</spam></label>
        </div>
        </div>
        <button type="button" onClick={submit} className="btn btn-outline-light">submit</button>
      </form>
  )
}

export default Form;