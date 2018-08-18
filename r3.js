var request = require("request");
let staffs = [];
const city = 'LonDon';
request.get("http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=" +city, function(err, res, body) {
//   console.log(body);

  var parsed = JSON.parse(body);

//   var arr = [];

//   for (var x in parsed) {
//     arr.push(parsed[x]);
//   }
// console.log("City" + city);
// console.log("Temp: " + arr[3].temp + "C");
// console.log("Speed Win: " + arr[5].speed);
console.log(parsed.main.temp);
console.log(parsed.wind.speed);
console.log(parsed.name);
  
});
