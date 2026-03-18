// ==========================================
// PROGRAM COMPREHENSIVE: SISTEM AKADEMIK
// Menggabungkan semua konsep Week 4
// ==========================================

console.log("=== SISTEM AKADEMIK SEDERHANA ===");
console.log("Program ini menggabungkan semua konsep Types, Values, dan Variables\n");

// ==========================================
// KONSTANTA SISTEM
// ==========================================

const SISTEM_CONFIG = {
    NAMA_APLIKASI: "Sistem Akademik",
    VERSI: "1.0.0",
    MAX_MAHASISWA: 100,
    NILAI_LULUS: 75,
    SEMESTER_AKTIF: "2024/1"
};

console.log("=== KONFIGURASI SISTEM ===");
console.log(`Aplikasi: ${SISTEM_CONFIG.NAMA_APLIKASI} v${SISTEM_CONFIG.VERSI}`);
console.log(`Semester: ${SISTEM_CONFIG.SEMESTER_AKTIF}`);
console.log(`Batas Lulus: ${SISTEM_CONFIG.NILAI_LULUS}`);
console.log("");

// ==========================================
// DATABASE MAHASISWA (ARRAY OF OBJECTS)
// ==========================================

let dataMahasiswa = [];
let nextId = 1;

// ==========================================
// OBJECT UNTUK SISTEM AKADEMIK
// ==========================================

let sistemAkademik = {
    // Properties
    totalMahasiswa: 0,
    
    // Method untuk registrasi mahasiswa baru
    registrasiMahasiswa: function(nama, umur, jurusan, email) {
        // Validasi input (Type checking dan conversion)
        if (!nama || typeof nama !== 'string' || nama.trim().length === 0) {
            return "Error: Nama harus diisi dan berupa text";
        }
        
        let umurNumber = Number(umur);
        if (isNaN(umurNumber) || umurNumber < 16 || umurNumber > 50) {
            return "Error: Umur harus berupa angka antara 16-50";
        }
        
        if (!jurusan || typeof jurusan !== 'string') {
            return "Error: Jurusan harus diisi";
        }
        
        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return "Error: Email tidak valid";
        }
        
        // Check batas maksimal mahasiswa
        if (this.totalMahasiswa >= SISTEM_CONFIG.MAX_MAHASISWA) {
            return `Error: Maksimal ${SISTEM_CONFIG.MAX_MAHASISWA} mahasiswa`;
        }
        
        // Buat object mahasiswa baru
        let mahasiswaBaru = {
            id: nextId++,
            nama: nama.trim(),
            umur: umurNumber,
            jurusan: jurusan.trim(),
            email: email.toLowerCase().trim(),
            nilai: {},
            ipk: 0,
            status: "Aktif",
            tanggalDaftar: new Date().toISOString().split('T')[0]
        };
        
        dataMahasiswa.push(mahasiswaBaru);
        this.totalMahasiswa++;
        
        return `Mahasiswa ${mahasiswaBaru.nama} berhasil terdaftar dengan ID: ${mahasiswaBaru.id}`;
    },
    
    // Method untuk input nilai
    inputNilai: function(mahasiswaId, mataKuliah, nilai) {
        // Find mahasiswa
        let mahasiswa = dataMahasiswa.find(m => m.id === mahasiswaId);
        if (!mahasiswa) {
            return "Error: Mahasiswa tidak ditemukan";
        }
        
        // Convert dan validate nilai
        let nilaiNumber = Number(nilai);
        if (isNaN(nilaiNumber) || nilaiNumber < 0 || nilaiNumber > 100) {
            return "Error: Nilai harus berupa angka 0-100";
        }
        
        // Input nilai
        mahasiswa.nilai[mataKuliah] = nilaiNumber;
        
        // Update IPK
        this.hitungIPK(mahasiswaId);
        
        return `Nilai ${mataKuliah} untuk ${mahasiswa.nama}: ${nilaiNumber}`;
    },
    
    // Method untuk hitung IPK
    hitungIPK: function(mahasiswaId) {
        let mahasiswa = dataMahasiswa.find(m => m.id === mahasiswaId);
        if (!mahasiswa) return false;
        
        let totalNilai = Object.values(mahasiswa.nilai);
        if (totalNilai.length === 0) {
            mahasiswa.ipk = 0;
            return true;
        }
        
        // Hitung rata-rata
        let jumlah = totalNilai.reduce((sum, nilai) => sum + nilai, 0);
        mahasiswa.ipk = Math.round((jumlah / totalNilai.length) * 100) / 100;
        
        // Update status kelulusan
        mahasiswa.status = mahasiswa.ipk >= SISTEM_CONFIG.NILAI_LULUS ? "Lulus" : "Aktif";
        
        return true;
    },
    
    // Method untuk cari mahasiswa
    cariMahasiswa: function(kriteria, nilai) {
        return dataMahasiswa.filter(mahasiswa => {
            switch (kriteria) {
                case 'id':
                    return mahasiswa.id === Number(nilai);
                case 'nama':
                    return mahasiswa.nama.toLowerCase().includes(nilai.toLowerCase());
                case 'jurusan':
                    return mahasiswa.jurusan.toLowerCase() === nilai.toLowerCase();
                case 'status':
                    return mahasiswa.status.toLowerCase() === nilai.toLowerCase();
                default:
                    return false;
            }
        });
    },
    
    // Method untuk display mahasiswa
    tampilkanMahasiswa: function(mahasiswaArray = dataMahasiswa) {
        if (mahasiswaArray.length === 0) {
            console.log("Tidak ada data mahasiswa");
            return;
        }
        
        console.log("\n=== DAFTAR MAHASISWA ===");
        console.log("ID | Nama | Umur | Jurusan | IPK | Status");
        console.log("-".repeat(50));
        
        mahasiswaArray.forEach(m => {
            console.log(`${m.id} | ${m.nama} | ${m.umur} | ${m.jurusan} | ${m.ipk} | ${m.status}`);
        });
        console.log("");
    },
    
    // Method untuk statistik
    getStatistik: function() {
        let totalMhs = dataMahasiswa.length;
        let lulusan = dataMahasiswa.filter(m => m.status === "Lulus").length;
        let aktif = totalMhs - lulusan;
        
        // Hitung IPK rata-rata
        let totalIPK = dataMahasiswa.reduce((sum, m) => sum + m.ipk, 0);
        let rataIPK = totalMhs > 0 ? Math.round((totalIPK / totalMhs) * 100) / 100 : 0;
        
        // Jurusan terpopuler
        let jurusanCount = {};
        dataMahasiswa.forEach(m => {
            jurusanCount[m.jurusan] = (jurusanCount[m.jurusan] || 0) + 1;
        });
        
        let jurusanPopuler = Object.keys(jurusanCount).length > 0 ? 
            Object.keys(jurusanCount).reduce((a, b) => 
                jurusanCount[a] > jurusanCount[b] ? a : b
            ) : "Tidak ada";
        
        return {
            totalMahasiswa: totalMhs,
            mahasiswaAktif: aktif,
            lulusan: lulusan,
            rataIPK: rataIPK,
            jurusanTerpopuler: jurusanPopuler
        };
    }
};

