//mengubah array jadi string
function panggilJoin() {
    var kota = ['Palembang','Jakarta','Bandung'];

    console.log(kota);
    var result = kota.join(',')
    return result
}

console.log(panggilJoin())