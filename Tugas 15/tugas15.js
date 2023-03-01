let pythagoras = (a, b) => {
  let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  return `
     Nilai AB : ${a}
     Nilai BC : ${b}
     Panjang sisi AC pada segitiga siku-siku tersebut adalah : ${c}`;
};

let panjang = 8;
let tinggi = 6;
console.log(pythagoras(panjang, tinggi));