// ==========================================
// TESTING PROGRAM
// ==========================================

console.log("=== TESTING REGISTRASI MAHASISWA ===");

// Test registrasi valid
console.log(sistemAkademik.registrasiMahasiswa("Andi Setiawan", "20", "Teknik Informatika", "andi@email.com"));
console.log(sistemAkademik.registrasiMahasiswa("Budi Pratama", "21", "Sistem Informasi", "budi@email.com"));
console.log(sistemAkademik.registrasiMahasiswa("Citra Dewi", "19", "Teknik Informatika", "citra@email.com"));
console.log(sistemAkademik.registrasiMahasiswa("Dina Sari", "22", "Manajemen", "dina@email.com"));

// Test registrasi invalid (Type validation)
console.log("\n=== TEST VALIDASI INPUT ===");
console.log(sistemAkademik.registrasiMahasiswa("", "20", "IT", "test@email.com"));  // Nama kosong
console.log(sistemAkademik.registrasiMahasiswa("John", "abc", "IT", "test@email.com"));  // Umur bukan angka
console.log(sistemAkademik.registrasiMahasiswa("John", "20", "IT", "invalid-email"));  // Email invalid

// Test input nilai (Number conversion)
console.log("\n=== TEST INPUT NILAI ===");
console.log(sistemAkademik.inputNilai(1, "Pemrograman Web", "85"));      // String number
console.log(sistemAkademik.inputNilai(1, "Database", 78));                // Number
console.log(sistemAkademik.inputNilai(1, "Algoritma", "90"));            // String number

