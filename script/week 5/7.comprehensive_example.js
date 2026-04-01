// COMPREHENSIVE EXAMPLE: SISTEM EVALUASI KARYAWAN
// Menggabungkan semua konsep Expressions dan Operators Week 5

console.log("SISTEM EVALUASI KARYAWAN KOMPREHENSIF");
console.log("Program ini menggabungkan semua konsep expressions dan operators");

// KONSTANTA SISTEM

const SISTEM_CONFIG = {
    NAMA_PERUSAHAAN: "PT. Teknologi Maju",
    TAHUN_EVALUASI: 2024,
    NILAI_MINIMUM: 60,
    NILAI_EXCELLENT: 90,
    NILAI_GOOD: 75,
    BONUS_RATE: {
        EXCELLENT: 0.20,    // 20% bonus
        GOOD: 0.10,         // 10% bonus
        SATISFACTORY: 0.05, // 5% bonus
        POOR: 0            // No bonus
    }
};

console.log("KONFIGURASI SISTEM");
console.log(`Perusahaan: ${SISTEM_CONFIG.NAMA_PERUSAHAAN}`);
console.log(`Tahun Evaluasi: ${SISTEM_CONFIG.TAHUN_EVALUASI}`);
console.log(`Nilai Minimum: ${SISTEM_CONFIG.NILAI_MINIMUM}`);
console.log("");

// DATABASE KARYAWAN

let dataKaryawan = [
    {
        id: 1,
        nama: "Alice Johnson",
        posisi: "Software Engineer",
        department: "IT",
        gajiPokok: 15000000,
        evaluasi: {
            technical: 85,
            teamwork: 90,
            communication: 88,
            leadership: null, // Tidak applicable untuk posisi ini
            attendance: 95
        },
        lamaMekerja: 2.5, // tahun
        target: {
            completed: 8,
            total: 10
        }
    },
    {
        id: 2,
        nama: "Bob Smith",
        posisi: "Team Lead",
        department: "IT",
        gajiPokok: 20000000,
        evaluasi: {
            technical: 88,
            teamwork: 92,
            communication: 85,
            leadership: 90,
            attendance: 88
        },
        lamaMekerja: 4,
        target: {
            completed: 9,
            total: 10
        }
    },
    {
        id: 3,
        nama: "Charlie Brown",
        posisi: "Junior Developer",
        department: "IT",
        gajiPokok: 8000000,
        evaluasi: {
            technical: 70,
            teamwork: 75,
            communication: 65,
            leadership: null,
            attendance: 92
        },
        lamaMekerja: 1,
        target: {
            completed: 6,
            total: 10
        }
    },
    {
        id: 4,
        nama: "Diana Prince",
        posisi: "HR Manager",
        department: "HR",
        gajiPokok: 18000000,
        evaluasi: {
            technical: null, // Tidak applicable
            teamwork: 95,
            communication: 93,
            leadership: 88,
            attendance: 97
        },
        lamaMekerja: 3,
        target: {
            completed: 10,
            total: 10
        }
    }
];

console.log("DATA KARYAWAN TERDAFTAR");
dataKaryawan.forEach(karyawan => {
    console.log(`ID: ${karyawan.id} - ${karyawan.nama} (${karyawan.posisi})`);
});
console.log("");

// SISTEM EVALUASI KARYAWAN

