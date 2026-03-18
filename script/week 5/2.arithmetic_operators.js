// ==========================================
// ARITHMETIC OPERATORS DALAM JAVASCRIPT
// ==========================================

console.log("=== ARITHMETIC OPERATORS DALAM JAVASCRIPT ===\n");
console.log("Operator aritmatika digunakan untuk melakukan operasi matematika");
console.log("JavaScript mendukung operator: +, -, *, /, %, ** dan unary operators\n");

// ==========================================
// BASIC ARITHMETIC OPERATORS
// ==========================================

console.log("=== BASIC ARITHMETIC OPERATORS ===");

let a = 15;
let b = 4;

console.log("Nilai a:", a);
console.log("Nilai b:", b);
console.log("");

// Addition (+)
console.log("PENJUMLAHAN (+):");
console.log(`${a} + ${b} =`, a + b);
console.log("10.5 + 2.3 =", 10.5 + 2.3);
console.log(""); 

// Subtraction (-)
console.log("PENGURANGAN (-):");
console.log(`${a} - ${b} =`, a - b);
console.log("20 - 7 =", 20 - 7);
console.log("5.5 - 2.2 =", 5.5 - 2.2);
console.log("");

// Multiplication (*)
console.log("PERKALIAN (*):");
console.log(`${a} * ${b} =`, a * b);
console.log("3.5 * 2 =", 3.5 * 2);
console.log("0.1 * 0.2 =", 0.1 * 0.2, "(floating point precision issue)");
console.log("");

// Division (/)
console.log("PEMBAGIAN (/):");
console.log(`${a} / ${b} =`, a / b);
console.log("10 / 3 =", 10 / 3);
console.log("10 / 0 =", 10 / 0, "(Infinity)");
console.log("-10 / 0 =", -10 / 0, "(-Infinity)");
console.log("0 / 0 =", 0 / 0, "(NaN)");
console.log("");

// Modulus (%)
console.log("SISA BAGI / MODULUS (%):");
console.log(`${a} % ${b} =`, a % b);
console.log("10 % 3 =", 10 % 3);
console.log("17 % 5 =", 17 % 5);
console.log("-10 % 3 =", -10 % 3);
console.log("10.5 % 2 =", 10.5 % 2);
console.log("");

// Exponentiation (**)
console.log("PANGKAT (**):");
console.log(`${b} ** 2 =`, b ** 2);
console.log("2 ** 3 =", 2 ** 3);
console.log("3 ** 0 =", 3 ** 0);
console.log("4 ** 0.5 =", 4 ** 0.5, "(akar kuadrat)");
console.log("2 ** -1 =", 2 ** -1, "(1/2)");
console.log("");

// ==========================================
// UNARY ARITHMETIC OPERATORS
// ==========================================

console.log("=== UNARY ARITHMETIC OPERATORS ===");

let num = 10;
console.log("Nilai awal num:", num);

// Unary plus (+)
console.log("\nUNARY PLUS (+):");
console.log("+num =", +num);
console.log("+'5' =", +'5', "(string to number)");
console.log("+true =", +true, "(boolean to number)");
console.log("+false =", +false);
console.log("+'abc' =", +'abc', "(NaN)");

// Unary minus (-)
console.log("\nUNARY MINUS (-):");
console.log("-num =", -num);
console.log("-(-5) =", -(-5));
console.log("-'10' =", -'10', "(string to negative number)");

// Pre-increment (++var)
console.log("\nPRE-INCREMENT (++var):");
let preInc = 5;
console.log("preInc awal:", preInc);
console.log("++preInc:", ++preInc);   // Increment dulu, baru return
console.log("preInc sekarang:", preInc);

// Post-increment (var++)
console.log("\nPOST-INCREMENT (var++):");
let postInc = 5;
console.log("postInc awal:", postInc);
console.log("postInc++:", postInc++); // Return dulu, baru increment
console.log("postInc sekarang:", postInc);

