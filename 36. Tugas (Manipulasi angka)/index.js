function deretAngka(n) {
        var item = [];
        for (var i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                item.push('NIOMIC')
                var hasil = item.join(',')
            } else if (i % 5 === 0){
                item.push('MIC')
                var hasil = item.join(',')
            } else if (i % 3 === 0) {
                item.push('NIO')
                var hasil = item.join(',')
            } else {
                item.push(i)
                var hasil = item.join(',')
            }
        }
        return hasil;
    }


console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))