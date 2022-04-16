$('#research').on('click', function (event) {
    event.preventDefault();
    getCar();
    getEV();
    console.log('click is working!!!')
  });
  
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//       "X-RapidAPI-Key": "KyNZyDwQySmsh71Zva51yAb90PL8p1YmArmjsns2ZSMTE7P2js",
//     },
// };

// // https://rapidapi.com/apininjas/api/cars-by-api-ninjas/
getCar = function() {
var model = document.getElementById('vehiclesearch').value;                                     
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
    headers: { 'X-Api-Key': 'LkwDtvOlGX7sg0uRN++1Jw==tIoYlmMKJ9jSCm71'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error:');
    }
});
};

getEV = function() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/cars?limit=30&fuel_type=electricity',
        headers: { 'X-Api-Key': 'LkwDtvOlGX7sg0uRN++1Jw==tIoYlmMKJ9jSCm71'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result[0]['l']);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ');
        }
    });
    };

//     fetch("https://cars-by-api-ninjas.p.rapid capi.com/v1/cars?fuel_type=electricity",
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

//   const options2 = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Host": "car-data.p.rapidapi.com",
//       "X-RapidAPI-Key": "KyNZyDwQySmsh71Zva51yAb90PL8p1YmArmjsns2ZSMTE7P2js",
//     },
//   };

//   // https://rapidapi.com/principalapis/api/car-data/
//   function getVehicle() {
//   var vehicleMake = document.getElementById('vehiclesearch').value;
//   fetch(
//     "https://car-data.p.rapidapi.com/cars?limit=10&page=0&make=" + vehicleMake)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//   };
