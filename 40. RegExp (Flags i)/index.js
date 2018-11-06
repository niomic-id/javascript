// Regular Expression atau sering disebut Regexp adalah memiliki sebuah flags atau lebih mudah dalam kita memahaminya kita sebut sebagai “TANDA”, dimana flags tersebut nantinya akan memberikan effect / hasil yang berbeda pada setiap pencarian antara yang menggunakan flags dan yang tidak.

// Sekarang kita akan mencoba membuat sebuah function panggilRegexp() yang didalamnya kita akan menuliskan code RegExp didalamnya.

// Kita akan mencoba melakukan pencarian data pada sebuah variable string, di dalam Regexp untuk melakukan pencarian adalah menggunakan perintah search()

// Didalamnya kita akan memasukkan flag “i” : dimana flag “i” ini sendiri berfungsi untuk menjadikan keyword / kata kunci dalam pencarian menjadi TIDAK  case-insensitive, sehingga jika kita memasukkan “A” atau “a” maka akan di anggap sama.

function panggilRegexp() {
    let str = 'abcdefghijklmnopqrstuvwxyz'
    console.log(str.search(/K/))
    console.log(str.search(/K/i))
    console.log(str.search(/k/i))
}

panggilRegexp()

// Kita bisa melihat pada

// Pencarian pertama : huruf “K” yang dicari tidak ditemukan karena yang dicari adalah huruf “K” besar, sedangkan didalam variable tersebut tidak memiliki hufuf “K” besar.

// Sedangkan pada pencarian kedua dan ketiga : huruf yang dicari ditemukan pada index ke 10. sekalipun kita menuliskannya huruf “K” besar ataupun “k” kecil, itu karena kita sudah menambahkan flag “i” yang artinya mengabaikan antara huruf BESAR dan kecil.