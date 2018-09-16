var panggilConcat = ()=>{
  var data ={
    kecamatan : ["jombang","ngasem","lamongan","lumajang"],
    kabupaten : ["jombang","kediri","lamongan","lumajang"],
    propinsi  : ["jatim"],
  }
  var dataconcat = (data.kecamatan[1].concat(data.kabupaten[1])).concat(data.propinsi[0])

  return dataconcat
}

console.log(panggilConcat());
