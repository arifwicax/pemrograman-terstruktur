// ==========================================
// COMPREHENSIVE EXAMPLES - ARRAY APPLICATIONS
// ==========================================

console.log("=== COMPREHENSIVE EXAMPLES - ARRAY APPLICATIONS ===\n");
console.log("Mari kita lihat contoh-contoh aplikasi nyata menggunakan array!");
console.log("Contoh-contoh ini menggabungkan semua konsep yang telah dipelajari.");
console.log("");

// ==========================================
// 1. SISTEM MANAJEMEN MAHASISWA
// ==========================================

console.log("=== 1. SISTEM MANAJEMEN MAHASISWA ===");

class StudentManagement {
    constructor() {
        this.students = [];
        this.subjects = ["Matematika", "Fisika", "Kimia", "Biologi", "Bahasa"];
    }

    // Menambah mahasiswa baru
    addStudent(name, id) {
        let student = {
            id: id,
            name: name,
            grades: new Array(this.subjects.length).fill(0),
            attendance: []
        };
        this.students.push(student);
        console.log(`✅ Mahasiswa ${name} (${id}) ditambahkan`);
    }

    // Mengatur nilai mahasiswa
    setGrade(studentId, subjectIndex, grade) {
        let student = this.students.find(s => s.id === studentId);
        if (student && subjectIndex >= 0 && subjectIndex < this.subjects.length) {
            student.grades[subjectIndex] = grade;
            console.log(`✅ Nilai ${this.subjects[subjectIndex]} untuk ${student.name}: ${grade}`);
        }
    }

    // Menghitung rata-rata mahasiswa
    getStudentAverage(studentId) {
        let student = this.students.find(s => s.id === studentId);
        if (student) {
            let validGrades = student.grades.filter(grade => grade > 0);
            let average = validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length;
            return average || 0;
        }
        return 0;
    }

    // Mendapatkan ranking mahasiswa
    getStudentRanking() {
        return this.students
            .map(student => ({
                ...student,
                average: this.getStudentAverage(student.id)
            }))
            .sort((a, b) => b.average - a.average);
    }

    // Laporan lengkap
    generateReport() {
        console.log("\n📊 LAPORAN NILAI MAHASISWA");
        console.log("=".repeat(80));
        
        // Header
        let header = "Rank".padEnd(5) + "ID".padEnd(6) + "Nama".padEnd(15) + 
                    this.subjects.map(s => s.padEnd(8)).join("") + "Rata²".padEnd(8);
        console.log(header);
        console.log("-".repeat(80));

        // Data mahasiswa berurut berdasarkan ranking
        let ranking = this.getStudentRanking();
        ranking.forEach((student, index) => {
            let row = (index + 1).toString().padEnd(5) +
                     student.id.padEnd(6) +
                     student.name.padEnd(15);
            
            student.grades.forEach(grade => {
                row += (grade || "-").toString().padEnd(8);
            });
            row += student.average.toFixed(2).padEnd(8);
            console.log(row);
        });

        // Statistik mata kuliah
        console.log("\n📈 STATISTIK MATA KULIAH");
        console.log("-".repeat(50));
        this.subjects.forEach((subject, index) => {
            let grades = this.students
                .map(s => s.grades[index])
                .filter(g => g > 0);
            
            if (grades.length > 0) {
                let avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;
                let max = Math.max(...grades);
                let min = Math.min(...grades);
                console.log(`${subject}: Avg=${avg.toFixed(2)}, Max=${max}, Min=${min}`);
            }
        });
    }
}

// Demo sistem mahasiswa
let sms = new StudentManagement();

// Menambah mahasiswa
sms.addStudent("Andi Wijaya", "STU001");
sms.addStudent("Budi Santoso", "STU002");
sms.addStudent("Cici Lestari", "STU003");
sms.addStudent("Dedi Kurniawan", "STU004");

// Mengatur nilai
sms.setGrade("STU001", 0, 85); // Andi - Matematika
sms.setGrade("STU001", 1, 90); // Andi - Fisika
sms.setGrade("STU001", 2, 78); // Andi - Kimia

sms.setGrade("STU002", 0, 92); // Budi - Matematika
sms.setGrade("STU002", 1, 88); // Budi - Fisika
sms.setGrade("STU002", 2, 95); // Budi - Kimia

sms.setGrade("STU003", 0, 78); // Cici - Matematika
sms.setGrade("STU003", 1, 85); // Cici - Fisika
sms.setGrade("STU003", 2, 82); // Cici - Kimia

