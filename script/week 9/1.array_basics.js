// ==========================================
// ARRAY BASICS DALAM JAVASCRIPT
// ==========================================

console.log("=== ARRAY BASICS DALAM JAVASCRIPT ===\n");
console.log("Array adalah struktur data yang menyimpan sekumpulan nilai dalam urutan tertentu.");
console.log("Array sangat berguna untuk menyimpan data yang sejenis atau berhubungan.\n");

// ==========================================
// 1. APA ITU ARRAY
// ==========================================

console.log("=== 1. APA ITU ARRAY ===");
console.log("Array adalah kumpulan data yang disimpan dengan index (urutan) tertentu\n");

// Contoh array sederhana
let angka = [1, 2, 3, 4, 5];
console.log("Array angka:", angka);

let buah = ["apel", "jeruk", "pisang", "mangga"];
console.log("Array buah:", buah);

let mahasiswa = ["Andi", "Budi", "Cici", "Doni", "Eka"];
console.log("Array nama mahasiswa:", mahasiswa);

// Array dengan berbagai tipe data
let campuran = [1, "Hello", true, 3.14, null];
console.log("Array campuran:", campuran);

// ==========================================
// 2. INDEX ARRAY (DIMULAI DARI 0)
// ==========================================

console.log("\n=== 2. INDEX ARRAY ===");
console.log("Index array dimulai dari 0, bukan 1!");
console.log("Array buah:", buah);
console.log("");

console.log("Index 0 (elemen pertama):", buah[0]);   // "apel"
console.log("Index 1 (elemen kedua):", buah[1]);     // "jeruk"
console.log("Index 2 (elemen ketiga):", buah[2]);    // "pisang"
console.log("Index 3 (elemen keempat):", buah[3]);   // "mangga"

// Mengakses index yang tidak ada
console.log("Index 10 (tidak ada):", buah[10]);      // undefined

// ==========================================
// 3. PROPERTY LENGTH
// ==========================================

console.log("\n=== 3. PROPERTY LENGTH ===");
console.log("Property length menunjukkan jumlah elemen dalam array");
console.log("");

console.log("Panjang array buah:", buah.length);     // 4
console.log("Panjang array angka:", angka.length);   // 5
console.log("Panjang array mahasiswa:", mahasiswa.length); // 5

// Array kosong
let kosong = [];
console.log("Panjang array kosong:", kosong.length); // 0

// ==========================================
// 4. KARAKTERISTIK ARRAY JAVASCRIPT
// ==========================================

console.log("\n=== 4. KARAKTERISTIK ARRAY JAVASCRIPT ===");
console.log("1. Zero-based indexing (dimulai dari 0)");
console.log("2. Dynamic (ukuran dapat berubah)");
console.log("3. Untyped (dapat menyimpan berbagai tipe data)");
console.log("4. Ordered (memiliki urutan)");
console.log("5. Mutable (dapat diubah)");
console.log("");

// Demonstrasi Dynamic (ukuran berubah)
console.log("Demonstrasi Dynamic Array:");
let dinamis = [1, 2, 3];
console.log("Array awal:", dinamis, "- Length:", dinamis.length);

dinamis[3] = 4;  // Menambah elemen
console.log("Setelah menambah elemen:", dinamis, "- Length:", dinamis.length);

dinamis[10] = 11; // Menambah di index jauh
console.log("Setelah menambah di index 10:", dinamis, "- Length:", dinamis.length);

// Demonstrasi Untyped (berbagai tipe data)
console.log("\nDemonstrasi Untyped Array:");
let beragam = [
    "String",           // String
    42,                 // Number
    true,               // Boolean
    [1, 2, 3],         // Array
    {nama: "Andi"},    // Object
    null,              // Null
    undefined          // Undefined
];

console.log("Array dengan berbagai tipe:", beragam);
beragam.forEach((item, index) => {
    console.log(`Index ${index}: ${item} (${typeof item})`);
});

// ==========================================
// 5. CONTOH PENGGUNAAN ARRAY
// ==========================================

console.log("\n=== 5. CONTOH PENGGUNAAN ARRAY ===");

// Daftar nilai mahasiswa
let nilai = [85, 90, 78, 92, 88];
console.log("Daftar nilai mahasiswa:", nilai);

// Daftar hari dalam seminggu
let hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
console.log("Hari dalam seminggu:", hari);

// Daftar warna
let warna = ["merah", "hijau", "biru", "kuning", "ungu"];
console.log("Daftar warna:", warna);

// Data produk (array of objects)
let produk = [
    {nama: "Laptop", harga: 15000000},
    {nama: "Mouse", harga: 150000},
    {nama: "Keyboard", harga: 500000}
];
console.log("Daftar produk:", produk);

// ==========================================
// 6. SPARSE ARRAY (ARRAY DENGAN LUBANG)
// ==========================================

console.log("\n=== 6. SPARSE ARRAY ===");
console.log("Sparse array adalah array yang memiliki 'lubang' (elemen kosong)");
console.log("");

// Membuat sparse array
let sparse = [1, , , 4, 5]; // Ada lubang di index 1 dan 2
console.log("Sparse array:", sparse);
console.log("Length:", sparse.length);
console.log("Index 1 (lubang):", sparse[1]); // undefined
console.log("Index 2 (lubang):", sparse[2]); // undefined

// Sparse array dengan constructor
let sparse2 = new Array(5); // 5 slot kosong
console.log("Sparse array dengan constructor:", sparse2);
console.log("Length:", sparse2.length);

console.log("\n=== ARRAY BASICS SELESAI ===");
console.log("Lanjut ke file berikutnya untuk belajar cara membuat array!");