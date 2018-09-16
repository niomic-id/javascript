var panggilBilanganKelipatan = ()=>{
  var bilanganKelipatan = []

  for (var i = 1;i < 51; i++){
    //bilanganKelipatan.push(i)
    if (i%5 === 0){
      bilanganKelipatan.push(i)
    }
  }
      return bilanganKelipatan
}

console.log(panggilBilanganKelipatan());
