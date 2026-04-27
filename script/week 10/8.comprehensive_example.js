/*
=================================================
WEEK 10 - COMPREHENSIVE EXAMPLE
=================================================
File: 8.comprehensive_example.js
Materi: Contoh Lengkap Penggunaan Function dalam JavaScript

Project: SISTEM MANAJEMEN PERPUSTAKAAN
Menggabungkan semua konsep function yang telah dipelajari:
- Function declarations & expressions
- Arrow functions
- Parameters & arguments
- Return statements & scope
- Closures
- Higher-order functions
=================================================
*/

console.log("=== SISTEM MANAJEMEN PERPUSTAKAAN ===\n");

// 1. LIBRARY MANAGEMENT SYSTEM MENGGUNAKAN MODULE PATTERN
console.log("1. INISIALISASI SISTEM PERPUSTAKAAN");
console.log();

const LibrarySystem = (function() {
    // Private variables (menggunakan closure)
    let books = [];
    let members = [];
    let transactions = [];
    let nextBookId = 1;
    let nextMemberId = 1;
    let nextTransactionId = 1;

    // Private utility functions
    const generateId = (prefix) => `${prefix}${Date.now()}${Math.random().toString(36).substr(2, 5)}`;
    
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Higher-order function untuk validasi
    const createValidator = (rules) => {
        return function(data) {
            const errors = [];
            
            Object.keys(rules).forEach(field => {
                const rule = rules[field];
                const value = data[field];
                
                if (rule.required && (!value || value.trim() === '')) {
                    errors.push(`${field} wajib diisi`);
                }
                
                if (rule.minLength && value && value.length < rule.minLength) {
                    errors.push(`${field} minimal ${rule.minLength} karakter`);
                }
                
                if (rule.type === 'email' && value && !value.includes('@')) {
                    errors.push(`${field} harus format email yang valid`);
                }
                
                if (rule.type === 'number' && value && isNaN(value)) {
                    errors.push(`${field} harus berupa angka`);
                }
            });
            
            return {
                isValid: errors.length === 0,
                errors: errors
            };
        };
    };

    // Validators menggunakan function factory
    const validateBook = createValidator({
        title: { required: true, minLength: 2 },
        author: { required: true, minLength: 2 },
        isbn: { required: true, minLength: 10 },
        year: { required: true, type: 'number' }
    });

    const validateMember = createValidator({
        name: { required: true, minLength: 2 },
        email: { required: true, type: 'email' },
        phone: { required: true, minLength: 10 }
    });

    // Private functions untuk mencari data
    const findBookById = (id) => books.find(book => book.id === id);
    const findMemberById = (id) => members.find(member => member.id === id);
    const findBookByIsbn = (isbn) => books.find(book => book.isbn === isbn);

    // Higher-order function untuk filtering
    const createFilter = (filterFn) => (array) => array.filter(filterFn);
    
    const filterAvailableBooks = createFilter(book => book.available);
    const filterBorrowedBooks = createFilter(book => !book.available);
    const filterActiveMembers = createFilter(member => member.active);

    // Public API
    return {
        // Book Management
        addBook: function(bookData) {
            console.log("📖 Menambah buku baru...");
            
            const validation = validateBook(bookData);
            if (!validation.isValid) {
                console.log("❌ Validation Error:", validation.errors);
                return { success: false, errors: validation.errors };
            }

            // Cek ISBN duplikat
            if (findBookByIsbn(bookData.isbn)) {
                console.log("❌ Buku dengan ISBN tersebut sudah ada");
                return { success: false, error: "ISBN sudah ada" };
            }

            const book = {
                id: generateId('BOOK'),
                title: bookData.title,
                author: bookData.author,
                isbn: bookData.isbn,
                year: parseInt(bookData.year),
                available: true,
                addedDate: new Date(),
                borrowHistory: []
            };

            books.push(book);
            console.log(`✅ Buku "${book.title}" berhasil ditambahkan`);
            return { success: true, book: book };
        },

        // Member Management dengan default parameters
        addMember: function(memberData, membershipType = 'regular') {
            console.log("👤 Menambah anggota baru...");
            
            const validation = validateMember(memberData);
            if (!validation.isValid) {
                console.log("❌ Validation Error:", validation.errors);
                return { success: false, errors: validation.errors };
            }

            const member = {
                id: generateId('MBR'),
                name: memberData.name,
                email: memberData.email,
                phone: memberData.phone,
                membershipType: membershipType,
                joinDate: new Date(),
                active: true,
                borrowLimit: membershipType === 'premium' ? 10 : 3,
                currentBorrows: []
            };

            members.push(member);
            console.log(`✅ Anggota "${member.name}" berhasil ditambahkan`);
            return { success: true, member: member };
        },

        // Borrow book menggunakan multiple functions
        borrowBook: function(memberId, bookId) {
            console.log("📚 Proses peminjaman buku...");
            
            const member = findMemberById(memberId);
            const book = findBookById(bookId);

            // Validation chain menggunakan early return
            if (!member) {
                console.log("❌ Anggota tidak ditemukan");
                return { success: false, error: "Anggota tidak ditemukan" };
            }

            if (!member.active) {
                console.log("❌ Anggota tidak aktif");
                return { success: false, error: "Anggota tidak aktif" };
            }

            if (!book) {
                console.log("❌ Buku tidak ditemukan");
                return { success: false, error: "Buku tidak ditemukan" };
            }

            if (!book.available) {
                console.log("❌ Buku sedang dipinjam");
                return { success: false, error: "Buku sedang dipinjam" };
            }

            if (member.currentBorrows.length >= member.borrowLimit) {
                console.log(`❌ Limit peminjaman tercapai (${member.borrowLimit})`);
                return { success: false, error: "Limit peminjaman tercapai" };
            }

            // Process borrowing
            const transaction = {
                id: generateId('TXN'),
                memberId: memberId,
                bookId: bookId,
                borrowDate: new Date(),
                dueDate: new Date(Date.now() + (14 * 24 * 60 * 60 * 1000)), // 14 hari
                returnDate: null,
                status: 'borrowed'
            };

            // Update data
            book.available = false;
            member.currentBorrows.push(bookId);
            book.borrowHistory.push({
                memberId: memberId,
                borrowDate: transaction.borrowDate,
                dueDate: transaction.dueDate
            });
            transactions.push(transaction);

            console.log(`✅ "${book.title}" berhasil dipinjam oleh ${member.name}`);
            return { success: true, transaction: transaction };
        },

        // Return book dengan late fee calculation
        returnBook: function(transactionId) {
            console.log("📤 Proses pengembalian buku...");
            
            const transaction = transactions.find(t => t.id === transactionId && t.status === 'borrowed');
            
            if (!transaction) {
                console.log("❌ Transaksi tidak ditemukan");
                return { success: false, error: "Transaksi tidak ditemukan" };
            }

            const member = findMemberById(transaction.memberId);
            const book = findBookById(transaction.bookId);
            const returnDate = new Date();
            
            // Calculate late fee menggunakan arrow function
            const calculateLateFee = (dueDate, returnDate) => {
                const daysDiff = Math.ceil((returnDate - dueDate) / (1000 * 60 * 60 * 24));
                return daysDiff > 0 ? daysDiff * 2000 : 0; // Rp 2000 per hari
            };

            const lateFee = calculateLateFee(transaction.dueDate, returnDate);

            // Update data
            transaction.returnDate = returnDate;
            transaction.status = 'returned';
            transaction.lateFee = lateFee;
            
            book.available = true;
            member.currentBorrows = member.currentBorrows.filter(id => id !== book.id);

            const message = lateFee > 0 
                ? `✅ "${book.title}" dikembalikan dengan denda Rp ${lateFee.toLocaleString('id-ID')}`
                : `✅ "${book.title}" dikembalikan tepat waktu`;
            
            console.log(message);
            return { success: true, transaction: transaction, lateFee: lateFee };
        },

        // Search dengan higher-order functions
        searchBooks: function(query, filters = {}) {
            console.log(`🔍 Mencari buku: "${query}"`);
            
            let results = books;

            // Text search menggunakan function composition
            if (query) {
                const searchInFields = (book) => {
                    const searchText = query.toLowerCase();
                    return book.title.toLowerCase().includes(searchText) ||
                           book.author.toLowerCase().includes(searchText) ||
                           book.isbn.includes(searchText);
                };
                results = results.filter(searchInFields);
            }

            // Apply filters menggunakan chaining
            if (filters.available !== undefined) {
                results = results.filter(book => book.available === filters.available);
            }

            if (filters.year) {
                results = results.filter(book => book.year === parseInt(filters.year));
            }

            if (filters.author) {
                results = results.filter(book => 
                    book.author.toLowerCase().includes(filters.author.toLowerCase())
                );
            }

            console.log(`📋 Ditemukan ${results.length} buku`);
            return results;
        },

        // Reports menggunakan array methods dan functional programming
        generateReports: function() {
            console.log("📊 Generating reports...");

            // Book statistics menggunakan reduce
            const bookStats = books.reduce((stats, book) => {
                stats.total++;
                if (book.available) stats.available++;
                else stats.borrowed++;
                
                const decade = Math.floor(book.year / 10) * 10;
                stats.byDecade[decade] = (stats.byDecade[decade] || 0) + 1;
                
                return stats;
            }, { total: 0, available: 0, borrowed: 0, byDecade: {} });

            // Member statistics
            const memberStats = members.reduce((stats, member) => {
                stats.total++;
                if (member.active) stats.active++;
                stats.totalBorrows += member.currentBorrows.length;
                
                if (member.membershipType === 'premium') stats.premium++;
                else stats.regular++;
                
                return stats;
            }, { total: 0, active: 0, premium: 0, regular: 0, totalBorrows: 0 });

            // Transaction statistics dengan complex calculations
            const transactionStats = transactions.reduce((stats, txn) => {
                stats.total++;
                if (txn.status === 'returned') {
                    stats.returned++;
                    if (txn.lateFee > 0) {
                        stats.withLateFee++;
                        stats.totalLateFee += txn.lateFee;
                    }
                } else {
                    stats.active++;
                    
                    // Check overdue
                    if (new Date() > txn.dueDate) {
                        stats.overdue++;
                    }
                }
                return stats;
            }, { 
                total: 0, 
                returned: 0, 
                active: 0, 
                overdue: 0, 
                withLateFee: 0, 
                totalLateFee: 0 
            });

            const reports = {
                books: bookStats,
                members: memberStats,
                transactions: transactionStats,
                generatedAt: new Date()
            };

            console.log("📈 Reports generated successfully");
            return reports;
        },

        // Utility functions dengan closures
        createBackup: function() {
            // Closure untuk menyimpan backup state
            const backupData = {
                books: [...books],
                members: [...members],
                transactions: [...transactions],
                timestamp: new Date()
            };

            return function restoreBackup() {
                books.length = 0;
                members.length = 0;
                transactions.length = 0;
                
                books.push(...backupData.books);
                members.push(...backupData.members);
                transactions.push(...backupData.transactions);
                
                console.log(`🔄 Data restored from backup: ${formatDate(backupData.timestamp)}`);
                return true;
            };
        },

        // Getter functions
        getAllBooks: () => [...books],
        getAllMembers: () => [...members],
        getAllTransactions: () => [...transactions],
        getAvailableBooks: () => filterAvailableBooks(books),
        getBorrowedBooks: () => filterBorrowedBooks(books),
        getActiveMembers: () => filterActiveMembers(members),

        // Admin functions
        getSystemInfo: function() {
            return {
                totalBooks: books.length,
                totalMembers: members.length,
                totalTransactions: transactions.length,
                systemStartTime: new Date() // This would be better as a constant
            };
        }
    };
})();

