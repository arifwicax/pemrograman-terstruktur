# MODUL PERTEMUAN 9

# Array dalam JavaScript

---

# A. Identitas Mata Kuliah

Nama Mata Kuliah: Pemrograman Terstruktur
Program Studi: Sistem Informasi / Informatika
Pertemuan: Minggu ke-9

---

# B. Deskripsi Singkat Pertemuan

Pada pertemuan ini mahasiswa akan mempelajari **Array dalam JavaScript**.

Array merupakan **struktur data fundamental** yang digunakan untuk **menyimpan sekumpulan data dalam urutan tertentu**.

Sebagai contoh, data nilai mahasiswa dapat disimpan dalam array:

* [85, 90, 78, 92, 88]

Data nama-nama mahasiswa:

* ["Andi", "Budi", "Cici", "Doni"]

Mahasiswa akan mempelajari:

* konsep array
* cara membuat array
* cara mengakses elemen array
* cara menambah dan menghapus elemen
* cara melakukan perulangan pada array
* array multidimensi
* method-method array yang berguna

---

# C. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini mahasiswa diharapkan mampu:

1. Menjelaskan konsep array dalam JavaScript
2. Membuat array dengan berbagai cara
3. Mengakses dan mengubah elemen array
4. Menambah dan menghapus elemen array
5. Melakukan perulangan pada array
6. Menggunakan method-method array yang penting
7. Membuat dan menggunakan array multidimensi

---

# D. Apa Itu Array

Array adalah **struktur data yang menyimpan sekumpulan nilai dalam urutan tertentu**.

Struktur umum array:

```
[elemen1, elemen2, elemen3, ...]
```

Contoh array sederhana:

```javascript
let angka = [1, 2, 3, 4, 5];
let nama = ["Andi", "Budi", "Cici"];
let campuran = [1, "Hello", true, 3.14];
```

Penjelasan:

| Index | Nilai   |
| ----- | ------- |
| 0     | 1       |
| 1     | 2       |
| 2     | 3       |
| 3     | 4       |
| 4     | 5       |

**Penting**: Index array dimulai dari 0, bukan 1!

---

# E. Karakteristik Array

Beberapa karakteristik array JavaScript:

1. **Zero-based indexing** - Index dimulai dari 0
2. **Dynamic** - Ukuran dapat berubah otomatis
3. **Untyped** - Dapat menyimpan berbagai tipe data
4. **Ordered** - Elemen memiliki urutan tertentu
5. **Mutable** - Elemen dapat diubah

Contoh array dengan berbagai tipe data:

```javascript
let data = [
    "Nama",           // string
    25,               // number
    true,             // boolean
    [1, 2, 3],        // array
    {nama: "Andi"}    // object
];
```

---

# F. Cara Membuat Array

Ada beberapa cara membuat array dalam JavaScript.

---

# 1. Array Literal

Cara paling sederhana dan paling sering digunakan.

```javascript
// Array kosong
let kosong = [];

// Array dengan nilai
let angka = [1, 2, 3, 4, 5];
let buah = ["apel", "jeruk", "pisang"];

// Array dengan tipe data campuran
let campuran = [1, "hello", true, 3.14];
```

---

# 2. Constructor Array()

Menggunakan kata kunci `new Array()`.

```javascript
// Array kosong
let arr1 = new Array();

// Array dengan panjang tertentu
let arr2 = new Array(5); // array dengan 5 slot kosong

// Array dengan elemen
let arr3 = new Array(1, 2, 3, 4, 5);
```

**Catatan**: Lebih baik gunakan array literal karena lebih sederhana.

---

# 3. Array.of()

Membuat array dari nilai-nilai yang diberikan.

```javascript
let angka = Array.of(1, 2, 3, 4, 5);
let satu = Array.of(10); // [10], bukan array dengan 10 slot
```

---

# 4. Array.from()

Membuat array dari object yang mirip array.

```javascript
// Dari string
let huruf = Array.from("Hello"); // ["H", "e", "l", "l", "o"]

// Membuat array dengan fungsi
let persegi = Array.from({length: 5}, (v, i) => i * i); // [0, 1, 4, 9, 16]
```

---

# 5. Spread Operator

Menggunakan operator `...` untuk membuat salinan array.

```javascript
let asli = [1, 2, 3];
let salinan = [...asli]; // [1, 2, 3]
let gabung = [0, ...asli, 4]; // [0, 1, 2, 3, 4]
```

---

# G. Mengakses Elemen Array

Elemen array diakses menggunakan **index dalam tanda kurung siku**.

```javascript
let buah = ["apel", "jeruk", "pisang", "mangga"];

console.log(buah[0]); // "apel"
console.log(buah[1]); // "jeruk"
console.log(buah[2]); // "pisang"
console.log(buah[3]); // "mangga"
```

**Mengakses index yang tidak ada**:

```javascript
console.log(buah[10]); // undefined
```

**Menggunakan variabel sebagai index**:

```javascript
let i = 2;
console.log(buah[i]); // "pisang"
```

