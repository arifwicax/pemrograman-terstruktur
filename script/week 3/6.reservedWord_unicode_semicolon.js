// RESERVED WORDS, UNICODE, DAN SEMICOLON DALAM JAVASCRIPT

/*
Program ini mendemonstrasikan:
1. Reserved Words - kata yang tidak boleh dipakai sebagai identifier
2. Unicode - dukungan JavaScript terhadap berbagai karakter
3. Semicolon - penggunaan titik koma dalam JavaScript
*/

console.log("RESERVED WORDS, UNICODE, DAN SEMICOLON DALAM JAVASCRIPT\n");

// I. RESERVED WORDS (KATA YANG TIDAK BOLEH DIPAKAI)

console.log("I. RESERVED WORDS (KATA YANG TIDAK BOLEH DIPAKAI)");
console.log("Reserved words adalah kata yang sudah memiliki fungsi khusus dalam JavaScript\n");

// Daftar beberapa reserved words penting
console.log("Contoh Reserved Words:");
console.log("if, else, for, while, function, return, class, const, let, var");
console.log("switch, case, break, continue, default, try, catch, finally");
console.log("throw, new, this, import, export, async, await");
console.log("");

// CONTOH KESALAHAN PENGGUNAAN RESERVED WORD
console.log("Contoh Kesalahan Penggunaan Reserved Words:");
console.log("(Kode berikut akan menyebabkan SyntaxError jika dijalankan)\n");

/*
Contoh yang SALAH - akan menyebabkan SyntaxError:

let if = 10;         // Error: 'if' adalah reserved word
let for = 20;        // Error: 'for' adalah reserved word  
let function = 30;   // Error: 'function' adalah reserved word
let class = "A";     // Error: 'class' adalah reserved word
let return = 100;    // Error: 'return' adalah reserved word

*/

console.log("Contoh kode yang SALAH:");
console.log('let if = 10;         // SyntaxError');
console.log('let for = 20;        // SyntaxError');
console.log('let function = 30;   // SyntaxError');
console.log('let class = "A";     // SyntaxError');
console.log('let return = 100;    // SyntaxError');
console.log("");

// CONTOH YANG BENAR
console.log("Contoh yang BENAR - Alternatif penamaan:");
console.log("Gunakan nama variabel lain yang tidak termasuk reserved word\n");

let nilai = 90;
let totalNilai = 100;
let jumlahData = 10;
let kondisiIf = true;
let dataLoop = 5;

console.log("nilai:", nilai);
console.log("totalNilai:", totalNilai);
console.log("jumlahData:", jumlahData);
console.log("kondisiIf:", kondisiIf);
console.log("dataLoop:", dataLoop);
console.log("");

// TIPS MENGHINDARI RESERVED WORDS
console.log("Tips Menghindari Reserved Words:");
console.log("Tambahkan kata lain jika ingin membuat variabel yang mirip\n");

let kelasMahasiswa = "A";
let jumlahForLoop = 5;
let nilaiIf = true;
let fungsiUtama = "hitungTotal";
let kondisiWhile = false;

console.log("kelasMahasiswa:", kelasMahasiswa);
console.log("jumlahForLoop:", jumlahForLoop);
console.log("nilaiIf:", nilaiIf);
console.log("fungsiUtama:", fungsiUtama);
console.log("kondisiWhile:", kondisiWhile);
console.log("");

// DEMONSTRASI PENGGUNAAN RESERVED WORDS YANG BENAR
console.log("Demonstrasi Penggunaan Reserved Words yang Benar:");
console.log("Reserved words digunakan sesuai fungsinya\n");

// Menggunakan 'if' untuk kondisi
let umurMahasiswa = 20;
if (umurMahasiswa >= 17) {
    console.log("Mahasiswa sudah dewasa");
}

// Menggunakan 'for' untuk perulangan
console.log("Menggunakan 'for' untuk perulangan:");
for (let i = 1; i <= 3; i++) {
    console.log("Perulangan ke-" + i);
}

// Menggunakan 'function' untuk membuat fungsi
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

let luasPersegi = hitungLuas(5, 4);
console.log("Luas persegi:", luasPersegi);
console.log("");

// II. UNICODE DALAM JAVASCRIPT

console.log("II. UNICODE DALAM JAVASCRIPT");
console.log("JavaScript menggunakan sistem karakter Unicode yang mendukung berbagai bahasa\n");

// CONTOH UNICODE DALAM IDENTIFIER (TIDAK DIREKOMENDASIKAN UNTUK PRODUCTION)
console.log("Contoh Unicode dalam Identifier:");
console.log("(Secara teknis bisa, tapi tidak direkomendasikan)\n");

