// COMMENTS (KOMENTAR) DALAM JAVASCRIPT

/*
Program ini mendemonstrasikan penggunaan komentar dalam JavaScript
Komentar adalah teks yang tidak dijalankan oleh program
Fungsi: memberikan penjelasan kepada programmer
*/

console.log("COMMENTS (KOMENTAR) DALAM JAVASCRIPT\n");

// 1. KOMENTAR SATU BARIS (SINGLE LINE COMMENT)

console.log("1. Komentar Satu Baris (Single Line Comment)");

// Ini adalah contoh komentar satu baris
let nilai = 90; // Menyimpan nilai mahasiswa

// Menampilkan nilai ke console
console.log("Nilai mahasiswa:", nilai);

// Komentar di atas tidak mempengaruhi jalannya program
console.log("Komentar menggunakan simbol '//' untuk satu baris\n");

// 2. KOMENTAR LEBIH DARI SATU BARIS (MULTI LINE COMMENT)

console.log("2. Komentar Multi Baris (Multi Line Comment)");

/*
Ini adalah contoh komentar multi baris
Komentar ini bisa mencakup beberapa baris
Berguna untuk penjelasan yang lebih panjang
Menggunakan tanda slash-asterisk untuk membuka dan asterisk-slash untuk menutup
*/

let panjang = 10; // Panjang persegi panjang
let lebar = 5;    // Lebar persegi panjang

/*
Menghitung luas persegi panjang
Rumus: luas = panjang × lebar
*/
let luas = panjang * lebar;

console.log("Panjang:", panjang);
console.log("Lebar:", lebar);
console.log("Luas persegi panjang:", luas);
console.log("Komentar multi baris menggunakan /* */\n");

// 3. CONTOH PENGGUNAAN KOMENTAR DALAM PROGRAM

console.log("3. Contoh Penggunaan Komentar dalam Program");

// Deklarasi variabel untuk menghitung luas lingkaran
let jariJari = 7;           // dalam satuan cm
let phi = 3.14159;          // konstanta pi

// Rumus luas lingkaran: π × r²
let luasLingkaran = phi * jariJari * jariJari;

// Rumus keliling lingkaran: 2 × π × r
let kelilingLingkaran = 2 * phi * jariJari;

// Menampilkan hasil perhitungan
console.log("Jari-jari lingkaran:", jariJari, "cm");
console.log("Luas lingkaran:", luasLingkaran, "cm²");
console.log("Keliling lingkaran:", kelilingLingkaran, "cm");
console.log("Komentar membantu memahami setiap bagian program\n");

// 4. KOMENTAR UNTUK DOKUMENTASI PROGRAM

console.log("4. Komentar untuk Dokumentasi Program");

/*
Program      : Kalkulator Sederhana
Pembuat      : Mahasiswa Pemrograman Terstruktur
Tanggal      : Maret 2026
Deskripsi    : Program untuk operasi matematika dasar
*/

// Fungsi untuk penjumlahan
function tambah(a, b) {
    return a + b; // Mengembalikan hasil penjumlahan
}

// Fungsi untuk pengurangan
function kurang(a, b) {
    return a - b; // Mengembalikan hasil pengurangan
}

// Fungsi untuk perkalian
function kali(a, b) {
    return a * b; // Mengembalikan hasil perkalian
}

// Fungsi untuk pembagian
function bagi(a, b) {
    if (b !== 0) {
        return a / b; // Mengembalikan hasil pembagian
    } else {
        return "Error: Tidak bisa dibagi dengan nol"; // Handle pembagian dengan nol
    }
}

// Testing semua fungsi
let angka1 = 15;
let angka2 = 3;

console.log("Angka 1:", angka1);
console.log("Angka 2:", angka2);
console.log("Penjumlahan:", tambah(angka1, angka2));
console.log("Pengurangan:", kurang(angka1, angka2));
console.log("Perkalian:", kali(angka1, angka2));
console.log("Pembagian:", bagi(angka1, angka2));
console.log("Dokumentasi program membantu memahami tujuan program\n");

// 5. KOMENTAR UNTUK MENONAKTIFKAN KODE (DEBUGGING)

console.log("5. Komentar untuk Menonaktifkan Kode");

let skorUjian = 85;

// Baris di bawah ini dinonaktifkan untuk debugging
// console.log("Debug: Skor ujian =", skorUjian);

/*
Blok kode di bawah ini juga dinonaktifkan
console.log("Debug info 1");
console.log("Debug info 2");
console.log("Debug info 3");
*/

// Menentukan grade berdasarkan skor
let grade;
if (skorUjian >= 90) {
    grade = "A";
    // console.log("Debug: Grade A"); // Debug dinonaktifkan
} else if (skorUjian >= 80) {
    grade = "B";
    // console.log("Debug: Grade B"); // Debug dinonaktifkan
} else if (skorUjian >= 70) {
    grade = "C";
    // console.log("Debug: Grade C"); // Debug dinonaktifkan
} else {
    grade = "D";
    // console.log("Debug: Grade D"); // Debug dinonaktifkan
}