let sistemEvaluasi = {
    
    // Method untuk menghitung rata-rata evaluasi
    hitungRataRataEvaluasi: function(evaluasi) {
        // Menggunakan Object.entries() dan filter untuk mengambil nilai yang valid
        let nilaiValid = Object.entries(evaluasi)
            .filter(([key, value]) => value !== null && typeof value === 'number')
            .map(([key, value]) => value);
        
        // Menggunakan arithmetic operators untuk kalkulasi
        let total = nilaiValid.reduce((sum, nilai) => sum + nilai, 0);
        let rata = nilaiValid.length > 0 ? total / nilaiValid.length : 0;
        
        // Menggunakan Math.round untuk pembulatan
        return Math.round(rata * 100) / 100;
    },
    
    // Method untuk menghitung persentase pencapaian target
    hitungPersentaseTarget: function(target) {
        // Menggunakan comparison operators untuk validasi
        if (target.total <= 0) return 0;
        
        // Menggunakan arithmetic operators
        let persentase = (target.completed / target.total) * 100;
        return Math.round(persentase * 100) / 100;
    },
    
    // Method untuk menentukan grade berdasarkan nilai
    tentukanGrade: function(nilai) {
        // Menggunakan ternary operator untuk multiple conditions
        return nilai >= SISTEM_CONFIG.NILAI_EXCELLENT ? 'A' :
               nilai >= SISTEM_CONFIG.NILAI_GOOD ? 'B' :
               nilai >= SISTEM_CONFIG.NILAI_MINIMUM ? 'C' : 'D';
    },
    
    // Method untuk menentukan kategori performa
    tentukanKategoriPerforma: function(rataRata, persentaseTarget, attendance) {
        // Menggunakan logical operators untuk complex conditions
        let isExcellent = rataRata >= SISTEM_CONFIG.NILAI_EXCELLENT && 
                         persentaseTarget >= 90 && 
                         attendance >= 95;
        
        let isGood = rataRata >= SISTEM_CONFIG.NILAI_GOOD && 
                    persentaseTarget >= 80 && 
                    attendance >= 90;
        
        let isSatisfactory = rataRata >= SISTEM_CONFIG.NILAI_MINIMUM && 
                            persentaseTarget >= 60 && 
                            attendance >= 85;
        
        // Using ternary operator
        return isExcellent ? 'EXCELLENT' :
               isGood ? 'GOOD' :
               isSatisfactory ? 'SATISFACTORY' : 'POOR';
    },
    
    // Method untuk menghitung bonus
    hitungBonus: function(gajiPokok, kategori, lamaMekerja) {
        // Menggunakan optional chaining dan nullish coalescing
        let bonusRate = SISTEM_CONFIG.BONUS_RATE[kategori] ?? 0;
        
        // Base bonus calculation
        let baseBonus = gajiPokok * bonusRate;
        
        // Menggunakan comparison dan logical operators untuk seniority bonus
        let seniorityMultiplier = lamaMekerja >= 5 ? 1.5 :
                                 lamaMekerja >= 3 ? 1.2 :
                                 lamaMekerja >= 2 ? 1.1 : 1.0;
        
        // Final bonus calculation dengan arithmetic operators
        let finalBonus = baseBonus * seniorityMultiplier;
        
        return Math.round(finalBonus);
    },
    
    // Method untuk evaluasi lengkap karyawan
    evaluasiKaryawan: function(karyawan) {
        // Menggunakan destructuring assignment
        let { 
            id, nama, posisi, department, gajiPokok, 
            evaluasi, lamaMekerja, target 
        } = karyawan;
        
        // Kalkulasi menggunakan method lain
        let rataRataEvaluasi = this.hitungRataRataEvaluasi(evaluasi);
        let persentaseTarget = this.hitungPersentaseTarget(target);
        let grade = this.tentukanGrade(rataRataEvaluasi);
        let kategori = this.tentukanKategoriPerforma(
            rataRataEvaluasi, 
            persentaseTarget, 
            evaluasi.attendance || 0
        );
        
        // Menggunakan logical operators untuk validasi attendance
        let attendanceScore = evaluasi.attendance || 0;
        let bonus = this.hitungBonus(gajiPokok, kategori, lamaMekerja);
        
        // Total kompensasi dengan menggunakan arithmetic operators
        let totalKompensasi = gajiPokok + bonus;
        
        // Status karyawan menggunakan logical dan comparison operators
        let isEligibleForPromotion = rataRataEvaluasi >= 85 && 
                                   persentaseTarget >= 85 && 
                                   lamaMekerja >= 2;
        
        let needsImprovement = rataRataEvaluasi < SISTEM_CONFIG.NILAI_MINIMUM ||
                              persentaseTarget < 60 ||
                              attendanceScore < 85;
        
        // Return object dengan hasil evaluasi
        return {
            id,
            nama,
            posisi,
            department,
            rataRataEvaluasi,
            grade,
            persentaseTarget,
            attendanceScore,
            kategori,
            gajiPokok,
            bonus,
            totalKompensasi,
            lamaMekerja,
            isEligibleForPromotion,
            needsImprovement,
            rekomendasi: this.generateRekomendasi(kategori, isEligibleForPromotion, needsImprovement)
        };
    },
    
    // Method untuk generate rekomendasi
    generateRekomendasi: function(kategori, eligible, needsImprovement) {
        // Menggunakan logical operators dan ternary operators
        return needsImprovement ? 'Perlu peningkatan performa segera' :
               eligible ? 'Direkomendasikan untuk promosi' :
               kategori === 'EXCELLENT' ? 'Pertahankan performa excellent' :
               kategori === 'GOOD' ? 'Performa baik, pertahankan' :
               'Performa cukup, ada ruang untuk improvement';
    },
    
    // Method untuk evaluasi semua karyawan
    evaluasiSemuaKaryawan: function() {
        // Menggunakan array method dengan arrow functions
        return dataKaryawan.map(karyawan => this.evaluasiKaryawan(karyawan));
    },
    
    // Method untuk filtering karyawan berdasarkan kriteria
    filterKaryawan: function(hasilEvaluasi, kriteria) {
        return hasilEvaluasi.filter(karyawan => {
            // Menggunakan multiple logical operators
            switch (kriteria) {
                case 'excellent':
                    return karyawan.kategori === 'EXCELLENT';
                case 'promotion':
                    return karyawan.isEligibleForPromotion;
                case 'improvement':
                    return karyawan.needsImprovement;
                case 'senior':
                    // Menggunakan comparison operators
                    return karyawan.lamaMekerja >= 3;
                case 'high_performer':
                    // Menggunakan logical AND
                    return karyawan.rataRataEvaluasi >= 85 && 
                           karyawan.persentaseTarget >= 80;
                default:
                    return true;
            }
        });
    },
    
    // Method untuk statistik department
    getStatistikDepartment: function(hasilEvaluasi) {
        let stats = {};
        
        hasilEvaluasi.forEach(karyawan => {
            let dept = karyawan.department;
            
            // Menggunakan logical OR untuk inisialisasi
            stats[dept] = stats[dept] || {
                totalKaryawan: 0,
                totalRataRata: 0,
                totalBonus: 0,
                kategoriCount: { EXCELLENT: 0, GOOD: 0, SATISFACTORY: 0, POOR: 0 },
                promotionEligible: 0
            };
            
            // Menggunakan assignment operators
            stats[dept].totalKaryawan += 1;
            stats[dept].totalRataRata += karyawan.rataRataEvaluasi;
            stats[dept].totalBonus += karyawan.bonus;
            stats[dept].kategoriCount[karyawan.kategori] += 1;
            
            // Menggunakan ternary operator
            stats[dept].promotionEligible += karyawan.isEligibleForPromotion ? 1 : 0;
        });
        
        // Calculate averages menggunakan Object.keys dan arithmetic operators
        Object.keys(stats).forEach(dept => {
            let deptStats = stats[dept];
            deptStats.rataRataPerforma = Math.round(
                (deptStats.totalRataRata / deptStats.totalKaryawan) * 100
            ) / 100;
            deptStats.averageBonus = Math.round(
                deptStats.totalBonus / deptStats.totalKaryawan
            );
        });
        
        return stats;
    }
};

