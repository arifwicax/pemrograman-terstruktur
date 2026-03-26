# TUGAS 1

# Pemrograman Terstruktur (Week 1-4)

---

## A. Judul Tugas

**Sistem Profil dan Analisis Nilai Mahasiswa (Console Based)**

---

## B. Tujuan Tugas

Melalui tugas ini, mahasiswa diharapkan mampu mengintegrasikan materi Week 1-4, yaitu:

1. Menyusun solusi secara terstruktur (urutan langkah/algoritma).
2. Menulis kode JavaScript dengan lexical structure yang benar.
3. Menggunakan tipe data dasar: number, string, boolean, null, undefined.
4. Menggunakan variabel dengan tepat (let dan const).
5. Melakukan operasi number dan manipulasi string sederhana.
6. Melakukan konversi tipe data dan validasi input.
7. Menggunakan object sederhana untuk menyimpan data terstruktur.

---

## C. Studi Kasus

Buat program JavaScript yang menampilkan **profil mahasiswa** dan **analisis akademik sederhana** berdasarkan 3 nilai mata kuliah.

Data awal yang harus digunakan (boleh dimodifikasi nilainya):

- nama mahasiswa
- NIM
- program studi
- semester
- nilai Algoritma
- nilai Basis Data
- nilai Web Dasar

---

## D. Spesifikasi Wajib

Program harus memiliki bagian berikut.

1. **Bagian Algoritma (narasi langkah)**
	Tulis langkah penyelesaian masalah secara runtut (minimal 8 langkah) di komentar bagian atas file.

2. **Deklarasi Variabel**
	Gunakan:
	- `const` untuk data yang tidak berubah (misalnya nama kampus, batas lulus).
	- `let` untuk data yang dapat berubah (misalnya nilai rata-rata, status).

3. **Tipe Data Lengkap**
	Di dalam program harus ada demonstrasi penggunaan:
	- `number`
	- `string`
	- `boolean`
	- `null`
	- `undefined`

4. **Konversi Tipe Data**
	Simulasikan input nilai dalam bentuk string, lalu konversi ke number sebelum dihitung.
	Contoh: `"80"`, `"75"`, `"90"`.

5. **Perhitungan Akademik**
	Hitung:
	- total nilai
	- rata-rata nilai
	- nilai tertinggi
	- nilai terendah

6. **Penentuan Status**
	Tentukan status lulus/tidak lulus berdasarkan rata-rata (misal batas lulus `>= 75`).

7. **Object Mahasiswa**
	Simpan data mahasiswa dalam object bernama `mahasiswa` minimal berisi:
	- `nama`
	- `nim`
	- `prodi`
	- `semester`
	- `nilai` (object bersarang)
	- `rataRata`
	- `status`

8. **Output Terformat di Console**
	Tampilkan hasil akhir secara rapi dengan `console.log`, minimal memuat:
	- identitas mahasiswa
	- nilai per mata kuliah
	- hasil perhitungan
	- status akhir

---

## E. Ketentuan Teknis

1. File utama bernama: `tugas_week1_4.js`
2. Kode wajib menggunakan komentar yang relevan.
3. Nama variabel harus mengikuti aturan identifier JavaScript.
4. Hindari penggunaan library/framework eksternal.
5. Program dijalankan melalui browser console atau Node.js.

---

## F. Contoh Format Output (Minimal)

```text
=== LAPORAN AKADEMIK MAHASISWA ===
Nama        : Andi Saputra
NIM         : 24101111
Prodi       : Sistem Informasi
Semester    : 1

Nilai:
- Algoritma : 80
- Basis Data: 75
- Web Dasar : 90

Ringkasan:
Total Nilai   : 245
Rata-rata     : 81.67
Nilai Tertinggi: 90
Nilai Terendah : 75
Status        : LULUS
```

---

## G. Kriteria Penilaian (100 Poin)

1. Ketepatan algoritma dan alur terstruktur (20 poin)
2. Kebenaran lexical structure (10 poin)
3. Penggunaan tipe data dan variabel (20 poin)
4. Ketepatan konversi tipe data (15 poin)
5. Ketepatan logika perhitungan (20 poin)
6. Kerapian output dan keterbacaan kode (15 poin)

---

## H. Bonus Challenge (+20 Poin)

Kerjakan salah satu atau lebih:

1. Tambahkan predikat nilai:
	- A (>= 85), B (>= 75), C (>= 65), D (< 65)
2. Tambahkan validasi nilai agar hanya menerima rentang 0-100.
3. Tampilkan persentase kelulusan jika data mahasiswa dibuat lebih dari 1 (minimal 3 mahasiswa).

---

## I. Output Pengumpulan

Kumpulkan:

1. File kode `tugas_week1_4.js`
2. Screenshot hasil output console simpan dalam bentuk pdf dari script dan hasil
3. Penjelasan singkat (3-5 kalimat) tentang cara kerja program

---

## J. Deadline

Sesuai kontrak kuliah dan arahan dosen pengampu.

