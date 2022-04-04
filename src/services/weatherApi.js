import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/';
const apiKey = 'd50a971d69935e3732290a2af7e9c859';

export const getForcast = async() => {
    const endPoint = 'data/2.5/onecall';
    const options = '?lat=33.44&lon=-94.04&exclude=hourly,minutely';
    const url = `${baseUrl}${endPoint}${options}&appid=${apiKey}`;

    let response = await axios.get(url);
    return response.data.daily;
}