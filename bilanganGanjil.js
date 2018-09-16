var panggilBilanganGanjil = ()=>{
var bilanganGenap = []
  var bilanganGanjil = []

  for (var i = 1; i < 31; i++) {
    if (i%2 !== 0){
      bilanganGanjil.push(i)
    }
    else{
      if(i%2 === 0){
        bilanganGenap.push(i)
      }
    }
  }
  //return bilanganGenap.concat(bilanganGanjil).join(",")
  return bilanganGanjil
}

console.log(panggilBilanganGanjil());
