// Untuk menggunakan for fungsi pemanggilannya langsung memanggil var yang di dalam for
function menggunakanOf() {
  var angkaOf = [1, 2, 3, 4, 5, 6, 7];
  for (var iniOf of angkaOf) console.log(iniOf);
}

// Untuk Perulangan Biasa untuk fungsi pemanggilannya memanggil variabel global scopenya terlebih dahulu baru variabel di dalam perulangan for
function perulanganBiasa() {
  var biasa = [10, 11, 12, 13, 14, 15, 16];
  for (var i = 0; i < biasa.length; i++) {
    console.log(biasa[i]);
  }
}
menggunakanOf();
perulanganBiasa();
