import React from "react";
import axios from "axios";

export default function Weather(props){
    
    function handleResponse(response) {
        alert (`The weather in London is ${response.data.main.temp} ºC`);
    }

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=c522524629fe11fe83aebe5bb3814efa&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      
    <h2> 
    hello 
    </h2>;
}
