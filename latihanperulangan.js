var panggilPerulangan = ()=>{
  var daerah = {
    kota : ["jakarta","bandung","surabaya"],
  }
  var data = {
    kotaFor : [],
    kotaforEach : [],
    kotaMap : []
  }
  //perulangan dengan for
  // for (var i = 0 ; i < daerah.kota.length;i++){
  //   console.log(daerah.kota[i])
  //   console.log(i)
  //   console.log(daerah.kota)
  //   data.kotaFor.push("kota : "+daerah.kota[i])
  // }
  //   return data.kotaFor
  //  console.log("--------------------------------");
  //perulangan dengan foreach
  // daerah.kota.forEach((item,index,array)=>{
  //   console.log(item)
  //   console.log(index)
  //   console.log(array)
  //   data.kotaforEach.push("kota : "+item)
  // })
  // return data.kotaforEach
  console.log("--------------------------------");
  //perulangan dengan map
  var ok = daerah.kota.map((item,index,array)=>{
    return 'kota : '+item
  })
  console.log(ok);
}

(panggilPerulangan())
console.log("--------------------------------");
