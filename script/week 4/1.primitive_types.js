// ==========================================
// PRIMITIVE TYPES DALAM JAVASCRIPT
// ==========================================

console.log("=== PRIMITIVE TYPES DALAM JAVASCRIPT ===\n");
console.log("JavaSript memiliki 5 tipe data primitive:");
console.log("1. Number (angka)");
console.log("2. String (teks)");
console.log("3. Boolean (true/false)");
console.log("4. null (tidak ada nilai)");
console.log("5. undefined (belum ada nilai)\n");

// ==========================================
// 1. NUMBER TYPE
// ==========================================

console.log("=== 1. NUMBER TYPE ===");
let angka_bulat = 10;
let angka_desimal = 3.14;
let angka_negatif = -5;
let angka_besar = 1000000;

console.log("angka_bulat:", angka_bulat, "- tipe:", typeof angka_bulat);
console.log("angka_desimal:", angka_desimal, "- tipe:", typeof angka_desimal);
console.log("angka_negatif:", angka_negatif, "- tipe:", typeof angka_negatif);
console.log("angka_besar:", angka_besar, "- tipe:", typeof angka_besar);

// Nilai spesial untuk Number
console.log("\nNilai spesial dalam Number:");
console.log("Infinity:", Infinity, "- tipe:", typeof Infinity);
console.log("-Infinity:", -Infinity, "- tipe:", typeof -Infinity);
console.log("NaN (Not a Number):", NaN, "- tipe:", typeof NaN);
console.log("");

// ==========================================
// 2. STRING TYPE
// ==========================================

console.log("=== 2. STRING TYPE ===");
let nama = "Andi";
let pesan = 'Selamat datang di JavaScript';
let kalimat = `Hello World dari Template Literal`;
let string_kosong = "";

console.log("nama:", nama, "- tipe:", typeof nama);
console.log("pesan:", pesan, "- tipe:", typeof pesan);
console.log("kalimat:", kalimat, "- tipe:", typeof kalimat);
console.log("string_kosong:", string_kosong, "- tipe:", typeof string_kosong);

// String dengan karakter escape
let escape_string = "Dia berkata \"Halo\" kepada saya";
console.log("escape_string:", escape_string);
console.log("");

// ==========================================
// 3. BOOLEAN TYPE
// ==========================================

console.log("=== 3. BOOLEAN TYPE ===");
let benar = true;
let salah = false;

console.log("benar:", benar, "- tipe:", typeof benar);
console.log("salah:", salah, "- tipe:", typeof salah);

// Boolean dari perbandingan
let nilai = 80;
let lulus = nilai >= 75;
console.log("nilai >= 75:", lulus, "- tipe:", typeof lulus);
console.log("");

// ==========================================
// 4. NULL TYPE
// ==========================================

console.log("=== 4. NULL TYPE ===");
let data_kosong = null;
console.log("data_kosong:", data_kosong, "- tipe:", typeof data_kosong);
console.log("Note: typeof null mengembalikan 'object' (ini adalah bug JavaScript yang sudah lama)");
console.log("");

// ==========================================
// 5. UNDEFINED TYPE
// ==========================================

console.log("=== 5. UNDEFINED TYPE ===");
let variabel_belum_diisi;
console.log("variabel_belum_diisi:", variabel_belum_diisi, "- tipe:", typeof variabel_belum_diisi);

// Mengakses property yang tidak ada
let objek = {};
console.log("objek.property_tidak_ada:", objek.property_tidak_ada, "- tipe:", typeof objek.property_tidak_ada);
console.log("");

// ==========================================
// PERBANDINGAN ANTARA NULL DAN UNDEFINED
// ==========================================

console.log("=== PERBANDINGAN NULL DAN UNDEFINED ===");
console.log("null == undefined:", null == undefined);        // true
console.log("null === undefined:", null === undefined);      // false
console.log("typeof null:", typeof null);                    // object
console.log("typeof undefined:", typeof undefined);          // undefined
console.log("");

// ==========================================
// CEK TIPE DATA DENGAN TYPEOF
// ==========================================

console.log("=== CEK TIPE DATA DENGAN TYPEOF ===");
console.log("typeof 42:", typeof 42);
console.log("typeof 'Hello':", typeof 'Hello');
console.log("typeof true:", typeof true);
console.log("typeof null:", typeof null);
console.log("typeof undefined:", typeof undefined);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof function(){}:", typeof function(){});