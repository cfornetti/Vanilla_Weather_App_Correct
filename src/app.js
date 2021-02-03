function formatDate (timestamp){
    let date = new Date (timestamp);
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    let day = days[date.getDay()];
    return `${day} ${formatHours(timestamp)}`;
}

function formatHours(timestamp){
    let date = new Date (timestamp);
    let hours = date.getHours();
     if (hours < 10) {
        hours=`0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes=`0${minutes}`;
    }
    return`${hours}:${minutes}`;
}

function displayTemperature (response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let feelslikeElement=document.querySelector("#feels-like");
    let pressureElement=document.querySelector("#pressure");
    let dateElement=document.querySelector("#date");
    let iconElement=document.querySelector("#icon");
    
 
    celsiusTemperature=response.data.main.temp;
 
    temperatureElement.innerHTML= Math.round(celsiusTemperature);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
    feelslikeElement.innerHTML=Math.round(response.data.main.feels_like);
    pressureElement.innerHTML=Math.round(response.data.main.pressure);
    dateElement.innerHTML=formatDate(response.data.dt*1000);
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
};
