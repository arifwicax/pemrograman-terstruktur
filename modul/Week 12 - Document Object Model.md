# MODUL PERTEMUAN 12

# Tutorial JavaScript DOM (Document Object Model)

---

# A. Identitas Mata Kuliah

Nama Mata Kuliah: Pemrograman Terstruktur
Program Studi: Sistem Informasi
Pertemuan: Minggu ke-12

---

# B. Deskripsi Singkat Pertemuan

Pada pertemuan ini mahasiswa akan mempelajari **Document Object Model (DOM) dalam JavaScript**.

DOM adalah **antarmuka pemrograman yang merepresentasikan dokumen HTML sebagai pohon (tree) dari objek**. Dengan DOM, kita dapat **mengakses, memodifikasi, menambah, dan menghapus elemen HTML** secara dinamis menggunakan JavaScript.

Sebagai contoh, mengubah isi text element:

```javascript
// Mengakses elemen dengan ID
const title = document.getElementById("title");

// Mengubah konten
title.textContent = "Halo JavaScript DOM!";
```

Menangani event pada elemen:

```javascript
const button = document.getElementById("btn");
button.onclick = function() {
    console.log("Tombol diklik!");
};
```

Mahasiswa akan mempelajari:

* konsep DOM dan struktur tree
* object `window` dan `document`
* metode untuk memilih elemen (selector)
* property dan method elemen
* manipulasi konten dan attribute
* manipulasi style dan class
* navigasi DOM tree
* event handling
* pembuatan dan penghapusan elemen

---

# C. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini mahasiswa diharapkan mampu:

1. Menjelaskan konsep DOM dan struktur tree
2. Menggunakan object `window` dan `document`
3. Memilih elemen menggunakan berbagai selector
4. Mengakses dan memodifikasi property elemen
5. Mengubah konten HTML dan text
6. Memanipulasi attribute elemen
7. Mengubah style dan class CSS secara dinamis
8. Menavigasi struktur DOM tree
9. Menangani event dengan proper
10. Membuat dan menghapus elemen HTML dinamis

---

# D. Apa Itu DOM

DOM (Document Object Model) adalah **spesifikasi dari W3C yang mendefinisikan cara mengakses dokumen XML/HTML sebagai sebuah object model**.

Dalam DOM, dokumen HTML direpresentasikan sebagai **pohon (tree) dari objek**:

```
window
  └── document
      ├── html
      │   ├── head
      │   │   ├── title
      │   │   └── link
      │   └── body
      │       ├── h1
      │       ├── p
      │       └── div
      │           └── button
      └── images
      └── forms
      └── links
```

Setiap elemen dalam HTML adalah **node** dalam DOM tree. Node dapat berupa:
- **Element Node** - Tag HTML
- **Text Node** - Teks di dalam element
- **Attribute Node** - Attribute dari element

Contoh visualisasi DOM untuk HTML sederhana:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Halaman</title>
  </head>
  <body>
    <h1 id="title">Judul Halaman</h1>
    <p>Ini adalah paragraf</p>
  </body>
</html>
```

Visualisasi DOM Tree:

```
document
├── doctype: "html"
├── html
│   ├── head
│   │   └── title
│   │       └── Text: "Halaman"
│   └── body
│       ├── h1#title
│       │   └── Text: "Judul Halaman"
│       └── p
│           └── Text: "Ini adalah paragraf"
```

---

# E. Object Window dan Document

JavaScript memiliki dua object utama untuk berinteraksi dengan browser:

## 1. Object Window

`window` adalah **object global tertinggi** dalam JavaScript di browser. Semua variable global, function, dan object adalah property dari `window`.

Property penting window:

| Property | Deskripsi |
| -------- | --------- |
| `window.document` | Mengakses dokumen HTML |
| `window.location` | URL halaman saat ini |
| `window.history` | History browsing |
| `window.navigator` | Informasi browser |
| `window.innerHeight` | Tinggi inner window (px) |
| `window.innerWidth` | Lebar inner window (px) |
| `window.localStorage` | Penyimpanan lokal persisten |
| `window.sessionStorage` | Penyimpanan sesi sementara |

Method penting window:

| Method | Deskripsi |
| ------ | --------- |
| `alert()` | Menampilkan dialog alert |
| `confirm()` | Menampilkan dialog konfirmasi |
| `prompt()` | Menampilkan dialog input |
| `setTimeout()` | Eksekusi setelah delay |
| `setInterval()` | Eksekusi berkala |
| `open()` | Membuka window baru |
| `close()` | Menutup window |

Contoh penggunaan window:

```javascript
// Menampilkan tinggi dan lebar window
console.log(window.innerHeight);
console.log(window.innerWidth);

