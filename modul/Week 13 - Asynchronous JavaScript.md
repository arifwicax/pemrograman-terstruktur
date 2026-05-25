# MODUL PERTEMUAN 13

# Tutorial Asynchronous JavaScript

---

# A. Identitas Mata Kuliah

Nama Mata Kuliah: Pemrograman Terstruktur
Program Studi: Sistem Informasi
Pertemuan: Minggu ke-13

---

# B. Deskripsi Singkat Pertemuan

Pada pertemuan ini mahasiswa akan mempelajari **Asynchronous JavaScript**, yaitu teknik pemrograman yang memungkinkan kode berjalan **tanpa memblokir eksekusi program** lainnya.

JavaScript pada dasarnya bersifat **single-threaded** — artinya hanya bisa menjalankan satu tugas pada satu waktu. Namun dengan mekanisme asynchronous, JavaScript dapat menjalankan operasi yang membutuhkan waktu lama (seperti request ke server, membaca file, dsb.) **tanpa membuat halaman web menjadi tidak responsif**.

Sebagai contoh, mengirim request ke server secara asynchronous:

```javascript
// AJAX: Asynchronous JavaScript and XML
const ajax = new XMLHttpRequest();
ajax.open("GET", "api/data.json");
ajax.addEventListener("load", function () {
    const json = JSON.parse(ajax.responseText);
    console.log(json);
});
ajax.send();

console.log("Kode ini tetap berjalan sebelum response diterima");
```

Mahasiswa akan mempelajari:

* Konsep synchronous vs asynchronous
* `setTimeout()` dan `setInterval()`
* Web Worker untuk komputasi berat
* AJAX (XMLHttpRequest)
* Promise dan chaining
* `Promise.all()` untuk eksekusi paralel
* Fetch API sebagai pengganti AJAX modern
* `async` / `await` sebagai sintaks yang lebih bersih

---

# C. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini mahasiswa diharapkan mampu:

1. Menjelaskan perbedaan antara synchronous dan asynchronous
2. Menggunakan `setTimeout()` dan `setInterval()` untuk penjadwalan tugas
3. Memahami masalah blocking dan cara mengatasinya dengan Web Worker
4. Membuat request HTTP menggunakan AJAX (XMLHttpRequest)
5. Menangani response AJAX berdasarkan status HTTP
6. Mengirim data melalui query parameter, form, JSON, dan file upload
7. Membuat dan menggunakan Promise beserta `.then()`, `.catch()`, `.finally()`
8. Menjalankan beberapa Promise secara paralel dengan `Promise.all()`
9. Menggunakan Fetch API untuk melakukan HTTP request
10. Menulis kode asynchronous yang bersih menggunakan `async` / `await`

---

# D. Synchronous vs Asynchronous

Sebelum memahami asynchronous, penting untuk mengerti perbedaan keduanya:

## 1. Synchronous

Kode dieksekusi **baris per baris, berurutan**. Baris berikutnya tidak akan berjalan sebelum baris sebelumnya selesai.

```javascript
console.log("Langkah 1");
console.log("Langkah 2");
console.log("Langkah 3");

// Output:
// Langkah 1
// Langkah 2
// Langkah 3
```

**Masalah**: Jika ada operasi yang lambat (misal request ke server), seluruh program akan **terhenti** menunggu.

## 2. Asynchronous

Kode tidak menunggu operasi selesai — program **melanjutkan eksekusi** sambil menunggu operasi selesai di background.

```javascript
console.log("Mulai");

setTimeout(function () {
    console.log("Selesai setelah 2 detik");
}, 2000);

console.log("Program tetap berjalan");

// Output:
// Mulai
// Program tetap berjalan
// Selesai setelah 2 detik  (2 detik kemudian)
```

---

# E. setTimeout dan setInterval

## 1. setTimeout

`setTimeout()` digunakan untuk **menjalankan fungsi sekali setelah jeda waktu tertentu** (dalam milidetik).

**Syntax:**

```javascript
setTimeout(function, delay);
```

**Contoh** (`1.set-timeout.html`):

