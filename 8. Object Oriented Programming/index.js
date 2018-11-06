//penulisan OOP dalam Javascript ada literal dan consturctor tapi alangkah baiknya pelajari saja yg constructor karena paling umum dan lebih useable!


//berikut OOP constructor
function Ninja(nama, jurus, desa) {
    this.nama = nama;
    this.jurus = jurus;
    this.desa = desa;
}

var ObjNinja = new Ninja('Sasuka Uchiha', 'Tsukoyomi','Konohagakure');

console.log(ObjNinja);