# MODUL PERTEMUAN 5

# Expressions dan Operators pada JavaScript

---

# A. Identitas Mata Kuliah

**Nama Mata Kuliah:** Pemrograman Terstruktur
**Program Studi:** Sistem Informasi / Informatika
**Semester:** 1
**Pertemuan:** Minggu ke-5

---

# B. Deskripsi Singkat Pertemuan

Pada pertemuan ini mahasiswa akan mempelajari konsep **Expression (ekspresi)** dan **Operator** dalam JavaScript.

Ekspresi merupakan bagian dari program yang dapat menghasilkan nilai. Ekspresi biasanya dibentuk menggunakan **variabel, nilai (literal), dan operator**.

Mahasiswa juga akan mempelajari berbagai jenis operator seperti:

* Operator aritmatika
* Operator perbandingan
* Operator logika
* Operator penugasan (assignment)
* Operator lainnya dalam JavaScript

Pemahaman materi ini penting karena hampir semua program menggunakan ekspresi dan operator untuk melakukan perhitungan, perbandingan, serta pengambilan keputusan.

---

# C. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

1. Menjelaskan pengertian expression dalam JavaScript
2. Memahami berbagai jenis operator
3. Menggunakan operator aritmatika dalam program
4. Menggunakan operator perbandingan dan logika
5. Memahami konsep precedence dan associativity operator

---

# D. Apa Itu Expression

**Expression (ekspresi)** adalah bagian dari kode program yang dapat **menghasilkan suatu nilai**.

Contoh ekspresi sederhana:

```javascript
5
```

Ekspresi ini menghasilkan nilai **5**.

Contoh lain:

```javascript
10 + 5
```

Ekspresi tersebut menghasilkan nilai **15**.

---

## Contoh Expression dengan Variabel

```javascript
let x = 10;
let y = 5;

x + y
```

Nilai dari ekspresi tersebut adalah:

```
15
```

Karena JavaScript akan menghitung nilai dari variabel.

---

## Contoh Expression yang Lebih Kompleks

```javascript
let data = [10, 20, 30];
data[1]
```

Output:

```
20
```

Penjelasan:

* `data` adalah array
* `[1]` mengambil elemen ke-2

---

# E. Primary Expressions

Primary expression adalah **ekspresi paling sederhana** dalam JavaScript.

Jenisnya meliputi:

1. Literal
2. Keyword
3. Variabel

---

## 1. Literal

Literal adalah nilai yang ditulis langsung dalam program.

Contoh:

```javascript
10
```

```javascript
"Hello"
```

```javascript
true
```

Contoh dalam kode:

```javascript
let angka = 10;
let nama = "Budi";
let aktif = true;
```

---

## 2. Keyword

Beberapa keyword juga merupakan expression.

Contoh:

```javascript
true
false
null
```

Contoh penggunaan:

```javascript
let status = true;
```

---

## 3. Variabel

Variabel juga termasuk expression karena memiliki nilai.

Contoh:

```javascript
let umur = 20;
umur
```

Nilai expression:

```
20
```

---

# F. Array dan Object Initializer

JavaScript dapat membuat **array dan object langsung dalam program**.

---

## Array

Contoh:

```javascript
let angka = [1, 2, 3];
```

Isi array:

```
[1,2,3]
```

Contoh lain:

```javascript
let hasil = [1+2, 3+4];
```

Output:

```
[3,7]
```

---

## Array Bertingkat

```javascript
let matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
];
```

Ini disebut **array dua dimensi**.

---

## Object

Contoh object:

```javascript
let mahasiswa = {
nama: "Andi",
umur: 20
};
```

Mengakses data:

```javascript
mahasiswa.nama
```

Output:

```
Andi
```

---

# G. Function Expression

Function expression adalah cara membuat fungsi sebagai sebuah nilai.

Contoh:

```javascript
let square = function(x){
return x * x;
}
```

Memanggil fungsi:

```javascript
square(5)
```

Output:

```
25
```

---

# H. Property Access

Property access digunakan untuk mengambil data dari **object atau array**.

---

## Mengakses Property Object

Contoh:

```javascript
let mahasiswa = {
nama: "Andi",
umur: 20
};
```

Mengambil data:

```javascript
mahasiswa.nama
```

Output:

```
Andi
```

---

## Mengakses dengan Bracket

```javascript
mahasiswa["nama"]
```

Output tetap:

```
Andi
```

---

## Mengakses Array

```javascript
let angka = [10,20,30];
angka[1]
```

