/**
 * Session 6 - assignment 1
 * Find the min max number
 */

var array = [1, 3, 5, 2, 99, 6, 8, 10];

console.log("Giving an array of value " + array);
console.log("using Math.min and Math.max to find min and max")
console.log("min = " + Math.min(1, 3, 5, 2, 99, 6, 8, 10));
console.log("max = " + Math.max(1, 3, 5, 2, 99, 6, 8, 10));

// or using the loop to find min and max
var min = 9999;
var max = 0;
for(var i = 0; i < array.length; i++) {
    if(array[i] < min) {
        min = array[i];
    }
    if (array[i] > max) {
        max = array[i];
    }
}
console.log("Using loop control to find min and max")
console.log("min = " + min);
console.log("max = " + max);
