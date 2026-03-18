// ==========================================
// NUMBER DAN OPERASI MATEMATIKA
// ==========================================

console.log("=== NUMBER DAN OPERASI MATEMATIKA ===\n");

// ==========================================
// BASIC MATHEMATICAL OPERATIONS
// ==========================================

console.log("=== OPERASI MATEMATIKA DASAR ===");
let a = 10;
let b = 3;

console.log("Nilai a:", a);
console.log("Nilai b:", b);
console.log("");

console.log("Penjumlahan (a + b):", a + b);       // 13
console.log("Pengurangan (a - b):", a - b);       // 7
console.log("Perkalian (a * b):", a * b);         // 30
console.log("Pembagian (a / b):", a / b);         // 3.3333...
console.log("Sisa bagi (a % b):", a % b);         // 1
console.log("Pangkat (a ** b):", a ** b);         // 1000
console.log("");

// ==========================================
// OPERATOR ASSIGNMENT
// ==========================================

console.log("=== OPERATOR ASSIGNMENT ===");
let x = 10;
console.log("Nilai awal x:", x);

x += 5;  // x = x + 5
console.log("x += 5:", x);  // 15

x -= 3;  // x = x - 3
console.log("x -= 3:", x);  // 12

x *= 2;  // x = x * 2
console.log("x *= 2:", x);  // 24

x /= 4;  // x = x / 4
console.log("x /= 4:", x);  // 6

x %= 4;  // x = x % 4
console.log("x %= 4:", x);  // 2
console.log("");

// ==========================================
// INCREMENT DAN DECREMENT
// ==========================================

console.log("=== INCREMENT DAN DECREMENT ===");
let counter = 5;
console.log("Nilai awal counter:", counter);

console.log("counter++:", counter++);  // 5 (post-increment)
console.log("Nilai counter setelah counter++:", counter);  // 6

console.log("++counter:", ++counter);  // 7 (pre-increment)
console.log("Nilai counter setelah ++counter:", counter);  // 7

console.log("counter--:", counter--);  // 7 (post-decrement)
console.log("Nilai counter setelah counter--:", counter);  // 6

console.log("--counter:", --counter);  // 5 (pre-decrement)
console.log("Nilai counter setelah --counter:", counter);  // 5
console.log("");

// ==========================================
// MATH OBJECT
// ==========================================

console.log("=== MATH OBJECT ===");
console.log("Math.PI:", Math.PI);                    // 3.141592653589793
console.log("Math.E:", Math.E);                      // 2.718281828459045

console.log("\nFungsi matematika:");
console.log("Math.sqrt(16):", Math.sqrt(16));        // 4 (akar kuadrat)
console.log("Math.pow(2, 3):", Math.pow(2, 3));      // 8 (pangkat)
console.log("Math.abs(-5):", Math.abs(-5));          // 5 (nilai absolut)

console.log("\nPembulatan:");
console.log("Math.round(4.7):", Math.round(4.7));    // 5 (pembulatan terdekat)
console.log("Math.ceil(4.1):", Math.ceil(4.1));      // 5 (pembulatan ke atas)
console.log("Math.floor(4.9):", Math.floor(4.9));    // 4 (pembulatan ke bawah)

console.log("\nMin/Max:");
console.log("Math.min(10, 20, 5):", Math.min(10, 20, 5));    // 5
console.log("Math.max(10, 20, 5):", Math.max(10, 20, 5));    // 20

console.log("\nRandom:");
console.log("Math.random():", Math.random());         // 0-1 random
let randomNum = Math.floor(Math.random() * 10) + 1;   // 1-10 random
console.log("Random 1-10:", randomNum);
console.log("");

// ==========================================
// SPECIAL NUMBERS
// ==========================================

console.log("=== SPECIAL NUMBERS ===");
console.log("Infinity:", Infinity);
console.log("1 / 0:", 1 / 0);                       // Infinity
console.log("-1 / 0:", -1 / 0);                     // -Infinity
console.log("0 / 0:", 0 / 0);                       // NaN
console.log("Math.sqrt(-1):", Math.sqrt(-1));       // NaN

console.log("\nChecking for special values:");
console.log("isNaN(NaN):", isNaN(NaN));             // true
console.log("isNaN(10):", isNaN(10));               // false
console.log("isFinite(Infinity):", isFinite(Infinity)); // false
console.log("isFinite(100):", isFinite(100));       // true
console.log("");

// ==========================================
// PARSING NUMBERS
// ==========================================

console.log("=== PARSING NUMBERS ===");
console.log("parseInt('10'):", parseInt('10'));         // 10
console.log("parseInt('10.5'):", parseInt('10.5'));     // 10
console.log("parseInt('10abc'):", parseInt('10abc'));   // 10
console.log("parseInt('abc10'):", parseInt('abc10'));   // NaN

console.log("parseFloat('10.5'):", parseFloat('10.5')); // 10.5
console.log("parseFloat('10.5abc'):", parseFloat('10.5abc')); // 10.5

console.log("Number('10'):", Number('10'));             // 10
console.log("Number('10.5'):", Number('10.5'));         // 10.5
console.log("Number('10abc'):", Number('10abc'));       // NaN
console.log("");

// ==========================================
// CONTOH PROGRAM: KALKULATOR SEDERHANA
// ==========================================

console.log("=== CONTOH PROGRAM: KALKULATOR SEDERHANA ===");
function kalkulator(angka1, operator, angka2) {
    let hasil;
    
    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            hasil = angka1 / angka2;
            break;
        default:
            hasil = "Operator tidak valid";
    }
    
    return hasil;
}

console.log("kalkulator(10, '+', 5):", kalkulator(10, '+', 5));
console.log("kalkulator(10, '-', 5):", kalkulator(10, '-', 5));
console.log("kalkulator(10, '*', 5):", kalkulator(10, '*', 5));
console.log("kalkulator(10, '/', 5):", kalkulator(10, '/', 5));
console.log("kalkulator(10, '%', 5):", kalkulator(10, '%', 5));