// Pre-decrement (--var)
console.log("\nPRE-DECREMENT (--var):");
let preDec = 5;
console.log("preDec awal:", preDec);
console.log("--preDec:", --preDec);   // Decrement dulu, baru return
console.log("preDec sekarang:", preDec);

// Post-decrement (var--)
console.log("\nPOST-DECREMENT (var--):");
let postDec = 5;
console.log("postDec awal:", postDec);
console.log("postDec--:", postDec--); // Return dulu, baru decrement
console.log("postDec sekarang:", postDec);
console.log("");

// ==========================================
// STRING CONCATENATION dengan +
// ==========================================

console.log("=== STRING CONCATENATION DENGAN + ===");

// String + String
console.log("String + String:");
console.log("'Hello' + ' World' =", 'Hello' + ' World');
console.log("'Java' + 'Script' =", 'Java' + 'Script');

// String + Number
console.log("\nString + Number (concatenation):");
console.log("'Age: ' + 25 =", 'Age: ' + 25);
console.log("'Score: ' + 95.5 =", 'Score: ' + 95.5);
console.log("10 + '5' =", 10 + '5', "(number becomes string)");

// Tricky cases
console.log("\nTricky cases:");
console.log("1 + 2 + '3' =", 1 + 2 + '3', "(left to right: (1+2)+'3')");
console.log("'1' + 2 + 3 =", '1' + 2 + 3, "(left to right: ('1'+2)+3)");
console.log("1 + 2 + 3 + '4' =", 1 + 2 + 3 + '4');
console.log("'4' + 1 + 2 + 3 =", '4' + 1 + 2 + 3);

// Mixed types
console.log("\nMixed types dengan +:");
console.log("true + 1 =", true + 1, "(boolean to number)");
console.log("false + 5 =", false + 5);
console.log("null + 10 =", null + 10, "(null = 0)");
console.log("undefined + 10 =", undefined + 10, "(undefined = NaN)");
console.log("");

// ==========================================
// OPERATOR PRECEDENCE DAN ASSOCIATIVITY
// ==========================================

console.log("=== OPERATOR PRECEDENCE DAN ASSOCIATIVITY ===");

console.log("Operator Precedence (urutan prioritas):");
console.log("2 + 3 * 4 =", 2 + 3 * 4, "(* lebih tinggi dari +)");
console.log("(2 + 3) * 4 =", (2 + 3) * 4, "(kurung mengubah prioritas)");
console.log("2 ** 3 ** 2 =", 2 ** 3 ** 2, "(** right-associative)");
console.log("(2 ** 3) ** 2 =", (2 ** 3) ** 2);
console.log("2 ** (3 ** 2) =", 2 ** (3 ** 2));

console.log("\nAssociativity (left-to-right vs right-to-left):");
console.log("10 - 5 - 2 =", 10 - 5 - 2, "(left-associative: (10-5)-2)");
console.log("10 / 5 / 2 =", 10 / 5 / 2, "(left-associative: (10/5)/2)");

// Complex expression
console.log("\nComplex expression:");
let result = 2 + 3 * 4 / 2 - 1;
console.log("2 + 3 * 4 / 2 - 1 =", result);
console.log("Step by step: 2 + (3 * 4) / 2 - 1 = 2 + 12 / 2 - 1 = 2 + 6 - 1 = 7");
console.log("");

// ==========================================
// SPECIAL NUMBER CASES
// ==========================================

console.log("=== SPECIAL NUMBER CASES ===");

console.log("Infinity operations:");
console.log("Infinity + 1 =", Infinity + 1);
console.log("1 / Infinity =", 1 / Infinity);
console.log("Infinity - Infinity =", Infinity - Infinity, "(NaN)");
console.log("Infinity / Infinity =", Infinity / Infinity, "(NaN)");

