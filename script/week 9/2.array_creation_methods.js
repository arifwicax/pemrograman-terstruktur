// ==========================================
// CARA MEMBUAT ARRAY DALAM JAVASCRIPT
// ==========================================

console.log("=== CARA MEMBUAT ARRAY DALAM JAVASCRIPT ===\n");
console.log("Ada beberapa cara untuk membuat array dalam JavaScript.");
console.log("Mari kita pelajari satu per satu!\n");

// ==========================================
// 1. ARRAY LITERAL (PALING UMUM)
// ==========================================

console.log("=== 1. ARRAY LITERAL ===");
console.log("Cara paling sederhana dan paling sering digunakan");
console.log("Menggunakan tanda kurung siku []");
console.log("");

// Array kosong
let kosong = [];
console.log("Array kosong:", kosong);

// Array dengan elemen
let angka = [1, 2, 3, 4, 5];
console.log("Array angka:", angka);

let buah = ["apel", "jeruk", "pisang"];
console.log("Array buah:", buah);

let boolean = [true, false, true];
console.log("Array boolean:", boolean);

// Array dengan berbagai tipe
let campuran = [1, "hello", true, 3.14, null];
console.log("Array campuran:", campuran);

// Array dengan trailing comma (diperbolehkan)
let denganKoma = [1, 2, 3,]; // Koma terakhir OK
console.log("Array dengan trailing comma:", denganKoma);

// ==========================================
// 2. CONSTRUCTOR ARRAY()
// ==========================================

console.log("\n=== 2. CONSTRUCTOR ARRAY() ===");
console.log("Menggunakan kata kunci 'new Array()'");
console.log("Ada 3 cara penggunaan:");
console.log("");

// Cara 1: Tanpa parameter (array kosong)
let arr1 = new Array();
console.log("new Array():", arr1);

// Cara 2: Satu parameter angka (menentukan panjang)
let arr2 = new Array(5);
console.log("new Array(5):", arr2, "- Length:", arr2.length);
console.log("Isi elemen:", arr2[0], arr2[1], arr2[2]); // semua undefined

// Cara 3: Beberapa parameter (elemen array)
let arr3 = new Array(1, 2, 3, 4, 5);
console.log("new Array(1,2,3,4,5):", arr3);

let arr4 = new Array("apel", "jeruk", "pisang");
console.log("new Array dengan string:", arr4);

// Hati-hati dengan satu parameter!
console.log("\nHati-hati dengan satu parameter:");
console.log("new Array(3):", new Array(3));        // [empty × 3]
console.log("new Array('3'):", new Array('3'));    // ['3']

// ==========================================
// 3. ARRAY.OF()
// ==========================================

console.log("\n=== 3. ARRAY.OF() ===");
console.log("Membuat array dari semua parameter yang diberikan");
console.log("Mengatasi masalah Array() constructor");
console.log("");

// Dengan beberapa elemen
let arr5 = Array.of(1, 2, 3, 4, 5);
console.log("Array.of(1,2,3,4,5):", arr5);

// Dengan satu elemen (tidak seperti constructor)
let arr6 = Array.of(3);
console.log("Array.of(3):", arr6);        // [3], bukan array dengan 3 slot

let arr7 = Array.of(10);
console.log("Array.of(10):", arr7);       // [10], bukan array dengan 10 slot

// Dengan berbagai tipe
let arr8 = Array.of("hello", 42, true);
console.log("Array.of campuran:", arr8);

// Array kosong
let arr9 = Array.of();
console.log("Array.of():", arr9);

// ==========================================
// 4. ARRAY.FROM()
// ==========================================

console.log("\n=== 4. ARRAY.FROM() ===");
console.log("Membuat array dari object yang mirip array atau iterable");
console.log("");

// Dari string (string adalah iterable)
let dariString = Array.from("Hello");
console.log("Array.from('Hello'):", dariString);

let dariAngka = Array.from("12345");
console.log("Array.from('12345'):", dariAngka);

// Membuat array dengan panjang tertentu dan nilai default
let arr10 = Array.from({length: 5}, () => 0);
console.log("Array dengan 5 angka nol:", arr10);