console.log("Skor ujian:", skorUjian);
console.log("Grade:", grade);
console.log("Komentar berguna untuk menonaktifkan kode sementara\n");

// 6. CONTOH PRAKTIS: PROGRAM DENGAN KOMENTAR LENGKAP

console.log("6. Contoh Praktis: Program dengan Komentar Lengkap");

/*
Program Menghitung BMI (Body Mass Index)
Formula: BMI = berat (kg) / (tinggi (m))²
Kategori BMI:
- Underweight: < 18.5
- Normal: 18.5 - 24.9
- Overweight: 25.0 - 29.9
- Obese: ≥ 30.0
*/

// Input data
let beratBadan = 65;    // dalam kg
let tinggiBadan = 1.70; // dalam meter

// Menghitung BMI
let bmi = beratBadan / (tinggiBadan * tinggiBadan);

// Menentukan kategori BMI
let kategori;
if (bmi < 18.5) {
    kategori = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal";
} else if (bmi >= 25.0 && bmi <= 29.9) {
    kategori = "Overweight";
} else {
    kategori = "Obese";
}

// Menampilkan hasil
console.log("Hasil Perhitungan BMI");
console.log("Berat badan:", beratBadan, "kg");
console.log("Tinggi badan:", tinggiBadan, "m");
console.log("BMI:", bmi.toFixed(2)); // Membulatkan hingga 2 desimal
console.log("Kategori:", kategori);

// Saran berdasarkan kategori
if (kategori === "Normal") {
    console.log("Saran: Pertahankan pola hidup sehat!");
} else {
    console.log("Saran: Konsultasikan dengan dokter untuk pola hidup yang lebih sehat");
}

console.log("\nKomentar membuat program lebih mudah dipahami\n");

// PERBANDINGAN: KODE DENGAN DAN TANPA KOMENTAR

console.log("Perbandingan: Kode dengan dan tanpa Komentar");

console.log("Kode TANPA Komentar (sulit dipahami)");
let p=10;let l=5;let t=8;let lp=p*l;let v=p*l*t;console.log("Lp:",lp,"V:",v);

console.log("\nKode DENGAN Komentar (mudah dipahami)");
// Menghitung luas permukaan dan volume balok
let panjangBalok = 10; // panjang balok dalam cm
let lebarBalok = 5;    // lebar balok dalam cm
let tinggiBalok = 8;   // tinggi balok dalam cm

// Rumus luas permukaan balok: 2 × (p×l + p×t + l×t)
let luasPermukaan = 2 * (panjangBalok*lebarBalok + panjangBalok*tinggiBalok + lebarBalok*tinggiBalok);

// Rumus volume balok: p × l × t
let volumeBalok = panjangBalok * lebarBalok * tinggiBalok;

// Menampilkan hasil perhitungan
console.log("Dimensi balok:", panjangBalok, "×", lebarBalok, "×", tinggiBalok, "cm");
console.log("Luas permukaan:", luasPermukaan, "cm²");
console.log("Volume:", volumeBalok, "cm³");

console.log("\nTerlihat jelas perbedaannya!\n");

// MENGAPA KOMENTAR PENTING

console.log("Mengapa Komentar Penting");
console.log("1. Membantu memahami kode");
console.log("2. Memudahkan perbaikan program (debugging)");
console.log("3. Membantu kerja tim (collaboration)");
console.log("4. Membantu mengingat fungsi kode di masa depan");
console.log("5. Membuat kode lebih profesional");
console.log("6. Memudahkan maintenance program");

// KESIMPULAN

console.log("\nKESIMPULAN");
console.log("Komentar adalah teks penjelasan yang tidak dijalankan program");
console.log("JavaScript memiliki 2 jenis komentar:");
console.log("   - Single line: // komentar");
console.log("   - Multi line: /* komentar */");
console.log("Komentar sangat penting untuk:");
console.log("   - Dokumentasi program");
console.log("   - Menjelaskan logika kompleks");
console.log("   - Debugging dan testing");
console.log("   - Kolaborasi tim");
console.log("Program tanpa komentar sulit dipahami dan di-maintain");

console.log("\nTIPS PROFESIONAL:");
console.log("- Tulis komentar yang jelas dan bermakna");
console.log("- Jelaskan MENGAPA, bukan hanya APA");
console.log("- Update komentar saat mengubah kode");
console.log("- Gunakan komentar untuk dokumentasi API");
console.log("- Hindari komentar yang terlalu obvious");

// Akhir program
// Semua contoh di atas menunjukkan penggunaan komentar yang baik dan benar
