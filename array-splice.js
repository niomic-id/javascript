var panggilSplice  = ()=>{
  var daerah = {
    propinsi : ["banten","dki jakarta","jabar","jateng","jatim"]
  }
  console.log(daerah.propinsi)
  console.log("------------------------");
  // daerah.propinsi.splice(daerah.propinsi.length,0,"tangerang")
  daerah.propinsi.splice(0,1)

  return (daerah.propinsi)
}

  console.log(panggilSplice())
