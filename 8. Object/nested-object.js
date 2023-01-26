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
  console.log(mahasiswa);

  //Memanggil nilai semester 2
  console.log(mahasiswa.nilai.semester2);
}

nestedObject();
