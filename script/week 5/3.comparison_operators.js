// ==========================================
// COMPARISON OPERATORS DALAM JAVASCRIPT
// ==========================================

console.log("=== COMPARISON OPERATORS DALAM JAVASCRIPT ===\n");
console.log("Operator perbandingan digunakan untuk membandingkan dua nilai");
console.log("Hasil dari operator perbandingan selalu berupa boolean (true/false)\n");

// ==========================================
// BASIC COMPARISON OPERATORS
// ==========================================

console.log("=== BASIC COMPARISON OPERATORS ===");

let a = 10;
let b = 5;
let c = 10;

console.log("Nilai a:", a);
console.log("Nilai b:", b);
console.log("Nilai c:", c);
console.log("");

// Greater than (>)
console.log("GREATER THAN (>):");
console.log(`${a} > ${b} =`, a > b);        // true
console.log(`${b} > ${a} =`, b > a);        // false
console.log(`${a} > ${c} =`, a > c);        // false (sama besar)
console.log("15 > 10 =", 15 > 10);
console.log("");

// Less than (<)
console.log("LESS THAN (<):");
console.log(`${a} < ${b} =`, a < b);        // false
console.log(`${b} < ${a} =`, b < a);        // true
console.log(`${a} < ${c} =`, a < c);        // false (sama besar)
console.log("3 < 8 =", 3 < 8);
console.log("");

// Greater than or equal (>=)
console.log("GREATER THAN OR EQUAL (>=):");
console.log(`${a} >= ${b} =`, a >= b);      // true
console.log(`${a} >= ${c} =`, a >= c);      // true (sama besar)
console.log(`${b} >= ${a} =`, b >= a);      // false
console.log("10 >= 10 =", 10 >= 10);
console.log("");

// Less than or equal (<=)
console.log("LESS THAN OR EQUAL (<=):");
console.log(`${a} <= ${b} =`, a <= b);      // false
console.log(`${a} <= ${c} =`, a <= c);      // true (sama besar)
console.log(`${b} <= ${a} =`, b <= a);      // true
console.log("7 <= 12 =", 7 <= 12);
console.log("");

// ==========================================
// EQUALITY OPERATORS
// ==========================================

console.log("=== EQUALITY OPERATORS ===");

// Loose equality (==)
console.log("LOOSE EQUALITY (==):");
console.log("5 == 5 =", 5 == 5);                    // true
console.log("5 == '5' =", 5 == '5');                // true (type coercion)
console.log("true == 1 =", true == 1);              // true (boolean to number)
console.log("false == 0 =", false == 0);            // true
console.log("null == undefined =", null == undefined); // true
console.log("'' == 0 =", '' == 0);                  // true (empty string to 0)
console.log("[] == 0 =", [] == 0);                  // true (array to 0)
console.log("");

// Strict equality (===)
console.log("STRICT EQUALITY (===):");
console.log("5 === 5 =", 5 === 5);                  // true
console.log("5 === '5' =", 5 === '5');              // false (different types)
console.log("true === 1 =", true === 1);            // false (different types)
console.log("null === undefined =", null === undefined); // false (different types)
console.log("0 === -0 =", 0 === -0);                // true (both are zero)
console.log("NaN === NaN =", NaN === NaN);          // false (NaN special case)
console.log("");

// Loose inequality (!=)
console.log("LOOSE INEQUALITY (!=):");
console.log("5 != 3 =", 5 != 3);                    // true
console.log("5 != '5' =", 5 != '5');                // false (type coercion makes them equal)
console.log("true != 1 =", true != 1);              // false (boolean to number)
console.log("10 != '10' =", 10 != '10');            // false
console.log("");

// Strict inequality (!==)
console.log("STRICT INEQUALITY (!==):");
console.log("5 !== 3 =", 5 !== 3);                  // true
console.log("5 !== '5' =", 5 !== '5');              // true (different types)
console.log("true !== 1 =", true !== 1);            // true (different types)
console.log("10 !== 10 =", 10 !== 10);              // false (same value and type)
console.log("");

