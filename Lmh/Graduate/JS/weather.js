const API_KEY= "d85ce024d6eb213a5645c32a63dcc18e";

function getPosSuccess(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city=document.querySelector("#weather span:first-child");
        const weather=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}'C`;
    })
}

function getPosError(){
    alert("You're failed to get position. No weather for you!");
}

navigator.geolocation.getCurrentPosition(getPosSuccess, getPosError);