// ==========================================
// TYPE CONVERSION (KONVERSI TIPE DATA)
// ==========================================

console.log("=== TYPE CONVERSION DALAM JAVASCRIPT ===\n");

// ==========================================
// IMPLICIT TYPE CONVERSION (OTOMATIS)
// ==========================================

console.log("=== IMPLICIT TYPE CONVERSION (OTOMATIS) ===");
console.log("JavaScript secara otomatis mengkonversi tipe data dalam operasi tertentu");

// String + Number = String (concatenation)
console.log("String + Number:");
console.log("'5' + 5:", '5' + 5);           // "55"
console.log("'Hello' + 10:", 'Hello' + 10); // "Hello10"
console.log("10 + '5':", 10 + '5');         // "105"

// String - Number = Number (mathematical operation)
console.log("\nString - Number:");
console.log("'10' - 5:", '10' - 5);         // 5
console.log("'20' - '5':", '20' - '5');     // 15
console.log("'10' * '2':", '10' * '2');     // 20
console.log("'20' / '4':", '20' / '4');     // 5

// Boolean dalam operasi matematika
console.log("\nBoolean dalam operasi matematika:");
console.log("true + 1:", true + 1);         // 2 (true = 1)
console.log("false + 1:", false + 1);       // 1 (false = 0)
console.log("true * 5:", true * 5);         // 5
console.log("false * 5:", false * 5);       // 0

// Null dan undefined dalam operasi
console.log("\nNull dan undefined:");
console.log("null + 5:", null + 5);         // 5 (null = 0)
console.log("undefined + 5:", undefined + 5); // NaN
console.log("null == 0:", null == 0);       // false
console.log("null == undefined:", null == undefined); // true
console.log("");

// ==========================================
// EXPLICIT TYPE CONVERSION (MANUAL)
// ==========================================

console.log("=== EXPLICIT TYPE CONVERSION (MANUAL) ===");

// ==========================================
// CONVERT TO STRING
// ==========================================

console.log("=== CONVERT TO STRING ===");
let num = 123;
let bool = true;
let arr = [1, 2, 3];

console.log("String() conversion:");
console.log("String(123):", String(123));           // "123"
console.log("String(true):", String(true));         // "true"
console.log("String([1,2,3]):", String([1,2,3]));   // "1,2,3"

console.log("\n.toString() method:");
console.log("(123).toString():", (123).toString()); // "123"
console.log("true.toString():", true.toString());   // "true"
console.log("[1,2,3].toString():", [1,2,3].toString()); // "1,2,3"

console.log("\nTemplate literals:");
console.log("`Value: ${123}`:", `Value: ${123}`);   // "Value: 123"
console.log("");

// ==========================================
// CONVERT TO NUMBER
// ==========================================

console.log("=== CONVERT TO NUMBER ===");

console.log("Number() conversion:");
console.log("Number('123'):", Number('123'));       // 123
console.log("Number('123.45'):", Number('123.45')); // 123.45
console.log("Number('123abc'):", Number('123abc')); // NaN
console.log("Number(''):", Number(''));             // 0
console.log("Number(' '):", Number(' '));           // 0
console.log("Number(true):", Number(true));         // 1
console.log("Number(false):", Number(false));       // 0
console.log("Number(null):", Number(null));         // 0
console.log("Number(undefined):", Number(undefined)); // NaN

console.log("\nparseInt() dan parseFloat():");
console.log("parseInt('123'):", parseInt('123'));         // 123
console.log("parseInt('123.45'):", parseInt('123.45'));   // 123 (without decimal)
console.log("parseInt('123abc'):", parseInt('123abc'));   // 123 (stops at non-number)
console.log("parseInt('abc123'):", parseInt('abc123'));   // NaN

console.log("parseFloat('123.45'):", parseFloat('123.45')); // 123.45
console.log("parseFloat('123.45abc'):", parseFloat('123.45abc')); // 123.45

console.log("\nUnary + operator:");
console.log("+'123':", +'123');                     // 123
console.log("+'123.45':", +'123.45');               // 123.45
console.log("+'abc':", +'abc');                     // NaN
console.log("");

// ==========================================
// CONVERT TO BOOLEAN
// ==========================================

console.log("=== CONVERT TO BOOLEAN ===");

console.log("Boolean() conversion:");
console.log("Boolean(1):", Boolean(1));             // true
console.log("Boolean(0):", Boolean(0));             // false
console.log("Boolean(-1):", Boolean(-1));           // true
console.log("Boolean(''):", Boolean(''));           // false (empty string)
console.log("Boolean('hello'):", Boolean('hello')); // true (non-empty string)
console.log("Boolean(null):", Boolean(null));       // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN));         // false
console.log("Boolean([]):", Boolean([]));           // true (empty array)
console.log("Boolean({}):", Boolean({}));           // true (empty object)

