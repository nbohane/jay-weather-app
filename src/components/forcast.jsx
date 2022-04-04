//the forcast component is for the entire week as a whole list. forcast would be a list of the weather component.
import React, {useState, useEffect} from "react"
import { getForcast } from "../services/weatherApi";

const Forcast = (props) => {

  //state variables here
  const [weatherList, setWeatherList] = useState([]);

  //runs on first load
  useEffect(()  => {
    getForcast().then(response => setWeatherList(response));
  }, []);

  return weatherList.map((weatherList, i) => <Weather key={i} />);
};

export default Forcast;