sms.setGrade("STU004", 0, 88); // Dedi - Matematika
sms.setGrade("STU004", 1, 92); // Dedi - Fisika
sms.setGrade("STU004", 2, 87); // Dedi - Kimia

// Generate laporan
sms.generateReport();

// ==========================================
// 2. SISTEM INVENTORY TOKO
// ==========================================

console.log("\n=== 2. SISTEM INVENTORY TOKO ===");

class InventorySystem {
    constructor() {
        this.products = [];
        this.transactions = [];
        this.categories = ["Electronics", "Clothing", "Books", "Food", "Sports"];
    }

    // Menambah produk
    addProduct(name, category, price, stock) {
        let product = {
            id: "PRD" + (this.products.length + 1).toString().padStart(3, "0"),
            name: name,
            category: category,
            price: price,
            stock: stock,
            soldCount: 0
        };
        this.products.push(product);
        console.log(`✅ Produk ${name} ditambahkan dengan ID ${product.id}`);
        return product.id;
    }

    // Update stok
    updateStock(productId, quantity, type = "add") {
        let product = this.products.find(p => p.id === productId);
        if (product) {
            if (type === "add") {
                product.stock += quantity;
            } else if (type === "sell" && product.stock >= quantity) {
                product.stock -= quantity;
                product.soldCount += quantity;
                
                // Catat transaksi
                this.transactions.push({
                    date: new Date().toISOString().split('T')[0],
                    productId: productId,
                    productName: product.name,
                    quantity: quantity,
                    price: product.price,
                    total: product.price * quantity
                });
            } else {
                console.log("❌ Stok tidak mencukupi!");
                return false;
            }
            console.log(`✅ Stok ${product.name}: ${product.stock}`);
            return true;
        }
        return false;
    }

    // Cari produk
    searchProducts(query) {
        return this.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Produk low stock
    getLowStockProducts(threshold = 5) {
        return this.products.filter(product => product.stock <= threshold);
    }

    // Laporan penjualan
    getSalesReport() {
        console.log("\n💰 LAPORAN PENJUALAN");
        console.log("=".repeat(80));

        // Total penjualan
        let totalRevenue = this.transactions.reduce((sum, t) => sum + t.total, 0);
        let totalItems = this.transactions.reduce((sum, t) => sum + t.quantity, 0);
        
        console.log(`Total Revenue: Rp ${totalRevenue.toLocaleString()}`);
        console.log(`Total Items Sold: ${totalItems}`);
        console.log(`Total Transactions: ${this.transactions.length}`);

        // Top selling products
        let productSales = this.products
            .filter(p => p.soldCount > 0)
            .sort((a, b) => b.soldCount - a.soldCount)
            .slice(0, 5);

        console.log("\n🏆 TOP 5 PRODUK TERLARIS:");
        productSales.forEach((product, index) => {
            let revenue = product.soldCount * product.price;
            console.log(`${index + 1}. ${product.name}: ${product.soldCount} sold (Rp ${revenue.toLocaleString()})`);
        });

        // Penjualan per kategori
        let categorySales = this.categories.map(category => {
            let categoryProducts = this.products.filter(p => p.category === category);
            let totalSold = categoryProducts.reduce((sum, p) => sum + p.soldCount, 0);
            let totalRevenue = categoryProducts.reduce((sum, p) => sum + (p.soldCount * p.price), 0);
            return {category, totalSold, totalRevenue};
        }).filter(c => c.totalSold > 0);

        console.log("\n📊 PENJUALAN PER KATEGORI:");
        categorySales.forEach(cat => {
            console.log(`${cat.category}: ${cat.totalSold} items (Rp ${cat.totalRevenue.toLocaleString()})`);
        });
    }

    // Tampilkan inventory
    displayInventory() {
        console.log("\n📦 INVENTORY SAAT INI");
        console.log("=".repeat(80));
        
        let header = "ID".padEnd(8) + "Nama".padEnd(20) + "Kategori".padEnd(12) + 
                    "Harga".padEnd(12) + "Stok".padEnd(6) + "Terjual".padEnd(8);
        console.log(header);
        console.log("-".repeat(80));

        this.products.forEach(product => {
            let row = product.id.padEnd(8) +
                     product.name.padEnd(20) +
                     product.category.padEnd(12) +
                     product.price.toLocaleString().padEnd(12) +
                     product.stock.toString().padEnd(6) +
                     product.soldCount.toString().padEnd(8);
            console.log(row);
        });

        // Warning untuk low stock
        let lowStock = this.getLowStockProducts();
        if (lowStock.length > 0) {
            console.log("\n⚠️  PERINGATAN STOK RENDAH:");
            lowStock.forEach(product => {
                console.log(`- ${product.name}: ${product.stock} tersisa`);
            });
        }
    }
}

// Demo sistem inventory
let inventory = new InventorySystem();

// Menambah produk
inventory.addProduct("Laptop Gaming", "Electronics", 15000000, 10);
inventory.addProduct("Mouse Wireless", "Electronics", 250000, 25);
inventory.addProduct("Kemeja Formal", "Clothing", 150000, 15);
inventory.addProduct("Novel Petualangan", "Books", 75000, 30);
inventory.addProduct("Sepatu Lari", "Sports", 500000, 8);

// Simulasi penjualan
inventory.updateStock("PRD001", 2, "sell"); // Jual 2 laptop
inventory.updateStock("PRD002", 5, "sell"); // Jual 5 mouse
inventory.updateStock("PRD003", 3, "sell"); // Jual 3 kemeja
inventory.updateStock("PRD001", 1, "sell"); // Jual 1 laptop lagi
inventory.updateStock("PRD005", 2, "sell"); // Jual 2 sepatu

// Restock
inventory.updateStock("PRD001", 5, "add"); // Tambah laptop

// Tampilkan laporan
inventory.displayInventory();
inventory.getSalesReport();

// ==========================================
// 3. GAME: BATTLESHIP SEDERHANA
// ==========================================

console.log("\n=== 3. GAME: BATTLESHIP SEDERHANA ===");

class BattleshipGame {
    constructor(size = 8) {
        this.size = size;
        this.playerBoard = this.createBoard();
        this.enemyBoard = this.createBoard();
        this.playerShots = this.createBoard();
        this.enemyShots = this.createBoard();
        this.ships = [];
        
        this.initializeGame();
    }

