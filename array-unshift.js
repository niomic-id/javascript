  var panggilUnshift = ()=>{
    var daerah = {
      propinsi : ["dki jakarta","jabar","banten"],
    }
    console.log(daerah.propinsi)
    console.log("------------------")
    daerah.propinsi.unshift("jateng","jatim")

    return daerah.propinsi
  }

  console.log(panggilUnshift())
