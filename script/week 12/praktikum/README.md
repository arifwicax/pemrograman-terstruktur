# Praktikum Interaktif - JavaScript DOM

Folder ini berisi **4 praktikum interaktif** untuk mempelajari JavaScript DOM dengan cara yang lebih fun dan visual!

## Apa Bedanya dengan File JS Biasa?

| File JS Biasa (1.dom_basics.js, dll) | Praktikum Interaktif (folder ini) |
|--------------------------------------|-----------------------------------|
| Output via console.log | UI interaktif dengan tombol & visual |
| Hanya bisa dibaca | Bisa diklik dan diinteraksi |
| Console output saja | Visual feedback + Console log |
| Cocok untuk belajar konsep | Cocok untuk praktik langsung |

## Daftar Praktikum

### 1. 01-selectors.html - Element Selectors
**Belajar 5 cara memilih elemen HTML**
- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- querySelector()
- querySelectorAll()

**Fitur:**
- Highlight elemen yang dipilih
- Perbandingan visual antar selector
- Live demo untuk setiap metode

---

### 2. 02-manipulation.html - Manipulasi Konten & Properties
**Mengubah konten, attribute, style, dan class**
- textContent vs innerHTML
- getAttribute & setAttribute
- Style manipulation
- classList methods (add, remove, toggle)
- Dataset (data-* attributes)

**Fitur:**
- Input field untuk test custom text/HTML
- Real-time style changes
- Class manipulation dengan visual feedback
- Attribute viewer

---

### 3. 03-events.html - Event Handling
**Menangani berbagai event interaksi user**
- Click events
- Input & keyboard events
- Mouse events (hover, mousemove)
- Form events (submit, focus, blur)
- Event object properties

**Fitur:**
- Click counter
- Live text preview saat ketik
- Mouse position tracker
- Keyboard key display
- Form validation demo
- Event log untuk semua aksi

---

### 4. 04-create-remove.html - Create & Remove Elements
**Membuat dan menghapus elemen secara dinamis**
- createElement() & appendChild()
- remove() & removeChild()
- insertBefore()
- cloneNode()
- innerHTML vs createElement comparison

**Fitur:**
- Dynamic item creator
- Position control (awal, tengah, akhir)
- Clone demonstration
- Complete task manager example
- Animation effects

---

## Cara Menggunakan

### Metode 1: Buka index.html (Recommended)
1. Buka file `index.html` di folder ini
2. Akan muncul halaman portal dengan 4 card praktikum
3. Klik salah satu card untuk mulai praktikum

### Metode 2: Langsung Buka File Praktikum
Buka salah satu file HTML langsung:
- `01-selectors.html`
- `02-manipulation.html`
- `03-events.html`
- `04-create-remove.html`

### Metode 3: Via Web Server (Recommended untuk Development)
```bash
# Dengan Python
python3 -m http.server 8000

# Atau dengan Live Server di VS Code
# Klik kanan index.html > Open with Live Server
```

Kemudian buka: `http://localhost:8000/index.html`

---

## Tips Maksimalkan Pembelajaran

### 1. Buka DevTools Console
- Tekan **F12** atau **Cmd+Option+I** (Mac)
- Pilih tab **Console**
- Semua aksi akan ter-log di console dengan detail

### 2. Ikuti Urutan
Mulai dari Praktikum 1, lalu 2, 3, dan 4 secara berurutan untuk pemahaman yang sistematis.

### 3. Coba Semua Fitur
Jangan hanya klik satu kali! Coba semua tombol, input berbagai text, lihat bagaimana elemen berubah.

### 4. Baca Code yang Disertakan
Setiap section memiliki box code display yang menunjukkan code JavaScript yang digunakan.

### 5. Eksperimen di Console
Setelah paham, coba modifikasi code langsung di Console untuk eksperimen lebih lanjut.

### 6. Ulangi yang Sulit
Jika ada konsep yang belum paham, ulangi praktikum tersebut berkali-kali sampai jelas.

---

## Struktur Folder

```
praktikum/
├── index.html              # Portal/dashboard untuk semua praktikum
├── 01-selectors.html       # Praktikum element selectors
├── 02-manipulation.html    # Praktikum manipulasi konten & properties
├── 03-events.html          # Praktikum event handling
├── 04-create-remove.html   # Praktikum create & remove elements
└── README.md              # File ini
```

---

## Learning Path

```
Step 1: Buka index.html
   ↓
Step 2: Praktikum 1 - Selectors (15-20 menit)
   ↓
Step 3: Praktikum 2 - Manipulation (20-25 menit)
   ↓
Step 4: Praktikum 3 - Events (25-30 menit)
   ↓
Step 5: Praktikum 4 - Create/Remove (25-30 menit)
   ↓
Total Waktu: ±2 jam
```

---

## Fitur Unggulan

### Visual Feedback
Setiap aksi menghasilkan perubahan visual yang bisa langsung dilihat (warna, animasi, highlight, dll).

### Event Logging
Semua praktikum memiliki event log yang menampilkan setiap aksi dengan timestamp.

### Code Examples
Setiap section dilengkapi dengan contoh code JavaScript yang digunakan.

### Interactive Elements
Tombol, input field, draggable elements, dan berbagai elemen interaktif lainnya.

### Modern Design
UI yang modern, colorful, dan user-friendly dengan gradients dan animations.

### Mobile Responsive
Bisa dibuka di desktop, tablet, atau smartphone.

---

## Troubleshooting

### Praktikum tidak berfungsi / tombol tidak respon
**Solusi:**
1. Pastikan membuka file via web server (bukan file://)
2. Gunakan browser modern (Chrome, Firefox, Edge, Safari)
3. Buka DevTools Console untuk lihat error
4. Refresh halaman (F5 atau Cmd+R)

### Visual tidak muncul dengan baik
**Solusi:**
1. Gunakan browser versi terbaru
2. Zoom browser di 100%
3. Gunakan resolusi minimal 1024x768

### Console tidak menampilkan log
**Solusi:**
1. Pastikan tab Console dipilih (bukan Elements atau Network)
2. Clear console dan ulangi aksi
3. Periksa filter Console (All levels harus dicentang)

---

## Integrasi dengan Materi Lain

Praktikum interaktif ini melengkapi:
- **Modul teoritis:** `Week 12 - Document Object Model.md`
- **File pembelajaran:** `1.dom_basics.js` sampai `10.comprehensive_example.js`
- **Todo app example:** `00.todo_app_praktikum.html`

**Rekomendasi urutan belajar:**
1. Baca modul teoritis untuk pemahaman konsep
2. Lihat file JS (1-10) untuk contoh code
3. **Praktikkan di sini untuk hands-on experience**
4. Study Todo App untuk melihat implementasi lengkap

---

## Kontribusi & Feedback

Jika menemukan bug atau memiliki saran untuk improvement:
- Buka issue atau pull request di repository
- Atau hubungi instructor course

---

## Lisensi

Material pembelajaran untuk mata kuliah Pemrograman Terstruktur.

---

**Selamat Belajar! Happy Coding! 🚀**