    createBoard() {
        return Array.from({length: this.size}, () => 
            Array.from({length: this.size}, () => 0)
        );
    }

    // 0 = air, 1 = kapal, 2 = tembakan meleset, 3 = kapal kena
    placeShip(board, row, col, length, direction) {
        // Cek apakah bisa menempatkan kapal
        for (let i = 0; i < length; i++) {
            let r = direction === 'horizontal' ? row : row + i;
            let c = direction === 'horizontal' ? col + i : col;
            
            if (r >= this.size || c >= this.size || board[r][c] !== 0) {
                return false;
            }
        }

        // Tempatkan kapal
        for (let i = 0; i < length; i++) {
            let r = direction === 'horizontal' ? row : row + i;
            let c = direction === 'horizontal' ? col + i : col;
            board[r][c] = 1;
        }
        
        return true;
    }

    initializeGame() {
        // Tempatkan kapal player (manual untuk demo)
        this.placeShip(this.playerBoard, 1, 1, 3, 'horizontal'); // Kapal 3
        this.placeShip(this.playerBoard, 3, 2, 2, 'vertical');   // Kapal 2
        this.placeShip(this.playerBoard, 5, 0, 4, 'horizontal'); // Kapal 4
        this.placeShip(this.playerBoard, 0, 6, 2, 'vertical');   // Kapal 2

        // Tempatkan kapal musuh (random)
        this.placeRandomShips(this.enemyBoard, [3, 2, 4, 2]);
    }

    placeRandomShips(board, shipLengths) {
        shipLengths.forEach(length => {
            let placed = false;
            let attempts = 0;
            
            while (!placed && attempts < 100) {
                let row = Math.floor(Math.random() * this.size);
                let col = Math.floor(Math.random() * this.size);
                let direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
                
                placed = this.placeShip(board, row, col, length, direction);
                attempts++;
            }
        });
    }

    shoot(targetBoard, shotBoard, row, col) {
        if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
            return "Invalid coordinates";
        }

        if (shotBoard[row][col] !== 0) {
            return "Already shot here";
        }

        if (targetBoard[row][col] === 1) {
            shotBoard[row][col] = 3; // Hit
            targetBoard[row][col] = 3; // Mark as hit
            return "Hit!";
        } else {
            shotBoard[row][col] = 2; // Miss
            return "Miss!";
        }
    }

