const apiKey = 'ea9a3d086d3ee5986101b30f92d196b7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " kmph";

    if(data.weather[0].main === 'Clouds') {
        weatherIcon.src = 'images/clouds.png';
    } else if(data.weather[0].main === 'Clear'){
        weatherIcon.src = 'images/clear.png';
    } else if(data.weather[0].main === 'Rain'){
        weatherIcon.src = 'images/Rain.png';
    }else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }else if(data.weather[0].main === 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }

    document.querySelector('.weather').style.display = 'block';
}

function handleKeyPress(event){
    if(event.key === 'Enter'){
        checkWeather(searchBox.value);
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
} );

searchBox.addEventListener('keypress', handleKeyPress);

searchBox.addEventListener('input', ()=>{
    checkWeather(searchBox.value);
});

checkWeather(searchBox.value);

