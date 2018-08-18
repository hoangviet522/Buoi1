// Read API
// var request = require("request");
// let staffs = [];
// request.get("http://192.168.1.6:3000/ds-phong-kham", function(err, res, body) {
//   console.log(body);

//   var parsed = JSON.parse(body);

//   var arr = [];

//   for (var x in parsed) {
//     arr.push(parsed[x]);
//   }

//   //   console.log(arr);
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr[i].PK_ID);
//   }
// });

var request = require("request");
let staffs = [];
request.get("http://192.168.1.6:3000/ds-nhan-su", function(err, res, body) {
  //   console.log(body);

  var parsed = JSON.parse(body);

  var arr = [];

  for (var x in parsed) {
    arr.push(parsed[x]);
  }

  for (i = 0; i < arr.length; i++) {
    console.log("---------------------");
    console.log(arr[i].NV_HoTen);

    console.log(arr[i].NV_DienThoai);
    console.log(arr[i].NV_DiaChi);
    var s = arr[i].NV_NgaySinh;
    var fields = s.split("T");
    var name = fields[0];
    var v = fields[0].split("-");
    var s = v[2] + "-" + v[1] + "-" + v[0];
    console.log(
      "Ho Ten: " +
        arr[i].NV_HoTen +
        "\n" +
        "SDT: " +
        arr[i].NV_DienThoai +
        "\n" +
        "Dia Chi: " +
        arr[i].NV_DiaChi +
        "\n" +
        "Ngay sinh: " +
        s
    );
  }
});
// var s = "1996-09-03T17:00:00.000Z";
// var fields = s.split("T");
// var name = fields[0];
// console.log(fields[0]);

// // 03-09-2018
// var v = fields[0].split("-");
// console.log(v);
// var s = v[2] + "-" + v[1] + "-" + v[0];
// console.log(s);