    displayBoard(board, title, hideShips = false) {
        console.log(`\n${title}`);
        console.log("  " + Array.from({length: this.size}, (_, i) => i).join(" "));
        
        board.forEach((row, i) => {
            let display = i + " ";
            row.forEach(cell => {
                if (hideShips && cell === 1) {
                    display += "~ "; // Hide enemy ships
                } else if (cell === 0) {
                    display += "~ "; // Water
                } else if (cell === 1) {
                    display += "■ "; // Ship
                } else if (cell === 2) {
                    display += "○ "; // Miss
                } else if (cell === 3) {
                    display += "× "; // Hit
                }
            });
            console.log(display);
        });
    }

    playDemo() {
        console.log("🚢 BATTLESHIP GAME DEMO");
        
        this.displayBoard(this.playerBoard, "YOUR BOARD");
        this.displayBoard(this.enemyBoard, "ENEMY BOARD (showing ships for demo)", false);

        // Simulasi beberapa tembakan
        let shots = [
            [1, 1], [1, 2], [1, 3], // Hit kapal horizontal
            [0, 0], [0, 1],         // Miss
            [3, 2], [4, 2],         // Hit kapal vertical
            [5, 0], [5, 1]          // Hit kapal besar
        ];

        console.log("\n🎯 SIMULASI TEMBAKAN:");
        shots.forEach(([row, col]) => {
            let result = this.shoot(this.enemyBoard, this.playerShots, row, col);
            console.log(`Shoot [${row},${col}]: ${result}`);
        });

        this.displayBoard(this.playerShots, "YOUR SHOTS ON ENEMY");
        
        // Hitung statistik
        let hits = this.playerShots.flat().filter(cell => cell === 3).length;
        let misses = this.playerShots.flat().filter(cell => cell === 2).length;
        let totalShots = hits + misses;
        let accuracy = totalShots > 0 ? (hits / totalShots * 100).toFixed(1) : 0;
        
        console.log(`\n📊 STATISTIK: ${hits} hits, ${misses} misses, ${accuracy}% accuracy`);
    }
}

// Demo game battleship
let game = new BattleshipGame();
game.playDemo();

// ==========================================
// 4. ALGORITMA SORTING DAN SEARCHING
// ==========================================

console.log("\n=== 4. ALGORITMA SORTING DAN SEARCHING ===");

class SortingAlgorithms {
    // Bubble Sort
    static bubbleSort(arr) {
        let array = [...arr]; // copy array
        let n = array.length;
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                comparisons++;
                if (array[j] > array[j + 1]) {
                    // Swap
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    swaps++;
                }
            }
        }

        return {sorted: array, comparisons, swaps};
    }

    // Quick Sort
    static quickSort(arr, low = 0, high = arr.length - 1) {
        let array = low === 0 && high === arr.length - 1 ? [...arr] : arr;
        let stats = {comparisons: 0, swaps: 0};

        if (low < high) {
            let pi = this.partition(array, low, high, stats);
            this.quickSort(array, low, pi - 1);
            this.quickSort(array, pi + 1, high);
        }

        return low === 0 && high === arr.length - 1 ? 
               {sorted: array, ...stats} : array;
    }

    static partition(arr, low, high, stats) {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            stats.comparisons++;
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                stats.swaps++;
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        stats.swaps++;
        return i + 1;
    }

    // Binary Search
    static binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let steps = 0;

        while (left <= right) {
            steps++;
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return {found: true, index: mid, steps};
            }

            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return {found: false, index: -1, steps};
    }
}

// Demo algoritma
let testArray = [64, 34, 25, 12, 22, 11, 90, 88, 76, 50];
console.log("Array original:", testArray);

// Test Bubble Sort
let bubbleResult = SortingAlgorithms.bubbleSort(testArray);
console.log("\nBubble Sort:");
console.log("Hasil:", bubbleResult.sorted);
console.log(`Perbandingan: ${bubbleResult.comparisons}, Pertukaran: ${bubbleResult.swaps}`);

// Test Quick Sort
let quickResult = SortingAlgorithms.quickSort(testArray);
console.log("\nQuick Sort:");
console.log("Hasil:", quickResult.sorted);
console.log(`Perbandingan: ${quickResult.comparisons}, Pertukaran: ${quickResult.swaps}`);

// Test Binary Search
let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log("\nBinary Search pada array:", sortedArray);

