# MODUL PERTEMUAN 7

# Objects dalam JavaScript

---

# A. Identitas Mata Kuliah

Nama Mata Kuliah: Pemrograman Terstruktur
Program Studi: Sistem Informasi / Informatika
Semester: 1
Pertemuan: Minggu ke-7

---

# B. Deskripsi Singkat Pertemuan

Pada pertemuan ini mahasiswa akan mempelajari **Object dalam JavaScript**.

Object merupakan salah satu tipe data paling penting dalam JavaScript. Object digunakan untuk **menyimpan sekumpulan data yang saling berhubungan dalam satu struktur**.

Sebagai contoh, data mahasiswa dapat disimpan dalam object:

* nama
* umur
* jurusan
* alamat

Semua data tersebut bisa disimpan dalam satu object.

Mahasiswa akan mempelajari:

* konsep object
* cara membuat object
* cara mengakses property
* cara menghapus property
* cara mengecek property
* cara membaca seluruh property object
* konsep prototype dan inheritance

---

# C. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini mahasiswa diharapkan mampu:

1. Menjelaskan konsep object dalam JavaScript
2. Membuat object dengan beberapa cara
3. Mengakses dan mengubah property object
4. Menghapus property object
5. Mengecek keberadaan property
6. Menggunakan perulangan untuk membaca object

---

# D. Apa Itu Object

Object adalah **struktur data yang menyimpan pasangan key dan value**.

Struktur umum object:

```
key : value
```

Contoh object mahasiswa:

```javascript
let mahasiswa = {
 nama: "Andi",
 umur: 20,
 jurusan: "Sistem Informasi"
};
```

Penjelasan:

| Property | Nilai            |
| -------- | ---------------- |
| nama     | Andi             |
| umur     | 20               |
| jurusan  | Sistem Informasi |

Object dapat menyimpan berbagai tipe data:

* string
* number
* boolean
* array
* object lain

---

# E. Karakteristik Object

Beberapa karakteristik object:

1. Object adalah kumpulan property
2. Property memiliki **nama dan nilai**
3. Nilai property bisa berupa tipe data apa saja
4. Object dapat berubah (mutable)
5. Object diakses menggunakan referensi

Contoh referensi object:

```javascript
let a = {x:1};
let b = a;

b.x = 10;

console.log(a.x);
```

Output

```
10
```

Karena **a dan b menunjuk object yang sama**.

---

# F. Cara Membuat Object

Ada beberapa cara membuat object dalam JavaScript.

---

# 1. Object Literal

Cara paling sederhana.

Contoh:

```javascript
let mobil = {
 merk: "Toyota",
 warna: "Hitam",
 tahun: 2022
};
```

Object kosong:

```javascript
let obj = {};
```

---

# 2. Menggunakan new Object()

Contoh:

```javascript
let mobil = new Object();

mobil.merk = "Toyota";
mobil.warna = "Merah";
```

Namun cara ini **jarang digunakan** karena object literal lebih sederhana.

---

# 3. Menggunakan Object.create()

Digunakan untuk membuat object dengan prototype tertentu.

Contoh:

```javascript
let o = Object.create({x:1, y:2});
```

Object tersebut akan mewarisi property **x dan y**.

---

# G. Property pada Object

Property adalah **data yang dimiliki oleh object**.

Contoh:

```javascript
let buku = {
 judul: "Belajar JavaScript",
 harga: 100000
};
```

Property:

* judul
* harga

---

# H. Mengakses Property

Ada dua cara mengakses property.

---

# 1. Dot Notation

Contoh:

```javascript
let mahasiswa = {
 nama:"Budi",
 umur:21
};

console.log(mahasiswa.nama);
```

Output

```
Budi
```

---

# 2. Bracket Notation

Contoh:

```javascript
console.log(mahasiswa["nama"]);
```

Kedua cara tersebut sama.

Namun **bracket notation lebih fleksibel**.

Contoh:

```javascript
let field = "nama";

console.log(mahasiswa[field]);
```

---

# I. Mengubah atau Menambah Property

Property dapat diubah atau ditambahkan.

Contoh:

```javascript
let mobil = {};

mobil.merk = "Honda";
mobil.tahun = 2023;
```

Mengubah nilai:

```javascript
mobil.tahun = 2024;
```

