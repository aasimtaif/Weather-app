

const getWeatherData = (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2f264a77emshfd83a91061058d6p1b6f5bjsn3644fe2d6c3f',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err));
}
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const data = await getWeatherData(city)
    showWeatherData(data)

}


/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
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
