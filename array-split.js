// var panggilSplit = ()=>{
//   var kalimat = {
//     nama : "Bagus Junaedi Ardiyanto",
//   }
//   //console.log(kalimat.nama)
//
//   var ubah = kalimat.nama.split(" ")
//   var nama = ubah[0].split("")
//   var showindex = nama.indexOf("m")
//
//   //return showindex
//
//   if (showindex === 0) {
//     var ubahdata = nama.splice(showindex,1,"j")
//     return nama
//   }
//   else if (showindex === 1){
//     ubahdata = nama.splice(showindex,1,"u")
//     return nama
//   }
//   else {
//     return "BAD"
//   }
// }
//
// console.log(panggilSplit());
var panggildata = ()=>{
  var kalimat = {
    kata:"hello world"
  }
  console.log(kalimat.kata);
  const ubahdata = kalimat.kata.split("")
  //return ubahdata

  const barisdata = ubahdata.indexOf(" ")
  ubahdata.splice(barisdata,1)
  //ubah posisi L
  ubahdata.splice(3,0,"l")
  ubahdata.splice(9,1)
  //ubah posisi // O
  ubahdata.splice(6,0,"o")
  ubahdata.splice(8,1)
  return ubahdata.join('')

}

console.log(panggildata());
