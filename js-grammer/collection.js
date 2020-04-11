// var classes = ['A組', 'B組', 'C組', 'D組'];

// for (var grade = 1; grade < 4; grade++) {
//     for (var i = 0; i < classes.length; i++) {
//         document.write('<p>', grade + '年' + classes[i] + '</p>');
//     }
// }

var a = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
        document.write('<p>', a[i] + a[j], '</p>');
    }
}