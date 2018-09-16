var panggilPop = ()=>{
  var mobil = {
    merk : ["toyota","daihatsu","hino","nissan"],
    type : "sedan",
    warna: "putih"
  }
  console.log(mobil.merk);
  console.log("---------------");

  var kota1 = mobil.merk.pop()
  console.log(kota1);

  return mobil.merk
}

  console.log(panggilPop())