// Karakter dengan aksen
let café = "kopi";
let piña = "nanas";
let naïve = "polos";

console.log("café:", café);
console.log("piña:", piña);  
console.log("naïve:", naïve);

// Karakter dari bahasa lain (contoh matematika)
let π = 3.14159;
let α = "alpha";
let β = "beta";

console.log("π (pi):", π);
console.log("α (alpha):", α);
console.log("β (beta):", β);
console.log("");

// CONTOH UNICODE DALAM STRING VALUES
console.log("Contoh Unicode dalam String Values:");
console.log("(Ini yang lebih umum dan aman digunakan)\n");

let pesanIndonesia = "Selamat belajar JavaScript! 🎓";
let pesanInggris = "Welcome to JavaScript! 🚀";
let pesanJepang = "JavaScriptへようこそ！ ⭐";
let pesanArab = "مرحباً بكم في جافا سكريبت! 🌟";

console.log("Indonesia:", pesanIndonesia);
console.log("Inggris:", pesanInggris);
console.log("Jepang:", pesanJepang);
console.log("Arab:", pesanArab);

// Karakter khusus dan simbol
let simbolMatematika = "∑ ∫ ∞ ≠ ≤ ≥";
let simbolPanah = "← ↑ → ↓ ↔";
let emoji = "😊 👍 💻 🎮 🏆";

console.log("Simbol Matematika:", simbolMatematika);
console.log("Simbol Panah:", simbolPanah);
console.log("Emoji:", emoji);
console.log("");

// PRAKTIK YANG DISARANKAN UNTUK IDENTIFIER
console.log("Praktik yang Disarankan untuk Identifier:");
console.log("Gunakan huruf alfabet standar untuk kemudahan baca dan konsistensi\n");

// Yang DIREKOMENDASIKAN
let namaMahasiswa = "Budi Santoso";
let jumlahDataContoh = 50;
let totalHarga = 100000;
let statusAktif = true;

console.log("Yang DIREKOMENDASIKAN:");
console.log("namaMahasiswa:", namaMahasiswa);
console.log("jumlahDataContoh:", jumlahDataContoh);
console.log("totalHarga:", totalHarga);
console.log("statusAktif:", statusAktif);

// Alasan menggunakan alfabet standar:
console.log("\nAlasan menggunakan alfabet standar:");
console.log("1. Lebih mudah dibaca oleh semua programmer");
console.log("2. Lebih mudah dipahami oleh tim internasional");
console.log("3. Lebih konsisten dengan konvensi industri");
console.log("4. Kompatibel dengan semua sistem dan tools");
console.log("");

// III. SEMICOLON (TITIK KOMA)

console.log("III. SEMICOLON (TITIK KOMA)");
console.log("Semicolon digunakan untuk mengakhiri atau memisahkan pernyataan dalam JavaScript\n");

// PENGGUNAAN SEMICOLON YANG BENAR
console.log("Penggunaan Semicolon yang Benar:");
console.log("Setiap instruksi sebaiknya diakhiri dengan titik koma\n");

let angka1 = 10;
let angka2 = 5;
let hasil = angka1 + angka2;

console.log("angka1:", angka1);
console.log("angka2:", angka2);
console.log("hasil:", hasil);
console.log("");

// BEBERAPA PERNYATAAN DALAM SATU BARIS
console.log("Beberapa Pernyataan dalam Satu Baris:");
console.log("Semicolon bisa memisahkan beberapa pernyataan dalam satu baris\n");

let x = 10; let y = 20; let z = x + y;
console.log("x:", x, "y:", y, "z:", z);

let a = 5; let b = 3; console.log("a + b =", a + b);
console.log("");

// AUTOMATIC SEMICOLON INSERTION (ASI)
console.log("Automatic Semicolon Insertion (ASI):");
console.log("JavaScript bisa berjalan tanpa semicolon karena fitur ASI\n");

// Tanpa semicolon (masih bisa berjalan)
let nilai1 = 100
let nilai2 = 200
let totalTanpaSemicolon = nilai1 + nilai2

console.log("Tanpa semicolon:");
console.log("nilai1:", nilai1);
console.log("nilai2:", nilai2);
console.log("totalTanpaSemicolon:", totalTanpaSemicolon);
console.log("");

// KASUS DIMANA SEMICOLON PENTING
console.log("Kasus Dimana Semicolon Sangat Penting:");
console.log("Ada situasi dimana tanpa semicolon bisa menyebabkan bug\n");

// Contoh masalah dengan return statement
function testDenganSemicolon() {
    return 42;
}

