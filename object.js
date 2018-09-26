var panggilObject = () => {
  var motor = {
    merk : ["Honda","Yamaha","Suzuki"],
    cc  : ["125cc","150cc","250cc"],
    harga : ["15jt","20jt","25jt"],
    warna : ["hitam","putih","biru"],
  }
  console.log(motor.merk[0],"?")
  console.log(motor.cc[2],"?")
  console.log(motor.harga[2],"?")
  console.log(motor.warna[1],"?")
  console.log("Motor Apakah itu ?")

  if (motor.merk[0] && motor.cc[2] && motor.harga[2] && motor.warna[1]) console.log("Honda CBR 250CC")
}

panggilObject()
