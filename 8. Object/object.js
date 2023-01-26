function panggilObject() {
  var mobil = {
    tipe: "Sedan",
    harga: 200,
    warna: "Merah",
    tahun: [2001, 2002, 2003, 2004, 2005], // Property Object dengan array
  };
  mobil.harga = 500; // Mengganti value di dalam propert object mobil

  mobil.seri = "s100"; // menambha property dan value di dalam object mobil

  // Pemanggilan Object
  console.log(mobil);
  // Pemanggilan Object Berdasarkan property
  console.log(mobil.tipe);
}

panggilObject();
