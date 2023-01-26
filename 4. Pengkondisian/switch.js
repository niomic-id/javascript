function testingSwitch() {
  var nilai = 40;

  switch (nilai) {
    case 50:
      console.log("Hasil Teratas");
      break;
    case 40:
      console.log("Hasil Kedua");
      break;
    case 30:
      console.log("Hasil Ketiga");
      break;
    case 20:
      console.log("Hasil Keempat");
      break;
    case 10:
      console.log("Hasil Kelima");
      break;
    default: // default adalah hasil akhir jika dari semua case hasilnya tidak ada
      console.log("Tidak Ada Hasil");
  }
}

testingSwitch();
