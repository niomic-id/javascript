//menampilkan data array per-Data dimensi

// function NastedArray() {
//     var Framework = [['ReactJS', 'AngularJs','VueJS'],
//                      ['BackboneJS', 'Polymer', 'RequireJS'],
//                      ['ExpressJS', 'D3', 'EmberJS']]

//     var data1 = Framework[0];

//     for(var i = 0; i < data1.length; i++) {
//         console.log(data1[i])
//     }
// }

// NastedArray()

//menampilkan data array semua data dimensi 
function NastedArray() {
    var Framework = [['ReactJS', 'AngularJs','VueJS'],
                     ['BackboneJS', 'Polymer', 'RequireJS'],
                     ['ExpressJS', 'D3', 'EmberJS']]

    for (var i = 0; i < Framework.length; i++) {
        var index = Framework[i];
        
        for(var j = 0; j < index.length; j++){
            console.log(index[j]);
        }
    }
}
NastedArray()