let arr11 = Array.from({length: 3}, () => "hello");
console.log("Array dengan 3 'hello':", arr11);

// Dengan fungsi mapping
let arr12 = Array.from({length: 5}, (v, i) => i);
console.log("Array.from index (0-4):", arr12);

let arr13 = Array.from({length: 5}, (v, i) => i * 2);
console.log("Array.from index * 2:", arr13);

let arr14 = Array.from({length: 5}, (v, i) => i * i);
console.log("Array.from kuadrat:", arr14);

// Dari array existing (membuat copy)
let asli = [1, 2, 3];
let salinan = Array.from(asli);
console.log("Array asli:", asli);
console.log("Array salinan:", salinan);
console.log("Apakah sama?", asli === salinan); // false (beda object)

// ==========================================
// 5. SPREAD OPERATOR (...)
// ==========================================

console.log("\n=== 5. SPREAD OPERATOR (...) ===");
console.log("Menggunakan operator ... untuk menyebarkan elemen");
console.log("");

// Membuat salinan array
let original = [1, 2, 3];
let copy = [...original];
console.log("Original:", original);
console.log("Copy:", copy);
console.log("Apakah sama?", original === copy); // false

// Menggabungkan array
let arr15 = [1, 2, 3];
let arr16 = [4, 5, 6];
let gabungan = [...arr15, ...arr16];
console.log("Gabungan:", gabungan);

// Menambahkan elemen
let tambah = [0, ...arr15, 4];
console.log("Tambah elemen:", tambah);

// Dari string
let huruf = [..."HELLO"];
console.log("Spread string:", huruf);

// Menghapus duplikat dengan Set
let duplikat = [1, 2, 2, 3, 3, 4];
let unik = [...new Set(duplikat)];
console.log("Array dengan duplikat:", duplikat);
console.log("Array unik:", unik);

// ==========================================
// 6. PERBANDINGAN METODE
// ==========================================

console.log("\n=== 6. PERBANDINGAN METODE ===");
console.log("");

console.log("1. Array Literal [] - DIREKOMENDASIKAN");
console.log("   + Sederhana dan mudah dibaca");
console.log("   + Performa baik");
console.log("   + Paling umum digunakan");
console.log("");

console.log("2. new Array()");
console.log("   - Membingungkan untuk satu parameter");
console.log("   - Tidak konsisten");
console.log("   - Jarang digunakan");
console.log("");

console.log("3. Array.of()");
console.log("   + Konsisten untuk semua kasus");
console.log("   + Bagus untuk parameter dinamis");
console.log("   - Kurang familiar");
console.log("");

console.log("4. Array.from()");
console.log("   + Powerful untuk konversi");
console.log("   + Bagus untuk membuat array dengan pola");
console.log("   + Bisa langsung mapping");
console.log("");

console.log("5. Spread Operator [...]");
console.log("   + Bagus untuk copy dan gabung array");
console.log("   + Syntax modern dan bersih");
console.log("   + Fleksibel");

// ==========================================
// 7. CONTOH PRAKTIS
// ==========================================

console.log("\n=== 7. CONTOH PRAKTIS ===");

// Daftar siswa
let siswa = ["Ahmad", "Budi", "Citra", "Diana"];
console.log("Daftar siswa:", siswa);

// Nilai ujian
let nilaiUjian = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log("Nilai ujian random:", nilaiUjian);

// Hari kerja
let hariKerja = Array.of("Senin", "Selasa", "Rabu", "Kamis", "Jumat");
console.log("Hari kerja:", hariKerja);

// Alfabet
let alfabet = Array.from({length: 26}, (v, i) => String.fromCharCode(65 + i));
console.log("Alfabet:", alfabet);

// Angka genap 1-20
let genap = Array.from({length: 10}, (v, i) => (i + 1) * 2);
console.log("Angka genap 1-20:", genap);

console.log("\n=== CARA MEMBUAT ARRAY SELESAI ===");
console.log("Lanjut ke file berikutnya untuk belajar mengakses dan memanipulasi array!");