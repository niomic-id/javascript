// membuat array baru berdasarkan hasil penyaringan nilai dari setiap elemen array yang diberi method tersebut.

// function arrGanjil() {
//     var arr = [1, 2, 3, 4, 5];
//     var arr2 = [];

//     for(var i = 0; i < arr.length; i++)
//     if (arr[i] % 2 !== 0) {
//         arr2.push(arr[i])
//     }
//     return arr2
// }

// console.log(
//     arrGanjil())


//menggunakan filter
// function arrGanjil() {
//     var arr = [1, 2, 3, 4, 5];
//     var arr2 = arr.filter(function(el){
//         return el % 2 !== 0
//     })

//     return arr2
// }

// console.log(
//     arrGanjil())


// arr.filter( function(el) { return el  % 2 !== 0 } ) artinya setiap element pada arr  ([1, 2, 3, 4, 5]) akan direpresentasikan sebagai el. Kemudian hanya akan dikembalikan ke array baru (arrGanjil) jika memenuhi kondisi atau bernilai true.
// Karena return el % 2 !== 0, maka hanya element yang bernilai ganjil saja yang akan dikembalikan ke array baru.


function panggilFilter() {
    var data = [
        {negara: 'Indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'USA', benua: 'Amerika'},
    ];

    var benuaEropa = data.filter(function(item) {
        return item.benua === 'Eropa';
    });

    return benuaEropa;
}

console.log(panggilFilter())