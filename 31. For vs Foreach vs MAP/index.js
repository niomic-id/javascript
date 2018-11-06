function panggilPerulangan(){
    var kota = ['Palembang', 'Jakarta', 'Jogya']
    kota.map((item, index, array) => {
        console.log(item)
        console.log(index)
        console.log(array)
    })
}

panggilPerulangan()

// KESIMPULAN 

// Perintah FOR :  DAPAT  melakukan perulangan berdasarkan jumlah yang ditentukan, sedangkan forEach dan Map Tidak bisa.
// Perintah FOR,  forEach dan Map : DAPAT perulangan berdasarkan data pajang dari sebuah array
// Perintah FOR dan forEach : TIDAK DAPAT Menghasilkan array baru
// Perintah Map: DAPAT menghasilkan array baru
// Selanjutnya ...

// Jika kita ingin melakukan perulangan berdasarkan jumlah data yang sudah ditentukan, maka gunakanlah perintah FOR
// Jika kita ingin melakukan perulangan berdasarkan panjang array dan tidak ingin mencetak array baru lagi, maka gunakanlah forEach
// Jika kita ingin melakukan perulangan dan ingin menghasilkan array baru, maka gunakanlah MAP