// Mendapatkan URL halaman
console.log(window.location.href);

// Alert dialog
window.alert("Selamat datang!");

// Menjalankan function setelah 2 detik
window.setTimeout(() => {
    console.log("2 detik telah berlalu");
}, 2000);
```

## 2. Object Document

`document` adalah **property dari window** yang merepresentasikan **dokumen HTML yang dimuat**.

Property penting document:

| Property | Deskripsi |
| -------- | --------- |
| `document.title` | Judul halaman (dari `<title>`) |
| `document.URL` | URL halaman |
| `document.baseURI` | Base URI halaman |
| `document.documentElement` | Root element (`<html>`) |
| `document.head` | Element `<head>` |
| `document.body` | Element `<body>` |
| `document.images` | Koleksi semua image |
| `document.forms` | Koleksi semua form |
| `document.links` | Koleksi semua link |

Method penting document untuk mencari elemen:

| Method | Deskripsi |
| ------ | --------- |
| `getElementById()` | Cari by ID |
| `getElementsByClassName()` | Cari by class name |
| `getElementsByTagName()` | Cari by tag name |
| `querySelector()` | Cari dengan CSS selector (first) |
| `querySelectorAll()` | Cari dengan CSS selector (all) |

Contoh penggunaan document:

```javascript
// Mengakses property
console.log(document.title);
console.log(document.body);
console.log(document.images);

// Mengakses method untuk cari elemen
const title = document.getElementById("title");
const links = document.getElementsByTagName("a");
const buttons = document.querySelectorAll(".btn");
```

---

# F. Memilih Elemen (Element Selector)

Ada beberapa cara untuk memilih (select) elemen HTML dari DOM:

## 1. getElementById()

Memilih elemen berdasarkan **attribute id** yang unik.

Syntax:

```javascript
const element = document.getElementById("idName");
```

Karakteristik:
- Mengembalikan **satu element** atau `null` jika tidak ditemukan
- ID harus **unik** dalam dokumen
- Paling cepat dan efisien

Contoh:

```html
<h1 id="title">Judul Halaman</h1>
<p id="description">Deskripsi</p>

<script>
    const title = document.getElementById("title");
    console.log(title); // <h1 id="title">...</h1>
    
    const notFound = document.getElementById("nonexistent");
    console.log(notFound); // null
</script>
```

## 2. getElementsByClassName()

Memilih elemen berdasarkan **class name** (bisa lebih dari satu).

Syntax:

```javascript
const elements = document.getElementsByClassName("className");
```

Karakteristik:
- Mengembalikan **HTMLCollection** (array-like)
- Dapat mencocokkan **lebih dari satu element**
- Bersifat **live** - berubah jika DOM berubah

Contoh:

```html
<p class="highlight">Paragraf 1</p>
<p class="highlight">Paragraf 2</p>
<p>Paragraf 3</p>

<script>
    const highlights = document.getElementsByClassName("highlight");
    console.log(highlights.length); // 2
    console.log(highlights[0]); // <p class="highlight">Paragraf 1</p>
    
    // Looping
    for (let i = 0; i < highlights.length; i++) {
        console.log(highlights[i].textContent);
    }
</script>
```

## 3. getElementsByTagName()

Memilih elemen berdasarkan **nama tag** HTML.

Syntax:

```javascript
const elements = document.getElementsByTagName("tagName");
```

Karakteristik:
- Mengembalikan **HTMLCollection** (array-like)
- Dapat mencocokkan **semua element dengan tag yang sama**
- Bersifat **live**

Contoh:

```html
<p>Paragraf 1</p>
<p>Paragraf 2</p>
<p>Paragraf 3</p>

<script>
    const paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs.length); // 3
    
    // Looping
    for (let i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i].textContent);
    }