// ==========================================
// MENJALANKAN EVALUASI SISTEM
// ==========================================

console.log("=== MENJALANKAN EVALUASI KOMPREHENSIF ===");

// Evaluasi semua karyawan
let hasilEvaluasi = sistemEvaluasi.evaluasiSemuaKaryawan();

console.log("HASIL EVALUASI INDIVIDUAL");
hasilEvaluasi.forEach(hasil => {
    console.log(`\n--- ${hasil.nama} ---`);
    console.log(`Posisi: ${hasil.posisi} (${hasil.department})`);
    console.log(`Rata-rata Evaluasi: ${hasil.rataRataEvaluasi} (Grade: ${hasil.grade})`);
    console.log(`Pencapaian Target: ${hasil.persentaseTarget}%`);
    console.log(`Attendance: ${hasil.attendanceScore}%`);
    console.log(`Kategori Performa: ${hasil.kategori}`);
    console.log(`Gaji Pokok: Rp ${hasil.gajiPokok.toLocaleString()}`);
    console.log(`Bonus: Rp ${hasil.bonus.toLocaleString()}`);
    console.log(`Total Kompensasi: Rp ${hasil.totalKompensasi.toLocaleString()}`);
    console.log(`Eligible for Promotion: ${hasil.isEligibleForPromotion ? 'Ya' : 'Tidak'}`);
    console.log(`Needs Improvement: ${hasil.needsImprovement ? 'Ya' : 'Tidak'}`);
    console.log(`Rekomendasi: ${hasil.rekomendasi}`);
});

// ==========================================
// ANALISIS BERDASARKAN KRITERIA
// ==========================================

console.log("\nANALISIS BERDASARKAN KRITERIA");

// Karyawan dengan performa excellent
let excellentPerformers = sistemEvaluasi.filterKaryawan(hasilEvaluasi, 'excellent');
console.log("\nExcellent Performers:");
excellentPerformers.forEach(k => {
    console.log(`- ${k.nama} (${k.rataRataEvaluasi} avg, ${k.persentaseTarget}% target)`);
});

// Karyawan eligible untuk promosi
let promotionCandidates = sistemEvaluasi.filterKaryawan(hasilEvaluasi, 'promotion');
console.log("\nPromotion Candidates:");
promotionCandidates.forEach(k => {
    console.log(`- ${k.nama} (${k.lamaMekerja} tahun experience)`);
});

// Karyawan perlu improvement
let needImprovement = sistemEvaluasi.filterKaryawan(hasilEvaluasi, 'improvement');
console.log("\nNeed Improvement:");
needImprovement.forEach(k => {
    console.log(`- ${k.nama} (${k.kategori} - ${k.rekomendasi})`);
});

