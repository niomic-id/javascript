function panggilRegexp() {
    let str = 'fabfiubeifubsiuebfibseifbsindonesiaidnaodnwoawd'

    console.log(str.match(/indonesia/))
}

panggilRegexp()


//jika(str.match(/indonesia/)) ---tanpa g
//output 

// [ 'indonesia',
//   index: 26,
//   input: 'fabfiubeifubsiuebfibseifbsindonesiaidnaodnwoawd' ]


//jika(str.match(/indonesia/g)) ---dikasih g
//output 
// [ 'indonesia' ]




// Regular Expression atau sering disebut Regexp adalah memiliki sebuah flags atau lebih mudah dalam kita memahaminya kita sebut sebagai “TANDA”, dimana flags tersebut nantinya akan memberikan effect / hasil yang berbeda pada setiap pencarian antara yang menggunakan flags dan yang tidak.

// Sekarang kita akan mencoba membuat sebuah function panggilRegexp() yang didalamnya kita akan menuliskan code RegExp didalamnya.

// Kita akan mencoba melakukan PENCOCOKAN data pada sebuah variable string, di dalam Regexp untuk melakukan PENCOCOKAN adalah menggunakan perintah match()

// Di dalamnya kita akan memasukkan flag “g”, dimana flag “g” ini sendiri berfungsi sifatnya GLOBAL yaitu untuk melakukan pencarian data yang sama di semua data STRING yang dijadikan acuan kita untuk mencocokan data tersebut