```javascript
function addElement() {
    const header = document.createElement("h1");
    header.textContent = "Arif Wicaksono Septyanto";

    document.body.appendChild(header);
}

setTimeout(addElement, 5000);  // Jalankan setelah 5 detik
console.info("Program Selesai");
```

**Catatan penting:**
- `console.info("Program Selesai")` akan tampil **lebih dahulu** sebelum elemen `h1` muncul
- Ini membuktikan bahwa `setTimeout` bersifat **non-blocking**
- Satuan waktu adalah **milidetik** (1000 ms = 1 detik)

## 2. setInterval

`setInterval()` digunakan untuk **menjalankan fungsi berulang kali** dengan jeda tertentu secara terus menerus.

**Syntax:**

```javascript
setInterval(function, delay);
```

**Contoh** (`2.set-interval.html`):

```javascript
function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}

setInterval(setTime, 1000);  // Jalankan setiap 1 detik
console.info("Program Selesai");
```

**Perbandingan setTimeout vs setInterval:**

| Fitur | `setTimeout` | `setInterval` |
| ----- | ------------ | ------------- |
| Eksekusi | Sekali setelah delay | Berulang setiap delay |
| Penggunaan | Delay satu kali | Update periodik (jam, timer) |
| Stop | `clearTimeout(id)` | `clearInterval(id)` |

---

# F. Blocking dan Web Worker

## 1. Masalah Blocking

Kode yang berjalan lama akan **memblokir (blocking)** thread utama JavaScript, membuat halaman **tidak responsif** sampai kode selesai dijalankan.

**Contoh kode blocking** (`3.slow.html`):

```javascript
function slowLog(total) {
    for (let i = 0; i < total; i++) {
        console.info(i);
    }
}

document.getElementById("buttonTask").onclick = function () {
    console.info("Start");
    slowLog(100000);   // Loop 100.000 kali — BLOCKING!
    console.info("End");
};
```

Selama `slowLog()` berjalan, pengguna **tidak bisa mengklik tombol lain**, scroll, atau melakukan interaksi apapun karena thread utama sedang sibuk.

## 2. Web Worker

**Web Worker** adalah fitur browser yang memungkinkan JavaScript berjalan di **background thread terpisah**, sehingga tidak memblokir thread utama.

**Alur kerja Web Worker:**

```
Thread Utama                    Background Worker
     |                               |
     |-- postMessage(data) --------> |
     |                               | (proses berat di sini)
     |<-- addEventListener("message") |
     |                               |
```

**File utama** (`4.web-worker.html`):

```javascript
// Membuat worker dari file terpisah
const worker = new Worker("worker.js");

// Mendengarkan pesan dari worker
worker.addEventListener("message", function (message) {
    console.info(message.data);
});

// Mengirim data ke worker saat tombol diklik
document.getElementById("buttonTask").onclick = function () {
    worker.postMessage(100000);
};
```

**File worker** (`worker.js`):

```javascript
// Worker berjalan di background thread
addEventListener("message", function (message) {
    const total = message.data;

    for (let i = 0; i < total; i++) {
        postMessage(i);  // Kirim hasil balik ke thread utama
    }
});
```

**Keunggulan Web Worker:**
- Proses berat tidak membekukan UI
- Thread utama tetap responsif
- Cocok untuk: komputasi matematis, pemrosesan data besar, dll.

**Keterbatasan Web Worker:**
- Tidak bisa mengakses DOM langsung
- Komunikasi hanya melalui `postMessage()`
- Hanya bisa dijalankan dari HTTP server (tidak dari `file://`)

---

# G. AJAX (XMLHttpRequest)

**AJAX** (Asynchronous JavaScript and XML) adalah teknik untuk melakukan **request ke server tanpa me-reload halaman**.

## 1. AJAX Dasar

**Contoh** (`5.ajax.html`):

```javascript
const ajax = new XMLHttpRequest();
ajax.open("GET", "api/hello.json");          // Tentukan method dan URL
ajax.addEventListener("load", function () {  // Handler saat response diterima
    const json = JSON.parse(ajax.responseText);

    const header = document.getElementById("response");
    header.textContent = json.response;
});
ajax.send();  // Kirim request
```

