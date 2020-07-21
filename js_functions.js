/* Question 1 */
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}


/* Question 2 */
function maxOfThree(x, y, z) {
    if (x > y && x > z)
        return x;
    else if (y > x && y > z)
        return y;
    else
        return z;
}


/* Question 3 */
function isVowel(c) {
    if (c.length > 1) return false;
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}


/* Question 4 */
function sum(a) {
    sum = 0;
    for (var i = a.length - 1; i >= 0; i--) {
        sum += a[i];
    }
    return sum;
}

function multiply(a) {
    mul = 1;
    for (var i = a.length - 1; i >= 0; i--) {
        mul *= a[i];
    }
    return mul;
}


/* Question 5 */
function reverse(a) {
    return a.split("").reverse().join("");
}


/* Question 6 */
function findLongestWord(a) {
    var longestWord = 0;
    for (var i = a.length - 1; i >= 0; i--) {

        if (a[i].length > longestWord)
            longestWord = a[i].length;

    }
    return longestWord;
}


/* Question 7 */
function filterLongWords(a, j) {
    var toReturn = [];
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i].length >= j) {
            toReturn.push(a[i]);
        }
    }
    return toReturn;
}

/* Question 8*/
function jsFiddle() {
    const a = [1, 3, 5, 3, 3];
    const b = a.map(function(elem, i, array) {
        return elem * 10;
    })
    console.log(b);
    const c = a.filter(function(elem, i, array) {
        return elem === 3;
    });
    console.log(c);
    const d = a.reduce(function(prevValue, elem, i, array) {
        return prevValue * elem;
    });
    console.log(d);

    const d2 = a.find(function(elem) { return elem > 1; }); //3
    const d3 = a.findIndex(function(elem) { return elem > 1; }); //1
    console.log(d2);
    console.log(d3);
}