</script>
```

## 4. querySelector()

Memilih **elemen pertama** yang cocok dengan **CSS selector**.

Syntax:

```javascript
const element = document.querySelector("selector");
```

Karakteristik:
- Mengembalikan **satu element** atau `null`
- Menggunakan **CSS selector** (sangat fleksibel)
- Bersifat **static** - snapshot pada waktu pencarian
- Lebih modern dan powerful

Contoh CSS selector:

```javascript
// By ID
const byId = document.querySelector("#title");

// By class
const byClass = document.querySelector(".highlight");

// By tag
const byTag = document.querySelector("p");

// By attribute
const byAttr = document.querySelector("[data-id='123']");

// Kombinasi (class di dalam div)
const combined = document.querySelector("div.container");

// Pseudo-class
const firstP = document.querySelector("p:first-child");
```

## 5. querySelectorAll()

Memilih **semua elemen** yang cocok dengan **CSS selector**.

Syntax:

```javascript
const elements = document.querySelectorAll("selector");
```

Karakteristik:
- Mengembalikan **NodeList** (array-like)
- Menggunakan **CSS selector**
- Bersifat **static**
- Dapat di-loop seperti array

Contoh:

```html
<p class="highlight">Paragraf 1</p>
<p class="highlight">Paragraf 2</p>
<p>Paragraf 3</p>

<script>
    // Semua elemen dengan class "highlight"
    const highlights = document.querySelectorAll(".highlight");
    console.log(highlights.length); // 2
    
    // Loop menggunakan forEach (NodeList support forEach)
    highlights.forEach(element => {
        console.log(element.textContent);
    });
</script>
```

**Perbandingan Metode:**

| Method | Return | Sifat | CSS Selector | Kecepatan |
| ------ | ------ | ----- | ------------ | --------- |
| `getElementById()` | Element | - | - | Tercepat |
| `getElementsByClassName()` | HTMLCollection | Live | - | Cepat |
| `getElementsByTagName()` | HTMLCollection | Live | - | Cepat |
| `querySelector()` | Element | Static | Ya | Sedang |
| `querySelectorAll()` | NodeList | Static | Ya | Sedang |

Rekomendasi penggunaan:
- Gunakan `getElementById()` untuk mencari elemen unik (paling efisien)
- Gunakan `querySelector()` / `querySelectorAll()` untuk pencarian yang lebih fleksibel
- Hindari perulangan elemen dalam loop yang besar dengan metode yang bersifat "live"

---

# G. Property dan Method Elemen

Setiap elemen HTML yang dipilih adalah sebuah **object** dengan **property dan method** yang dapat diakses dan dimanipulasi.

## 1. Property Elemen

### Konten (Content)

| Property | Deskripsi | Contoh |
| -------- | --------- | ------ |
| `textContent` | Teks dalam element (text nodes saja) | `elem.textContent = "Hello"` |
| `innerHTML` | HTML content dalam element | `elem.innerHTML = "<b>Bold</b>"` |
| `innerText` | Teks yang terlihat (visible text) | `elem.innerText = "Visible"` |
| `value` | Nilai input element (form) | `input.value = "text"` |

Perbedaan `textContent`, `innerText`, dan `innerHTML`:

```html
<div id="box">
    <p>Paragraf <b>bold</b></p>
    <p style="display:none">Hidden</p>
</div>

<script>
    const box = document.getElementById("box");
    
    // textContent: semua text nodes (termasuk hidden)
    console.log(box.textContent); 
    // Output: "Paragraf bold\nHidden"
    
    // innerText: hanya text yang terlihat (visible)
    console.log(box.innerText);
    // Output: "Paragraf bold"
    
    // innerHTML: semua HTML content
    console.log(box.innerHTML);
    // Output: "<p>Paragraf <b>bold</b></p><p style="display:none">Hidden</p>"
</script>
```

### Attribute

| Property | Deskripsi |
| -------- | --------- |
| `id` | Attribute ID |
| `className` | Attribute class (string) |
| `classList` | Attribute class (DOMTokenList) |
| `dataset` | Data attribute (data-*) |
| `attributes` | Semua attribute |

Contoh:

```html
<img id="logo" class="center small" src="logo.png" alt="Logo" data-id="123">

<script>
    const img = document.getElementById("logo");
    
    console.log(img.id); // "logo"
    console.log(img.className); // "center small"
    console.log(img.src); // "logo.png"
    console.log(img.alt); // "Logo"
    console.log(img.dataset.id); // "123"
