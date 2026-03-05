# MODUL PERTEMUAN 1

# PENGENALAN PEMROGRAMAN TERSTRUKTUR DAN JAVASCRIPT

---

## A. Identitas Mata Kuliah

Nama Mata Kuliah: Pemrograman Terstruktur
Program Studi: Sistem Informasi
Pertemuan: Minggu ke-1

---

## B. Deskripsi Singkat Pertemuan

Pada pertemuan pertama ini mahasiswa akan diperkenalkan pada konsep dasar pemrograman dan pendekatan pemrograman terstruktur. Mahasiswa juga mulai mengenal bahasa pemrograman JavaScript sebagai alat untuk melatih logika dan penyusunan algoritma.

Pertemuan ini menjadi fondasi penting sebelum masuk ke materi percabangan, perulangan, array, dan fungsi pada minggu-minggu berikutnya. Fokus utama bukan pada membuat aplikasi, tetapi pada membangun pola pikir logis dan sistematis.

---

## C. Capaian Pembelajaran Pertemuan

Mampu mengembangkan program secara terstruktur (C4).

## D. Materi Pembelajaran

### 1. Apa Itu Pemrograman

Pemrograman adalah proses memberi instruksi kepada komputer agar dapat menjalankan tugas tertentu. Instruksi tersebut ditulis dalam bahasa yang dapat dipahami oleh komputer, yang disebut bahasa pemrograman.

Komputer sebenarnya hanya memahami logika dan instruksi yang terstruktur. Oleh karena itu, seorang programmer harus mampu menyusun langkah-langkah penyelesaian masalah secara jelas dan runtut.

Dalam mata kuliah ini, JavaScript digunakan sebagai alat untuk belajar logika dan struktur program, bukan untuk membuat aplikasi kompleks.

---

### 2. Konsep Algoritma

Algoritma adalah langkah-langkah sistematis untuk menyelesaikan suatu masalah.

Sebelum menulis kode, kita harus memahami dulu bagaimana solusi masalah tersebut disusun dalam bentuk langkah-langkah.

Contoh algoritma membuat teh:

1. Siapkan gelas
2. Masukkan teh
3. Tuangkan air panas
4. Tambahkan gula
5. Aduk

Dalam pemrograman, kita melakukan hal yang sama, tetapi langkah-langkah tersebut diterjemahkan ke dalam bentuk kode.

---

## E. Apa Itu Pemrograman Terstruktur

Pemrograman terstruktur adalah pendekatan dalam menulis program dengan cara yang sistematis, teratur, dan mengikuti alur logika yang jelas.

Program ditulis secara runtut dari atas ke bawah dan dibangun menggunakan struktur kendali yang sederhana. Pendekatan ini bertujuan agar program:

* Mudah dibaca
* Mudah dipahami
* Mudah diperbaiki jika terjadi kesalahan
* Mudah dikembangkan

Pemrograman terstruktur melatih mahasiswa untuk berpikir logis dan menyusun solusi secara bertahap.

---

## F. Tiga Struktur Dasar Pemrograman Terstruktur

Pemrograman terstruktur dibangun dari tiga struktur utama.

### 1. Struktur Urutan

Instruksi dijalankan secara berurutan dari atas ke bawah.

Contoh:

```javascript
let panjang = 10;
let lebar = 5;
let luas = panjang * lebar;
console.log(luas);
```

Program berjalan langkah demi langkah tanpa percabangan.

---

### 2. Struktur Percabangan

Digunakan ketika program harus memilih berdasarkan suatu kondisi.

Contoh:

```javascript
let nilai = 80;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}
```

Program memilih jalur berdasarkan kondisi tertentu.

---

### 3. Struktur Perulangan

Digunakan untuk mengulang suatu proses.

Contoh:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Program akan mencetak angka 1 sampai 5 secara berulang.

---

## G. Mengapa Belajar Pemrograman Terstruktur Terlebih Dahulu

Sebelum mempelajari pemrograman berorientasi objek, mahasiswa harus memahami logika dasar terlebih dahulu.

Pemrograman terstruktur membantu mahasiswa untuk:

* Berpikir sistematis
* Menyusun solusi langkah demi langkah
* Memecah masalah besar menjadi bagian kecil
* Memahami alur eksekusi program

Jika dasar ini kuat, maka mempelajari konsep lanjutan pada semester berikutnya akan jauh lebih mudah.

---

## H. Pengenalan JavaScript

JavaScript adalah bahasa pemrograman yang banyak digunakan dalam pengembangan web. Namun dalam mata kuliah ini, JavaScript digunakan sebagai media pembelajaran logika pemrograman secara prosedural.

Pada tahap ini, kita belum membahas konsep berorientasi objek, class, framework, atau asynchronous programming. Fokus kita adalah logika dasar.

---

## I. Cara Menjalankan JavaScript

Untuk pertemuan awal, JavaScript dapat dijalankan melalui browser.

Langkah-langkahnya:

1. Buka browser seperti Google Chrome.
2. Klik kanan dan pilih Inspect.
3. Buka tab Console.
4. Ketik perintah JavaScript dan tekan Enter.

Console akan menampilkan hasil eksekusi program.

---

## J. Program Pertama: Hello World

Contoh program pertama:

```javascript
console.log("Hello World");
```

Perintah console.log digunakan untuk menampilkan teks ke layar console.

---

## K. Struktur Dasar Program JavaScript

Program JavaScript sederhana terdiri dari:

1. Pernyataan atau statement
2. Eksekusi baris demi baris dari atas ke bawah
3. Output untuk menampilkan hasil

Contoh program biodata sederhana:

```javascript
console.log("Nama: Andi");
console.log("Jurusan: Sistem Informasi");
console.log("Semester: 1");
```

Program tersebut menampilkan informasi secara berurutan sesuai urutan penulisan.

---

## L. Praktikum Minggu Pertama

Mahasiswa diminta untuk:

1. Membuka console pada browser.
2. Menulis program yang menampilkan:

   * Nama lengkap
   * NIM
   * Program studi
   * Alasan memilih jurusan

Contoh format:

```javascript
console.log("Nama: ...");
console.log("NIM: ...");
console.log("Program Studi: ...");
console.log("Alasan memilih jurusan: ...");
```

---

## M. Tugas Mandiri

Buat algoritma dalam bentuk langkah-langkah untuk:

1. Menghitung luas persegi panjang
2. Menghitung rata-rata tiga nilai

Tuliskan dalam bentuk narasi langkah demi langkah, belum dalam bentuk kode.

---