[7, 15, 4, 20].forEach(target => {
    let result = SortingAlgorithms.binarySearch(sortedArray, target);
    console.log(`Cari ${target}: ${result.found ? `ditemukan di index ${result.index}` : 'tidak ditemukan'} (${result.steps} langkah)`);
});

// ==========================================
// 5. DATA ANALYSIS TOOL
// ==========================================

console.log("\n=== 5. DATA ANALYSIS TOOL ===");

class DataAnalyzer {
    static analyze(data) {
        if (!Array.isArray(data) || data.length === 0) {
            return null;
        }

        // Statistik dasar
        let sorted = [...data].sort((a, b) => a - b);
        let sum = data.reduce((acc, val) => acc + val, 0);
        let mean = sum / data.length;
        
        // Median
        let median;
        let mid = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            median = (sorted[mid - 1] + sorted[mid]) / 2;
        } else {
            median = sorted[mid];
        }

        // Mode
        let frequency = {};
        data.forEach(val => frequency[val] = (frequency[val] || 0) + 1);
        let maxFreq = Math.max(...Object.values(frequency));
        let mode = Object.keys(frequency).filter(key => frequency[key] === maxFreq);

        // Range dan standar deviasi
        let min = Math.min(...data);
        let max = Math.max(...data);
        let range = max - min;
        
        let variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
        let standardDeviation = Math.sqrt(variance);

        // Quartiles
        let q1 = this.percentile(sorted, 25);
        let q3 = this.percentile(sorted, 75);
        let iqr = q3 - q1;

        return {
            count: data.length,
            sum: sum,
            mean: mean,
            median: median,
            mode: mode.map(Number),
            min: min,
            max: max,
            range: range,
            variance: variance,
            standardDeviation: standardDeviation,
            q1: q1,
            q3: q3,
            iqr: iqr
        };
    }

    static percentile(sortedArray, percentile) {
        let index = (percentile / 100) * (sortedArray.length - 1);
        let lower = Math.floor(index);
        let upper = Math.ceil(index);
        let weight = index % 1;

        if (upper >= sortedArray.length) return sortedArray[sortedArray.length - 1];
        if (lower === upper) return sortedArray[lower];

        return sortedArray[lower] * (1 - weight) + sortedArray[upper] * weight;
    }

    static displayAnalysis(data, title) {
        console.log(`\n📈 ${title}`);
        console.log("=".repeat(50));
        
        let analysis = this.analyze(data);
        if (!analysis) {
            console.log("Data tidak valid atau kosong");
            return;
        }

        console.log(`Data: [${data.join(', ')}]`);
        console.log(`Count: ${analysis.count}`);
        console.log(`Sum: ${analysis.sum}`);
        console.log(`Mean: ${analysis.mean.toFixed(2)}`);
        console.log(`Median: ${analysis.median}`);
        console.log(`Mode: [${analysis.mode.join(', ')}]`);
        console.log(`Min: ${analysis.min}`);
        console.log(`Max: ${analysis.max}`);
        console.log(`Range: ${analysis.range}`);
        console.log(`Standard Deviation: ${analysis.standardDeviation.toFixed(2)}`);
        console.log(`Q1: ${analysis.q1.toFixed(2)}`);
        console.log(`Q3: ${analysis.q3.toFixed(2)}`);
        console.log(`IQR: ${analysis.iqr.toFixed(2)}`);
    }
}

// Demo analisis data
let salesData = [150, 200, 180, 175, 220, 195, 200, 180, 210, 165, 240, 185, 190, 205, 175];
DataAnalyzer.displayAnalysis(salesData, "ANALISIS DATA PENJUALAN");

let testScores = [85, 90, 78, 92, 88, 76, 94, 87, 91, 83, 95, 89, 82, 86, 93];
DataAnalyzer.displayAnalysis(testScores, "ANALISIS NILAI UJIAN");

console.log("\n🎉 SELAMAT! Anda telah menyelesaikan semua materi Array!");
console.log("Array adalah struktur data yang sangat powerful dan serbaguna.");
console.log("Dengan menguasai array dan method-methodnya, Anda dapat:");
console.log("✅ Menyimpan dan mengorganisir data dengan efisien");
console.log("✅ Melakukan operasi pencarian dan pengurutan");
console.log("✅ Membangun aplikasi yang kompleks");
console.log("✅ Menganalisis dan memanipulasi data");
console.log("\nTerus berlatih dan eksplorasi lebih dalam! 🚀");