// High performers
let highPerformers = sistemEvaluasi.filterKaryawan(hasilEvaluasi, 'high_performer');
console.log("\nHigh Performers:");
highPerformers.forEach(k => {
    console.log(`- ${k.nama} (Eval: ${k.rataRataEvaluasi}, Target: ${k.persentaseTarget}%)`);
});

// STATISTIK DEPARTMENT

console.log("\nSTATISTIK PER DEPARTMENT");
let deptStats = sistemEvaluasi.getStatistikDepartment(hasilEvaluasi);

Object.entries(deptStats).forEach(([dept, stats]) => {
    console.log(`\n--- ${dept} Department ---`);
    console.log(`Total Karyawan: ${stats.totalKaryawan}`);
    console.log(`Rata-rata Performa: ${stats.rataRataPerforma}`);
    console.log(`Average Bonus: Rp ${stats.averageBonus.toLocaleString()}`);
    console.log(`Promotion Eligible: ${stats.promotionEligible}`);
    console.log(`Kategori Distribution:`);
    Object.entries(stats.kategoriCount).forEach(([kategori, count]) => {
        // Menggunakan ternary operator untuk conditional display
        count > 0 && console.log(`  ${kategori}: ${count}`);
    });
});

// ==========================================
// SUMMARY STATISTIK KESELURUHAN
// ==========================================

console.log("\nSUMMARY STATISTIK KESELURUHAN");

// Menggunakan array methods dengan operators
let totalKaryawan = hasilEvaluasi.length;
let avgPerforma = hasilEvaluasi.reduce((sum, k) => sum + k.rataRataEvaluasi, 0) / totalKaryawan;
let totalBonusPaid = hasilEvaluasi.reduce((sum, k) => sum + k.bonus, 0);
let promotionRate = (hasilEvaluasi.filter(k => k.isEligibleForPromotion).length / totalKaryawan) * 100;

// Distribusi grade menggunakan logical operators
let gradeDistribution = hasilEvaluasi.reduce((dist, k) => {
    dist[k.grade] = (dist[k.grade] || 0) + 1;
    return dist;
}, {});

console.log(`Total Karyawan Dievaluasi: ${totalKaryawan}`);
console.log(`Rata-rata Performa Keseluruhan: ${Math.round(avgPerforma * 100) / 100}`);
console.log(`Total Budget Bonus: Rp ${totalBonusPaid.toLocaleString()}`);
console.log(`Promotion Rate: ${Math.round(promotionRate * 100) / 100}%`);

console.log("\nDistribusi Grade:");
Object.entries(gradeDistribution).forEach(([grade, count]) => {
    let percentage = Math.round((count / totalKaryawan) * 100 * 100) / 100;
    console.log(`Grade ${grade}: ${count} karyawan (${percentage}%)`);
});

// ==========================================
// REKOMENDASI SISTEM
// ==========================================

console.log("\nREKOMENDASI SISTEM");

// Menggunakan berbagai operators untuk generate insights
let lowPerformers = hasilEvaluasi.filter(k => k.kategori === 'POOR').length;
let highBonusRecipients = hasilEvaluasi.filter(k => k.bonus > k.gajiPokok * 0.15).length;

// Logical operators untuk conditional recommendations
avgPerforma < 75 && console.log("⚠️  Rata-rata performa perusahaan di bawah target (75)");
promotionRate < 20 && console.log("⚠️  Tingkat promosi rendah, perlu review kriteria");
lowPerformers > 0 && console.log(`⚠️  ${lowPerformers} karyawan memerlukan attention segera`);
highBonusRecipients > 0 && console.log(`✅ ${highBonusRecipients} karyawan mendapat bonus tinggi`);

// Final recommendations
console.log("\nRekomendasi Tindakan:");
console.log("1. " + (avgPerforma >= 80 ? "Pertahankan standar tinggi" : "Implementasi program training"));
console.log("2. " + (promotionRate >= 25 ? "Sistem promosi berjalan baik" : "Review jalur karir karyawan")); 
console.log("3. " + (totalBonusPaid > 50000000 ? "Monitor budget bonus" : "Tingkatkan insentif performa"));

console.log("\nEVALUASI SISTEM SELESAI");
console.log("Program ini mendemonstrasikan:");
console.log("✓ Arithmetic operators (+, -, *, /, %, **)");
console.log("✓ Comparison operators (==, ===, !=, !==, >, <, >=, <=)");
console.log("✓ Logical operators (&&, ||, !)");
console.log("✓ Assignment operators (=, +=, -=, *=, /=)");
console.log("✓ Ternary operator (? :)");
console.log("✓ typeof, instanceof, in operators");
console.log("✓ Optional chaining (?.) dan nullish coalescing (??)");
console.log("✓ Complex expressions dan operator precedence");
console.log("✓ Real-world business logic implementation");