</script>
```

### Style

| Property | Deskripsi |
| -------- | --------- |
| `style` | Object style untuk inline CSS |
| `style.color` | Warna text |
| `style.backgroundColor` | Warna background |
| `style.display` | Tampilan element |
| `style.width` | Lebar |
| `style.height` | Tinggi |

Contoh:

```javascript
const elem = document.getElementById("box");

// Mengubah style
elem.style.backgroundColor = "blue";
elem.style.color = "white";
elem.style.padding = "20px";
elem.style.borderRadius = "10px";

// Menghapus style inline
elem.style.backgroundColor = "";
```

### Lainnya

| Property | Deskripsi |
| -------- | --------- |
| `tagName` | Nama tag element |
| `clientHeight` | Tinggi element (px) |
| `clientWidth` | Lebar element (px) |
| `offsetHeight` | Tinggi + border + padding (px) |
| `offsetWidth` | Lebar + border + padding (px) |
| `scrollHeight` | Tinggi scroll content |
| `scrollWidth` | Lebar scroll content |

## 2. Method Elemen

### Manipulasi Konten

```javascript
// Mengubah text
element.textContent = "Text baru";

// Mengubah HTML
element.innerHTML = "<b>HTML baru</b>";

// Mengubah value (input)
inputElement.value = "nilai baru";
```

### Manipulasi Attribute

```javascript
// Mendapatkan attribute
const src = element.getAttribute("src");

// Mengatur attribute
element.setAttribute("src", "image.png");

// Mengecek attribute
const hasAttr = element.hasAttribute("disabled");

// Menghapus attribute
element.removeAttribute("disabled");
```

### Manipulasi Class

Menggunakan `classList`:

```html
<div id="box" class="active highlight">Box</div>

<script>
    const box = document.getElementById("box");
    
    // Menambah class
    box.classList.add("selected");
    
    // Menghapus class
    box.classList.remove("highlight");
    
    // Toggle class (tambah jika tidak ada, hapus jika ada)
    box.classList.toggle("active");
    
    // Mengecek class
    if (box.classList.contains("active")) {
        console.log("Element memiliki class active");
    }
</script>
```

### Navigasi DOM

```javascript
// Parent
const parent = element.parentElement;
const parentNode = element.parentNode;

// Children
const children = element.children; // HTMLCollection
const childNodes = element.childNodes; // NodeList (semua node)
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Sibling
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;
```

Contoh:

```html
<ul id="list">
    <li>Item 1</li>
    <li id="item2">Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    const item2 = document.getElementById("item2");
    
    // Parent
    console.log(item2.parentElement); // <ul id="list">...</ul>
    
    // Sibling
    console.log(item2.nextElementSibling); // <li>Item 3</li>
    console.log(item2.previousElementSibling); // <li>Item 1</li>
</script>
```

---

# H. Membuat dan Menghapus Elemen

### Membuat Elemen

```javascript
// Membuat elemen baru
const newElement = document.createElement("tagName");

// Mengatur konten
newElement.textContent = "Konten elemen";

// Menambahkan ke DOM
parentElement.appendChild(newElement);
```

Contoh lengkap:

```html
<div id="container"></div>

<script>
    // Membuat elemen baru
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Ini adalah paragraf baru";
    newParagraph.className = "highlight";
    newParagraph.style.color = "blue";
    
    // Menambahkan ke container
    const container = document.getElementById("container");
    container.appendChild(newParagraph);
</script>
```

### Menambahkan Elemen

Ada beberapa cara menambahkan elemen:

```javascript
// appendChild() - menambah sebagai child terakhir
parentElement.appendChild(newElement);

// insertBefore() - menambah sebelum elemen tertentu
parentElement.insertBefore(newElement, referenceElement);

// insertAdjacentHTML() - menambah HTML di posisi tertentu
element.insertAdjacentHTML("beforeend", "<p>Baru</p>");
// "beforebegin" - sebelum element
// "afterbegin" - setelah pembuka tag
// "beforeend" - sebelum penutup tag
// "afterend" - setelah element
```

Contoh:

```html
<div id="list">
    <div class="item">Item 1</div>
    <div class="item">Item 3</div>
</div>

<script>
    const list = document.getElementById("list");
    
    // Membuat item baru
    const newItem = document.createElement("div");
    newItem.className = "item";
    newItem.textContent = "Item 2";
    
    // Menambahkan di tengah (sebelum Item 3)
    const item3 = list.children[1];
    list.insertBefore(newItem, item3);
