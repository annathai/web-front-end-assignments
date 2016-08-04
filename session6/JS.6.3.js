/**
 * Session 6 - assingment 3
 * FindMaxSequence
 */

function findMaxSequence(array) {
    var prev;
    var curSeq = [];
    var longestSeq = [];

    array.forEach(function(val, i, arr) {
        if (i === 0 || prev < val) {
            curSeq.push(val);
        } else {
            // Start a new sequence.
            curSeq = [val];
        }

        prev = val;

        // Check if our current sequence exceeds our highest.
        if (longestSeq.length < curSeq.length) {
            longestSeq = curSeq;
        }
    });

    return longestSeq.length <= 1? "no" : "[" + longestSeq.join(", ") + "]";
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));