**Langkah-langkah AJAX:**

1. Buat object `XMLHttpRequest`
2. Panggil `open(method, url)` untuk mengatur request
3. Daftarkan event listener `"load"` untuk menangani response
4. Panggil `send()` untuk mengirim request

**File JSON contoh** (`api/hello.json`):

```json
{
  "response": "Hello Arif Wicaksono Septyanto"
}
```

## 2. AJAX dengan Status HTTP

Response dari server selalu disertai **status HTTP**. Penting untuk memeriksa status sebelum memproses response.

**Kode status HTTP umum:**

| Kode | Arti |
| ---- | ---- |
| 200 | OK — Request berhasil |
| 404 | Not Found — Resource tidak ditemukan |
| 500 | Internal Server Error |
| 401 | Unauthorized |
| 403 | Forbidden |

**Contoh penanganan status** (`6.ajax-status.html`):

```javascript
function displayResponse(json) {
    const header = document.getElementById("response");
    header.textContent = json.response;
}

const ajax = new XMLHttpRequest();

// Memantau perubahan readyState
ajax.onreadystatechange = function () {
    console.info(`Ready State Change ${ajax.readyState}`);
};

ajax.open("GET", "api/salah.json");  // File tidak ada → 404
ajax.addEventListener("load", function () {
    if (ajax.status === 200) {
        const json = JSON.parse(ajax.responseText);
        displayResponse(json);
    } else {
        displayResponse({
            response: `Terjadi Kesalahan dengan status ${ajax.status}`
        });
    }
});
ajax.send();
```

**Nilai readyState:**

| Nilai | Nama | Deskripsi |
| ----- | ---- | --------- |
| 0 | UNSENT | `open()` belum dipanggil |
| 1 | OPENED | `open()` sudah dipanggil |
| 2 | HEADERS_RECEIVED | `send()` dipanggil, header diterima |
| 3 | LOADING | Response sedang diterima |
| 4 | DONE | Response selesai diterima |

## 3. Mengirim Query Parameter

Query parameter dikirim melalui URL dengan format `?key=value&key2=value2`.

**Contoh** (`7.ajax-send-query-param.html`):

```javascript
function doSearch() {
    const ajax = new XMLHttpRequest();

    // Membuat query parameter
    const param = new URLSearchParams();
    param.append("search", document.getElementById("search").value);
    param.append("filter", document.getElementById("search").value);

    // Menambahkan param ke URL
    ajax.open("GET", `https://hookb.in/xxx?${param.toString()}`);
    ajax.onload = function () {
        const response = document.getElementById("response");
        response.innerText = ajax.responseText;
    };

    ajax.send();
}

document.getElementById("searchButton").onclick = doSearch;
```

**Hasilnya:** URL menjadi `https://hookb.in/xxx?search=laptop&filter=laptop`

## 4. Mengirim Data Form (URL-encoded)

Data form dikirim dengan format `application/x-www-form-urlencoded` menggunakan `URLSearchParams`.

**Contoh** (`8.ajax-send-form.html`):

```javascript
function doLogin() {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://hookb.in/xxx");
    ajax.onload = function () {
        document.getElementById("response").innerText = ajax.responseText;
    };

    // Set Content-Type sebagai form
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Membuat data form
    const form = new URLSearchParams();
    form.append("username", document.getElementById("username").value);
    form.append("password", document.getElementById("password").value);

    ajax.send(form);
}

document.getElementById("login").onclick = doLogin;
```

## 5. Mengirim Data JSON

Data JSON dikirim dengan format `application/json` dan di-serialize menggunakan `JSON.stringify()`.

**Contoh** (`9.ajax-send-json.html`):

```javascript
function doLogin() {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://hookb.in/xxx");
    ajax.onload = function () {
        document.getElementById("response").innerText = ajax.responseText;
    };

    // Set Content-Type sebagai JSON
    ajax.setRequestHeader("Content-Type", "application/json");

    // Membuat object JSON
    const json = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    ajax.send(JSON.stringify(json));  // Serialize ke string JSON
}

document.getElementById("login").onclick = doLogin;
```