</script>
```

### Menghapus Elemen

```javascript
// removeChild() - menghapus child element
parentElement.removeChild(childElement);

// remove() - menghapus elemen itu sendiri (lebih modern)
element.remove();
```

Contoh:

```html
<div id="container">
    <p id="text1">Paragraf 1</p>
    <p id="text2">Paragraf 2</p>
</div>

<script>
    // Cara 1: removeChild()
    const container = document.getElementById("container");
    const text1 = document.getElementById("text1");
    container.removeChild(text1);
    
    // Cara 2: remove() (modern)
    const text2 = document.getElementById("text2");
    text2.remove();
</script>
```

---

# I. Node dan Struktur DOM Tree

### Apa Itu Node

Node adalah **setiap objek dalam DOM tree**. Ada beberapa tipe node:

| Node Type | Value | Deskripsi |
| --------- | ----- | --------- |
| `ELEMENT_NODE` | 1 | Tag HTML |
| `ATTRIBUTE_NODE` | 2 | Attribute element |
| `TEXT_NODE` | 3 | Teks dalam element |
| `COMMENT_NODE` | 8 | Comment HTML |
| `DOCUMENT_NODE` | 9 | Document itu sendiri |

Property node:

```javascript
// Tipe node
console.log(node.nodeType); // 1, 3, 9, dll

// Nama node
console.log(node.nodeName); // "DIV", "P", "#text", "#comment"

// Nilai node (terutama untuk TEXT_NODE)
console.log(node.nodeValue); // Teks content
```

Contoh:

```html
<div id="box">
    <p>Paragraf</p>
    <!-- Komentar -->
</div>

<script>
    const box = document.getElementById("box");
    
    // Semua child nodes (termasuk text nodes)
    for (let node of box.childNodes) {
        console.log(node.nodeType); // 3 (text), 1 (element)
        console.log(node.nodeName); // "#text", "P"
    }
</script>
```

### Navigasi Node Tree

```javascript
// Parent
const parent = node.parentNode;

// Children
const children = node.childNodes; // NodeList (semua node)
const firstChild = node.firstChild;
const lastChild = node.lastChild;

// Sibling
const nextSibling = node.nextSibling;
const prevSibling = node.previousSibling;
```

Perbedaan `childNodes` vs `children`:

```html
<div id="box">
    <p>Paragraf 1</p>
    <p>Paragraf 2</p>
</div>

<script>
    const box = document.getElementById("box");
    
    // childNodes: semua nodes (termasuk text nodes)
    console.log(box.childNodes.length); // 5 (text, p, text, p, text)
    
    // children: hanya element nodes
    console.log(box.children.length); // 2 (dua p element)
</script>
```

---

# J. Event Handling

Event adalah **aksi atau kejadian yang terjadi pada elemen HTML** (seperti klik, input, scroll, dll).

### Cara Menangani Event

**1. Menggunakan Property (Inline)**

```html
<button id="btn">Klik saya</button>

<script>
    const btn = document.getElementById("btn");
    btn.onclick = function() {
        console.log("Tombol diklik!");
    };
</script>
```

**2. Menggunakan Attribute HTML**

```html
<button onclick="alert('Diklik!')">Klik saya</button>
```

**3. Menggunakan addEventListener() (Recommended)**

```html
<button id="btn">Klik saya</button>

<script>
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
        console.log("Tombol diklik!");
    });
