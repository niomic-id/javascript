
function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

console.log(str.match(/[C,c]/g))
console.log(str.match(/[k,K]/g))
console.log(str.match(/[l,L]/g))

}

panggilRegexp()