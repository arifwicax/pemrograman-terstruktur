# MODUL PERTEMUAN 6

# Statements (Pernyataan) dalam JavaScript

---

# A. Identitas Mata Kuliah

Nama Mata Kuliah: Pemrograman Terstruktur
Program Studi: Sistem Informasi / Informatika
Semester: 1
Pertemuan: Minggu ke-5

---

# B. Deskripsi Singkat Pertemuan

Pada pertemuan ini mahasiswa akan mempelajari **Statements dalam JavaScript**.

Jika pada pertemuan sebelumnya kita belajar **expression (ekspresi)** yang menghasilkan nilai, maka **statement adalah perintah yang dijalankan oleh program**.

Sebuah program JavaScript pada dasarnya adalah **sekumpulan statement yang dijalankan secara berurutan**.

Contoh sederhana:

```javascript
let x = 10;
console.log(x);
```

Baris pertama memberi nilai pada variabel.
Baris kedua menampilkan nilai tersebut.

Setiap baris tersebut adalah **statement**.

---

# C. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

1. Menjelaskan pengertian statement dalam JavaScript
2. Menggunakan expression statement
3. Menggunakan percabangan (if dan switch)
4. Menggunakan perulangan (while, for)
5. Memahami jump statements seperti break dan continue
6. Memahami konsep try, catch, dan error handling

---

# D. Apa Itu Statement

**Statement adalah perintah dalam program yang dijalankan oleh JavaScript.**

Perbedaan utama:

| Konsep     | Fungsi               |
| ---------- | -------------------- |
| Expression | menghasilkan nilai   |
| Statement  | menjalankan perintah |

Contoh expression:

```javascript
5 + 3
```

Menghasilkan nilai **8**

Contoh statement:

```javascript
console.log(5 + 3);
```

Menjalankan perintah menampilkan nilai **8**.

---

# E. Expression Statement

Expression juga bisa menjadi statement jika memiliki **efek terhadap program**.

Contoh:

```javascript
let greeting = "Hello " + name;
```

Ini adalah **assignment statement** karena memberikan nilai ke variabel.

Contoh lain:

```javascript
counter++;
```

Ini menaikkan nilai variabel **counter**.

Contoh pemanggilan fungsi:

```javascript
console.log("Hello World");
```

Program menjalankan fungsi untuk menampilkan teks.

---

# F. Compound Statement (Blok Pernyataan)

Beberapa statement dapat digabungkan menjadi satu blok menggunakan **kurung kurawal `{}`**.

Contoh:

```javascript
{
 let x = Math.PI;
 let y = Math.cos(x);
 console.log(y);
}
```

Blok ini dianggap sebagai **satu statement besar**.

Biasanya digunakan dalam:

* if
* loop
* function

---

# G. Empty Statement

Empty statement adalah statement kosong.

Contoh:

```javascript
;
```

JavaScript tidak melakukan apa pun.

Contoh penggunaan dalam loop:

```javascript
for(let i=0; i<5; i++);
```

Loop berjalan tetapi tidak memiliki isi.

Biasanya ini tidak sengaja dan bisa menyebabkan bug.

---

# H. Conditional Statements (Percabangan)

Conditional digunakan untuk **mengambil keputusan dalam program**.

---

# 1. if Statement

Digunakan untuk menjalankan kode jika kondisi benar.

Contoh:

```javascript
let nilai = 80;

if (nilai >= 75){
 console.log("Lulus");
}
```

Jika nilai >= 75 maka program menampilkan **Lulus**.

---

# 2. if else

Digunakan jika ada dua kemungkinan.

```javascript
let nilai = 60;

if (nilai >= 75){
 console.log("Lulus");
}else{
 console.log("Tidak Lulus");
}
```

---

# 3. else if

Digunakan jika memiliki banyak kondisi.

Contoh:

```javascript
let nilai = 85;

if (nilai >= 90){
 console.log("A");
}else if (nilai >= 80){
 console.log("B");
}else if (nilai >= 70){
 console.log("C");
}else{
 console.log("D");
}
```

---

# 4. switch Statement

Switch digunakan jika ingin memilih berdasarkan **satu nilai tertentu**.

Contoh:

```javascript
let hari = 2;

switch(hari){
 case 1:
 console.log("Senin");
 break;

 case 2:
 console.log("Selasa");
 break;

 case 3:
 console.log("Rabu");
 break;

 default:
 console.log("Hari tidak diketahui");
}
```

Kata **break** digunakan agar program berhenti pada case tersebut.

---

# I. Loop (Perulangan)

Loop digunakan untuk menjalankan kode secara berulang.

---

# 1. while Loop

Perulangan selama kondisi bernilai benar.

```javascript
let i = 0;

while(i < 5){
 console.log(i);
 i++;
}
```

Output:

```
0
1
2
3
4
```

---

# 2. do while

Loop yang **minimal dijalankan satu kali**.

```javascript
let i = 0;

do{
 console.log(i);
 i++;
}while(i < 5);
```

---

# 3. for Loop

Loop yang paling sering digunakan.

```javascript
for(let i=0; i<5; i++){
 console.log(i);
}
```

Struktur:

```
for(inisialisasi; kondisi; increment)
```

---

# 4. for of

Digunakan untuk membaca isi array.

```javascript
let data = [10,20,30];

for(let item of data){
 console.log(item);
}
```

Output:

```
10
20
30
```

---

# 5. for in

Digunakan untuk membaca **property object**.

```javascript
let mahasiswa = {
 nama:"Andi",
 umur:20
};

for(let key in mahasiswa){
 console.log(key);
}
```

Output:

```
nama
umur
```

---

# J. Jump Statements

Jump statements digunakan untuk **mengubah alur program**.

---

# 1. break

Digunakan untuk menghentikan loop.

```javascript
for(let i=0;i<10;i++){

 if(i==5){
 break;
 }

 console.log(i);
}
```

Loop berhenti saat **i = 5**.

---

# 2. continue

Digunakan untuk melewati satu iterasi.

```javascript
for(let i=0;i<5;i++){

 if(i==2){
 continue;
 }

 console.log(i);
}
```

Output:

```
0
1
3
4
```

Angka **2 dilewati**.

---

# 3. return

Digunakan untuk mengembalikan nilai dari fungsi.

```javascript
function tambah(a,b){
 return a + b;
}

console.log(tambah(2,3));
```

Output:

```
5
```

---

# K. Error Handling

JavaScript dapat menangani error menggunakan **try dan catch**.

---

# try catch

Contoh:

```javascript
try{

 let data = JSON.parse("text salah");

}catch(error){

 console.log("Terjadi error");

}
```

Jika terjadi kesalahan program tidak langsung berhenti.

---

# finally

Kode pada finally selalu dijalankan.

```javascript
try{

 console.log("Proses");

}catch(e){

 console.log("Error");

}finally{

 console.log("Selesai");

}
```

---

# L. Strict Mode

JavaScript memiliki mode khusus untuk membuat kode lebih aman.

Contoh:

```javascript
"use strict";
```

Fungsi strict mode:

* mencegah penggunaan variabel tanpa deklarasi
* meningkatkan keamanan
* membantu mendeteksi error lebih cepat

---

# M. Declaration

Declaration digunakan untuk **mendefinisikan sesuatu dalam program**.

Contoh declaration:

```
const
let
var
function
class
import
export
```

Contoh variabel:

```javascript
const PI = 3.14;
let umur = 20;
```

Contoh function:

```javascript
function luas(r){
 return Math.PI * r * r;
}
```

---

# N. Kesimpulan

Beberapa poin penting dari materi ini:

1. Statement adalah perintah dalam program.
2. Program JavaScript terdiri dari kumpulan statement.
3. Conditional digunakan untuk pengambilan keputusan.
4. Loop digunakan untuk menjalankan kode berulang.
5. Jump statements seperti break dan continue mengubah alur program.
6. try dan catch digunakan untuk menangani error.

Dengan memahami **statement**, mahasiswa dapat mulai membuat **logika program yang lebih kompleks**.

---

Jika Bapak/Ibu mau, saya juga bisa membantu membuat:

* **versi modul 10–15 halaman siap dibagikan ke mahasiswa**
* **diagram alur if, loop, dan switch dalam bentuk gambar**
* **latihan praktikum minggu ke-5 (5 soal coding)**.
