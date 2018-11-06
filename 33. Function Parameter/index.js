// function Mahasiswa(nama, nim) {
//     console.log(nama)
//     console.log(nim)
// }

// Mahasiswa('Salahudin Alayubi', 1511410336)

// //
// Jenis tipe data yang bisa dimasukkan dalam juga bisa berbeda-beda tergantung kebutuhan, seperti bentuknya Number, String, Array, Gabungan Beberapa Antara Tipe Data, Ataupun tipe data yang lainnya.

//TUGAS
function panggilFilterParameters(filterBenua) {
    var arr = [
        {negara: 'Indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];
    var benuaEropa = arr.filter(function(item){
        return item.benua == filterBenua;
    });

    console.log(benuaEropa);
}

panggilFilterParameters('Asia')