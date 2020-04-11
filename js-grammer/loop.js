// for (var i = 1; i < 100000; i++) {
//     document.write(i + ' ');
// }

for (var i = 1; i < 100000; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            document.writeln("FizzBuzz");
        } else {
            document.writeln("Fizz");
        }
    } else if (i % 5 === 0) {
        document.writeln("Buzz");
    } else {
        document.writeln(i);
    }
}