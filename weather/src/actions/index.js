import axios from 'axios';

const API_KEY = '36886c2de0a4d5b9e85cee1c15b6938e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}