function modGenap() {
    var Data = [];
    for (var i = 1; i < 10; i++) {
        if(i%2===0){
            Data.push(i)
        }
    }

    return Data
}

console.log(modGenap())


//latihan
function modGanjil() {
    var Data1 = [];
    for (var j = 0; j <= 30; j++) {
        if (j%2===1) {
            Data1.push(j)
        }
    }
    return Data1
}

console.log(modGanjil())