const api_url = "https://api.covid19tracking.narrativa.com/api/";

window.onload = start();
function start(){
    let btnLoad =  document.getElementById('btnLoad');
    btnLoad.addEventListener('click', clickButton);
}

async function loadUrl(url){
    let response = await fetch(url);
    return response.json();
}

async function clickButton(){
    let country = document.getElementById('selectCountry').value;
    let date = document.getElementById('inputDate').value;
    let url = makeUrl(country, date);
    let json = await loadUrl(url);
    console.log(json);
    fillData(json, date, country);
}

function fillData(json, date, country){
    document.getElementById('todayConfirmed').innerText = json.dates[date.toString()].countries[country.toString()].today_confirmed;
    document.getElementById('todayDeaths').innerText = json.dates[date.toString()].countries[country.toString()].today_deaths;
    document.getElementById('yesterdayConfirmed').innerText = json.dates[date.toString()].countries[country.toString()].yesterday_confirmed;
    document.getElementById('yesterdayDeaths').innerText = json.dates[date.toString()].countries[country.toString()].yesterday_deaths;
}

function makeUrl(country, date){
    return api_url + date + "/country/" + country;
}