</script>
```

### Event Objects

Ketika event terjadi, JavaScript secara otomatis membuat **event object** yang berisi informasi tentang event tersebut:

```javascript
element.addEventListener("click", function(event) {
    console.log(event.type); // "click"
    console.log(event.target); // Element yang di-klik
    console.log(event.x); // Koordinat X mouse
    console.log(event.y); // Koordinat Y mouse
    console.log(event.clientX); // Koordinat X dalam viewport
    console.log(event.clientY); // Koordinat Y dalam viewport
});
```

### Event Umum

| Event | Trigger |
| ----- | ------- |
| `click` | Element di-klik |
| `dblclick` | Element di-double click |
| `mouseenter` | Mouse masuk element |
| `mouseleave` | Mouse keluar element |
| `mouseover` | Mouse di atas element |
| `mouseout` | Mouse keluar element |
| `mousemove` | Mouse bergerak |
| `mousedown` | Mouse button ditekan |
| `mouseup` | Mouse button dilepas |
| `change` | Nilai input berubah |
| `input` | Input sedang diisi |
| `focus` | Element mendapat focus |
| `blur` | Element kehilangan focus |
| `submit` | Form di-submit |
| `reset` | Form di-reset |
| `keydown` | Key ditekan |
| `keyup` | Key dilepas |
| `keypress` | Key ditekan dan dilepas |
| `scroll` | User scroll |
| `resize` | Window di-resize |
| `load` | Halaman selesai loading |
| `unload` | Halaman akan di-unload |

### Contoh Event Handling

**Klik Button:**

```html
<button id="myBtn">Klik saya</button>
<p id="result"></p>

<script>
    const btn = document.getElementById("myBtn");
    const result = document.getElementById("result");
    
    btn.addEventListener("click", function(event) {
        result.textContent = "Anda mengklik tombol!";
        result.style.color = "green";
    });
</script>
```

**Input Form:**

```html
<input id="userInput" type="text" placeholder="Ketik sesuatu">
<p id="output"></p>

<script>
    const input = document.getElementById("userInput");
    const output = document.getElementById("output");
    
    input.addEventListener("input", function() {
        output.textContent = "Anda mengetik: " + input.value;
    });
</script>
```

**Mouse Event:**

```html
<div id="box" style="width: 200px; height: 200px; background: lightblue;">
    Hover atau klik di sini
</div>
<p id="info"></p>

<script>
    const box = document.getElementById("box");
    const info = document.getElementById("info");
    
    box.addEventListener("click", function(event) {
        info.textContent = `Anda klik di (${event.x}, ${event.y})`;
    });
    
    box.addEventListener("mouseenter", function() {
        box.style.backgroundColor = "lightgreen";
    });
    
    box.addEventListener("mouseleave", function() {
        box.style.backgroundColor = "lightblue";
    });
</script>
```

**Form Submit:**

```html
<form id="myForm">
    <input type="text" id="name" placeholder="Nama" required>
    <button type="submit">Submit</button>
</form>
<p id="output"></p>

<script>
    const form = document.getElementById("myForm");
    const output = document.getElementById("output");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah submit default
        
        const name = document.getElementById("name").value;
        output.textContent = "Halo, " + name + "!";
    });
</script>
```

---

# K. Contoh Project Lengkap

Berikut adalah contoh project DOM yang menggabungkan berbagai konsep:

### Todo List App

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Todo List</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        h1 {
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .input-group {
            display: flex;
            margin-bottom: 20px;
            gap: 10px;
        }
        
        input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        
        button {
            padding: 10px 20px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }
        
        button:hover {
            background: #764ba2;
        }
        
        #todoList {
            list-style: none;
        }
        
        .todo-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            background: #f5f5f5;
            margin-bottom: 10px;
            border-radius: 5px;
            border-left: 4px solid #667eea;
        }
        
        .todo-item.completed {
            opacity: 0.6;
        }
        
        .todo-item.completed .todo-text {
            text-decoration: line-through;
        }
        
        .todo-text {
            flex: 1;
            cursor: pointer;
        }
        
        .todo-actions {
            display: flex;
            gap: 10px;
        }
        
        .btn-small {
            padding: 5px 10px;
            font-size: 12px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        
        .btn-done {
            background: #2ecc71;
            color: white;
        }
        
        .btn-delete {
            background: #e74c3c;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Todo List</h1>
        
        <div class="input-group">
            <input 
                type="text" 
                id="todoInput" 
                placeholder="Tambah todo baru..."
            >
            <button onclick="addTodo()">Tambah</button>
        </div>
        
        <ul id="todoList"></ul>
    </div>

    <script>
        // Data todos
        let todos = [];

        // Fungsi untuk menambah todo
        function addTodo() {
            const input = document.getElementById("todoInput");
            const text = input.value.trim();

            if (text === "") {
                alert("Masukkan todo terlebih dahulu!");
                return;
            }

            // Tambah ke array
            const todo = {
                id: Date.now(),
                text: text,
                completed: false
            };
            todos.push(todo);

            // Clear input
            input.value = "";

            // Render ulang
            renderTodos();
        }

        // Fungsi untuk render todos
        function renderTodos() {
            const todoList = document.getElementById("todoList");
            todoList.innerHTML = "";

            todos.forEach(todo => {
                const li = document.createElement("li");
                li.className = `todo-item ${todo.completed ? "completed" : ""}`;
                
                li.innerHTML = `
                    <span class="todo-text">${escapeHtml(todo.text)}</span>
                    <div class="todo-actions">
                        <button 
                            class="btn-small btn-done" 
                            onclick="toggleTodo(${todo.id})"
                        >
                            ${todo.completed ? "Undo" : "Done"}
                        </button>
                        <button 
                            class="btn-small btn-delete" 
                            onclick="deleteTodo(${todo.id})"
                        >
                            Delete
                        </button>
                    </div>
                `;
                
                todoList.appendChild(li);
            });
        }

        // Fungsi untuk toggle completed
        function toggleTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                renderTodos();
            }
        }

        // Fungsi untuk delete todo
        function deleteTodo(id) {
            todos = todos.filter(t => t.id !== id);
            renderTodos();
        }

        // Fungsi untuk escape HTML (keamanan)
        function escapeHtml(text) {
            const div = document.createElement("div");
            div.textContent = text;
            return div.innerHTML;
        }

        // Event listener untuk Enter key
        document.getElementById("todoInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addTodo();
            }
        });
    </script>
</body>
</html>
```

