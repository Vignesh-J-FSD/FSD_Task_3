// Create a request var
var request = new XMLHttpRequest();

// Create a new connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

// Send request
request.send();

// Load response
request.onload = function(){
    let data = JSON.parse(this.response);
    console.log(data);

    for(var name of data){
        let api_key = '2a892fe9e2505cd430709341d03c7531';
        let lat = name.latlng[0];
        let long = name.latlng[1];

        getTemperature(lat, long, api_key);
    }

    function getTemperature(lat, long, api_key){
        let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
        let wrequest = new XMLHttpRequest();        
        wrequest.open('GET', api, true);
        wrequest.send();
        wrequest.onload = function(){
            let temp = JSON.parse(wrequest.response);
            console.log(temp);
        }
    }
}