---

# H. Property length

Setiap array memiliki property `length` yang menunjukkan **jumlah elemen**.

```javascript
let angka = [1, 2, 3, 4, 5];
console.log(angka.length); // 5

let kosong = [];
console.log(kosong.length); // 0
```

**Mengubah length**:

```javascript
let arr = [1, 2, 3, 4, 5];
arr.length = 3; // [1, 2, 3]
arr.length = 6; // [1, 2, 3, undefined, undefined, undefined]
```

---

# I. Menambah dan Menghapus Elemen

## 1. Menambah Elemen

### Di Akhir Array (push)

```javascript
let buah = ["apel", "jeruk"];
buah.push("pisang"); // ["apel", "jeruk", "pisang"]
buah.push("mangga", "melon"); // ["apel", "jeruk", "pisang", "mangga", "melon"]
```

### Di Awal Array (unshift)

```javascript
let buah = ["jeruk", "pisang"];
buah.unshift("apel"); // ["apel", "jeruk", "pisang"]
```

### Menggunakan Index

```javascript
let arr = [1, 2, 3];
arr[3] = 4; // [1, 2, 3, 4]
arr[10] = 11; // [1, 2, 3, 4, undefined, undefined, undefined, undefined, undefined, undefined, 11]
```

## 2. Menghapus Elemen

### Dari Akhir (pop)

```javascript
let buah = ["apel", "jeruk", "pisang"];
let terakhir = buah.pop(); // "pisang"
console.log(buah); // ["apel", "jeruk"]
```

### Dari Awal (shift)

```javascript
let buah = ["apel", "jeruk", "pisang"];
let pertama = buah.shift(); // "apel"
console.log(buah); // ["jeruk", "pisang"]
```

### Menggunakan delete

```javascript
let arr = [1, 2, 3, 4, 5];
delete arr[2]; // [1, 2, undefined, 4, 5]
```

**Catatan**: `delete` membuat array sparse (memiliki lubang).

---

# J. Perulangan pada Array

## 1. for/of Loop (Paling Mudah)

```javascript
let buah = ["apel", "jeruk", "pisang"];

for (let item of buah) {
    console.log(item);
}
```

## 2. forEach Method

```javascript
let angka = [1, 2, 3, 4, 5];

angka.forEach(function(nilai, index) {
    console.log(`Index ${index}: ${nilai}`);
});

// Dengan arrow function
angka.forEach((nilai, index) => {
    console.log(`Index ${index}: ${nilai}`);
});
```

## 3. for Loop Tradisional

```javascript
let buah = ["apel", "jeruk", "pisang"];

for (let i = 0; i < buah.length; i++) {
    console.log(`${i}: ${buah[i]}`);
}
```

## 4. for/in Loop

```javascript
let buah = ["apel", "jeruk", "pisang"];

for (let index in buah) {
    console.log(`${index}: ${buah[index]}`);
}
```

---

# K. Method Array yang Penting

## 1. Method Pencarian

### indexOf() - Mencari Index Elemen

```javascript
let buah = ["apel", "jeruk", "pisang", "jeruk"];
console.log(buah.indexOf("jeruk")); // 1 (index pertama ditemukan)
console.log(buah.indexOf("melon")); // -1 (tidak ditemukan)
```

### includes() - Mengecek Keberadaan Elemen

```javascript
let buah = ["apel", "jeruk", "pisang"];
console.log(buah.includes("jeruk")); // true
console.log(buah.includes("melon")); // false
```

### find() - Mencari Elemen dengan Kondisi

```javascript
let angka = [1, 2, 3, 4, 5];
let genap = angka.find(x => x % 2 === 0); // 2 (elemen genap pertama)
```

## 2. Method Transformasi

### map() - Mengubah Setiap Elemen

```javascript
let angka = [1, 2, 3, 4, 5];
let kuadrat = angka.map(x => x * x); // [1, 4, 9, 16, 25]
```

### filter() - Menyaring Elemen

```javascript
let angka = [1, 2, 3, 4, 5];
let genap = angka.filter(x => x % 2 === 0); // [2, 4]
```

### reduce() - Menggabungkan Elemen

```javascript
let angka = [1, 2, 3, 4, 5];
let jumlah = angka.reduce((total, current) => total + current, 0); // 15
```

## 3. Method Pengurutan

### sort() - Mengurutkan Elemen

```javascript
let buah = ["pisang", "apel", "jeruk"];
buah.sort(); // ["apel", "jeruk", "pisang"]

let angka = [3, 1, 4, 1, 5];
angka.sort((a, b) => a - b); // [1, 1, 3, 4, 5]
```

### reverse() - Membalik Urutan

```javascript
let angka = [1, 2, 3, 4, 5];
angka.reverse(); // [5, 4, 3, 2, 1]
```

## 4. Method Penggabungan

