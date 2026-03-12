# MODUL PERTEMUAN 3

# LEXICAL STRUCTURE PADA JAVASCRIPT

---

# A. Deskripsi Singkat

Pada pertemuan ini mahasiswa akan mempelajari *Lexical Structure* dalam JavaScript. *Lexical structure* adalah aturan dasar tentang bagaimana kode JavaScript ditulis agar dapat dipahami oleh komputer.

Materi ini penting karena menjadi dasar sebelum mempelajari variabel, operator, percabangan, dan perulangan.

Mahasiswa akan memahami:

* bagaimana penulisan kode JavaScript
* aturan penamaan variabel
* penggunaan komentar
* penggunaan literal
* kata yang tidak boleh digunakan sebagai variabel
* penggunaan tanda titik koma

---

# B. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini mahasiswa diharapkan mampu:

1. Menjelaskan pengertian lexical structure pada JavaScript
2. Menjelaskan aturan penulisan kode JavaScript
3. Menggunakan komentar pada program
4. Menentukan penamaan variabel yang benar
5. Memahami penggunaan semicolon dalam JavaScript

---

# C. Apa Itu Lexical Structure

Lexical structure adalah aturan dasar yang menentukan **bagaimana kode JavaScript ditulis**.

Aturan ini mengatur beberapa hal seperti:

* penulisan huruf besar dan kecil
* penggunaan spasi
* penggunaan komentar
* penulisan nilai data
* penamaan variabel
* kata yang tidak boleh digunakan
* penggunaan titik koma

Sederhananya, lexical structure adalah **tata bahasa dasar dalam menulis kode JavaScript**.

---

# D. Case Sensitivity (Huruf Besar dan Kecil)

JavaScript adalah **case sensitive**, artinya huruf besar dan huruf kecil dianggap berbeda.

Contoh:

```javascript
let nama = "Andi";
let Nama = "Budi";

console.log(nama);
console.log(Nama);
```

Output

```
Andi
Budi
```

Penjelasan

Variabel **nama** dan **Nama** dianggap berbeda oleh JavaScript.

---

# E. Spasi dan Baris Baru

JavaScript tidak terlalu mempermasalahkan spasi dan baris baru dalam kode.

Contoh berikut tetap benar:

```javascript
let a = 10;
let b = 5;
let c = a + b;
console.log(c);
```

Bisa juga ditulis seperti ini:

```javascript
let a=10; let b=5; let c=a+b; console.log(c);
```

Namun untuk kemudahan membaca, sebaiknya kode ditulis rapi.

---

# F. Comments (Komentar)

Komentar digunakan untuk memberi penjelasan pada kode.

Komentar **tidak dijalankan oleh program**.

Ada dua jenis komentar.

---

## 1. Komentar satu baris

Menggunakan simbol `//`

Contoh:

```javascript
// ini komentar
let nilai = 90;
```

---

## 2. Komentar lebih dari satu baris

Menggunakan `/* */`

Contoh:

```javascript
/*
Program ini
menghitung nilai mahasiswa
*/
let nilai = 90;
```

Komentar sangat penting agar kode lebih mudah dipahami.

---

# G. Literals

Literal adalah **nilai data yang langsung ditulis dalam program**.

Contoh literal dalam JavaScript:

```javascript
12          // angka
3.14        // angka desimal
"Hello"     // string
true        // boolean
false       // boolean
null        // tidak ada nilai
```

Contoh penggunaan:

```javascript
let umur = 20;
let nama = "Budi";
let lulus = true;

console.log(umur);
console.log(nama);
console.log(lulus);
```

---

# H. Identifier (Nama Variabel)

Identifier adalah **nama yang digunakan untuk variabel atau fungsi**.

Contoh identifier:

```
nama
umur
nilai_mahasiswa
totalHarga
```

---

## Aturan Penamaan Identifier

Nama variabel harus mengikuti aturan berikut:

1. Harus dimulai dengan huruf, underscore (_), atau dolar ($)
2. Tidak boleh dimulai dengan angka
3. Boleh berisi angka setelah huruf

Contoh yang benar

```
nama
dataMahasiswa
nilai_akhir
$harga
```

Contoh yang salah

```
1nilai
123data
```

---

# I. Reserved Words (Kata yang Tidak Boleh Dipakai)

Beberapa kata sudah digunakan oleh JavaScript sehingga **tidak boleh dipakai sebagai nama variabel**.

Contoh reserved word:

```
if
else
for
while
function
return
class
const
let
var
```

Contoh yang salah

```javascript
let if = 10;
```

Ini akan menyebabkan error.

---

# J. Unicode dalam JavaScript

JavaScript menggunakan sistem karakter **Unicode**.

Artinya kita bisa menggunakan karakter dari berbagai bahasa.

Contoh:

```javascript
let café = "kopi";
console.log(café);
```

Namun dalam praktik pemrograman biasanya tetap menggunakan huruf biasa agar kode lebih mudah dibaca.

---

# K. Semicolon (Titik Koma)

JavaScript menggunakan **titik koma (;)** untuk memisahkan pernyataan.

Contoh:

```javascript
let a = 10;
let b = 5;
console.log(a + b);
```

Namun JavaScript kadang masih bisa berjalan tanpa titik koma.

Contoh:

```javascript
let a = 10
let b = 5
console.log(a + b)
```

Walaupun begitu, disarankan tetap menggunakan titik koma agar kode lebih jelas.

---

# L. Contoh Program Sederhana

```javascript
// Program menampilkan biodata

let nama = "Andi";
let jurusan = "Sistem Informasi";
let semester = 1;

console.log("Nama:", nama);
console.log("Jurusan:", jurusan);
console.log("Semester:", semester);
```

Output

```
Nama: Andi
Jurusan: Sistem Informasi
Semester: 1
```

---

# M. Latihan Praktikum

Buat program JavaScript yang menampilkan:

* Nama
* NIM
* Program Studi
* Semester

Contoh output

```
Nama: Budi
NIM: 12345678
Program Studi: Sistem Informasi
Semester: 1
```

Gunakan `console.log()` untuk menampilkan data.

---

# N. Kesimpulan

Lexical structure adalah aturan dasar dalam penulisan kode JavaScript.

Beberapa konsep penting dalam lexical structure adalah:

* Case sensitive
* Spasi dan baris baru
* Komentar
* Literal
* Identifier
* Reserved word
* Unicode
* Semicolon