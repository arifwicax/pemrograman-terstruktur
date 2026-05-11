//return

function nilai(x) {
    if (x > 90) {
        return "A";
    } else if (x > 80) {
        return "B";
    } else if (x > 70) {
        return "C";
    } else if (x > 60) {
        return "D";
    } else {
        return "E";
    }
}

console.log(nilai(95)); // Output: A
console.log(nilai(85)); // Output: B
console.log(nilai(75)); // Output: C
console.log(nilai(65)); // Output: D
console.log(nilai(55)); // Output: E