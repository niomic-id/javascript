var panggilfilter = ()=>{
  var data = [1,2,3,4,5,6,7,8,9,10]
  var dataFilter = data.filter((result)=>{
    return result % 2 !== 0
  })
  console.log(dataFilter.join(","))
}
panggilfilter()

//filter dengan object
var panggilfilter2 = ()=>{
  var data2 = [
    {kota : "bandung",propinsi :"jabar"},
    {kota : "semarang",propinsi :"jateng"},
    {kota : "surabaya",propinsi : "jatim"},
    {kota : "kediri",propinsi :"jatim"},
    {kota : "malang",propinsi :"jatim"},
    {kota : "pekalongan",propinsi : "jateng"},
    {kota : "majalengka",propinsi : "jabar"}
  ]
  var dataFilter2 = data2.filter((item)=>{
    return item.propinsi === "jateng"
  })
  return dataFilter2
}
console.log(panggilfilter2())
