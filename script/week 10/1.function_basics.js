/*
=================================================
WEEK 10 - FUNCTION BASICS
=================================================
File: 1.function_basics.js
Materi: Dasar-dasar Function dalam JavaScript

Topik yang dibahas:
1. Konsep dasar function
2. Membuat function sederhana
3. Memanggil function
4. Keuntungan menggunakan function
=================================================
*/

console.log("=== DASAR-DASAR FUNCTION ===\n");

// 1. KONSEP DASAR FUNCTION
console.log("1. KONSEP DASAR FUNCTION");
console.log("Function adalah blok kode yang dapat dipanggil berulang kali");
console.log("Seperti mesin: Input (parameter) → Proses (kode) → Output (return)");
console.log();

// 2. MEMBUAT FUNCTION SEDERHANA
console.log("2. FUNCTION SEDERHANA");

// Function untuk menyapa
function sapa() {
    return "Halo! Selamat datang di JavaScript";
}

// Function untuk menghitung luas persegi
function luasPersegi(sisi) {
    return sisi * sisi;
}

// Function untuk menambah dua angka
function tambah(a, b) {
    return a + b;
}

// Function untuk mengecek ganjil genap
function cekGanjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

console.log("Function sapa():", sapa());
console.log("Function luasPersegi(5):", luasPersegi(5));
console.log("Function tambah(3, 7):", tambah(3, 7));
console.log("Function cekGanjilGenap(8):", cekGanjilGenap(8));
console.log();

// 3. FUNCTION TANPA PARAMETER
console.log("3. FUNCTION TANPA PARAMETER");

function waktuSekarang() {
    let sekarang = new Date();
    return sekarang.toLocaleString('id-ID');
}

function angkaRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log("Waktu sekarang:", waktuSekarang());
console.log("Angka random:", angkaRandom());
console.log();

// 4. FUNCTION DENGAN MULTIPLE PARAMETER
console.log("4. FUNCTION DENGAN MULTIPLE PARAMETER");

function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}

function buatBiodata(nama, umur, kota) {
    return `Nama: ${nama}, Umur: ${umur} tahun, Kota: ${kota}`;
}

function hitungRataRata(nilai1, nilai2, nilai3) {
    return (nilai1 + nilai2 + nilai3) / 3;
}

console.log("Luas segitiga (alas: 10, tinggi: 8):", hitungLuasSegitiga(10, 8));
console.log("Biodata:", buatBiodata("Andi", 20, "Jakarta"));
console.log("Rata-rata nilai (85, 90, 78):", hitungRataRata(85, 90, 78));
console.log();

// 5. FUNCTION DENGAN KONDISI
console.log("5. FUNCTION DENGAN KONDISI");

function cekKelulusan(nilai) {
    if (nilai >= 75) {
        return "Lulus dengan baik";
    } else if (nilai >= 60) {
        return "Lulus";
    } else {
        return "Tidak lulus";
    }
}

function kategoriUmur(umur) {
    if (umur < 13) {
        return "Anak-anak";
    } else if (umur < 20) {
        return "Remaja";
    } else if (umur < 60) {
        return "Dewasa";
    } else {
        return "Lansia";
    }
}

console.log("Kelulusan nilai 80:", cekKelulusan(80));
console.log("Kelulusan nilai 65:", cekKelulusan(65));
console.log("Kelulusan nilai 50:", cekKelulusan(50));
console.log("Kategori umur 15:", kategoriUmur(15));
console.log("Kategori umur 25:", kategoriUmur(25));
console.log();

// 6. FUNCTION DENGAN LOOP
console.log("6. FUNCTION DENGAN LOOP");

function hitungFaktorial(n) {
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}

function cetakAngka(dari, sampai) {
    let hasil = "";
    for (let i = dari; i <= sampai; i++) {
        hasil += i + " ";
    }
    return hasil;
}

function hitungJumlahDigit(angka) {
    let total = 0;
    let str = angka.toString();
    for (let i = 0; i < str.length; i++) {
        total += parseInt(str[i]);
    }
    return total;
}

console.log("Faktorial 5:", hitungFaktorial(5));
console.log("Angka dari 1 sampai 10:", cetakAngka(1, 10));
console.log("Jumlah digit 12345:", hitungJumlahDigit(12345));
console.log();

// 7. PERBANDINGAN DENGAN DAN TANPA FUNCTION
console.log("7. PERBANDINGAN KODE");

console.log("--- TANPA FUNCTION (REPETITIF) ---");
// Menghitung luas beberapa persegi tanpa function
let luas1 = 5 * 5;
let luas2 = 8 * 8;
let luas3 = 12 * 12;
console.log(`Luas persegi 1 (sisi 5): ${luas1}`);
console.log(`Luas persegi 2 (sisi 8): ${luas2}`);
console.log(`Luas persegi 3 (sisi 12): ${luas3}`);

console.log("\n--- DENGAN FUNCTION (REUSABLE) ---");
// Menggunakan function yang sudah dibuat
console.log(`Luas persegi 1 (sisi 5): ${luasPersegi(5)}`);
console.log(`Luas persegi 2 (sisi 8): ${luasPersegi(8)}`);
console.log(`Luas persegi 3 (sisi 12): ${luasPersegi(12)}`);
console.log();

// 8. KEUNTUNGAN MENGGUNAKAN FUNCTION
console.log("8. KEUNTUNGAN FUNCTION");
console.log("✓ Reusability - Dapat digunakan berulang kali");
console.log("✓ Modular - Kode terbagi menjadi bagian-bagian kecil");
console.log("✓ Maintainability - Mudah dipelihara dan diubah");
console.log("✓ Readability - Kode lebih mudah dibaca");
console.log("✓ Testing - Mudah ditest secara terpisah");
console.log();

// 9. CONTOH PRAKTIS
console.log("9. CONTOH PRAKTIS - SISTEM PENILAIAN");

function hitungGrade(nilai) {
    if (nilai >= 90) return "A";
    else if (nilai >= 80) return "B";
    else if (nilai >= 70) return "C";
    else if (nilai >= 60) return "D";
    else return "E";
}

function statusKelulusan(nilai) {
    return nilai >= 60 ? "LULUS" : "TIDAK LULUS";
}

// Testing dengan beberapa nilai
let daftarNilai = [95, 85, 75, 65, 55];
console.log("HASIL PENILAIAN:");
for (let i = 0; i < daftarNilai.length; i++) {
    let nilai = daftarNilai[i];
    console.log(`Nilai ${nilai}: Grade ${hitungGrade(nilai)}, Status: ${statusKelulusan(nilai)}`);
}
console.log();

console.log("=== SELESAI: DASAR-DASAR FUNCTION ===");