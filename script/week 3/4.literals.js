// LITERALS DALAM JAVASCRIPT

/*
Literal adalah nilai data yang langsung ditulis di dalam program
Literal adalah nilai tetap yang tidak berasal dari perhitungan atau variabel lain
*/

console.log("LITERALS DALAM JAVASCRIPT\n");

// PENGENALAN LITERALS

console.log("Pengenalan Literals");
console.log("Literal adalah nilai yang langsung ditulis dalam kode program\n");

// Contoh literals dasar
let angka = 12;
let desimal = 3.14;
let teks = "Hello";
let benar = true;
let salah = false;
let kosong = null;

console.log("Contoh literals dasar:");
console.log("angka:", angka);
console.log("desimal:", desimal);
console.log("teks:", teks);
console.log("benar:", benar);
console.log("salah:", salah);
console.log("kosong:", kosong);
console.log("");

// CONTOH PENGGUNAAN LITERAL

console.log("Contoh Penggunaan Literal");
console.log("Literal digunakan saat memberikan nilai awal pada variabel\n");

let umur = 20;          // literal angka
let nama = "Budi";      // literal string
let lulus = true;       // literal boolean

console.log("umur:", umur);
console.log("nama:", nama);
console.log("lulus:", lulus);
console.log("");

// 1. NUMBER LITERAL (ANGKA)

console.log("1. Number Literal (Angka)");
console.log("Digunakan untuk menyimpan nilai angka\n");

let jumlah = 100;
let harga = 15000;
let pi = 3.14;
let negatif = -50;
let nol = 0;

console.log("jumlah:", jumlah);
console.log("harga:", harga);
console.log("pi:", pi);
console.log("negatif:", negatif);
console.log("nol:", nol);

// Contoh penggunaan number literal dalam operasi
let panjang = 10;
let lebar = 5;
let luas = panjang * lebar;

console.log("\nContoh operasi dengan number literal:");
console.log("panjang:", panjang);
console.log("lebar:", lebar);
console.log("luas:", luas);
console.log("");

// 2. STRING LITERAL (TEKS)

console.log("2. String Literal (Teks)");
console.log("Digunakan untuk menyimpan teks\n");

// String dengan kutip ganda
let namaDepan = "Andi";
let namaBelakang = "Saputra";

// String dengan kutip tunggal
let kota = 'Balikpapan';
let provinsi = 'Kalimantan Timur';

// String kosong
let stringKosong = "";

console.log("namaDepan:", namaDepan);
console.log("namaBelakang:", namaBelakang);
console.log("kota:", kota);
console.log("provinsi:", provinsi);
console.log("stringKosong:", `"${stringKosong}"`);

// Contoh penggabungan string
let namaLengkap = namaDepan + " " + namaBelakang;
console.log("namaLengkap:", namaLengkap);

// String dengan karakter khusus
let alamat = "Jl. Merdeka No. 123";
let email = "andi@example.com";
let pesan = "Selamat datang di JavaScript!";

console.log("alamat:", alamat);
console.log("email:", email);
console.log("pesan:", pesan);
console.log("");

// 3. BOOLEAN LITERAL

console.log("3. Boolean Literal");
console.log("Boolean hanya memiliki dua nilai: true dan false\n");

let aktif = true;
let nonaktif = false;
let sudahLulus = true;
let belumLulus = false;

console.log("aktif:", aktif);
console.log("nonaktif:", nonaktif);
console.log("sudahLulus:", sudahLulus);
console.log("belumLulus:", belumLulus);

// Contoh penggunaan boolean dalam kondisi
let nilaiUjian = 85;
let lulusUjian = nilaiUjian >= 70;

console.log("\nContoh boolean dari kondisi:");
console.log("nilaiUjian:", nilaiUjian);
console.log("lulusUjian:", lulusUjian);

// Boolean dalam logika program
let pagi = true;
let malam = false;

if (pagi) {
    console.log("Status: Sekarang adalah pagi hari");
}

if (!malam) {
    console.log("Status: Bukan waktu malam");
}
console.log("");

// 4. NULL LITERAL

console.log("4. Null Literal");
console.log("null digunakan untuk menunjukkan bahwa variabel tidak memiliki nilai\n");

let data = null;
let informasi = null;
let hasil = null;

console.log("data:", data);
console.log("informasi:", informasi);
console.log("hasil:", hasil);

// Contoh penggunaan null
let nilaiAwal = null;
console.log("Sebelum diisi:", nilaiAwal);

nilaiAwal = 42;
console.log("Setelah diisi:", nilaiAwal);

nilaiAwal = null;
console.log("Setelah di-reset:", nilaiAwal);
console.log("");

