$('#research').on('click', function (event) {
    event.preventDefault();
    getCar();
    // getEV();
    // console.log('click is working!!!')
  });
  
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//       "X-RapidAPI-Key": "KyNZyDwQySmsh71Zva51yAb90PL8p1YmArmjsns2ZSMTE7P2js",
//     },
// };

//https://rapidapi.com/apininjas/api/cars-by-api-ninjas/
getCar = function() {
var model = document.getElementById('vehiclesearch').value;                                     
$.ajax({
    method: 'GET',
    url: "/api/cars/" + model,
    // headers: { 'X-Api-Key': token},
    // contentType: 'application/json',
    success: function(result) {
        console.log(result);
        var data = result;
        var rn = $('#vehicleSearch');
        rn.empty()
        var caption = $("<caption>")
        caption.text("Vehicle Search")
        // attach Vehicle Search to header of table
        rn.append
        for(var i=0; i<data.length; i++) {
 
           
            rn.append('<tr><td>'+data[i].make.toUpperCase()+'</td><td>'+data[i].model.toUpperCase()+'</td><td>'+data[i].year+'</td><td>'+data[i].city_mpg+'</td><td>'+data[i].fuel_type.toUpperCase()+'</td></tr>');
        }
        },
    error: function ajaxError(jqXHR) {
        console.error('Error:');
    }
});
};

// getEV = function() {
//     $.ajax({
//         method: 'GET',
//         url: '/api/cars/electricity',
        
    
//         success: function(result) {
//             console.log(result);
//             var data = result;
//              for(var i=0; i<data.length; i++) {

//                  var rn = $('#evvehicle');
//                  rn.append('<tr><td>'+data[i].make.toUpperCase()+'</td><td>'+data[i].model.toUpperCase()+'</td><td>'+data[i].year+'</td><td>'+data[i].city_mpg+'</td><td>'+data[i].fuel_type.toUpperCase()+'</td></tr>');
//              }
//             },
//         error: function ajaxError(jqXHR) {
//             console.error('Error:');
//         }
//     });
//     };

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
