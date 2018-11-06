
function panggilRegexp(value) {
//  var ambilData = value.match(/[ke]/g); mengambil huruf k dan e saja 

// var ambilData = value.match(/[^ke]/g) mengambil huruf selain dari k dan e


//untuk mengambil karakter ANTARA karakter tertentu, dalam contoh kita ingin mengambil semua karakter ANTARA karakter “a” sampai “i”
var ambilData = value.match(/[a-i]/g)
 console.log(ambilData);
}

panggilRegexp("Bulan ke 1 sd ke 4");