function panggilRegexp(value) {
    // var ambilData = value.match(/\w/g) mengambil semua huruf
    // var ambilData = value.match(/\d/g) mengambil angka saja


    // Kita akan mencoba untuk mengambil semua SPASI pada semua data dan juga menghitung juga jumlah spasinya
    var ambilData = value.match(/\s/g)
    console.log(ambilData)
    console.log("Banyaknya Spasi : ",ambilData.length)
    console.log(ambilData)
}

panggilRegexp('Bulang ke 1 sd ke 4')