console.log("\nNaN operations:");
console.log("NaN + 5 =", NaN + 5);
console.log("NaN * 0 =", NaN * 0);
console.log("Math.sqrt(-1) =", Math.sqrt(-1));

console.log("\nFloating point precision:");
console.log("0.1 + 0.2 =", 0.1 + 0.2, "(precision issue)");
console.log("0.1 + 0.2 === 0.3 =", 0.1 + 0.2 === 0.3);
console.log("Math.round((0.1 + 0.2) * 10) / 10 =", Math.round((0.1 + 0.2) * 10) / 10);
console.log("");

// ==========================================
// PRACTICAL EXAMPLES
// ==========================================

console.log("=== PRACTICAL EXAMPLES ===");

// 1. Calculator function
function calculator(operation, a, b) {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error: Division by zero';
        case '%': return a % b;
        case '**': return a ** b;
        default: return 'Error: Unknown operation';
    }
}

console.log("Calculator examples:");
console.log("calculator('+', 10, 5) =", calculator('+', 10, 5));
console.log("calculator('*', 7, 8) =", calculator('*', 7, 8));
console.log("calculator('/', 15, 3) =", calculator('/', 15, 3));
console.log("calculator('/', 10, 0) =", calculator('/', 10, 0));

// 2. Temperature converter
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log("\nTemperature conversion:");
console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25) + "°F");
console.log("77°F to Celsius:", fahrenheitToCelsius(77) + "°C");

// 3. Compound interest calculator
function compoundInterest(principal, rate, time, compoundsPerYear = 1) {
    return principal * (1 + rate / compoundsPerYear) ** (compoundsPerYear * time);
}

console.log("\nCompound Interest:");
let investment = compoundInterest(1000000, 0.10, 5, 12); // 10% annually, compounded monthly, 5 years
console.log("Rp 1,000,000 at 10% for 5 years (monthly compounding):", 
    "Rp " + Math.round(investment).toLocaleString());

// 4. Distance formula
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log("\nDistance between points:");
console.log("Distance from (0,0) to (3,4):", distance(0, 0, 3, 4));

// 5. BMI Calculator
function calculateBMI(weight, height) {
    let bmi = weight / (height ** 2);
    let category = bmi < 18.5 ? 'Underweight' :
                   bmi < 25 ? 'Normal' :
                   bmi < 30 ? 'Overweight' : 'Obese';
    return { bmi: Math.round(bmi * 10) / 10, category };
}

console.log("\nBMI Calculator:");
let bmiResult = calculateBMI(70, 1.75); // 70kg, 175cm
console.log(`BMI: ${bmiResult.bmi} (${bmiResult.category})`);

// 6. Tip calculator
function calculateTip(billAmount, tipPercentage, numberOfPeople = 1) {
    let tip = billAmount * (tipPercentage / 100);
    let total = billAmount + tip;
    return {
        billAmount,
        tip,
        total,
        perPerson: Math.round((total / numberOfPeople) * 100) / 100
    };
}

console.log("\nTip Calculator:");
let tipResult = calculateTip(250000, 15, 4); // Rp 250,000 bill, 15% tip, 4 people
console.log(`Bill: Rp ${tipResult.billAmount.toLocaleString()}`);
console.log(`Tip (15%): Rp ${tipResult.tip.toLocaleString()}`);
console.log(`Total: Rp ${tipResult.total.toLocaleString()}`);
console.log(`Per person: Rp ${tipResult.perPerson.toLocaleString()}`);

// 7. Number formatting utilities
console.log("\nNumber formatting examples:");
let largeNumber = 1234567.89;
console.log("Original:", largeNumber);
console.log("Rounded to 2 decimal:", Math.round(largeNumber * 100) / 100);
console.log("Fixed 2 decimal:", largeNumber.toFixed(2));
console.log("Localestring:", largeNumber.toLocaleString());
console.log("Scientific notation:", largeNumber.toExponential(2));