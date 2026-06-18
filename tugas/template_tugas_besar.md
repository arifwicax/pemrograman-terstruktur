# LAPORAN TUGAS BESAR
## Pemrograman Terstruktur
### Pengembangan Front-End Website dengan Data Dummy

---

## HALAMAN JUDUL

| | |
|---|---|
| **Judul Proyek** | *(Nama Website / Aplikasi)* |
| **Mata Kuliah** | Pemrograman Terstruktur |
| **Dosen Pengampu** | *(Nama Dosen)* |
| **Kelas** | *(Kelas)* |
| **Semester** | *(Genap / Ganjil) Tahun Akademik *(XXXX/XXXX)* |

**Disusun Oleh:**

| No | Nama | NIM |
|----|------|-----|
| 1  | *(Nama Lengkap)* | *(NIM)* |
| 2  | *(Nama Lengkap)* | *(NIM)* |
| 3  | *(Nama Lengkap)* | *(NIM)* |
| 4  | *(Nama Lengkap)* | *(NIM)* |

---

**PROGRAM STUDI *(NAMA PRODI)***
**FAKULTAS *(NAMA FAKULTAS)***
***(NAMA UNIVERSITAS)***
***(TAHUN)***

---

## DAFTAR ISI

1. [Bab I – Pendahuluan](#bab-i--pendahuluan)
2. [Bab II – Analisis dan Perancangan](#bab-ii--analisis-dan-perancangan)
3. [Bab III – Implementasi](#bab-iii--implementasi)
4. [Bab IV – Pengujian](#bab-iv--pengujian)
5. [Bab V – Penutup](#bab-v--penutup)
6. [Lampiran](#lampiran)
7. [Formulir Penilaian Kontribusi Anggota](#formulir-penilaian-kontribusi-anggota)

---

## BAB I – PENDAHULUAN

### 1.1 Latar Belakang

*(Jelaskan latar belakang pembuatan proyek ini. Mengapa website ini perlu dibuat? Masalah apa yang ingin diselesaikan? Minimal 2 paragraf.)*

### 1.2 Rumusan Masalah

1. *(Rumusan masalah 1)*
2. *(Rumusan masalah 2)*
3. *(Rumusan masalah dst.)*

### 1.3 Tujuan Proyek

1. *(Tujuan 1)*
2. *(Tujuan 2)*
3. *(Tujuan dst.)*

### 1.4 Manfaat Proyek

- **Bagi Mahasiswa:** *(Manfaat yang diperoleh tim pengembang)*
- **Bagi Pengguna:** *(Manfaat yang diperoleh pengguna website)*
- **Bagi Akademik:** *(Manfaat sebagai implementasi materi perkuliahan)*

### 1.5 Ruang Lingkup Proyek

*(Jelaskan batasan-batasan pengerjaan proyek, misalnya: hanya mencakup sisi front-end, menggunakan data dummy, tidak terhubung ke database nyata, dsb.)*

---

## BAB II – ANALISIS DAN PERANCANGAN

### 2.1 Deskripsi Website

*(Deskripsikan secara umum website yang dibuat: nama website, topik/tema, dan target pengguna.)*

### 2.2 Fitur-Fitur Website

| No | Nama Fitur | Deskripsi Singkat |
|----|------------|-------------------|
| 1  | *(Nama Fitur)* | *(Deskripsi)* |
| 2  | *(Nama Fitur)* | *(Deskripsi)* |
| 3  | *(Nama Fitur)* | *(Deskripsi)* |

### 2.3 Struktur Data Dummy

*(Jelaskan data dummy apa saja yang digunakan dalam website. Sertakan contoh struktur data dalam format JSON atau tabel.)*

**Contoh:**
```json
{
  "nama_entitas": [
    {
      "id": 1,
      "field_1": "nilai",
      "field_2": "nilai",
      "field_3": "nilai"
    }
  ]
}
```

### 2.4 Arsitektur & Struktur File

*(Gambarkan atau jelaskan struktur folder/file proyek.)*

```
nama-proyek/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js         ← data dummy
│   └── main.js
└── assets/
    └── images/
```

### 2.5 Sitemap / Alur Halaman

*(Gambarkan atau jelaskan alur navigasi antar halaman website.)*

```
Halaman Utama (index.html)
├── Halaman A
│   └── Detail A
├── Halaman B
└── Halaman C
```

### 2.6 Wireframe / Desain Antarmuka

*(Lampirkan wireframe atau desain mockup setiap halaman. Bisa berupa gambar atau deskripsi tata letak.)*

**Halaman: *(Nama Halaman)***
- Bagian Header: *(deskripsi)*
- Bagian Konten Utama: *(deskripsi)*
- Bagian Footer: *(deskripsi)*

---

## BAB III – IMPLEMENTASI

### 3.1 Teknologi dan Tools yang Digunakan

| No | Teknologi / Tools | Versi | Fungsi |
|----|-------------------|-------|--------|
| 1  | HTML5 | - | Struktur halaman |
| 2  | CSS3 | - | Styling dan layout |
| 3  | JavaScript (Vanilla) | ES6+ | Logika dan interaksi |
| 4  | *(Framework/Library lain)* | *(versi)* | *(fungsi)* |

### 3.2 Penjelasan Implementasi Per Halaman

#### 3.2.1 Halaman: *(Nama Halaman)*

*(Jelaskan halaman ini: fungsinya, elemen HTML yang digunakan, CSS yang diterapkan, dan logika JavaScript-nya.)*

**Potongan Kode Penting:**
```html
<!-- Contoh potongan HTML -->
```

```css
/* Contoh potongan CSS */
```

```javascript
// Contoh potongan JavaScript
```

#### 3.2.2 Halaman: *(Nama Halaman)*

*(Ulangi format di atas untuk setiap halaman utama.)*

### 3.3 Pengelolaan Data Dummy

*(Jelaskan bagaimana data dummy didefinisikan dan digunakan dalam JavaScript. Sertakan potongan kode.)*

```javascript
// Contoh data dummy
const dataDummy = [
  { id: 1, nama: "...", kategori: "...", deskripsi: "..." },
  { id: 2, nama: "...", kategori: "...", deskripsi: "..." },
];

// Contoh cara menampilkan data ke DOM
function renderData(data) {
  const container = document.getElementById("container");
  container.innerHTML = data.map(item => `
    <div class="card">
      <h3>${item.nama}</h3>
      <p>${item.deskripsi}</p>
    </div>
  `).join("");
}
```

### 3.4 Konsep JavaScript yang Diterapkan

*(Jelaskan konsep-konsep JavaScript yang dipelajari di perkuliahan dan diterapkan dalam proyek ini.)*

| No | Konsep | Penerapan dalam Proyek |
|----|--------|------------------------|
| 1  | DOM Manipulation | *(Contoh penerapan)* |
| 2  | Array Methods (map, filter, find) | *(Contoh penerapan)* |
| 3  | Function & Arrow Function | *(Contoh penerapan)* |
| 4  | Event Handling | *(Contoh penerapan)* |
| 5  | *(Konsep lain)* | *(Contoh penerapan)* |

---

## BAB IV – PENGUJIAN

### 4.1 Rencana Pengujian

*(Jelaskan metode pengujian yang digunakan, misalnya pengujian manual berbasis browser.)*

### 4.2 Hasil Pengujian Fungsional

| No | Fitur yang Diuji | Langkah Pengujian | Hasil yang Diharapkan | Hasil Aktual | Status |
|----|------------------|-------------------|-----------------------|--------------|--------|
| 1  | *(Nama Fitur)* | *(Langkah)* | *(Ekspektasi)* | *(Aktual)* | ✅ / ❌ |
| 2  | *(Nama Fitur)* | *(Langkah)* | *(Ekspektasi)* | *(Aktual)* | ✅ / ❌ |
| 3  | *(Nama Fitur)* | *(Langkah)* | *(Ekspektasi)* | *(Aktual)* | ✅ / ❌ |

### 4.3 Pengujian Responsivitas

| Perangkat / Resolusi | Tampilan Header | Tampilan Konten | Tampilan Footer | Status |
|----------------------|-----------------|-----------------|-----------------|--------|
| Desktop (1920×1080) | *(Keterangan)* | *(Keterangan)* | *(Keterangan)* | ✅ / ❌ |
| Tablet (768×1024) | *(Keterangan)* | *(Keterangan)* | *(Keterangan)* | ✅ / ❌ |
| Mobile (375×667) | *(Keterangan)* | *(Keterangan)* | *(Keterangan)* | ✅ / ❌ |

### 4.4 Screenshot Hasil

*(Lampirkan screenshot setiap halaman website yang telah selesai dibuat.)*

| Halaman | Screenshot |
|---------|------------|
| *(Nama Halaman)* | *(Gambar / [lihat Lampiran])* |

---

## BAB V – PENUTUP

### 5.1 Kesimpulan

*(Tuliskan kesimpulan dari proyek yang telah dikerjakan. Apakah tujuan proyek tercapai? Konsep apa saja yang berhasil diterapkan?)*

### 5.2 Saran dan Pengembangan Ke Depan

*(Tuliskan saran pengembangan website ini ke depan, misalnya: integrasi dengan backend, penambahan fitur, perbaikan UI/UX, dsb.)*

---

## LAMPIRAN

### Lampiran A – Link Repository / Source Code

- **GitHub / Repository:** *(Link)*
- **Demo Website (jika ada):** *(Link)*

### Lampiran B – Pembagian Tugas

*(Jelaskan secara naratif pembagian tugas awal di antara anggota kelompok sebelum pengerjaan.)*

### Lampiran C – Log Aktivitas Pengerjaan

| Tanggal | Anggota | Aktivitas yang Dikerjakan |
|---------|---------|---------------------------|
| *(dd/mm/yyyy)* | *(Nama)* | *(Deskripsi aktivitas)* |
| *(dd/mm/yyyy)* | *(Nama)* | *(Deskripsi aktivitas)* |

---

## FORMULIR PENILAIAN KONTRIBUSI ANGGOTA

> **Petunjuk Pengisian:**
> Formulir ini diisi oleh **setiap anggota kelompok** secara **jujur dan objektif** untuk menilai kontribusi masing-masing anggota, termasuk diri sendiri. Nilai berkisar antara **0–100**. Formulir ini akan menjadi bahan pertimbangan dosen dalam menentukan nilai individual.

---

### F.1 Rekap Kontribusi Per Anggota

| No | Aspek Kontribusi | Anggota 1 **Budi Santoso** | Anggota 2 **Siti Rahayu** | Anggota 3 **Dimas Prayoga** | Anggota 4 **Rina Marlina** |
|----|-----------------|--------------------------|--------------------------|----------------------------|---------------------------|
| 1  | Perencanaan & Analisis | 90 | 85 | 70 | 80 |
| 2  | Desain Antarmuka (HTML/CSS) | 75 | 95 | 60 | 85 |
| 3  | Logika JavaScript | 95 | 70 | 90 | 65 |
| 4  | Pengelolaan Data Dummy | 80 | 75 | 85 | 70 |
| 5  | Pengujian & Debugging | 70 | 80 | 90 | 75 |
| 6  | Penulisan Laporan | 65 | 90 | 75 | 95 |
| 7  | Presentasi & Dokumentasi | 80 | 85 | 70 | 90 |
| | **Total Skor (0–700)** | **555** | **580** | **540** | **560** |
| | **Persentase Kontribusi (%)** | **25,6%** | **26,8%** | **24,9%** | **25,9%** |

> *Persentase Kontribusi = Total Skor Anggota ÷ Jumlah Total Seluruh Anggota × 100%*

---

### F.2 Penilaian Silang Antar Anggota

> Setiap baris diisi oleh satu anggota, memberikan nilai kepada seluruh anggota (termasuk diri sendiri).

#### Dinilai oleh: Anggota 1 – **Budi Santoso**

| Dinilai | Nilai (0–100) | Komentar / Alasan |
|---------|---------------|-------------------|
| Anggota 1 – Budi Santoso (Diri Sendiri) | 85 | Saya mengerjakan sebagian besar logika JavaScript dan memimpin perencanaan awal. |
| Anggota 2 – Siti Rahayu | 90 | Sangat aktif dalam desain CSS dan penulisan laporan. Kerjanya rapi dan teliti. |
| Anggota 3 – Dimas Prayoga | 80 | Berkontribusi baik di bagian JS dan pengujian, meski sempat terlambat di awal. |
| Anggota 4 – Rina Marlina | 85 | Laporan dan presentasi dikerjakan dengan sangat baik. |

#### Dinilai oleh: Anggota 2 – **Siti Rahayu**

| Dinilai | Nilai (0–100) | Komentar / Alasan |
|---------|---------------|-------------------|
| Anggota 1 – Budi Santoso | 88 | Paling aktif dalam coding JS, selalu membantu anggota lain yang kesulitan. |
| Anggota 2 – Siti Rahayu (Diri Sendiri) | 87 | Saya fokus di desain dan laporan. Bisa lebih baik lagi di bagian JS. |
| Anggota 3 – Dimas Prayoga | 78 | Cukup berkontribusi, namun perlu lebih proaktif dalam komunikasi kelompok. |
| Anggota 4 – Rina Marlina | 90 | Presentasi sangat baik, laporan terstruktur rapi. |

#### Dinilai oleh: Anggota 3 – **Dimas Prayoga**

| Dinilai | Nilai (0–100) | Komentar / Alasan |
|---------|---------------|-------------------|
| Anggota 1 – Budi Santoso | 90 | Pemimpin yang baik, coding-nya solid dan selalu on time. |
| Anggota 2 – Siti Rahayu | 88 | Desain tampilan website sangat bagus, laporan lengkap dan sistematis. |
| Anggota 3 – Dimas Prayoga (Diri Sendiri) | 75 | Saya berkontribusi di JS dan testing, tapi sempat terlambat submit beberapa bagian. |
| Anggota 4 – Rina Marlina | 82 | Baik dalam dokumentasi, presentasi lancar dan percaya diri. |

#### Dinilai oleh: Anggota 4 – **Rina Marlina**

| Dinilai | Nilai (0–100) | Komentar / Alasan |
|---------|---------------|-------------------|
| Anggota 1 – Budi Santoso | 87 | Koordinasi kelompok bagus, logika JS yang ditulis mudah dipahami. |
| Anggota 2 – Siti Rahayu | 89 | Desain CSS-nya sangat konsisten dan estetis, laporan ditulis dengan baik. |
| Anggota 3 – Dimas Prayoga | 80 | Penguasaan materi JS cukup baik, testing dilakukan menyeluruh. |
| Anggota 4 – Rina Marlina (Diri Sendiri) | 84 | Saya bertanggung jawab atas laporan dan presentasi, hasilnya cukup memuaskan. |

---

### F.3 Rekapitulasi Nilai Akhir Kontribusi

| No | Nama Anggota | NIM | Rata-rata Nilai Peer | Skor Kontribusi (%) | Catatan |
|----|-------------|-----|----------------------|---------------------|---------|
| 1  | Budi Santoso | 2301010001 | 87,5 | 25,6% | Kontributor utama logika JS |
| 2  | Siti Rahayu | 2301010002 | 88,5 | 26,8% | Desain & laporan terbaik |
| 3  | Dimas Prayoga | 2301010003 | 78,3 | 24,9% | Perlu meningkatkan manajemen waktu |
| 4  | Rina Marlina | 2301010004 | 85,3 | 25,9% | Presentasi & dokumentasi sangat baik |

---

### F.4 Pernyataan Kelompok

Kami yang bertanda tangan di bawah ini menyatakan bahwa formulir penilaian kontribusi ini diisi dengan **jujur, objektif, dan atas kesepakatan bersama** seluruh anggota kelompok.

| No | Nama | NIM | Tanda Tangan |
|----|------|-----|--------------|
| 1  | Budi Santoso | 2301010001 | *(tanda tangan)* |
| 2  | Siti Rahayu | 2301010002 | *(tanda tangan)* |
| 3  | Dimas Prayoga | 2301010003 | *(tanda tangan)* |
| 4  | Rina Marlina | 2301010004 | *(tanda tangan)* |

**Tanggal Pengesahan:** 18 Juni 2026

---

*— Akhir dari Template Laporan Tugas Besar —*
