function namaFruit() {
  buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
  console.log(buah);

  buah1 = buah.pop();
  console.log(buah);
  buah1 = buah.shift();

  return buah;
}

console.log(namaFruit());
