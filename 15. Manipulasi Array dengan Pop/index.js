function ArrayPop() {
    var kota = ['Jakarta', 'Palembang', 'Bandung']

    for (var i = 0; i < kota.length; i++) {
      console.log(kota[i]);  
    }

    console.log('========')

    var kota2 = kota.pop()
    console.log(kota2)
    return kota
}

console.log(ArrayPop())