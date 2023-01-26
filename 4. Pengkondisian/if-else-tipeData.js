function tipeData() {
  var data = 20;
  console.log(typeof data); // ngeprint sesuai dengan tipe data

  if (data === 20) {
    // IF = jika data sama dengan 20
    return data; //print data
  } else {
    //else : Jika tidak
    return "Gagal"; // Print gagal
  }
}

console.log(tipeData());
