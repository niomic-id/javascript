var panggilJoin = ()=>{
  var kalimat = {
    daerah : ["jakarta","medan","bandung","tangerang"]
  }
  console.log(kalimat.daerah);
  var data = kalimat.daerah
  data.splice(1,1)
  var result = data.join(",")
  return result
}
console.log(panggilJoin());
