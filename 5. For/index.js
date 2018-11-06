//lopping bilangan besar ke kecil
// function Loop(n) {
//     for (var n = n; n >= 1; n--) {
//         console.log(n);
//     }
// }

// Loop(10);

//lopping bilangan kecil ke besar
// function Loop2(j) {
//     for (var j = j; j <= 10; j++) {
//         console.log(j);
//     }
// }

// Loop2(1)

// looping bilangan genap dengan batasan
// function LoopGenap(i, j) {
//     for (var i = i; i <= j; i = i + 1) {
//         if(i % 2 == 0){
//             console.log(i);
//         }
//     }
// }

// LoopGenap(1, 20);


//looping bilangan ganjil dengan batasan
// function LoopGanjil(k, l) {
//     for (var k = k; k <= l; k = k + 1) {
//         if(k % 2 == 1){
//             console.log(k);
//         }
//     }
// }

// LoopGanjil(1, 20);


//looping bilangan perkalian
// function LoopPerkalian(n) {
//     for (var m = 1; m <= 10; m++) {
//         const perkalian = n * m;
//         console.log(perkalian);
//     }
// }

// LoopPerkalian(4);


//looping bilangan pembagian
// function LoopBagi(p) {
//     for (var o = 1; o <=10; o++) {
//         const pembagian = o * p;
//         const hasil = pembagian / o; 
//         console.log(pembagian+ ' : ' +hasil+ ' = ' + o);
//     }
// }

// LoopBagi(4)


//looping bilangan prima
function LoopPrima(s) {
    var prima = false;
    for(var x = 2; x <= s; x++){
        if(x>=2){
            prima = true;
            for(var b = 2; b < x; b++){
                if(x%b==0){
                    prima = false;
                }
            }
            if(prima==true) {
                console.log(x);
            }
        }
    }
}

LoopPrima(10);