console.log(sistemAkademik.inputNilai(2, "Pemrograman Web", "75"));
console.log(sistemAkademik.inputNilai(2, "Database", "82"));
console.log(sistemAkademik.inputNilai(2, "Algoritma", "88"));

console.log(sistemAkademik.inputNilai(3, "Pemrograman Web", "92"));
console.log(sistemAkademik.inputNilai(3, "Database", "89"));

// Test input nilai invalid
console.log(sistemAkademik.inputNilai(1, "Fisika", "abc"));              // Nilai bukan angka
console.log(sistemAkademik.inputNilai(999, "Matematika", "80"));         // ID tidak ada

// Display semua mahasiswa
sistemAkademik.tampilkanMahasiswa();

// Test pencarian (String manipulation)
console.log("=== TEST PENCARIAN ===");
console.log("Cari berdasarkan nama 'Andi':");
sistemAkademik.tampilkanMahasiswa(sistemAkademik.cariMahasiswa('nama', 'Andi'));

console.log("Cari berdasarkan jurusan 'Teknik Informatika':");
sistemAkademik.tampilkanMahasiswa(sistemAkademik.cariMahasiswa('jurusan', 'Teknik Informatika'));

console.log("Cari berdasarkan status 'Lulus':");
sistemAkademik.tampilkanMahasiswa(sistemAkademik.cariMahasiswa('status', 'Lulus'));

// Statistik (Object methods dan calculation)
console.log("=== STATISTIK SISTEM ===");
let stats = sistemAkademik.getStatistik();
console.log("Total Mahasiswa:", stats.totalMahasiswa);
console.log("Mahasiswa Aktif:", stats.mahasiswaAktif);
console.log("Lulusan:", stats.lulusan);
console.log("Rata-rata IPK:", stats.rataIPK);
console.log("Jurusan Terpopuler:", stats.jurusanTerpopuler);

// ==========================================
// DEMONSTRASI TYPE CONVERSION
// ==========================================

console.log("\n=== DEMONSTRASI TYPE CONVERSION ===");

// Simulasi input dari form (semua input adalah string)
let inputData = {
    nama: "Eva Susanti",
    umur: "23",        // String
    nilai1: "85",      // String
    nilai2: "90.5",    // String
    aktif: "true"      // String
};

console.log("Data input (semua string):", inputData);
console.log("typeof umur:", typeof inputData.umur);
console.log("typeof nilai1:", typeof inputData.nilai1);

// Konversi manual untuk keamanan
let processedData = {
    nama: inputData.nama,
    umur: Number(inputData.umur),
    nilai1: parseFloat(inputData.nilai1),
    nilai2: parseFloat(inputData.nilai2),
    aktif: inputData.aktif === 'true'
};

console.log("Data setelah konversi:", processedData);
console.log("typeof umur (after):", typeof processedData.umur);
console.log("typeof nilai1 (after):", typeof processedData.nilai1);
console.log("typeof aktif (after):", typeof processedData.aktif);

// ==========================================
// DEMONSTRASI PRIMITIVE VS OBJECT
// ==========================================

console.log("\n=== DEMONSTRASI PRIMITIVE VS OBJECT ===");

// Primitive (passed by value)
let score1 = 85;
let score2 = score1;
score2 = 90;

console.log("Primitive - score1:", score1);  // 85 (tidak berubah)
console.log("Primitive - score2:", score2);  // 90

// Object (passed by reference)
let student1 = { nama: "John", nilai: 85 };
let student2 = student1;  // Reference yang sama
student2.nilai = 90;

console.log("Object - student1.nilai:", student1.nilai);  // 90 (ikut berubah)
console.log("Object - student2.nilai:", student2.nilai);  // 90

// Cara copy object yang benar
let student3 = { ...student1 };  // Spread operator (shallow copy)
student3.nilai = 95;

console.log("Copy object - student1.nilai:", student1.nilai);  // 90 (tidak berubah)
console.log("Copy object - student3.nilai:", student3.nilai);  // 95

console.log("\n=== PROGRAM SELESAI ===");
console.log("Program ini mendemonstrasikan:");
console.log("✓ Primitive types (string, number, boolean)");
console.log("✓ Variables (let, const)");
console.log("✓ Type conversion (explicit & implicit)");
console.log("✓ Objects dan methods");
console.log("✓ Real-world application");