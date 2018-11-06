function panggilNestedArray(dataArray) {
    nestedArray.forEach(function(item, index, array) {
        console.log('id :' + item[0])
        console.log('name :' + item[1])
        console.log('company :' + item[2])
        console.log('\n')
    })

}

var nestedArray = [
    [1, "Mark Zuckerberg", "Facebook"],
    [2, "Elon Musk", "Tesla"],
    [3, "Bill Gates", "Microsoft"],
    [4, "Steve Jobs", "Apple"]
]

panggilNestedArray(nestedArray)
