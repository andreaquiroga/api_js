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
    let country = document.getElementById('selectCountry');
    let json = await loadUrl(url);
}

function makeUrl(){

}