Output:

```
20
```

---

# I. Function Invocation

Invocation berarti **memanggil fungsi**.

Contoh:

```javascript
function tambah(a,b){
return a+b;
}
```

Memanggil fungsi:

```javascript
tambah(2,3)
```

Output:

```
5
```

---

# J. Operator dalam JavaScript

Operator digunakan untuk **melakukan operasi pada nilai atau variabel**.

Contoh sederhana:

```javascript
5 + 3
```

Operator:

```
+
```

Operand:

```
5 dan 3
```

---

# K. Operator Aritmatika

Digunakan untuk perhitungan matematika.

| Operator | Fungsi      | Contoh |
| -------- | ----------- | ------ |
| +        | Penjumlahan | 5 + 2  |
| -        | Pengurangan | 5 - 2  |
| *        | Perkalian   | 5 * 2  |
| /        | Pembagian   | 10 / 2 |
| %        | Sisa bagi   | 5 % 2  |
| **       | Pangkat     | 2 ** 3 |

---

## Contoh Program

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

Output

```
13
7
30
3.33
1
```

---

# L. Operator Penjumlahan String

Operator `+` juga bisa digunakan untuk **menggabungkan teks**.

Contoh:

```javascript
"Hello" + " World"
```

Output

```
Hello World
```

Contoh lain:

```javascript
"Nama: " + "Budi"
```

Output

```
Nama: Budi
```

---

# M. Operator Perbandingan

Digunakan untuk membandingkan dua nilai.

| Operator | Fungsi                  |
| -------- | ----------------------- |
| ==       | Sama dengan             |
| ===      | Sama persis             |
| !=       | Tidak sama              |
| !==      | Tidak sama persis       |
| >        | Lebih besar             |
| <        | Lebih kecil             |
| >=       | Lebih besar sama dengan |
| <=       | Lebih kecil sama dengan |

---

## Contoh

```javascript
5 > 3
```

Output

```
true
```

---

## Perbedaan == dan ===

```javascript
"5" == 5
```

Output

```
true
```

Karena JavaScript mengubah tipe data.

---

```javascript
"5" === 5
```

Output

```
false
```

Karena tipe datanya berbeda.

---

# N. Operator Logika

Digunakan untuk menggabungkan kondisi.

| Operator | Fungsi |   |    |
| -------- | ------ | - | -- |
| &&       | AND    |   |    |
|          |        |   | OR |
| !        | NOT    |   |    |

---

## Contoh AND

```javascript
let nilai = 80;

nilai > 70 && nilai <= 100
```

Output

```
true
```

---

## Contoh OR

```javascript
let umur = 17;

umur < 18 || umur > 60
```

Output

```
true
```

---

## Contoh NOT

```javascript
let aktif = true;

!aktif
```

Output

```
false
```

---

# O. Operator Assignment

Digunakan untuk memberi nilai pada variabel.

Contoh:

```javascript
let x = 10;
```

---

## Assignment dengan Operasi

| Operator | Contoh |
| -------- | ------ |
| +=       | x += 5 |
| -=       | x -= 5 |
| *=       | x *= 5 |
| /=       | x /= 5 |

---

Contoh:

```javascript
let x = 10;

x += 5;
```

Sama dengan:

```
x = x + 5
```

---

# P. Operator Ternary

Operator ini merupakan **versi singkat dari if else**.

Bentuk:

```
kondisi ? nilai1 : nilai2
```

Contoh:

```javascript
let nilai = 80;

let hasil = nilai >= 75 ? "Lulus" : "Tidak Lulus";
```

Output

```
Lulus
```

---

# Q. Operator typeof

Digunakan untuk mengetahui tipe data.

Contoh:

```javascript
typeof 10
```

Output

```
number
```

Contoh lain:

```javascript
typeof "Hello"
```

Output

```
string
```

---

# R. Operator delete

Digunakan untuk **menghapus property object**.

Contoh:

```javascript
let data = {
nama:"Andi",
umur:20
}

delete data.umur
```

Object menjadi:

```
{nama:"Andi"}
```

---

# S. Kesimpulan

Beberapa poin penting dari materi ini:

1. Expression adalah bagian program yang menghasilkan nilai.
2. Operator digunakan untuk melakukan operasi terhadap data.
3. Operator JavaScript meliputi aritmatika, logika, perbandingan, dan assignment.
4. Operator `+` dapat digunakan untuk penjumlahan angka atau penggabungan string.
5. Operator `===` lebih aman dibanding `==`.

---
