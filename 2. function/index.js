
function JalanSatu() {
    console.log("jalan satu");
}
//function declaration



const JalanDua = function() {
    console.log("jalan dua");
}
//function expression

JalanSatu();
JalanDua();


const JalanTiga = () => {
    console.log("jalan tiga");
}

JalanTiga();
// arrow function



const Hitung = (a, b) => {
    var jumlah = a + b;
    console.log('hasilnya ',jumlah);
}
Hitung(2, 3);

const Pesanan = (nasi, lauk, minum) => {
    console.log('Pesanan nasi ' +nasi+ ' dengan lauk ' +lauk+ ' dan minum ' +minum+ ' sudah tiba!');
}

Pesanan('Minyak', 'Ayam kecap', 'Es teh');

const Menentukan = (a) => {
    if(a % 2 == 0) {
        console.log(a + ' merupakan nilai genap');
    } else {
        console.log(a + ' merupakan nilai ganjil');
    }
}

Menentukan(3);