function tinggiBadan() {
  var tinggiTono = 165;
  var tinggiOtong = 170;
  var tinggiAsede = 160;

  if (tinggiTono > tinggiOtong) {
    console.log("Tinggi Badan Tono paling Tinggi");
    console.log("Tinggi Badan Tono " + tinggiTono);
    console.log("Tinggi Badan Otong " + tinggiOtong);
    console.log("Tinggi Badan Adede " + tinggiAsede);
  } else if (tinggiTono < tinggiOtong) {
    console.log("Tinggi Badan Otong paling Tinggi");
    console.log("Tinggi Badan Otong " + tinggiOtong);
    console.log("Tinggi Badan Tono " + tinggiTono);
    console.log("Tinggi Badan Adede " + tinggiAsede);
  } else {
    console.log("Tinggi Badan Asede paling Tinggi");
    console.log("Tinggi Badan Adede " + tinggiAsede);
    console.log("Tinggi Badan Otong " + tinggiOtong);
    console.log("Tinggi Badan Tono " + tinggiTono);
  }
}

tinggiBadan();
