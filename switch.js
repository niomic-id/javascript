const logic = function () {
  var nilai = 49;

  if(nilai >=90 && nilai <=100) indeks=1
  else if (nilai >=80) indeks =2
  else if (nilai >=65) indeks =3
  else if (nilai >=50) indeks =4
  else if (nilai >= 0) indeks = 5
}

var result = () =>
{
  logic()
  
  switch(indeks){
    case 1:
      console.log("sangat baik")
      break;
    case 2:
      console.log("Baik")
      break;
    case 3:
      console.log("Cukup")
      break;
    case 4:
      console.log("Kurang")
      break;
    case 5:
        console.log("Kebangetan parah")
      break;
  }
}

result()