// 2. DEMONSTRASI PENGGUNAAN SISTEM
console.log("2. DEMONSTRASI SISTEM PERPUSTAKAAN");
console.log();

// Menambah buku-buku
console.log("=== MENAMBAH BUKU ===");
const books = [
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", isbn: "9780596517748", year: "2008" },
    { title: "Clean Code", author: "Robert C. Martin", isbn: "9780132350884", year: "2008" },
    { title: "You Don't Know JS", author: "Kyle Simpson", isbn: "9781491904244", year: "2014" },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", isbn: "9781593275846", year: "2011" }
];

books.forEach(book => LibrarySystem.addBook(book));
console.log();

// Menambah anggota
console.log("=== MENAMBAH ANGGOTA ===");
const members = [
    { name: "Andi Wijaya", email: "andi@email.com", phone: "081234567890" },
    { name: "Budi Santoso", email: "budi@email.com", phone: "082345678901" },
    { name: "Cici Lestari", email: "cici@email.com", phone: "083456789012" }
];

let memberResults = [];
members.forEach((member, index) => {
    const membershipType = index === 0 ? 'premium' : 'regular';
    const result = LibrarySystem.addMember(member, membershipType);
    if (result.success) {
        memberResults.push(result.member);
    }
});
console.log();

// 3. SIMULASI TRANSAKSI PEMINJAMAN
console.log("=== SIMULASI PEMINJAMAN ===");

