/* 
RETURN adalah cara mengembalikan function
*/

// TANPA VARIABEL
function ambil() {
  return "Diambil Cuy";
}
console.log(ambil()); // Mengambil dari function = ambil()

// DENGAN VARIABEL
function melempar() {
  var mengambil = "Mengambil Cuy";
  return mengambil;
}
console.log(melempar()); //Mengambil dari function = melempar()

// Menyimpan/Menmpung di sebuah variabel
function menampung() {
  var lempar = "Melempar";
  return lempar;
}

var tampung = menampung(); // Mengambil dari function Menampung

console.log(tampung); //Mengambil dari var tampung
