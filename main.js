

let city = document.querySelector(".city");
let weatherCont = document.querySelector("h1");
let cloud = document.querySelector("h2")
let img = document.querySelector(".img");

let NY = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=metric';
let Kyiv = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=metric';
let London = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=metric'

fetch(NY)
.then(res => res.json())
.then(({main, name, weather}) => {
        city.innerHTML = name;
        weatherCont.innerHTML = Math.round(main.temp) + '&deg';
        cloud.innerHTML = weather[0].description;
        img.innerHTML = '<img src="http://openweathermap.org/img/wn/' + weather[0]['icon'] +'@2x.png"/>'
    }
)

fetch(Kyiv)
.then(res => res.json())
.then(({main, name, weather}) => {
        city.innerHTML = name;
        weatherCont.innerHTML = Math.round(main.temp) + '&deg';
        cloud.innerHTML = weather[0].description;
        img.innerHTML = '<img src="http://openweathermap.org/img/wn/' + weather[0]['icon'] +'@2x.png"/>'
    }
)

fetch(London)
.then(res => res.json())
.then(({main, name, weather}) => {
        city.innerHTML = name;
        weatherCont.innerHTML = Math.round(main.temp) + '&deg';
        cloud.innerHTML = weather[0].description;
        img.innerHTML = '<img src="http://openweathermap.org/img/wn/' + weather[0]['icon'] +'@2x.png"/>'
    }
)