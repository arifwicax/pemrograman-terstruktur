/*
=================================================
WEEK 10 - FUNCTION DECLARATION & EXPRESSION
=================================================
File: 2.function_declaration_expression.js
Materi: Cara-cara Mendefinisikan Function

Topik yang dibahas:
1. Function Declaration
2. Function Expression
3. Arrow Function  
4. Function Constructor
5. Perbedaan dan kapan menggunakannya
=================================================
*/

console.log("=== CARA MENDEFINISIKAN FUNCTION ===\n");

// 1. FUNCTION DECLARATION
console.log("1. FUNCTION DECLARATION");
console.log("Cara paling umum dan sederhana untuk membuat function");
console.log();

// Function declaration - hoisted
function sapaPagi(nama) {
    return `Selamat pagi, ${nama}!`;
}

function kali(a, b) {
    return a * b;
}

function cekPositif(angka) {
    if (angka > 0) {
        return "Positif";
    } else if (angka < 0) {
        return "Negatif";
    } else {
        return "Nol";
    }
}

console.log("sapaPagi('Andi'):", sapaPagi('Andi'));
console.log("kali(4, 7):", kali(4, 7));
console.log("cekPositif(-5):", cekPositif(-5));
console.log();

// Demonstrasi hoisting - function bisa dipanggil sebelum didefinisikan
console.log("2. HOISTING PADA FUNCTION DECLARATION");
console.log("hasilHoisting():", hasilHoisting()); // Ini berfungsi!

function hasilHoisting() {
    return "Function declaration di-hoisting!";
}
console.log();

// 2. FUNCTION EXPRESSION
console.log("3. FUNCTION EXPRESSION");
console.log("Function disimpan dalam variabel");
console.log();

// Anonymous function expression
const tambah = function(a, b) {
    return a + b;
};

const kurang = function(a, b) {
    return a - b;
};

// Named function expression (berguna untuk recursion)
const faktorial = function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

console.log("tambah(5, 3):", tambah(5, 3));
console.log("kurang(10, 4):", kurang(10, 4));
console.log("faktorial(5):", faktorial(5));
console.log();

// Function expression tidak di-hoisting
console.log("4. FUNCTION EXPRESSION TIDAK DI-HOISTING");
try {
    console.log(coba()); // Akan error
} catch (e) {
    console.log("Error:", e.message);
}

const coba = function() {
    return "Ini function expression";
};
console.log("Setelah didefinisikan:", coba());
console.log();

// 3. ARROW FUNCTION (ES6)
console.log("5. ARROW FUNCTION");
console.log("Sintaks yang lebih ringkas");
console.log();

// Arrow function dengan body
const bagi = (a, b) => {
    if (b === 0) {
        return "Error: Pembagian dengan nol";
    }
    return a / b;
};

// Arrow function ringkas (satu expression)
const pangkatDua = x => x * x;
const pangkatTiga = x => x * x * x;

// Arrow function tanpa parameter
const getWaktu = () => new Date().toLocaleTimeString('id-ID');

// Arrow function dengan satu parameter (tanda kurung opsional)
const dobel = x => x * 2;
const tripel = x => x * 3;

console.log("bagi(15, 3):", bagi(15, 3));
console.log("pangkatDua(4):", pangkatDua(4));
console.log("pangkatTiga(3):", pangkatTiga(3));
console.log("getWaktu():", getWaktu());
console.log("dobel(7):", dobel(7));
console.log("tripel(5):", tripel(5));
console.log();

// Arrow function dengan object literal harus menggunakan parentheses
const buatOrang = (nama, umur) => ({
    nama: nama,
    umur: umur,
    sapa: function() {
        return `Halo, saya ${this.nama}`;
    }
});

let orang = buatOrang("Budi", 25);
console.log("Object dari arrow function:", orang);
console.log("orang.sapa():", orang.sapa());
console.log();

// 4. FUNCTION CONSTRUCTOR (Jarang digunakan)
console.log("6. FUNCTION CONSTRUCTOR");
console.log("Cara membuat function secara dinamis");
console.log();

// Function constructor
const jumlah = new Function('a', 'b', 'return a + b');
const salam = new Function('nama', 'return "Halo " + nama');