// ==========================================
// STRING COMPARISON
// ==========================================

console.log("=== STRING COMPARISON ===");

console.log("String comparison (lexicographical order):");
console.log("'apple' < 'banana' =", 'apple' < 'banana');      // true
console.log("'Apple' < 'apple' =", 'Apple' < 'apple');        // true (uppercase comes first)
console.log("'10' < '9' =", '10' < '9');                      // true (string comparison, not numeric)
console.log("'abc' === 'abc' =", 'abc' === 'abc');           // true
console.log("'hello' !== 'Hello' =", 'hello' !== 'Hello');   // true (case sensitive)

console.log("\nString vs Number comparison:");
console.log("'10' > 5 =", '10' > 5);                         // true (string converted to number)
console.log("'abc' > 5 =", 'abc' > 5);                       // false (NaN comparison)
console.log("'10' == 10 =", '10' == 10);                     // true (type coercion)
console.log("'10' === 10 =", '10' === 10);                   // false (different types)

console.log("\nCase-insensitive comparison:");
function compareIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log("compareIgnoreCase('Hello', 'hello') =", compareIgnoreCase('Hello', 'hello'));
console.log("");

// ==========================================
// TYPE COERCION IN COMPARISONS
// ==========================================

console.log("=== TYPE COERCION IN COMPARISONS ===");

console.log("Boolean to Number coercion:");
console.log("true == 1 =", true == 1);              // true
console.log("false == 0 =", false == 0);            // true
console.log("true > 0 =", true > 0);                // true (true becomes 1)
console.log("false < 1 =", false < 1);              // true (false becomes 0)

console.log("\nNull and Undefined:");
console.log("null == 0 =", null == 0);              // false (special rule)
console.log("null >= 0 =", null >= 0);              // true (null becomes 0)
console.log("null > 0 =", null > 0);                // false (null becomes 0)
console.log("undefined == 0 =", undefined == 0);    // false
console.log("undefined < 1 =", undefined < 1);      // false (undefined becomes NaN)

console.log("\nArray and Object coercion:");
console.log("[] == 0 =", [] == 0);                  // true ([] becomes '')
console.log("[1] == 1 =", [1] == 1);                // true ([1] becomes '1')
console.log("[1,2] == '1,2' =", [1,2] == '1,2');    // true
console.log("{} == 0 =", {} == 0);                  // false ({} becomes '[object Object]')

console.log("\nCommon pitfalls:");
console.log("'' == 0 =", '' == 0);                  // true (empty string to 0)
console.log("' ' == 0 =", ' ' == 0);                // true (whitespace string to 0)
console.log("'0' == false =", '0' == false);        // true (complex coercion path)
console.log("");

// ==========================================
// OBJECT COMPARISON
// ==========================================

console.log("=== OBJECT COMPARISON ===");

let obj1 = { name: "John" };
let obj2 = { name: "John" };
let obj3 = obj1;

console.log("Different objects with same content:");
console.log("obj1 == obj2 =", obj1 == obj2);        // false (different references)
console.log("obj1 === obj2 =", obj1 === obj2);      // false (different references)

console.log("\nSame reference:");
console.log("obj1 === obj3 =", obj1 === obj3);      // true (same reference)

console.log("\nArray comparison:");
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log("arr1 === arr2 =", arr1 === arr2);      // false (different arrays)
console.log("arr1 === arr3 =", arr1 === arr3);      // true (same reference)

// Deep equality function (simple version)
function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log("\nDeep equality check:");
console.log("deepEqual(obj1, obj2) =", deepEqual(obj1, obj2));  // true
console.log("deepEqual(arr1, arr2) =", deepEqual(arr1, arr2));  // true
console.log("");

// ==========================================
// PRACTICAL EXAMPLES
// ==========================================

console.log("=== PRACTICAL EXAMPLES ===");

// 1. Age validation
function validateAge(age) {
    if (age >= 18 && age <= 100) {
        return "Valid age";
    } else if (age < 18) {
        return "Too young";
    } else {
        return "Invalid age";
    }
}