## 6. Mengirim File (Multipart Form Data)

File dikirim menggunakan `FormData`, yang secara otomatis menggunakan format `multipart/form-data`.

**Contoh** (`10.ajax-send-file.html`):

```javascript
function doRegister() {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://hookb.in/xxx");
    ajax.onload = function () {
        document.getElementById("response").innerText = ajax.responseText;
    };

    // FormData otomatis menggunakan multipart/form-data
    const form = new FormData();
    form.append("username", document.getElementById("username").value);
    form.append("name", document.getElementById("name").value);

    // Mengambil file dari input
    const files = document.getElementById("profile").files;
    const firstFile = files.item(0);
    form.append("profile", firstFile);

    ajax.send(form);
}

document.getElementById("register").onclick = doRegister;
```

**Perbandingan cara mengirim data:**

| Cara | Content-Type | Digunakan untuk |
| ---- | ------------ | --------------- |
| Query Parameter | — (di URL) | GET request dengan filter/pencarian |
| URLSearchParams | `application/x-www-form-urlencoded` | Login form sederhana |
| JSON | `application/json` | API modern / REST API |
| FormData | `multipart/form-data` | Upload file dan data form |

---

# H. Promise

**Promise** adalah object yang merepresentasikan **hasil dari operasi asynchronous** yang mungkin belum selesai. Promise memiliki tiga state:

```
Promise
  ├── Pending   → sedang berjalan
  ├── Fulfilled → berhasil (resolve)
  └── Rejected  → gagal (reject)
```

## 1. Membuat Promise

**Syntax:**

```javascript
const promise = new Promise(function (resolve, reject) {
    // Operasi asynchronous
    if (sukses) {
        resolve(hasil);   // Berhasil
    } else {
        reject(error);    // Gagal
    }
});
```

## 2. Menggunakan Promise

**Contoh** (`11.promise.html`):

```javascript
function getProduct(product) {
    return new Promise(function (resolve, reject) {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", `api/${product}.json`);
        ajax.onload = function () {
            if (ajax.status === 200) {
                resolve(ajax.responseText);  // Berhasil
            } else {
                reject(`Error Get Product with response : ${ajax.status}`);  // Gagal
            }
        };
        ajax.send();
    });
}

getProduct("product")
    .then(function (response) {
        return JSON.parse(response);  // Transform data
    })
    .then(function (json) {
        document.getElementById("id").textContent = json.id;
        document.getElementById("name").textContent = json.name;
        document.getElementById("price").textContent = json.price;
    })
    .catch(function (error) {
        document.getElementById("id").textContent = error;
        document.getElementById("name").textContent = error;
        document.getElementById("price").textContent = error;
    })
    .finally(function () {
        console.info("Finally");  // Selalu dijalankan
    });
```

**File JSON produk** (`api/product.json`):

```json
{
  "id": "1234",
  "name": "MacBook Pro 15",
  "price": 30000000
}
```

## 3. Method Promise

| Method | Deskripsi |
| ------ | --------- |
| `.then(callback)` | Dipanggil saat Promise berhasil (fulfilled) |
| `.catch(callback)` | Dipanggil saat Promise gagal (rejected) |
| `.finally(callback)` | Selalu dipanggil, baik berhasil maupun gagal |

**Chaining Promise** — `.then()` bisa dirantai karena mengembalikan Promise baru:

```javascript
getProduct("product")
    .then(response => JSON.parse(response))   // Step 1: parse JSON
    .then(json => json.name)                   // Step 2: ambil name
    .then(name => console.log(name))           // Step 3: tampilkan
    .catch(error => console.error(error));
```

## 4. Promise.all

`Promise.all()` digunakan untuk menjalankan **beberapa Promise secara paralel** dan menunggu sampai **semua** selesai.

**Contoh** (`12.promise-all.html`):