---

# J. Object sebagai Associative Array

Object dapat digunakan seperti **array dengan key berupa string**.

Contoh:

```javascript
let portfolio = {
 AAPL: 50,
 IBM: 30
};
```

Contoh menambahkan data:

```javascript
portfolio["GOOGLE"] = 10;
```

---

# K. Menghapus Property

Untuk menghapus property digunakan **delete**.

Contoh:

```javascript
let buku = {
 judul:"JS",
 harga:100000
};

delete buku.harga;
```

Setelah dihapus object menjadi:

```
{judul:"JS"}
```

---

# L. Mengecek Property

Ada beberapa cara mengecek apakah property ada dalam object.

---

# 1. Operator in

Contoh:

```javascript
let o = {x:1};

"x" in o
```

Output

```
true
```

---

# 2. hasOwnProperty()

Contoh:

```javascript
o.hasOwnProperty("x")
```

---

# 3. Cek dengan undefined

```javascript
o.x !== undefined
```

---

# M. Membaca Semua Property Object

Untuk membaca semua property dapat menggunakan **loop**.

---

# Menggunakan for in

Contoh:

```javascript
let mahasiswa = {
 nama:"Andi",
 umur:20,
 jurusan:"Informatika"
};

for(let key in mahasiswa){
 console.log(key);
}
```

Output

```
nama
umur
jurusan
```

Jika ingin membaca nilai:

```javascript
for(let key in mahasiswa){
 console.log(mahasiswa[key]);
}
```

---

# N. Prototype dan Inheritance

Setiap object di JavaScript memiliki **prototype**.

Prototype adalah object lain yang **menjadi sumber pewarisan property**.

Contoh:

```javascript
let a = {x:1};

let b = Object.create(a);

console.log(b.x);
```

Output

```
1
```

Walaupun **b tidak memiliki property x**, tetapi diwarisi dari object **a**.

Proses ini disebut **inheritance**.

---

# O. Menyalin Object

Object dapat disalin menggunakan **Object.assign()**.

Contoh:

```javascript
let a = {x:1};
let b = {y:2};

Object.assign(a,b);
```

Hasil:

```
{x:1, y:2}
```

---

# P. Serialisasi Object

Serialisasi adalah proses **mengubah object menjadi string**.

Digunakan untuk:

* menyimpan data
* mengirim data melalui API

Menggunakan JSON.

Contoh:

```javascript
let obj = {x:1, y:2};

let s = JSON.stringify(obj);
```

Hasil:

```
{"x":1,"y":2}
```

Mengubah kembali menjadi object:

```javascript
let data = JSON.parse(s);
```

---

# Q. Method pada Object

Object juga bisa memiliki **method (fungsi)**.

Contoh:

```javascript
let point = {
 x:1,
 y:2,
 toString(){
  return "(" + this.x + "," + this.y + ")";
 }
};

console.log(point.toString());
```

Output

```
(1,2)
```

---

# R. Getter dan Setter

Object juga dapat memiliki **getter dan setter**.

Contoh:

```javascript
let obj = {
 x:1,
 y:1,

 get r(){
  return Math.sqrt(this.x*this.x + this.y*this.y);
 }
};
```

Jika kita memanggil:

```
obj.r
```

Maka getter akan dijalankan.

---

# S. Fitur Object Modern (ES6)

Beberapa fitur modern object:

---

# 1. Shorthand Property

Contoh:

```javascript
let x = 1;
let y = 2;

let obj = {x,y};
```

---

# 2. Spread Operator

Digunakan untuk menggabungkan object.

Contoh:

```javascript
let a = {x:1};
let b = {y:2};

let c = {...a, ...b};
```

Hasil

```
{x:1,y:2}
```

---

# T. Kesimpulan

Beberapa poin penting dari materi object:

1. Object adalah struktur data yang menyimpan pasangan **key dan value**
2. Object dapat dibuat dengan **object literal, new, dan Object.create()**
3. Property object dapat dibaca, diubah, dan dihapus
4. Object dapat digunakan seperti **associative array**
5. Object dapat mewarisi property dari **prototype**
6. Object dapat dikonversi menjadi string menggunakan **JSON**

Object merupakan konsep yang sangat penting karena hampir semua struktur data dalam JavaScript menggunakan object.

---

