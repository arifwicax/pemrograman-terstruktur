// EXPRESSION STATEMENTS DALAM JAVASCRIPT

console.log("EXPRESSION STATEMENTS DALAM JAVASCRIPT");
console.log("Statement adalah perintah dalam program yang dijalankan oleh JavaScript.");
console.log("Perbedaan Expression vs Statement:");
console.log("- Expression: menghasilkan nilai");
console.log("- Statement: menjalankan perintah\n");

// 1. EXPRESSION SEBAGAI STATEMENT

console.log("1. EXPRESSION SEBAGAI STATEMENT");

// Expression sederhana yang menjadi statement
let hasil = 5 + 3;  // Assignment statement
console.log("Assignment statement: let hasil = 5 + 3");
console.log("Hasil:", hasil);

// Expression dengan efek samping
let counter = 0;
counter++;  // Increment statement
console.log("Counter sebelum increment:", 0);
console.log("Counter setelah increment:", counter);

// Function call statement
console.log("Function call statement: console.log()");
console.log("Ini adalah contoh function call statement\n");

// 2. COMPOUND STATEMENT (BLOK)

console.log("2. COMPOUND STATEMENT (BLOK)");
console.log("Beberapa statement dapat digabungkan dengan kurung kurawal {}");

// Blok statement
{
    let x = Math.PI;
    let y = Math.cos(x);
    console.log("Dalam blok - x:", x);
    console.log("Dalam blok - y:", y);
    console.log("Ini adalah compound statement");
}

console.log("Blok statement selesai\n");

// 3. EMPTY STATEMENT

console.log("3. EMPTY STATEMENT");
console.log("Empty statement adalah statement kosong (;)");

// Empty statement - hati-hati dengan bug
let i = 0;
while(i < 3) {
    console.log("Loop ke:", i);
    i++;
}; // Ini empty statement (tidak berbahaya di sini)

console.log("Contoh empty statement yang bisa berbahaya:");
for(let j = 0; j < 3; j++) {
    console.log("For loop normal, j:", j);
}

console.log("\nTIPS PENGGUNAAN STATEMENT");
console.log("1. Setiap statement biasanya diakhiri dengan semicolon (;)");
console.log("2. Compound statement menggunakan kurung kurawal {}");
console.log("3. Hati-hati dengan empty statement yang tidak disengaja");
console.log("4. Expression bisa menjadi statement jika memiliki efek");

// 4. CONTOH PRAKTIS BERBAGAI STATEMENT

console.log("\n4. CONTOH PRAKTIS BERBAGAI STATEMENT");

// Declaration statement
let nama = "Budi";
const PI = 3.14159;
var umur = 25;

console.log("Declaration statements:");
console.log("let nama =", nama);
console.log("const PI =", PI);
console.log("var umur =", umur);

// Expression statement dengan operator
nama += " Santoso";  // String concatenation
umur *= 2;           // Multiplication assignment

console.log("\nSetelah expression statements:");
console.log("nama:", nama);
console.log("umur:", umur);

// Multiple expressions dalam satu statement
let a = 1, b = 2, c = 3;
console.log("\nMultiple declarations:", {a, b, c});

// Chaining expressions
let result = (a + b) * c;
console.log("Chaining expression result:", result);

console.log("\nSELESAI - EXPRESSION STATEMENTS");