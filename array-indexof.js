  var panggilIndexof = ()=>{
    var daerah = {
      kota : ["jakarta","bandung","surabaya","bandung","surabaya"],
    }
    //return daerah.kota
    for (var i = 0; i < daerah.kota.length; i++) {
      //if (daerah.kota.indexOf(daerah.kota[i])){
      var index = daerah.kota.indexOf(daerah.kota[i])
      console.log(index);
      //}
    }
    // console.log(daerah.kota.indexOf("bandung"));
    // daerah.kota.splice(daerah.kota.indexOf("bandung")+1,0,"Medan")
    // return daerah.kota
  }

  panggilIndexof()
