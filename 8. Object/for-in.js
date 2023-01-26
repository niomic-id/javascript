function nestedObject() {
  var mahasiswa = {
    nama: "Aliando Bro",
    semester: 6,
    nilai: {
      semester1: 1.3,
      semester2: 1.5,
      semester3: 1.8,
      semester4: 3.0,
    },
  };
  for (var i in mahasiswa) {
    console.log(mahasiswa[i]);
  }
}

nestedObject();
