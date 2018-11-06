function modGanjil() {
    var Data1 = [];
    for (var j = 1; j <= 30; j++) {
        if (j%2 !== 0) {
            Data1.push(j)
        }
    }
    return Data1
}

console.log(modGanjil())


//latihan
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