### concat() - Menggabungkan Array

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let gabung = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
```

### join() - Mengubah ke String

```javascript
let buah = ["apel", "jeruk", "pisang"];
let string = buah.join(", "); // "apel, jeruk, pisang"
```

---

# L. Array Multidimensi

JavaScript tidak memiliki array multidimensi asli, tetapi kita bisa membuat **array of arrays**.

## Contoh Array 2 Dimensi

```javascript
// Membuat array 2D (seperti tabel)
let tabel = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Mengakses elemen
console.log(tabel[0][0]); // 1
console.log(tabel[1][2]); // 6
console.log(tabel[2][1]); // 8
```

## Membuat Array 2D Kosong

```javascript
let baris = 3;
let kolom = 4;
let matrix = [];

for (let i = 0; i < baris; i++) {
    matrix[i] = [];
    for (let j = 0; j < kolom; j++) {
        matrix[i][j] = 0;
    }
}
```

## Perulangan Array 2D

```javascript
let tabel = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < tabel.length; i++) {
    for (let j = 0; j < tabel[i].length; j++) {
        console.log(`[${i}][${j}] = ${tabel[i][j]}`);
    }
}
```

---

# M. Array Methods Lanjutan

## 1. slice() - Mengambil Bagian Array

```javascript
let buah = ["apel", "jeruk", "pisang", "mangga", "melon"];
let sebagian = buah.slice(1, 4); // ["jeruk", "pisang", "mangga"]
let akhir = buah.slice(2); // ["pisang", "mangga", "melon"]
```

## 2. splice() - Mengubah Array

```javascript
let buah = ["apel", "jeruk", "pisang", "mangga"];

// Menghapus 2 elemen mulai dari index 1
let dihapus = buah.splice(1, 2); // ["jeruk", "pisang"]
console.log(buah); // ["apel", "mangga"]

// Menambah elemen
buah.splice(1, 0, "melon", "anggur"); // ["apel", "melon", "anggur", "mangga"]
```

## 3. every() dan some()

```javascript
let angka = [2, 4, 6, 8];

// every - semua harus memenuhi kondisi
let semuaGenap = angka.every(x => x % 2 === 0); // true

// some - minimal satu memenuhi kondisi
let adaGenap = angka.some(x => x % 2 === 0); // true
```

---

# N. Contoh Kasus Nyata

## 1. Sistem Nilai Mahasiswa

```javascript
let nilaiMahasiswa = [85, 92, 78, 96, 88];

// Menghitung rata-rata
let rataRata = nilaiMahasiswa.reduce((total, nilai) => total + nilai, 0) / nilaiMahasiswa.length;

// Mencari nilai tertinggi dan terendah
let tertinggi = Math.max(...nilaiMahasiswa);
let terendah = Math.min(...nilaiMahasiswa);

// Mencari mahasiswa yang lulus (nilai >= 80)
let lulus = nilaiMahasiswa.filter(nilai => nilai >= 80);

console.log(`Rata-rata: ${rataRata}`);
console.log(`Nilai tertinggi: ${tertinggi}`);
console.log(`Nilai terendah: ${terendah}`);
console.log(`Jumlah yang lulus: ${lulus.length}`);
```

## 2. Daftar Belanja

```javascript
let belanja = [
    {nama: "Beras", harga: 50000, jumlah: 2},
    {nama: "Minyak", harga: 25000, jumlah: 1},
    {nama: "Gula", harga: 15000, jumlah: 3}
];

// Menghitung total harga
let totalHarga = belanja.reduce((total, item) => {
    return total + (item.harga * item.jumlah);
}, 0);

console.log(`Total belanja: Rp ${totalHarga.toLocaleString()}`);
```

---

# O. Tips dan Best Practices

1. **Gunakan array literal** `[]` daripada `new Array()`
2. **Cek panjang array** sebelum mengakses elemen
3. **Gunakan method yang sesuai** untuk setiap kebutuhan
4. **Hindari sparse array** (array dengan lubang)
5. **Gunakan const** untuk array yang tidak akan di-reassign

```javascript
// Good
const buah = ["apel", "jeruk"];
buah.push("pisang"); // OK, mengubah isi array

// Avoid
// buah = ["melon"]; // Error jika menggunakan const
```

---

# P. Kesimpulan

Array adalah struktur data fundamental dalam JavaScript yang:

* Menyimpan data dalam urutan tertentu
* Memiliki index yang dimulai dari 0
* Dapat menyimpan berbagai tipe data
* Memiliki banyak method yang powerful
* Sangat berguna untuk menyimpan dan memanipulasi data

**Key Points:**
* Array literal `[]` adalah cara terbaik membuat array
* Gunakan method yang tepat untuk setiap operasi
* Pahami perbedaan antara method yang mengubah array asli vs yang membuat array baru
* Array multidimensi dibuat dengan array of arrays

---

# Q. Latihan

1. Buatlah array berisi nama 5 teman Anda
2. Tambahkan nama baru di awal dan akhir array
3. Cari index nama tertentu dalam array
4. Urutkan array secara alfabetis
5. Buatlah fungsi yang menghitung rata-rata dari array angka
6. Buatlah array 2D untuk menyimpan jadwal kuliah (hari dan mata kuliah)