// Function untuk simulasi delay (menggunakan closure)
const createDelayedAction = (action, delay) => {
    return function(...args) {
        setTimeout(() => action.apply(this, args), delay);
    };
};

// Ambil data untuk simulasi
const allBooks = LibrarySystem.getAllBooks();
const allMembers = LibrarySystem.getAllMembers();

if (allBooks.length > 0 && allMembers.length > 0) {
    // Simulasi peminjaman
    let borrowResult1 = LibrarySystem.borrowBook(allMembers[0].id, allBooks[0].id);
    let borrowResult2 = LibrarySystem.borrowBook(allMembers[1].id, allBooks[1].id);
    let borrowResult3 = LibrarySystem.borrowBook(allMembers[2].id, allBooks[2].id);
    
    console.log();
    
    // Simulasi pencarian buku
    console.log("=== PENCARIAN BUKU ===");
    console.log("Mencari semua buku JavaScript:");
    let searchResults = LibrarySystem.searchBooks("JavaScript");
    searchResults.forEach(book => {
        console.log(`- ${book.title} (${book.available ? 'Tersedia' : 'Dipinjam'})`);
    });
    
    console.log("\nMencari buku yang tersedia:");
    let availableBooks = LibrarySystem.searchBooks("", { available: true });
    console.log(`Ditemukan ${availableBooks.length} buku tersedia`);
    console.log();
    
    // 4. GENERATE REPORTS
    console.log("=== LAPORAN SISTEM ===");
    const reports = LibrarySystem.generateReports();
    
    console.log("📊 STATISTIK BUKU:");
    console.log(`- Total: ${reports.books.total}`);
    console.log(`- Tersedia: ${reports.books.available}`);
    console.log(`- Dipinjam: ${reports.books.borrowed}`);
    
    console.log("\n👥 STATISTIK ANGGOTA:");
    console.log(`- Total: ${reports.members.total}`);
    console.log(`- Aktif: ${reports.members.active}`);
    console.log(`- Premium: ${reports.members.premium}`);
    console.log(`- Regular: ${reports.members.regular}`);
    
    console.log("\n📋 STATISTIK TRANSAKSI:");
    console.log(`- Total: ${reports.transactions.total}`);
    console.log(`- Aktif: ${reports.transactions.active}`);
    console.log(`- Dikembalikan: ${reports.transactions.returned}`);
    console.log(`- Terlambat: ${reports.transactions.overdue}`);
    console.log();
    
    // 5. SIMULASI PENGEMBALIAN DENGAN DELAY
    setTimeout(() => {
        console.log("=== SIMULASI PENGEMBALIAN ===");
        
        const transactions = LibrarySystem.getAllTransactions()
            .filter(t => t.status === 'borrowed');
        
        if (transactions.length > 0) {
            // Return buku pertama
            const returnResult = LibrarySystem.returnBook(transactions[0].id);
            
            if (returnResult.success) {
                console.log("Buku berhasil dikembalikan!");
                
                // Generate laporan terbaru
                const updatedReports = LibrarySystem.generateReports();
                console.log("\n📊 LAPORAN SETELAH PENGEMBALIAN:");
                console.log(`- Buku tersedia: ${updatedReports.books.available}`);
                console.log(`- Buku dipinjam: ${updatedReports.books.borrowed}`);
                console.log(`- Transaksi aktif: ${updatedReports.transactions.active}`);
            }
        }
        
        console.log();
    }, 1000);
    
    // 6. BACKUP DAN RESTORE
    setTimeout(() => {
        console.log("=== BACKUP & RESTORE ===");
        
        console.log("💾 Membuat backup...");
        const restoreFunction = LibrarySystem.createBackup();
        
        console.log("🗑️ Simulasi kerusakan data (dalam aplikasi nyata, ini tidak akan terjadi)");
        // Dalam aplikasi nyata, ini bisa terjadi karena error atau corruption
        
        setTimeout(() => {
            console.log("🔄 Memulihkan data dari backup...");
            restoreFunction();
            
            const systemInfo = LibrarySystem.getSystemInfo();
            console.log("✅ Sistem berhasil dipulihkan");
            console.log(`📈 Info sistem: ${systemInfo.totalBooks} buku, ${systemInfo.totalMembers} anggota`);
            console.log();
        }, 500);
        
    }, 2000);
    
    // 7. KESIMPULAN
    setTimeout(() => {
        console.log("=== KESIMPULAN ===");
        console.log();
        console.log("🎯 KONSEP FUNCTION YANG DIGUNAKAN:");
        console.log("✅ Function Declaration & Expression");
        console.log("✅ Arrow Functions");
        console.log("✅ Default Parameters");
        console.log("✅ Rest Parameters");
        console.log("✅ Destructuring Parameters");
        console.log("✅ Return Statements");
        console.log("✅ Function Scope & Closures");
        console.log("✅ Higher-Order Functions");
        console.log("✅ Function Factories");
        console.log("✅ Module Pattern");
        console.log("✅ Array Methods (map, filter, reduce)");
        console.log("✅ Function Composition");
        console.log("✅ Private Variables");
        console.log("✅ Memoization Pattern");
        console.log();
        
        console.log("🚀 BENEFIT YANG DIDAPAT:");
        console.log("- Code yang modular dan terorganisir");
        console.log("- Data encapsulation dengan private variables");
        console.log("- Reusable functions dan components");
        console.log("- Functional programming patterns");
        console.log("- Maintainable dan scalable code");
        console.log("- Better error handling");
        console.log("- Memory management yang baik");
        console.log();
        
        console.log("=== SELESAI: SISTEM MANAJEMEN PERPUSTAKAAN ===");
        console.log("Terima kasih telah mempelajari JavaScript Functions!");
        
    }, 3000);
}

// 8. EXTRA: PERFORMANCE MONITORING
const PerformanceMonitor = (() => {
    let metrics = {};
    
    return {
        startTimer: (label) => {
            metrics[label] = { start: performance.now() };
        },
        
        endTimer: (label) => {
            if (metrics[label]) {
                metrics[label].duration = performance.now() - metrics[label].start;
                console.log(`⏱️ ${label}: ${metrics[label].duration.toFixed(2)}ms`);
            }
        },
        
        getMetrics: () => ({ ...metrics })
    };
})();

// Contoh penggunaan performance monitor
PerformanceMonitor.startTimer('Library System Demo');
setTimeout(() => {
    PerformanceMonitor.endTimer('Library System Demo');
}, 3100);