```javascript
function getProduct(product) {
    return new Promise(function (resolve, reject) {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", `api/${product}.json`);
        ajax.onload = function () {
            if (ajax.status === 200) {
                resolve(ajax.responseText);
            } else {
                reject(`Error Get Product with response : ${ajax.status}`);
            }
        };
        ajax.send();
    });
}

// Menjalankan 3 request secara paralel
const promise = Promise.all([
    getProduct("product1"),
    getProduct("product2"),
    getProduct("product3")
]);

promise.then(function (products) {
    console.info(products);  // Array berisi 3 response
}).catch(function (errors) {
    console.info(errors);    // Error dari salah satu yang gagal
});
```

**Karakteristik `Promise.all()`:**
- Semua Promise dijalankan **paralel** (lebih cepat dari berurutan)
- Mengembalikan array hasil sesuai urutan input
- Jika **satu saja gagal**, maka langsung masuk `.catch()`

**Perbandingan Promise.all vs Promise berurutan:**

| Cara | Waktu | Keterangan |
| ---- | ----- | ---------- |
| Berurutan (chain) | 3 detik (1+1+1) | Satu per satu |
| `Promise.all()` | ~1 detik | Paralel semua |

---

# I. Fetch API

**Fetch API** adalah cara modern untuk melakukan HTTP request, menggantikan `XMLHttpRequest`. Fetch menggunakan Promise secara native.

**Contoh** (`13.fetch-api.html`):

```javascript
function doLogin() {
    // Membuat object Request
    const request = new Request("https://hookb.in/xxx", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
    });

    // fetch() mengembalikan Promise<Response>
    const response = fetch(request);

    response
        .then((response) => response.json())  // Parse JSON dari response
        .then(function (json) {
            document.getElementById("response").textContent = json.success;
        })
        .catch(function (error) {
            document.getElementById("response").textContent = error;
        });
}

document.getElementById("login").onclick = doLogin;
```

**Konfigurasi Request:**

| Opsi | Deskripsi | Contoh |
| ---- | --------- | ------ |
| `method` | HTTP method | `"GET"`, `"POST"`, `"PUT"`, `"DELETE"` |
| `headers` | HTTP headers | `{"Content-Type": "application/json"}` |
| `body` | Body request | `JSON.stringify(data)` |
| `mode` | CORS mode | `"cors"`, `"no-cors"`, `"same-origin"` |

**Perbandingan XMLHttpRequest vs Fetch API:**

| Aspek | XMLHttpRequest | Fetch API |
| ----- | -------------- | --------- |
| Sintaks | Callback-based (verbose) | Promise-based (lebih bersih) |
| Error handling | Manual cek status | `.catch()` otomatis |
| Browser support | Semua browser | Browser modern |
| Upload progress | Ya (`onprogress`) | Terbatas |
| Pembatalan | `abort()` | `AbortController` |

---

# J. Async dan Await

## 1. Async Function

Dengan keyword `async`, sebuah function secara otomatis mengembalikan **Promise** meski kita tidak menulisnya secara eksplisit.

**Contoh** (`14.async.html`):

```javascript
// Cara Promise biasa
function getNamePromise() {
    return new Promise(function (resolve, reject) {
        resolve("Arif Wicaksono Septyanto Promise");
    });
}

// Cara async — lebih singkat
async function getNameAsync() {
    return "Arif Wicaksono Septyanto Async";
}

// Keduanya menghasilkan Promise<String>
getNamePromise()
    .then((name) => console.info(name));

getNameAsync()
    .then((name) => console.info(name));
```

Kedua function di atas **setara** — keduanya mengembalikan `Promise<String>`.

## 2. Await

`await` digunakan di **dalam `async` function** untuk **menunggu** hasil Promise selesai, tanpa perlu `.then()`.

**Contoh perbandingan** (`15.await.html`):

```javascript
// Fungsi yang mengembalikan Promise produk
function getProduct() {
    const request = new Request("api/product.json", { method: "GET" });
    const response = fetch(request);
    return response.then((response) => response.json());
}

// === Cara 1: Promise biasa ===
function getProductNamePromise() {
    return new Promise(function (resolve, reject) {
        getProduct()
            .then((product) => resolve(product.name))
            .catch((error) => resolve("Product Not Found"));
    });
}

// === Cara 2: async/await (lebih bersih) ===
async function getProductNameAsync() {
    try {
        const product = await getProduct();  // Tunggu Promise selesai
        return product.name;
    } catch (e) {
        return "Product Not Found";
    } finally {
        // Selalu dieksekusi
    }
}

// Keduanya dipanggil dengan cara yang sama
getProductNamePromise()
    .then((productName) => console.info(productName));

getProductNameAsync()
    .then((productName) => console.info(productName));
```

