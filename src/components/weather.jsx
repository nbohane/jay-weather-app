//the weather component is for each singular day.

import React, {useState, useEffect} from "react"

const Weather = (props) => {

  //state variables here
  const [variable, setVariable] = useState(true);

  //runs on first load
  useEffect(() => {}, []);

  return (
    <div>
      
    </div>
  )
};

export default Weather;
