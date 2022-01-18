/*
The additive persistence of an integer, n, is the number
of times you have to replace n with the sum of its
digits until n becomes a single digit integer.
*/

function additivePersistence(n){
    let counter = 0;
    while (n > 9) {
        counter++;
        n = (""+n).split("").map(c=>parseInt(c)).reduce((a, b) => a + b, 0)
    }
    return counter;
}

/*
The multiplicative persistence of an integer, n, is the
number of times you have to replace n with the product
of its digits until n becomes a single digit integer.
*/

function multiplicativePersistence(n){
    let counter = 0;
    while (n > 9) {
        counter++;
        n = (""+n).split("").map(c=>parseInt(c)).reduce((a, b) => a * b, 1)
    }
    return counter;
}

//example 1 => 3
console.log(additivePersistence(1679583));

//example 2 => 2
console.log(additivePersistence(123456));

//example 3 => 0
console.log(additivePersistence(6));

//example 4 => 4
console.log(multiplicativePersistence(77));

//example 5 => 2
console.log(multiplicativePersistence(123456));

//example 6 => 0
console.log(multiplicativePersistence(4));