**Keunggulan `async`/`await`:**
- Kode lebih mudah dibaca (seperti kode synchronous)
- Error handling menggunakan `try/catch` yang familiar
- Tidak perlu chaining `.then()` yang panjang

**Aturan `await`:**
- Hanya bisa digunakan **di dalam `async` function**
- Membuat eksekusi **menunggu** Promise selesai sebelum lanjut ke baris berikutnya
- Jika Promise rejected, exception akan di-throw dan bisa ditangkap `catch`

---

# K. Ringkasan Konsep

## Alur Evolusi Asynchronous JavaScript

```
Callback
  → setTimout / setInterval
    → XMLHttpRequest (AJAX)
      → Promise (.then / .catch)
        → Fetch API (Promise native)
          → async / await (sintaks modern)
```

## Perbandingan Keseluruhan

| Teknik | Kelebihan | Kekurangan |
| ------ | --------- | ---------- |
| `setTimeout` / `setInterval` | Sederhana, mudah dipahami | Hanya untuk penjadwalan |
| Web Worker | Tidak blocking UI | Tidak bisa akses DOM |
| XMLHttpRequest | Support semua browser | Verbose, callback-based |
| Promise | Lebih bersih, chainable | Bisa nested jika kompleks |
| Fetch API | Modern, Promise native | Tidak support upload progress |
| `async`/`await` | Paling mudah dibaca | Perlu browser modern |

---

# L. Latihan Praktikum

Kerjakan latihan berikut berdasarkan materi yang sudah dipelajari:

## Latihan 1 — setTimeout dan setInterval

1. Buka file `1.set-timeout.html`
   - Amati bahwa `"Program Selesai"` tampil di konsol **sebelum** elemen `<h1>` muncul
   - Buktikan konsep non-blocking

2. Buka file `2.set-interval.html`
   - Amati jam yang terus diperbarui setiap detik
   - Modifikasi agar interval menjadi 500ms

## Latihan 2 — Blocking vs Non-blocking

3. Buka file `3.slow.html`
   - Klik tombol dan amati browser menjadi tidak responsif
   - Bandingkan dengan `4.web-worker.html` yang menggunakan Web Worker

## Latihan 3 — AJAX

4. Buka file `5.ajax.html` (perlu HTTP server, bukan `file://`)
   - Amati response dari `api/hello.json`
   - Modifikasi JSON untuk menampilkan data berbeda

5. Buka file `6.ajax-status.html`
   - Amati perubahan `readyState` di konsol
   - Ubah URL ke `api/hello.json` dan bandingkan hasilnya

6. Buka file `7.ajax-send-query-param.html`
   - Isi field Search dan klik tombol
   - Amati URL yang terbentuk di Network tab DevTools

## Latihan 4 — Promise

7. Buka file `11.promise.html`
   - Amati data produk yang ditampilkan dari `api/product.json`
   - Ubah nama file ke yang tidak ada dan amati pesan error di `.catch()`

8. Buka file `12.promise-all.html`
   - Buka DevTools → Network tab
   - Amati bahwa ketiga request dikirim **secara paralel** (bersamaan)

## Latihan 5 — async/await

9. Buka file `14.async.html`
   - Amati output di konsol
   - Buktikan bahwa `async` function mengembalikan Promise

10. Buka file `15.await.html`
    - Bandingkan kode `getProductNamePromise()` vs `getProductNameAsync()`
    - Tambahkan `console.log` untuk membuktikan urutan eksekusi

---

# M. Referensi

1. Flanagan, D. (2020). *JavaScript: The Definitive Guide* (7th ed.). O'Reilly Media.
2. MDN Web Docs — XMLHttpRequest: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
3. MDN Web Docs — Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
4. MDN Web Docs — Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
5. MDN Web Docs — async function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
6. MDN Web Docs — Web Workers API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
