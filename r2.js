var request = require("request");
let staffs = [];
request.get("http://192.168.1.6:3000/physics", function(err, res, body) {
  console.log(body);

  var parsed = JSON.parse(body);

  var arr = [];

  for (var x in parsed) {
    arr.push(parsed[x]);
  }
  for (i = 0; i < arr.length; i++) {
    console.log("----------------------");
    console.log(arr[i].T_TenThuoc);
    console.log(arr[i].T_CongDung);
    console.log(arr[i].T_CachDung);

    //console.log("Ten Thuoc: " +arr[i].T_TenThuoc + "\n" + "Cong Dung: " + arr[i].T_CongDung + "\n" + "Cach Dung: " + arr[i].T_CachDung);
    var b = arr[i].T_GiaBan;
    var m = arr[i].T_GiaMua;
    var p = arr[i].T_BHYT;
    console.log(doanhthu(b,m));
    console.log(baohiem(b,p));
 

  }

  //   for (i = 0; i < arr.length; i++) 
  //     console.log(arr[i].T_GiaMua);
  //     console.log(arr[i].T_GiaBan);
  //     var b = arr[i].T_GiaBan;
  //     var m = arr[i].T_GiaMua;
  //   }
});

function doanhthu(b, m) {
  let doanhthu = b - m;
  return doanhthu;
}
function baohiem(b, p){
    // if(p != 0){
    //     let Bh = b - ((b * p) / 100);
    //     return Bh;
    // }else{
    //     return b;
    // }

    return p != 0 ? b - ((b * p) / 100) : b;
   
}


// 10.000
// 20

// 100 - 0 = 80