console.log("jumlah(3, 5):", jumlah(3, 5));
console.log("salam('Charlie'):", salam('Charlie'));
console.log();

// 5. PERBANDINGAN SEMUA JENIS FUNCTION
console.log("7. PERBANDINGAN SEMUA JENIS FUNCTION");
console.log();

// Membuat function yang sama dengan 4 cara berbeda
// 1. Function Declaration
function hitungKelilingPersegi1(sisi) {
    return 4 * sisi;
}

// 2. Function Expression
const hitungKelilingPersegi2 = function(sisi) {
    return 4 * sisi;
};

// 3. Arrow Function
const hitungKelilingPersegi3 = sisi => 4 * sisi;

// 4. Function Constructor
const hitungKelilingPersegi4 = new Function('sisi', 'return 4 * sisi');

console.log("Semua function menghasilkan hasil yang sama:");
console.log("Declaration:", hitungKelilingPersegi1(6));
console.log("Expression:", hitungKelilingPersegi2(6));
console.log("Arrow:", hitungKelilingPersegi3(6));
console.log("Constructor:", hitungKelilingPersegi4(6));
console.log();

// 6. KAPAN MENGGUNAKAN MASING-MASING?
console.log("8. KAPAN MENGGUNAKAN?");
console.log();

console.log("FUNCTION DECLARATION:");
console.log("✓ Untuk function utama/penting");
console.log("✓ Ketika butuh hoisting");
console.log("✓ Function yang akan dipanggil di mana-mana");
console.log();

console.log("FUNCTION EXPRESSION:");
console.log("✓ Ketika ingin menghindari hoisting");
console.log("✓ Function sebagai nilai variabel");
console.log("✓ Conditional function creation");
console.log();

console.log("ARROW FUNCTION:");
console.log("✓ Function pendek/sederhana");
console.log("✓ Callback functions");
console.log("✓ Ketika tidak butuh 'this' binding");
console.log();

// 7. CONTOH PENGGUNAAN PRAKTIS
console.log("9. CONTOH PENGGUNAAN PRAKTIS");
console.log();

// Array operation menggunakan berbagai jenis function
let angka = [1, 2, 3, 4, 5];

// Function declaration untuk logic kompleks
function prosesAngka(arr) {
    let hasil = {
        asli: [...arr],
        jumlah: 0,
        genap: [],
        ganjil: []
    };
    
    for (let num of arr) {
        hasil.jumlah += num;
        if (num % 2 === 0) {
            hasil.genap.push(num);
        } else {
            hasil.ganjil.push(num);
        }
    }
    
    return hasil;
}

// Arrow functions untuk transformasi sederhana
const dikaliDua = arr => arr.map(x => x * 2);
const cariGenap = arr => arr.filter(x => x % 2 === 0);
const totalSemua = arr => arr.reduce((total, x) => total + x, 0);

console.log("Data asli:", angka);
console.log("Proses lengkap:", prosesAngka(angka));
console.log("Dikali dua:", dikaliDua(angka));
console.log("Cari genap:", cariGenap(angka));
console.log("Total semua:", totalSemua(angka));
console.log();

// 8. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
console.log("10. IIFE (Immediately Invoked Function Expression)");
console.log("Function yang langsung dipanggil setelah didefinisikan");
console.log();

// IIFE dengan function expression
(function() {
    console.log("Ini IIFE dengan function expression!");
})();

// IIFE dengan arrow function
(() => {
    console.log("Ini IIFE dengan arrow function!");
})();

// IIFE dengan parameter dan return value
let hasilIIFE = (function(a, b) {
    console.log(`Menghitung ${a} + ${b} dalam IIFE`);
    return a + b;
})(10, 20);

console.log("Hasil IIFE:", hasilIIFE);
console.log();

// 9. CONDITIONAL FUNCTION CREATION
console.log("11. CONDITIONAL FUNCTION CREATION");
console.log();

let mode = "development";

// Membuat function berbeda berdasarkan kondisi
const logger = mode === "development" 
    ? function(message) {
        console.log(`[DEBUG] ${new Date().toISOString()}: ${message}`);
    }
    : function(message) {
        // Production mode - log minimal
        console.log(message);
    };

logger("Ini pesan log");
console.log();

console.log("=== SELESAI: FUNCTION DECLARATION & EXPRESSION ===");