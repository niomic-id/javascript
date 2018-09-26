var panggilBilanganGenap = ()=>{
  var bilanganGenap = []

  for (var i = 1; i < 31 ; i++) {
    if (i % 2 === 0){
        bilanganGenap.push(i*4)
    }
  }
  return bilanganGenap
}

console.log(panggilBilanganGenap());
