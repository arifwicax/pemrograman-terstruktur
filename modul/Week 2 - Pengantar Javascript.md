# MODUL PERTEMUAN 2

# PENGANTAR JAVASCRIPT

## 1. Pendahuluan

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi **interaktif dan dinamis**. Jika HTML berfungsi untuk membuat struktur halaman web dan CSS untuk mengatur tampilan, maka JavaScript digunakan untuk menambahkan **logika, interaksi, dan perilaku pada halaman web**.

Dengan JavaScript, halaman web tidak hanya menampilkan informasi secara statis, tetapi juga dapat merespon tindakan pengguna, seperti klik tombol, mengisi formulir, atau memuat data dari server secara otomatis.

Beberapa contoh penggunaan JavaScript pada website antara lain:

* Validasi form
* Animasi halaman
* Interaksi tombol
* Pengambilan data dari server
* Pembaruan konten tanpa perlu memuat ulang halaman

Contoh sederhana penggunaan JavaScript pada halaman web:

```html
<button onclick="alert('Halo Dunia!')">Klik Saya</button>
```

Ketika tombol tersebut diklik, browser akan menampilkan pesan **Halo Dunia**.

---

# 2. Peran JavaScript dalam Pengembangan Web

Dalam pengembangan web modern terdapat tiga teknologi utama yang saling melengkapi.

| Teknologi  | Fungsi                        |
| ---------- | ----------------------------- |
| HTML       | Membuat struktur halaman web  |
| CSS        | Mengatur tampilan dan desain  |
| JavaScript | Mengatur logika dan interaksi |

Contoh ilustrasi sederhana penggunaan ketiga teknologi tersebut:

HTML:

```html
<h1>Selamat Datang</h1>
<button id="btn">Klik</button>
```

JavaScript:

```javascript
document.getElementById("btn").onclick = function(){
  alert("Tombol diklik");
}
```

Ketika tombol diklik, JavaScript akan menjalankan perintah yang menampilkan pesan pada layar.

---

# 3. Sejarah Singkat JavaScript

JavaScript pertama kali dikembangkan pada tahun **1995** oleh **Brendan Eich**, seorang programmer di perusahaan **Netscape Communications**. Bahasa ini dibuat untuk dijalankan pada browser **Netscape Navigator** dengan tujuan menambahkan interaktivitas pada halaman web.

Menariknya, JavaScript dikembangkan hanya dalam waktu sekitar **10 hari**.

Pada awal pengembangannya, bahasa ini mengalami beberapa perubahan nama:

| Nama       | Keterangan                          |
| ---------- | ----------------------------------- |
| Mocha      | Nama awal bahasa                    |
| LiveScript | Nama kedua                          |
| JavaScript | Nama yang digunakan hingga sekarang |

Nama JavaScript dipilih karena pada saat itu bahasa **Java** sedang sangat populer, sehingga nama tersebut dianggap lebih menarik secara pemasaran.

Seiring waktu, JavaScript menjadi semakin populer dan mulai menggantikan teknologi lama yang sebelumnya digunakan untuk membuat halaman web interaktif, seperti:

* Java Applet
* Adobe Flash

Saat ini semua browser modern telah mendukung JavaScript secara langsung tanpa perlu menginstal plugin tambahan.

---

# 4. JavaScript dan ECMAScript

Seiring berkembangnya JavaScript dan banyaknya browser yang menggunakannya, diperlukan sebuah standar resmi agar implementasi JavaScript tetap konsisten di berbagai browser.

Standar ini disebut **ECMAScript** dan dikembangkan oleh organisasi internasional bernama **ECMA International**.

Dengan adanya standar ECMAScript, kode JavaScript yang ditulis oleh developer dapat berjalan dengan baik di berbagai browser seperti:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

Secara sederhana dapat dikatakan bahwa:

* **ECMAScript** adalah standar bahasa
* **JavaScript** adalah implementasi dari standar tersebut

Perkembangan versi ECMAScript antara lain:

| Versi  | Tahun | Fitur                         |
| ------ | ----- | ----------------------------- |
| ES5    | 2009  | Standar lama yang stabil      |
| ES6    | 2015  | Class, Module, Arrow Function |
| ES2017 | 2017  | Async dan Await               |
| ES2020 | 2020  | Optional Chaining             |

Informasi lebih lanjut mengenai ECMAScript dapat dilihat di:

[https://www.ecma-international.org/](https://www.ecma-international.org/)

---

# 5. JavaScript di Browser dan Server

Awalnya JavaScript hanya digunakan pada sisi klien (**client-side**) yaitu dijalankan langsung di browser pengguna.

Contohnya:

```javascript
alert("Selamat datang di website kami");
```

Namun sejak munculnya teknologi **Node.js**, JavaScript kini juga dapat digunakan di sisi server (**server-side**).

Node.js memungkinkan JavaScript dijalankan langsung pada sistem operasi tanpa menggunakan browser.

Contoh penggunaan JavaScript di server:

* Web server
* REST API
* Backend aplikasi
* Sistem real-time seperti chat

Contoh program Node.js sederhana:

```javascript
console.log("Server berjalan");
```

Karena JavaScript dapat digunakan pada **frontend dan backend**, maka JavaScript sering disebut sebagai bahasa **Full Stack**.

---

# 6. JavaScript vs Java

Banyak pemula yang mengira bahwa **JavaScript dan Java adalah bahasa yang sama**, padahal keduanya merupakan bahasa pemrograman yang berbeda.

Perbedaan utama antara JavaScript dan Java dapat dilihat pada tabel berikut.

| JavaScript                           | Java                          |
| ------------------------------------ | ----------------------------- |
| Digunakan untuk pengembangan web     | Digunakan untuk aplikasi umum |
| Dynamic typing                       | Static typing                 |
| Dijalankan oleh browser atau Node.js | Dijalankan oleh JVM           |
| Lebih fleksibel                      | Struktur lebih ketat          |

Walaupun namanya mirip, kedua bahasa ini tidak memiliki hubungan langsung.

---

# 7. Kelebihan JavaScript

Beberapa alasan mengapa JavaScript sangat populer antara lain:

1. **Mudah dipelajari**
   Sintaks JavaScript relatif sederhana dan mudah dipahami.

2. **Didukung semua browser**
   Tidak memerlukan instalasi tambahan.

3. **Ekosistem besar**
   JavaScript memiliki ribuan library dan framework.

4. **Digunakan di berbagai platform**
   Web, mobile, desktop, bahkan IoT.

Beberapa framework JavaScript yang populer:

| Framework | Fungsi                     |
| --------- | -------------------------- |
| React     | Pengembangan antarmuka web |
| Vue       | Framework frontend         |
| Angular   | Framework aplikasi web     |
| Express   | Framework backend Node.js  |

---

# 8. Peralatan untuk Development JavaScript

Untuk mempelajari dan mengembangkan aplikasi menggunakan JavaScript, diperlukan beberapa perangkat lunak.

Secara umum terdapat dua alat utama:

1. **Web Browser**
2. **Text Editor atau IDE**

---

## 8.1 Web Browser

Browser digunakan untuk menjalankan kode JavaScript dan melihat hasilnya.

Browser modern memiliki **JavaScript Engine** yang mampu mengeksekusi kode JavaScript secara langsung.

Beberapa browser yang sering digunakan oleh developer:

* Google Chrome
  [https://www.google.com/chrome/](https://www.google.com/chrome/)

* Mozilla Firefox
  [https://www.mozilla.org/firefox/](https://www.mozilla.org/firefox/)

* Microsoft Edge
  [https://www.microsoft.com/edge](https://www.microsoft.com/edge)

* Safari
  [https://www.apple.com/safari/](https://www.apple.com/safari/)

* Opera
  [https://www.opera.com/](https://www.opera.com/)

Browser juga menyediakan **Developer Tools** yang dapat dibuka dengan menekan tombol **F12**.

Contoh penggunaan console:

```javascript
console.log("Belajar JavaScript");
```

---

## 8.2 Text Editor atau IDE

Text editor atau IDE digunakan untuk menulis kode program JavaScript.

Beberapa editor yang populer antara lain:

* Visual Studio Code
  [https://code.visualstudio.com/](https://code.visualstudio.com/)

* Atom
  [https://atom.io/](https://atom.io/)

* Sublime Text
  [https://www.sublimetext.com/](https://www.sublimetext.com/)

* WebStorm
  [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)

* Notepad++
  [https://notepad-plus-plus.org/](https://notepad-plus-plus.org/)

* GNU Emacs
  [https://www.gnu.org/software/emacs/](https://www.gnu.org/software/emacs/)

* Gedit
  [https://wiki.gnome.org/Apps/Gedit](https://wiki.gnome.org/Apps/Gedit)

Di antara berbagai pilihan tersebut, **Visual Studio Code** merupakan editor yang paling banyak digunakan karena ringan, gratis, dan memiliki banyak ekstensi.

---

# 9. Cara Menjalankan JavaScript

JavaScript dapat dijalankan dengan beberapa cara.

## 1. Menggunakan Console Browser

Langkah-langkah:

1. Buka browser
2. Tekan **F12**
3. Pilih tab **Console**

Contoh:

```javascript
let x = 2;
let y = 3;

x + y
```

Output:

```
5
```

---

## 2. Menggunakan File HTML

Contoh:

```html
<html>
<body>

<script>
console.log("Hello JavaScript");
</script>

</body>
</html>
```

---

## 3. Menggunakan File JavaScript Terpisah

File **script.js**

```javascript
console.log("Belajar JavaScript");
```

File HTML:

```html
<script src="script.js"></script>
```

---

## 4. Menggunakan Node.js

Jalankan program melalui terminal:

```
node app.js
```

Contoh program:

```javascript
console.log("Program berjalan");
```

---

# 10. JavaScript dalam Pengembangan Modern

Saat ini JavaScript tidak hanya digunakan untuk membuat website sederhana, tetapi juga untuk membangun aplikasi skala besar.

Contoh teknologi berbasis JavaScript:

| Teknologi    | Fungsi              |
| ------------ | ------------------- |
| React        | Frontend UI         |
| Node.js      | Backend             |
| Next.js      | Fullstack framework |
| Electron     | Aplikasi desktop    |
| React Native | Aplikasi mobile     |

Beberapa perusahaan besar yang menggunakan JavaScript antara lain:

* Netflix
* Facebook
* Uber
* LinkedIn
* PayPal

---

# Kesimpulan

JavaScript merupakan bahasa pemrograman yang sangat penting dalam pengembangan web modern. Bahasa ini memungkinkan halaman web menjadi lebih interaktif dan dinamis.

Sejak pertama kali dibuat pada tahun 1995 oleh Brendan Eich, JavaScript telah berkembang menjadi bahasa pemrograman yang sangat kuat dan digunakan dalam berbagai bidang, baik pada sisi frontend maupun backend.

Dengan memahami konsep dasar JavaScript serta menyiapkan perangkat pengembangan yang diperlukan, kita dapat mulai mempelajari **dasar-dasar pemrograman JavaScript melalui praktik langsung**.

Pada bagian berikutnya kita akan mempelajari:

* Menulis program JavaScript pertama
* Variabel dan tipe data
* Operator
* Percabangan
* Perulangan
* Fungsi

yang merupakan dasar penting dalam pemrograman JavaScript.