---

# L. Best Practices DOM

Beberapa best practices ketika bekerja dengan DOM:

1. **Cache DOM References**
   ```javascript
   // Buruk: mencari elemen berulang kali
   for (let i = 0; i < 1000; i++) {
       document.getElementById("result").textContent = i;
   }

   // Baik: cache reference
   const result = document.getElementById("result");
   for (let i = 0; i < 1000; i++) {
       result.textContent = i;
   }
   ```

2. **Hindari Inline Event Handlers**
   ```javascript
   // Buruk
   // <button onclick="alert('klik')">Klik</button>
   
   // Baik
   const btn = document.getElementById("btn");
   btn.addEventListener("click", function() {
       alert("klik");
   });
   ```

3. **Event Delegation**
   ```javascript
   // Alih-alih attach listener ke 1000 elemen
   const list = document.getElementById("list");
   list.addEventListener("click", function(event) {
       if (event.target.tagName === "LI") {
           console.log("Item diklik:", event.target.textContent);
       }
   });
   ```

4. **Gunakan querySelector Modern**
   ```javascript
   // Lebih readable dan fleksibel
   const selected = document.querySelector(".active");
   const inputs = document.querySelectorAll("input[type='text']");
   ```

5. **Hindari Memory Leaks**
   ```javascript
   // Hapus event listener jika tidak perlu lagi
   function handleClick() {
       console.log("klik");
   }
   
   element.addEventListener("click", handleClick);
   
   // Nanti jika tidak perlu
   element.removeEventListener("click", handleClick);
   ```

---

# M. Ringkasan Materi

Poin-poin penting yang telah dipelajari:

1. **DOM** adalah representasi tree dari dokumen HTML yang dapat dimanipulasi dengan JavaScript

2. **Window dan Document** adalah dua object utama untuk berinteraksi dengan browser dan HTML

3. Ada **5 cara memilih elemen**: `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `querySelector()`, `querySelectorAll()`

4. **Property dan method elemen** memungkinkan kita mengubah konten, attribute, style, dan struktur DOM

5. **Node** adalah setiap objek dalam DOM tree (element, text, comment, dll)

6. **Event** adalah aksi yang terjadi pada elemen dan dapat ditangani dengan event listener

7. **Manipulasi elemen** mencakup membuat, menambah, mengubah, dan menghapus elemen

8. **Best practices** penting untuk membuat code yang efisien, aman, dan mudah dimaintain

---

# N. Referensi Lanjutan

Untuk memperdalam materi DOM, silakan pelajari:

- **MDN Web Docs - DOM**: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- **W3C DOM Specification**: https://www.w3.org/TR/dom/
- **JavaScript.info - DOM**: https://javascript.info/dom-intro

Pratikum dan contoh kode lengkap tersedia di folder `week 12` dalam file-file HTML terstruktur.

---

**Selamat belajar! Pastikan untuk mempraktikkan setiap konsep dengan membuat script sendiri.**
