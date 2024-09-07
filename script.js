const apikey="1ee985c0811c02d129583184a3f9cd3a";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";

async function checkWeather() {
    const response=await fetch(apiurl+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
}
checkWeather();