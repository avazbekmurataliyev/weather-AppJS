const api = {
    key:"7c64e1429710ad9e3622b3ec12ca970a",
    baseUrl : "https://api.openweathermap.org/data/2.5/"
};

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress' , setQuery);

function setQuery(e){

    if(e.keyCode == 13){

        getResults(searchBox.value);
        console.log(searchBox.value);

    }

}

function getResults(query){

    fetch( `${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    })
    .then(displayResults);

}

function displayResults(weather){
    console.log(weather);
let city = document.querySelector('.location .city');
city.innerHTML = `${weather.name} , ${weather.sys.country}`;

let now = new Date();

let date = document.querySelector('.location .date') ;

date.innerHTML = dateBuilder(now) ;

let temponly = document.querySelector('.main-temp .temp');
temponly.innerHTML = `${Math.round(weather.main.temp)}` ;
let temp = document.querySelector('.main-temp .hi-low');

temp.innerHTML = `${Math.floor(weather.main.temp_min)} °C / ${Math.ceil(weather.main.temp_max)} °C `;

let holat = document.querySelector('.weather');
holat.innerHTML = weather.weather[0].main;

}

function dateBuilder( s ){

    let months = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr"
    ];

let days = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba"
   
];
let day = days[s.getDay()];
let date = s.getDate() ;
let month = months[s.getMonth()];
let year = s.getFullYear();

return day+ " / " +date + " / " + month + " / " +year ;

}