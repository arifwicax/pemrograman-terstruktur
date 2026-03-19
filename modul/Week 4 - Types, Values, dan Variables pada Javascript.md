# MODUL PERTEMUAN 4

# TYPES, VALUES, DAN VARIABLES PADA JAVASCRIPT

---

# A. Deskripsi Materi

Dalam pemrograman, program bekerja dengan **mengolah data**.
Data tersebut bisa berupa angka, teks, atau nilai logika.

Dalam JavaScript terdapat tiga konsep penting:

1. **Type (Tipe Data)** → jenis data
2. **Value (Nilai)** → isi dari data
3. **Variable (Variabel)** → tempat menyimpan data

Contoh sederhana:

```javascript
let nama = "Andi";
```

Penjelasan:

* **nama** → variabel
* **"Andi"** → value (nilai)
* **string** → type (tipe data)

---

# Capaian Pembelajaran

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan perbedaan antara **type, value, dan variable** dalam JavaScript.
2. Mengidentifikasi dan menggunakan tipe data dasar JavaScript: **number, string, boolean, null, undefined**.
3. Menggunakan variabel dengan benar menggunakan **let** dan **const**.
4. Melakukan operasi dasar pada data number dan string.
5. Menjelaskan konsep **konversi tipe data** (otomatis dan eksplisit) pada JavaScript.
6. Membedakan karakteristik **primitive type** dan **object type**.

---

# B. Jenis Tipe Data di JavaScript

Secara umum tipe data JavaScript dibagi menjadi dua kategori:

1. **Primitive Type**
2. **Object Type**

---

## 1. Primitive Type

Primitive adalah tipe data dasar.

Beberapa primitive type dalam JavaScript:

| Tipe      | Contoh          |
| --------- | --------------- |
| Number    | 10, 3.14        |
| String    | "Hello"         |
| Boolean   | true / false    |
| null      | tidak ada nilai |
| undefined | nilai belum ada |

Contoh penggunaan:

```javascript
let umur = 20;        // Number
let nama = "Budi";    // String
let lulus = true;     // Boolean
```

---

## 2. Object Type

Object adalah kumpulan data yang memiliki **property dan nilai**.

Contoh:

```javascript
let mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Sistem Informasi"
};
```

Di dalam object terdapat:

* property → nama, umur, jurusan
* value → Andi, 20, Sistem Informasi

---

# C. Number (Tipe Data Angka)

JavaScript menggunakan tipe **Number** untuk menyimpan angka.

Contoh:

```javascript
let a = 10;
let b = 5;
let hasil = a + b;

console.log(hasil);
```

Output

```
15
```

---

## Operasi Matematika

Beberapa operator matematika yang sering digunakan:

| Operator | Fungsi      |
| -------- | ----------- |
| +        | Penjumlahan |
| -        | Pengurangan |
| *        | Perkalian   |
| /        | Pembagian   |
| %        | Sisa bagi   |

Contoh:

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

---

## Menggunakan Math Object

JavaScript memiliki objek **Math** untuk operasi matematika.

Contoh:

```javascript
console.log(Math.sqrt(16)); 
console.log(Math.random()); 
console.log(Math.max(10,20,5));
```

Output

```
4
0.3453...
20
```

---

# D. String (Tipe Data Teks)

String adalah tipe data untuk **teks atau tulisan**.

Contoh:

```javascript
let nama = "Andi";
let pesan = "Selamat datang di kelas JavaScript";

console.log(nama);
console.log(pesan);
```

---

## Menggabungkan String

String bisa digabung menggunakan operator `+`.

```javascript
let nama = "Andi";
let salam = "Halo " + nama;

console.log(salam);
```

Output

```
Halo Andi
```

---

## Panjang String

Untuk mengetahui panjang teks gunakan `.length`.

```javascript
let kata = "JavaScript";

console.log(kata.length);
```

Output

```
10
```

---

# E. Boolean (True / False)

Boolean hanya memiliki dua nilai:

```
true
false
```

Biasanya digunakan untuk **logika atau kondisi**.

Contoh:

```javascript
let nilai = 80;

console.log(nilai > 70);
```

Output

```
true
```

Karena 80 lebih besar dari 70.

---

## Contoh dalam Percabangan

```javascript
let nilai = 60;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}
```

Output

```
Tidak Lulus
```

---

# F. null dan undefined

## null

Menandakan **tidak ada nilai secara sengaja**.

Contoh:

```javascript
let data = null;
```

Artinya variabel ada, tetapi nilainya kosong.

---

## undefined

Artinya variabel **belum diberi nilai**.

Contoh:

```javascript
let nama;

console.log(nama);
```

Output

```
undefined
```

---

# G. Variabel dalam JavaScript

Variabel adalah **tempat menyimpan nilai**.

Contoh:

```javascript
let nama = "Andi";
let umur = 20;
```

Variabel dapat berubah nilainya.

```javascript
let nilai = 10;

nilai = 20;

console.log(nilai);
```

Output

```
20
```

---

# H. Deklarasi Variabel

Dalam JavaScript modern ada dua cara utama membuat variabel.

### 1. let

Digunakan untuk variabel yang **nilainya bisa berubah**.

```javascript
let umur = 20;

umur = 21;
```

---

### 2. const

Digunakan untuk **nilai yang tidak boleh berubah**.

```javascript
const PI = 3.14;
```

Jika diubah akan error.

```javascript
PI = 4; 
```

---

# I. Konversi Tipe Data

JavaScript bisa mengubah tipe data secara otomatis.

Contoh:

```javascript
console.log("5" + 5);
```

Output

```
55
```

Karena angka **5 berubah menjadi string**.

Contoh lain:

```javascript
console.log("10" * "2");
```

Output

```
20
```

Karena string berubah menjadi number.

---

# J. Perbedaan Primitive dan Object

| Primitive                  | Object                |
| -------------------------- | --------------------- |
| Nilainya tidak bisa diubah | Nilainya bisa diubah  |
| Contoh: number, string     | Contoh: object, array |

Contoh object:

```javascript
let mahasiswa = {
    nama: "Budi",
    umur: 20
};

mahasiswa.umur = 21;
```

Nilai dalam object bisa diubah.

---

# K. Contoh Program Sederhana

Program menghitung luas persegi panjang.

```javascript
let panjang = 10;
let lebar = 5;

let luas = panjang * lebar;

console.log("Luas =", luas);
```

Output

```
Luas = 50
```

---

# L. Latihan Praktikum

Buat program JavaScript yang menampilkan:

* Nama
* Umur
* Jurusan
* Status kelulusan

Contoh output:

```
Nama: Andi
Umur: 20
Jurusan: Sistem Informasi
Status: Lulus
```

Gunakan:

```
let
console.log()
```

---

# M. Kesimpulan

Beberapa konsep penting yang dipelajari pada pertemuan ini:

1. JavaScript memiliki berbagai **tipe data**
2. Tipe data utama:

   * Number
   * String
   * Boolean
   * null
   * undefined
3. Data disimpan dalam **variabel**
4. Variabel dibuat menggunakan **let** dan **const**
5. JavaScript dapat melakukan **konversi tipe data secara otomatis**