// CONTOH PROGRAM LENGKAP MENGGUNAKAN BERBAGAI LITERAL

console.log("Contoh Program Lengkap");
console.log("Program biodata mahasiswa menggunakan berbagai jenis literal\n");

// Data mahasiswa menggunakan berbagai literal
let nimMahasiswa = 12345;           // number literal
let namaMahasiswa = "Sari Dewi";    // string literal
let ipk = 3.75;                     // decimal literal
let statusAktif = true;             // boolean literal
let tugasAkhir = null;              // null literal

let jurusan = "Teknik Informatika";
let semester = 6;
let beasiswa = false;

console.log("BIODATA MAHASISWA");
console.log("NIM:", nimMahasiswa);
console.log("Nama:", namaMahasiswa);
console.log("Jurusan:", jurusan);
console.log("Semester:", semester);
console.log("IPK:", ipk);
console.log("Status Aktif:", statusAktif);
console.log("Beasiswa:", beasiswa);
console.log("Tugas Akhir:", tugasAkhir);

// Analisis data mahasiswa
console.log("\nANALISIS:");
console.log("IPK >= 3.5:", ipk >= 3.5);
console.log("Semester >= 6:", semester >= 6);
console.log("Berhak wisuda:", (ipk >= 3.0 && semester >= 8));
console.log("");

// CONTOH LAIN: PROGRAM TOKO

console.log("Contoh Lain: Program Toko");
console.log("Data produk menggunakan literals\n");

let namaBarang = "Laptop Gaming";
let hargaBarang = 15500000;
let stok = 25;
let diskon = 0.1;              // 10% diskon
let tersedia = true;
let kategori = "Elektronik";
let deskripsi = null;          // belum ada deskripsi

console.log("INFORMASI PRODUK");
console.log("Nama Barang:", namaBarang);
console.log("Harga:", "Rp", hargaBarang.toLocaleString());
console.log("Stok:", stok, "unit");
console.log("Diskon:", (diskon * 100) + "%");
console.log("Tersedia:", tersedia);
console.log("Kategori:", kategori);
console.log("Deskripsi:", deskripsi);

// Perhitungan harga setelah diskon
let hargaDiskon = hargaBarang * (1 - diskon);
console.log("Harga setelah diskon:", "Rp", hargaDiskon.toLocaleString());

// Status ketersediaan
let statusStok = stok > 0 ? "Tersedia" : "Habis";
console.log("Status Stok:", statusStok);
console.log("");

// PERBANDINGAN LITERAL VS VARIABEL

console.log("Perbandingan Literal vs Variabel");
console.log("Memahami perbedaan antara literal dan variabel\n");

// Literal langsung
console.log("Menggunakan literal langsung:");
console.log(100 + 50);              // 100 dan 50 adalah literal
console.log("Hello" + " World");    // "Hello" dan " World" adalah literal
console.log(true && false);         // true dan false adalah literal

// Menggunakan variabel
console.log("\nMenggunakan variabel:");
let angka1 = 100;                   // 100 adalah literal
let angka2 = 50;                    // 50 adalah literal
let hasil1 = angka1 + angka2;       // angka1 dan angka2 adalah variabel

let kata1 = "Hello";                // "Hello" adalah literal
let kata2 = " World";               // " World" adalah literal
let hasil2 = kata1 + kata2;         // kata1 dan kata2 adalah variabel

console.log("hasil1:", hasil1);
console.log("hasil2:", hasil2);
console.log("");

// KESIMPULAN

console.log("KESIMPULAN");
console.log("Literal adalah nilai yang langsung ditulis dalam kode program");
console.log("");

console.log("Jenis-jenis literal dalam JavaScript:");
console.log("1. Number Literal - untuk angka (10, 3.14, -5)");
console.log("2. String Literal - untuk teks ('Hello', \"World\")");
console.log("3. Boolean Literal - untuk logika (true, false)");
console.log("4. Null Literal - untuk nilai kosong (null)");
console.log("");

console.log("Penggunaan literal:");
console.log("- Memberikan nilai awal pada variabel");
console.log("- Digunakan dalam operasi matematika");
console.log("- Sebagai parameter dalam function");
console.log("- Dalam kondisi dan perbandingan");
console.log("");

console.log("TIPS PENTING:");
console.log("- Literal adalah nilai tetap yang tidak berubah");
console.log("- Gunakan literal sesuai dengan tipe data yang dibutuhkan");
console.log("- String literal harus diapit tanda kutip");
console.log("- Boolean literal hanya true atau false");
console.log("- Null literal menunjukkan ketiadaan nilai");

// Akhir program
console.log("\nProgram literals JavaScript selesai");
