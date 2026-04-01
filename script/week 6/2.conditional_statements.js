// CONDITIONAL STATEMENTS DALAM JAVASCRIPT

console.log("CONDITIONAL STATEMENTS DALAM JAVASCRIPT");
console.log("Conditional statements digunakan untuk pengambilan keputusan dalam program.");
console.log("Jenis conditional: if, if-else, else-if, switch");

// 1. IF STATEMENT
console.log("1. IF STATEMENT");

// Contoh sederhana if
let nilai = 80;
console.log("Nilai mahasiswa:", nilai);

if (nilai >= 75) {
    console.log("Hasil: Lulus");
}

// If dengan kondisi berbeda
let cuaca = "hujan";
console.log("Cuaca hari ini:", cuaca);

if (cuaca === "hujan") {
    console.log("Bawa payung!");
}

// If dengan multiple kondisi
let umur = 20;
let punyaSIM = true;

console.log("Umur:", umur, "- Punya SIM:", punyaSIM);

if (umur >= 17 && punyaSIM) {
    console.log("Boleh mengemudi");
}

// 2. IF-ELSE STATEMENT
console.log("2. IF-ELSE STATEMENT");

// Contoh if-else
let nilaiUjian = 60;
console.log("Nilai ujian:", nilaiUjian);

if (nilaiUjian >= 75) {
    console.log("Status: Lulus");
} else {
    console.log("Status: Tidak Lulus");
}

// If-else dengan kondisi boolean
let sudahLogin = false;
console.log("\nStatus login:", sudahLogin);

if (sudahLogin) {
    console.log("Selamat datang di dashboard");
} else {
    console.log("Silakan login terlebih dahulu");
}

// If-else dengan perbandingan string
let jenisKelamin = "perempuan";
console.log("\nJenis kelamin:", jenisKelamin);

if (jenisKelamin === "laki-laki") {
    console.log("Panggilan: Bapak");
} else {
    console.log("Panggilan: Ibu");
}

// ==========================================
// 3. ELSE-IF STATEMENT
// ==========================================

console.log("3. ELSE-IF STATEMENT");

// Grading system
let nilaiMahasiswa = 85;
console.log("Nilai mahasiswa:", nilaiMahasiswa);

if (nilaiMahasiswa >= 90) {
    console.log("Grade: A (Excellent)");
} else if (nilaiMahasiswa >= 80) {
    console.log("Grade: B (Good)");
} else if (nilaiMahasiswa >= 70) {
    console.log("Grade: C (Average)");
} else if (nilaiMahasiswa >= 60) {
    console.log("Grade: D (Poor)");
} else {
    console.log("Grade: F (Fail)");
}

// Kategori umur
let umurPengguna = 25;
console.log("\nUmur pengguna:", umurPengguna);

if (umurPengguna < 13) {
    console.log("Kategori: Anak");
} else if (umurPengguna < 20) {
    console.log("Kategori: Remaja");
} else if (umurPengguna < 60) {
    console.log("Kategori: Dewasa");
} else {
    console.log("Kategori: Lansia");
}

// Penentuan musim berdasarkan bulan
let bulan = 7;
console.log("Bulan ke:", bulan);

if (bulan >= 12 || bulan <= 2) {
    console.log("Musim: Hujan");
} else if (bulan >= 3 && bulan <= 5) {
    console.log("Musim: Kemarau");
} else if (bulan >= 6 && bulan <= 8) {
    console.log("Musim: Kemarau Panjang");
} else {
    console.log("Musim: Pancaroba");
}

// 4. SWITCH STATEMENT
console.log("4. SWITCH STATEMENT");

// Switch untuk hari dalam minggu
let hari = 3;
console.log("Hari ke:", hari);

switch (hari) {
    case 1:
        console.log("Hari: Senin");
        break;
    case 2:
        console.log("Hari: Selasa");
        break;
    case 3:
        console.log("Hari: Rabu");
        break;
    case 4:
        console.log("Hari: Kamis");
        break;
    case 5:
        console.log("Hari: Jumat");
        break;
    case 6:
        console.log("Hari: Sabtu");
        break;
    case 7:
        console.log("Hari: Minggu");
        break;
    default:
        console.log("Hari tidak valid");
}

// Switch untuk grade
let grade = 'B';
console.log("Grade:", grade);

switch (grade) {
    case 'A':
        console.log("Sangat Baik (90-100)");
        break;
    case 'B':
        console.log("Baik (80-89)");
        break;
    case 'C':
        console.log("Cukup (70-79)");
        break;
    case 'D':
        console.log("Kurang (60-69)");
        break;
    case 'F':
        console.log("Gagal (0-59)");
        break;
    default:
        console.log("Grade tidak dikenal");
}

// Switch tanpa break (fall-through)
let musim = "hujan";
console.log("Musim:", musim);

switch (musim) {
    case "hujan":
    case "basah":
        console.log("Bawa payung dan jaket");
        break;
    case "kemarau":
    case "panas":
        console.log("Bawa topi dan air minum");
        break;
    default:
        console.log("Siapkan perlengkapan standar");
}

// 5. NESTED CONDITIONALS
console.log("5. NESTED CONDITIONALS");

// If bersarang
let skorTugas = 85;
let skorUjian = 78;
let kehadiran = 90;

console.log("Skor tugas:", skorTugas);
console.log("Skor ujian:", skorUjian);
console.log("Kehadiran:", kehadiran + "%");

if (kehadiran >= 80) {
    if (skorTugas >= 80) {
        if (skorUjian >= 75) {
            console.log("Status: Lulus dengan Pujian");
        } else {
            console.log("Status: Lulus");
        }
    } else {
        console.log("Status: Tidak Lulus - Tugas kurang");
    }
} else {
    console.log("Status: Tidak Lulus - Kehadiran kurang");
}

// ==========================================
// 6. CONDITIONAL (TERNARY) OPERATOR
// ==========================================

console.log("\n=== 6. CONDITIONAL (TERNARY) OPERATOR ===");

// Ternary operator sederhana
let nilaiAkhir = 82;
let statusKelulusan = nilaiAkhir >= 75 ? "Lulus" : "Tidak Lulus";

console.log("Nilai akhir:", nilaiAkhir);
console.log("Status:", statusKelulusan);

// Nested ternary
let poin = 95;
let kategoriPoin = poin >= 90 ? "Excellent" : 
                  poin >= 80 ? "Good" : 
                  poin >= 70 ? "Average" : "Poor";

console.log("\nPoin:", poin);
console.log("Kategori:", kategoriPoin);

// Ternary dengan assignment
let suhu = 25;
let pakaian = suhu < 20 ? "jaket" : "kaos";

console.log("\nSuhu:", suhu + "°C");
console.log("Pakaian yang cocok:", pakaian);

console.log("\n=== TIPS CONDITIONAL STATEMENTS ===");
console.log("1. Gunakan if untuk kondisi sederhana");
console.log("2. Gunakan switch untuk multiple nilai dari satu variabel");
console.log("3. Gunakan ternary operator untuk assignment kondisional");
console.log("4. Hati-hati dengan nested conditionals yang terlalu dalam");
console.log("5. Selalu gunakan === untuk perbandingan yang strict");

console.log("\n=== SELESAI - CONDITIONAL STATEMENTS ===");