console.log("\nDouble negation (!!):");
console.log("!!1:", !!1);                           // true
console.log("!!0:", !!0);                           // false
console.log("!!'':", !!'');                         // false
console.log("!!'hello':", !!'hello');               // true
console.log("");

// ==========================================
// FALSY DAN TRUTHY VALUES
// ==========================================

console.log("=== FALSY DAN TRUTHY VALUES ===");

let falsyValues = [false, 0, -0, 0n, '', null, undefined, NaN];
let truthyValues = [true, 1, -1, 'hello', ' ', [], {}, function(){}];

console.log("Falsy values (yang dianggap false):");
falsyValues.forEach(value => {
    console.log(`${JSON.stringify(value)}: ${Boolean(value)}`);
});

console.log("\nTruthy values (yang dianggap true):");
truthyValues.forEach(value => {
    console.log(`${typeof value === 'function' ? 'function(){}' : JSON.stringify(value)}: ${Boolean(value)}`);
});
console.log("");

// ==========================================
// COMPARISON DAN TYPE COERCION
// ==========================================

console.log("=== COMPARISON DAN TYPE COERCION ===");

console.log("== (loose equality) vs === (strict equality):");
console.log("'5' == 5:", '5' == 5);                 // true (dengan konversi)
console.log("'5' === 5:", '5' === 5);               // false (tanpa konversi)
console.log("true == 1:", true == 1);               // true
console.log("true === 1:", true === 1);             // false
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

console.log("\nPerbandingan yang mengejutkan:");
console.log("[] == 0:", [] == 0);                   // true
console.log("[] == '':", [] == '');                 // true
console.log("[] == []:", [] == []);                 // false (different objects)
console.log("'0' == false:", '0' == false);         // true
console.log("'' == false:", '' == false);           // true
console.log("");

// ==========================================
// BEST PRACTICES
// ==========================================

console.log("=== BEST PRACTICES ===");

console.log("1. Gunakan explicit conversion untuk kejelasan:");
let userInput = "25";
let age = Number(userInput);  // Lebih jelas daripada +userInput
console.log("Age:", age, typeof age);

console.log("\n2. Gunakan === untuk comparison:");
console.log("Gunakan === dan !== daripada == dan !=");

console.log("\n3. Validasi sebelum konversi:");
function safeParseInt(value) {
    let result = parseInt(value);
    return isNaN(result) ? 0 : result;
}

console.log("safeParseInt('123'):", safeParseInt('123'));   // 123
console.log("safeParseInt('abc'):", safeParseInt('abc'));   // 0
console.log("");

// ==========================================
// CONTOH PROGRAM: KALKULATOR INPUT STRING
// ==========================================

console.log("=== CONTOH PROGRAM: KALKULATOR INPUT STRING ===");

function kalkulator(input1, operator, input2) {
    // Konversi string ke number
    let num1 = Number(input1);
    let num2 = Number(input2);
    
    // Validasi input
    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Input harus berupa angka";
    }
    
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Error: Tidak bisa dibagi dengan 0";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Operator tidak valid";
    }
    
    return `${input1} ${operator} ${input2} = ${result}`;
}

// Test dengan input string
console.log(kalkulator("10", "+", "5"));      // 10 + 5 = 15
console.log(kalkulator("20.5", "*", "2"));    // 20.5 * 2 = 41
console.log(kalkulator("10", "/", "0"));      // Error: Tidak bisa dibagi dengan 0
console.log(kalkulator("abc", "+", "5"));     // Error: Input harus berupa angka

// ==========================================
// CONTOH PROGRAM: FORM VALIDATION
// ==========================================

console.log("\n=== CONTOH PROGRAM: FORM VALIDATION ===");

function validateForm(nama, umur, email) {
    let errors = [];
    
    // Validasi nama (harus ada dan bukan empty)
    if (!nama || nama.trim().length === 0) {
        errors.push("Nama harus diisi");
    }
    
    // Validasi umur (harus number dan > 0)
    let ageNumber = Number(umur);
    if (isNaN(ageNumber) || ageNumber <= 0 || ageNumber > 150) {
        errors.push("Umur harus berupa angka antara 1-150");
    }
    
    // Validasi email (sederhana)
    if (!email || !email.includes('@')) {
        errors.push("Email tidak valid");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors,
        data: {
            nama: nama.trim(),
            umur: ageNumber,
            email: email.toLowerCase()
        }
    };
}

// Test validasi
console.log("Test 1 - Data valid:");
console.log(validateForm("John Doe", "25", "john@email.com"));

console.log("\nTest 2 - Data invalid:");
console.log(validateForm("", "abc", "invalid-email"));