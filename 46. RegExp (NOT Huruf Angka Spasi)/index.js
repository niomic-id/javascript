
function panggilRegexp(value) {

    // Untuk mengambil semua karakter KECUALI huruf dan angka. RegExp (Regular Expression) untuk melakukan itu adalah : \W
// var ambilData = value.match(/\W/g)
// console.log(ambilData)


// mengambil semua karakter dan spasi KECUALI angka 
//    var ambilData = value.match(/\D/g)
//    console.log(ambilData)


// mencoba untuk mengambil karakter KECUALI SPASI.
   var ambilData = value.match(/\S/g)
   console.log(ambilData)

}

panggilRegexp("Bulan ke 1 sd ke 4");