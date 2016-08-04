/**
 * Session 6 - Assignment 2
 * print 1 - 100, print Fizz when number is multipled by 3 and print Buzz when number if multipleed by 5 and
 * print FizzBuzz when number is multipled by 3 and 5
 */

var end = 100;
var start  = 1;
var fizz = "Fizz";
var buzz = "Buzz";

for(; start <= end; start++) {
    var isFizz = start % 3;
    var isBuzz = start % 5;
    if(isFizz == 0 && isBuzz == 0) {
        printLine(start, fizz + buzz);
    } else if(isFizz == 0) {
        printLine(start, fizz);
    } else if(isBuzz == 0) {
        printLine(start, buzz);
    } else  {
        printLine(start, "");
    }

}

function printLine(index, message) {
    console.log(index + " " + message);
}