console.log("Age validation:");
console.log("validateAge(25) =", validateAge(25));
console.log("validateAge(16) =", validateAge(16));
console.log("validateAge(150) =", validateAge(150));

// 2. Grade evaluation
function evaluateGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

console.log("\nGrade evaluation:");
console.log("evaluateGrade(95) =", evaluateGrade(95));
console.log("evaluateGrade(75) =", evaluateGrade(75));
console.log("evaluateGrade(55) =", evaluateGrade(55));

// 3. Password strength checker
function checkPasswordStrength(password) {
    let score = 0;
    let feedback = [];
    
    if (password.length >= 8) {
        score++;
    } else {
        feedback.push("At least 8 characters");
    }
    
    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        feedback.push("Include uppercase letter");
    }
    
    if (/[a-z]/.test(password)) {
        score++;
    } else {
        feedback.push("Include lowercase letter");
    }
    
    if (/\d/.test(password)) {
        score++;
    } else {
        feedback.push("Include number");
    }
    
    if (/[!@#$%^&*]/.test(password)) {
        score++;
    } else {
        feedback.push("Include special character");
    }
    
    let strength = score < 2 ? 'Weak' : 
                   score < 4 ? 'Medium' : 'Strong';
                   
    return { strength, score, feedback };
}

console.log("\nPassword strength:");
let pwd1 = checkPasswordStrength("abc123");
console.log("'abc123':", pwd1.strength, `(${pwd1.score}/5)`);

let pwd2 = checkPasswordStrength("MyP@ssw0rd");
console.log("'MyP@ssw0rd':", pwd2.strength, `(${pwd2.score}/5)`);

// 4. Number range checker
function inRange(number, min, max, inclusive = true) {
    if (inclusive) {
        return number >= min && number <= max;
    } else {
        return number > min && number < max;
    }
}

console.log("\nNumber range checker:");
console.log("inRange(5, 1, 10) =", inRange(5, 1, 10));           // true
console.log("inRange(10, 1, 10, false) =", inRange(10, 1, 10, false)); // false
console.log("inRange(0, 1, 10) =", inRange(0, 1, 10));           // false

// 5. Sort comparison functions
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "Diana", score: 95 }
];

console.log("\nSorting examples:");

// Sort by score (ascending)
let sortedByScoreAsc = [...students].sort((a, b) => a.score - b.score);
console.log("By score (ascending):", sortedByScoreAsc.map(s => `${s.name}: ${s.score}`));

// Sort by score (descending)
let sortedByScoreDesc = [...students].sort((a, b) => b.score - a.score);
console.log("By score (descending):", sortedByScoreDesc.map(s => `${s.name}: ${s.score}`));

// Sort by name (alphabetical)
let sortedByName = [...students].sort((a, b) => a.name.localeCompare(b.name));
console.log("By name (A-Z):", sortedByName.map(s => s.name));

// 6. Comparison utility functions
console.log("\nUtility functions:");

function isEqual(a, b, strict = true) {
    return strict ? a === b : a == b;
}

function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function isBetween(value, min, max) {
    return value >= Math.min(min, max) && value <= Math.max(min, max);
}

console.log("isEqual(5, '5', true) =", isEqual(5, '5', true));     // false
console.log("isEqual(5, '5', false) =", isEqual(5, '5', false));   // true
console.log("compareNumbers(10, 5) =", compareNumbers(10, 5));      // 1
console.log("isBetween(5, 1, 10) =", isBetween(5, 1, 10));         // true
console.log("isBetween(5, 10, 1) =", isBetween(5, 10, 1));         // true (auto min/max)

console.log("\n=== BEST PRACTICES ===");
console.log("1. Gunakan === dan !== untuk menghindari type coercion");
console.log("2. Hati-hati dengan perbandingan null, undefined, dan NaN");
console.log("3. Untuk object/array, bandingkan content bukan reference");
console.log("4. Gunakan explicit type conversion jika diperlukan");
console.log("5. Case-sensitive untuk string comparison");