function testTanpaSemicolon() {
    return
    42;  // Ini tidak akan dikembalikan karena ASI
}

console.log("Dengan semicolon:", testDenganSemicolon()); // 42
console.log("Tanpa semicolon:", testTanpaSemicolon());   // undefined

console.log("\nPenjelasan:");
console.log("JavaScript menganggap 'return;' dan '42;' sebagai pernyataan terpisah");
console.log("");

// CONTOH MASALAH LAIN TANPA SEMICOLON
console.log("Contoh Masalah Lain Tanpa Semicolon:");

// Yang dimaksud
let hasil1 = 10
let hasil2 = 20

// Yang terjadi tanpa semicolon (kadang bisa bermasalah)
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
// Jika ada operasi setelahnya, bisa bermasalah

console.log("array1:", array1);
console.log("array2:", array2);
console.log("");

// PRAKTIK TERBAIK PENGGUNAAN SEMICOLON
console.log("Praktik Terbaik Penggunaan Semicolon:");
console.log("Sebagian besar programmer JavaScript tetap menggunakan semicolon\n");

console.log("Alasan menggunakan semicolon:");
console.log("1. Menghindari bug yang tidak terduga");
console.log("2. Membuat kode lebih jelas dan eksplisit");
console.log("3. Membuat kode lebih konsisten");
console.log("4. Kompatibel dengan tools minification");
console.log("5. Mudah dibaca oleh programmer lain");
console.log("");

// CONTOH PROGRAM DENGAN PRAKTIK TERBAIK
console.log("Contoh Program dengan Praktik Terbaik:");
console.log("Menggunakan semicolon untuk kejelasan dan konsistensi\n");

let hargaBarang = 15000;
let jumlahBeli = 3;
let diskon = 0.1;

let subtotal = hargaBarang * jumlahBeli;
let potonganHarga = subtotal * diskon;
let totalBayar = subtotal - potonganHarga;

console.log("STRUK PEMBELIAN:");
console.log("Harga Barang: Rp", hargaBarang.toLocaleString());
console.log("Jumlah Beli:", jumlahBeli, "item");
console.log("Subtotal: Rp", subtotal.toLocaleString());
console.log("Diskon (10%): Rp", potonganHarga.toLocaleString());
console.log("Total Bayar: Rp", totalBayar.toLocaleString());
console.log("");

// PERBANDINGAN GAYA PENULISAN
console.log("Perbandingan Gaya Penulisan:\n");

console.log("Gaya 1: Dengan Semicolon (DIREKOMENDASIKAN)");
let nama1 = "Andi";
let umur1 = 20;
let kota1 = "Jakarta";
console.log("Data:", nama1, umur1, kota1);

console.log("\nGaya 2: Tanpa Semicolon (TIDAK DIREKOMENDASIKAN)");
let nama2 = "Budi"
let umur2 = 21  
let kota2 = "Bandung"
console.log("Data:", nama2, umur2, kota2);

console.log("\nKeduanya berjalan, tapi gaya 1 lebih aman dan konsisten");
console.log("");

// KESIMPULAN

console.log("KESIMPULAN\n");

console.log("RESERVED WORDS:");
console.log("- Kata yang sudah memiliki fungsi khusus dalam JavaScript");
console.log("- Tidak boleh digunakan sebagai nama variabel atau identifier");
console.log("- Gunakan alternatif nama yang jelas dan deskriptif");
console.log("");

console.log("UNICODE:");  
console.log("- JavaScript mendukung berbagai karakter dari berbagai bahasa");
console.log("- Bisa menggunakan emoji dan simbol khusus dalam string");
console.log("- Untuk identifier, gunakan huruf alfabet standar agar mudah dibaca");
console.log("- Konsistensi dan kemudahan baca lebih penting");
console.log("");

console.log("SEMICOLON:");
console.log("- Digunakan untuk memisahkan dan mengakhiri pernyataan");
console.log("- JavaScript bisa berjalan tanpa semicolon karena ASI");
console.log("- Tetap gunakan semicolon untuk menghindari bug dan meningkatkan kejelasan");
console.log("- Praktik terbaik: selalu gunakan semicolon");
console.log("");

console.log("TIPS UMUM:");
console.log("- Konsistensi dalam coding style sangat penting");
console.log("- Ikuti konvensi yang diterima industri");
console.log("- Prioritaskan kemudahan baca dan maintenance kode");
console.log("- Gunakan tools seperti ESLint untuk menjaga konsistensi");

console.log("\nProgram Reserved Words, Unicode, dan Semicolon selesai");
