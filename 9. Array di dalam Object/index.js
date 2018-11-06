function Ninja(nama, jurus, desa) {
    this.nama = nama;
    this.jurus = jurus;
    this.desa = desa;
}

var ObjNinja = new Ninja('Madara Uchiha', ['Yasaka no Magatama', 'Katon: Gōka Mekkyaku', 'Mokuton Hijutsu: Jukai Kōtan'], 'Konohagakure');


for (var i = 0; i < ObjNinja.jurus.length; i++) {
    var dataJutsu = ObjNinja.jurus[i];
    console.log(dataJutsu);
}

