
const getWeatherData = (city) => {
    const API_KEY = "e98910bc3848dcac21e2226526cf2102"
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=` 
    return fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric
    `)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err));
}

const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const data = await getWeatherData(city)
    showWeatherData(data)

}

const showWeatherData = (weatherData) => {

    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
    backGroundImg(weatherData.weather[0].main)
}

const backGroundImg = (weatherType) =>{
    console.log(weatherType)
    document.body.style.backgroundImage=`url('./images/${weatherType}.jpg')`;
}
