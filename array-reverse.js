var panggilReverse = ()=>{
  var daerah = {
    kota : ["jakarta","Medan","Malang","Bandung"]
  }
  console.log(daerah.kota)

  var data = daerah.kota.join("")
  return data.split("").reverse().join("")
}

console.log(panggilReverse());
