// ==========================================
// SPASI DAN BARIS BARU DALAM JAVASCRIPT
// (WHITESPACE & LINE BREAKS)
// ==========================================

console.log("=== SPASI DAN BARIS BARU DALAM JAVASCRIPT ===\n");
console.log("JavaScript biasanya mengabaikan spasi dan baris baru");
console.log("Program tetap berjalan walaupun format tidak rapi\n");

// ==========================================
// 1. CONTOH PENULISAN KODE YANG RAPI
// ==========================================

console.log("=== 1. Contoh Penulisan Kode yang Rapi ===");
let a = 10;
let b = 5;
let c = a + b;

console.log("a =", a);
console.log("b =", b);
console.log("c = a + b =", c);
console.log("Kode ini mudah dibaca dan dipahami\n");

// ==========================================
// 2. CONTOH TANPA SPASI YANG RAPI
// ==========================================

console.log("=== 2. Contoh Tanpa Spasi yang Tidak Rapi ===");
// Kode berikut tetap benar secara sintaks walaupun tidak rapi
let x=10; let y=5; let z=x+y; console.log("Hasil x+y =", z);
console.log("Kode di atas sulit dibaca tapi tetap berjalan\n");

// ==========================================
// 3. SPASI BERLEBIHAN TIDAK BERPENGARUH
// ==========================================

console.log("=== 3. Spasi Berlebihan Tidak Berpengaruh ===");
let      angka1      =      10;
let angka2       =5;

console.log("angka1 =", angka1);
console.log("angka2 =", angka2);
console.log(   "Hasil angka1 + angka2 =", angka1 + angka2   );
console.log("Spasi berlebihan diabaikan oleh JavaScript\n");

// ==========================================
// 4. BARIS BARU JUGA TIDAK SELALU PENTING
// ==========================================

console.log("=== 4. Baris Baru Tidak Selalu Penting ===");

// Cara penulisan normal (rapi)
let harga1 = 1000;
let qty1 = 3;
console.log("Total cara normal:", harga1 * qty1);

// Cara penulisan dalam satu baris (tetap benar)
let harga2 = 2000; let qty2 = 2; console.log("Total satu baris:", harga2 * qty2);
console.log("Kedua cara penulisan menghasilkan output yang sama\n");

// ==========================================
// 5. KAPAN BARIS BARU BISA MENYEBABKAN MASALAH
// ==========================================

console.log("=== 5. Kapan Baris Baru Bisa Menyebabkan Masalah ===");

// Contoh SALAH - return statement terpisah
function cekSalah(){
    return
    true;
}

console.log("Hasil function salah:", cekSalah()); // undefined

// Contoh BENAR - return statement dalam satu baris
function cekBenar(){
    return true;
}

console.log("Hasil function benar:", cekBenar()); // true
console.log("Return statement harus ditulis dengan hati-hati\n");

// ==========================================
// 6. PENTINGNYA MENULIS KODE YANG RAPI
// ==========================================

console.log("=== 6. Pentingnya Menulis Kode yang Rapi ===");

// Contoh kode yang RAPI dan mudah dibaca
console.log("--- Contoh Kode Rapi ---");
let hargaBarang = 15000;
let jumlahBeli = 4;
let diskon = 0.1; // 10%

let subTotal = hargaBarang * jumlahBeli;
let potongan = subTotal * diskon;
let totalBayar = subTotal - potongan;

console.log("Harga barang:", hargaBarang);
console.log("Jumlah beli:", jumlahBeli);
console.log("Sub total:", subTotal);
console.log("Potongan:", potongan);
console.log("Total bayar:", totalBayar);

console.log("\n--- Contoh Kode Tidak Rapi (tapi tetap berjalan) ---");
// Kode yang sulit dibaca tapi tetap benar
let hargaBarang2=15000;let jumlahBeli2=4;let diskon2=0.1;let subTotal2=hargaBarang2*jumlahBeli2;let potongan2=subTotal2*diskon2;let totalBayar2=subTotal2-potongan2;console.log("Total tidak rapi:", totalBayar2);

console.log("\nKedua kode menghasilkan hasil yang sama");
console.log("Tapi kode rapi lebih mudah dipahami dan diperbaiki\n");

// ==========================================
// CONTOH PRAKTIS: PERBANDINGAN GAYA PENULISAN
// ==========================================

console.log("=== Contoh Praktis: Perbandingan Gaya Penulisan ===");

// Gaya 1: Sangat rapi dan terstruktur
console.log("--- Gaya 1: Sangat Rapi ---");
function hitungLuasSegitiga(alas, tinggi) {
    let luas = (alas * tinggi) / 2;
    return luas;
}

let alasSegitiga = 10;
let tinggiSegitiga = 8;
let luasHasil = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
console.log(`Luas segitiga dengan alas ${alasSegitiga} dan tinggi ${tinggiSegitiga} = ${luasHasil}`);

// Gaya 2: Tidak rapi tapi tetap benar
console.log("\n--- Gaya 2: Tidak Rapi ---");
function hitungLuasSegitiga2(alas,tinggi){let luas=(alas*tinggi)/2;return luas;}let alasSegitiga2=10;let tinggiSegitiga2=8;let luasHasil2=hitungLuasSegitiga2(alasSegitiga2,tinggiSegitiga2);console.log("Luas segitiga tidak rapi:",luasHasil2);

console.log("\nKedua gaya menghasilkan hasil yang sama!");

// ==========================================
// KESIMPULAN
// ==========================================

console.log("\n=== KESIMPULAN ===");
console.log("1. JavaScript mengabaikan sebagian besar spasi dan baris baru");
console.log("2. Program tetap berjalan walaupun kode tidak ditulis rapi");
console.log("3. Programmer harus tetap menulis kode dengan format yang jelas");
console.log("4. Kode yang rapi memudahkan:");
console.log("   - Membaca dan memahami kode");
console.log("   - Debugging dan perbaikan");
console.log("   - Kerja sama dalam tim");
console.log("   - Maintenance jangka panjang");
console.log("5. Hati-hati dengan return statement dan baris baru");
console.log("6. Gunakan indentasi dan spasi yang konsisten");

console.log("\TIPS: Selalu utamakan keterbacaan kode!");
console.log("Kode yang baik = Kode yang mudah dipahami manusia");
