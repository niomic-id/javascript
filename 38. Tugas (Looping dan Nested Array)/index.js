function callNestedArray(nestedArray) {


    //strict
    let hasil = []

    for (var i = 0; i < nestedArray.length; i++) {
        let subHasil = [];
        for (var x = 0; x < nestedArray.length; x++) {
            subHasil.push(nestedArray[x][i]);
        }
        hasil.push(subHasil)
    }
    console.log(hasil);

}

var nestedArray = [
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

callNestedArray(nestedArray)
