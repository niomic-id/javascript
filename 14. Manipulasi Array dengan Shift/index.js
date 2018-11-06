function shift() {
    var arrayShift = ['Palembang', 'Jakarta', 'Bandung']

    for (var i = 0; i < arrayShift.length; i++) {
        console.log(arrayShift[i]);
    }

    console.log('============')


    var arrayShift2 = arrayShift.shift()
    console.log(arrayShift2)
    // arrayShift = arrayShift.shift();
    return arrayShift;
}

console.log(shift());