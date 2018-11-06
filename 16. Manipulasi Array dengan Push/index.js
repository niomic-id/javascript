// function panggilPush(){
//     var data = [1,2,3,4,5,6]
//     console.log(data);
//     data.push(9);
//     return data
// }

// console.log(panggilPush())


// push array dengan DOM


var dataItem = ['baju'];
document.getElementById('tampil').innerHTML = dataItem;


function panggilPush() {
    var dataBaru = document.getElementById('valArray').value
    var hasilData = dataBaru.split(' ')
    hasilData.push(dataItem)
}

panggilPush()
