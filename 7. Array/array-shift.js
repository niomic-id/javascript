function penggunaanShift() {
  mobil = ["avanza", "senia", "lamborgini", "anjay"];
  console.log(mobil); // Mobil sebelum di shift

  mobil2 = mobil.shift();
  console.log(mobil2); // Mobil setelah di shift

  return mobil;
}

console.log(penggunaanShift());
