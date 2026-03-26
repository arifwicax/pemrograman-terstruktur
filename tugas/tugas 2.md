# TUGAS ADVANCED

# Pemrograman Terstruktur (Week 5-7)

---

## A. Judul Tugas

Sistem Manajemen Inventori Toko (Console Based)

---

## B. Tujuan Tugas

Melalui tugas ini, mahasiswa diharapkan mampu mengintegrasikan materi Week 5-7:

1. Menggunakan expression dan operator secara tepat.
2. Menerapkan statements (if/else, switch, loop, break, continue).
3. Mengelola data menggunakan object dan array of object.
4. Melakukan operasi property object (akses, update, delete, cek).
5. Melakukan iterasi object dengan for...in, Object.keys, Object.values, Object.entries.
6. Menerapkan konsep prototype/inheritance sederhana untuk memperluas fitur.

---

## C. Studi Kasus

Buat program JavaScript untuk mengelola inventori toko dengan fitur:

1. Menambah produk.
2. Mengubah stok produk.
3. Mencatat transaksi jual/beli.
4. Menampilkan laporan inventori.
5. Menampilkan statistik (produk termahal, stok terendah, total nilai inventori).

Semua proses dilakukan melalui data dan output di console.

---

## D. Spesifikasi Wajib

### 1. Struktur Data Utama (Object)

Gunakan object `store` dengan minimal property berikut:

- `namaToko` (string)
- `produk` (array of object)
- `transaksi` (array of object)
- `config` (object: pajak, diskon, batasStokMinimum)

Contoh object produk minimal:

- `id`
- `nama`
- `kategori`
- `harga`
- `stok`
- `aktif` (boolean)

### 2. Expression dan Operator (Week 5)

Program wajib menampilkan penggunaan:

1. Operator aritmatika: `+`, `-`, `*`, `/`, `%`
2. Operator perbandingan: `>`, `<`, `>=`, `<=`, `===`, `!==`
3. Operator logika: `&&`, `||`, `!`
4. Operator assignment gabungan: `+=`, `-=`, `*=`
5. Ternary operator untuk status produk (contoh: "Aman" atau "Restock")

### 3. Statements dan Control Flow (Week 6)

Program wajib memiliki:

1. `if/else if/else` untuk validasi data produk.
2. `switch` untuk kategori produk (contoh: Makanan, Minuman, ATK, Elektronik).
3. `for` loop untuk menampilkan semua produk.
4. `while` atau `do...while` untuk simulasi proses restock otomatis.
5. `break` dan `continue` pada proses iterasi data.
6. `try...catch` minimal 1 kasus untuk menangani input tidak valid.

### 4. Object Operation (Week 7)

Wajib mendemonstrasikan:

1. Akses property dengan dot notation dan bracket notation.
2. Menambah property baru secara dinamis.
3. Menghapus property dengan `delete`.
4. Cek property dengan `in` dan `hasOwnProperty()`.
5. Iterasi object dengan:
	- `for...in`
	- `Object.keys()`
	- `Object.values()`
	- `Object.entries()`

### 5. Prototype / Inheritance Sederhana

Gunakan salah satu pendekatan berikut:

1. `Object.create()` dengan prototype method, atau
2. Constructor function + prototype method, atau
3. ES6 class + extends

Minimal buat 2 tipe produk turunan, misalnya:

- `ProdukMakanan`
- `ProdukElektronik`

Setiap turunan memiliki method khusus (contoh: cek kedaluwarsa, cek garansi).

### 6. Laporan Akhir

Program harus menampilkan:

1. Daftar semua produk.
2. Daftar produk stok rendah.
3. Total nilai inventori.
4. Total transaksi jual dan beli.
5. 3 produk dengan nilai stok terbesar.

---

## E. Ketentuan Teknis

1. File utama: `tugas_week5_7.js`
2. Tidak menggunakan library/framework eksternal.
3. Kode wajib diberi komentar secukupnya pada bagian penting.
4. Gunakan nama variabel yang konsisten dan mudah dibaca.
5. Output harus rapi dan terstruktur di console.

---

## F. Format Output Minimal

```text
=== SISTEM INVENTORI TOKO ===
Nama Toko: Toko Maju Jaya

[1] DAFTAR PRODUK
ID | Nama | Kategori | Harga | Stok | Status

[2] STATISTIK
Total Produk           : ...
Total Nilai Inventori  : ...
Produk Termahal        : ...
Produk Stok Terendah   : ...

[3] TRANSAKSI
Total Transaksi Jual   : ...
Total Transaksi Beli   : ...
```

---

## G. Kriteria Penilaian (100 Poin)

1. Ketepatan penggunaan expression dan operator (20 poin)
2. Ketepatan penggunaan statements dan control flow (20 poin)
3. Desain object dan pengelolaan property (20 poin)
4. Implementasi iterasi object dan laporan data (15 poin)
5. Implementasi prototype/inheritance (15 poin)
6. Kerapian kode, komentar, dan format output (10 poin)

---

## H. Bonus Challenge (+20 Poin)

Kerjakan salah satu atau lebih:

1. Tambahkan fitur pencarian produk berdasarkan keyword.
2. Tambahkan fitur sorting produk (harga/stok ascending-descending).
3. Simpan snapshot data inventori ke JSON string (`JSON.stringify`) lalu parse kembali (`JSON.parse`).
4. Buat menu aksi sederhana berbasis array perintah (simulasi tanpa input user real-time).

---

## I. Output Pengumpulan

Kumpulkan:

1. File `tugas_week5_7.js`
2. Screenshot hasil output console
3. Penjelasan singkat arsitektur program (5-10 kalimat)

---

## J. Deadline

Sesuai arahan dosen pengampu.

