function modKelipatan() {
    var Data2 = [];
    for(k = 1; k <= 50; k++){
        if(k%5==0){
            Data2.push(k)
        }
    }
    return Data2
}

console.log(modKelipatan());