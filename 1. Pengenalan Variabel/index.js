var variabelNama = "var : var bisa di rubah di mana saja";
let variabelKondisi = "let : let hanya bisa di rubah di satu tempat";
const variabelConst = "const : const nilainya tetap atau tidak bisa dirubah";

tanpaPerintah = "Tanpa perintah sama seperti Variabel var";

if (true) {
  var variabelNama = 1; //variabelNama dengan Variabel var telah dirubah

  //   Pemanggilan let di tempat if
  let variabelKondisi = 2; //variabelKondisi let tidak bisa dirubah di tempat lain
  console.log(variabelKondisi);

  const variabelConst = 3; //variabel ini tidak bisa dirubah

  tanpaPerintah = "merubah";
}

console.log(variabelNama);
console.log(variabelKondisi);
console.log(variabelConst);
console.log(tanpaPerintah);
