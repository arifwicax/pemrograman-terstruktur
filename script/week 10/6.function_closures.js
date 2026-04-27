/*
=================================================
WEEK 10 - CLOSURES
=================================================
File: 6.function_closures.js
Materi: Closures dalam JavaScript

Topik yang dibahas:
1. Konsep Closure
2. Lexical Scoping
3. Closure dalam praktik
4. Private Variables dengan Closure
5. Function Factory dengan Closure
6. Module Pattern
7. Memory Management
=================================================
*/

console.log("=== CLOSURES ===\n");

// 1. KONSEP DASAR CLOSURE
console.log("1. KONSEP DASAR CLOSURE");
console.log("Closure = function + akses ke variabel dari scope luar");
console.log();

// Contoh sederhana closure
function outerFunction(x) {
    // Variabel dalam outer scope
    let outerVariable = x;
    
    function innerFunction(y) {
        // Inner function dapat akses outerVariable
        return outerVariable + y;
    }
    
    return innerFunction; // Mengembalikan function
}

let addFive = outerFunction(5);
console.log("addFive(3):", addFive(3)); // 5 + 3 = 8

let addTen = outerFunction(10);
console.log("addTen(7):", addTen(7)); // 10 + 7 = 17
console.log();

// 2. LEXICAL SCOPING
console.log("2. LEXICAL SCOPING");
console.log("Function mengingat scope dimana ia didefinisikan");
console.log();

let globalVar = "Global";

function demonstrateLexicalScoping() {
    let functionVar = "Function";
    
    function nestedFunction() {
        let nestedVar = "Nested";
        console.log("Akses dari nested function:");
        console.log("- nestedVar:", nestedVar);
        console.log("- functionVar:", functionVar);
        console.log("- globalVar:", globalVar);
    }
    
    nestedFunction();
}

demonstrateLexicalScoping();
console.log();

// 3. CLOSURE MEMPERTAHANKAN STATE
console.log("3. CLOSURE MEMPERTAHANKAN STATE");
console.log("Variabel dalam closure tetap 'hidup' meski outer function selesai");
console.log();

function createCounter() {
    let count = 0;
    
    return function() {
        count++; // count tetap ada dan terus bertambah
        return count;
    };
}

let counter1 = createCounter();
let counter2 = createCounter(); // Counter terpisah

console.log("Counter1 - call 1:", counter1()); // 1
console.log("Counter1 - call 2:", counter1()); // 2
console.log("Counter1 - call 3:", counter1()); // 3

console.log("Counter2 - call 1:", counter2()); // 1 (terpisah)
console.log("Counter2 - call 2:", counter2()); // 2
console.log();

// 4. PRIVATE VARIABLES DENGAN CLOSURE
console.log("4. PRIVATE VARIABLES DENGAN CLOSURE");
console.log("Membuat variabel yang hanya bisa diakses melalui method tertentu");
console.log();

function createBankAccount(initialBalance = 0) {
    let balance = initialBalance; // Private variable
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return `Berhasil setor: ${amount}. Saldo: ${balance}`;
            } else {
                return "Jumlah setor harus positif";
            }
        },
        
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Berhasil tarik: ${amount}. Saldo: ${balance}`;
            } else if (amount > balance) {
                return "Saldo tidak mencukupi";
            } else {
                return "Jumlah tarik harus positif";
            }
        },
        
        getBalance: function() {
            return balance;
        }
    };
}

let account = createBankAccount(1000);
console.log("Saldo awal:", account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.withdraw(2000)); // Saldo tidak cukup

// Tidak bisa akses balance secara langsung
// console.log(account.balance); // undefined
console.log();

// 5. FUNCTION FACTORY DENGAN CLOSURE
console.log("5. FUNCTION FACTORY DENGAN CLOSURE");
console.log("Membuat function dengan konfigurasi berbeda");
console.log();

function createCalculator(operation) {
    return function(a, b) {
        switch(operation) {
            case 'add':
                return a + b;
            case 'subtract':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                return b !== 0 ? a / b : 'Error: Division by zero';
            default:
                return 'Invalid operation';
        }
    };
}

let adder = createCalculator('add');
let multiplier = createCalculator('multiply');
let divider = createCalculator('divide');

console.log("Adder(5, 3):", adder(5, 3));
console.log("Multiplier(4, 7):", multiplier(4, 7));
console.log("Divider(15, 3):", divider(15, 3));
console.log();

// Function factory untuk formatter
function createFormatter(prefix, suffix) {
    return function(text) {
        return `${prefix}${text}${suffix}`;
    };
}

let htmlBold = createFormatter('<b>', '</b>');
let htmlItalic = createFormatter('<i>', '</i>');
let brackets = createFormatter('[', ']');

console.log("HTML Bold:", htmlBold("Teks tebal"));
console.log("HTML Italic:", htmlItalic("Teks miring"));
console.log("Brackets:", brackets("Dalam kurung"));
console.log();

// 6. CLOSURE DENGAN LOOP (COMMON PITFALL)
console.log("6. CLOSURE DENGAN LOOP");
console.log("Masalah umum dan solusinya");
console.log();

// Masalah: semua function mereferensi i yang sama
console.log("MASALAH - Menggunakan var:");
var functions = [];
for (var i = 0; i < 3; i++) {
    functions[i] = function() {
        return i; // Semua mereferensi i = 3
    };
}

for (let j = 0; j < functions.length; j++) {
    console.log(`Function ${j} returns:`, functions[j]());
}

// Solusi 1: Menggunakan let (block scope)
console.log("\nSOLUSI 1 - Menggunakan let:");
let functionsLet = [];
for (let i = 0; i < 3; i++) {
    functionsLet[i] = function() {
        return i; // Setiap i memiliki scope terpisah
    };
}

for (let j = 0; j < functionsLet.length; j++) {
    console.log(`Function ${j} returns:`, functionsLet[j]());
}

// Solusi 2: IIFE untuk membuat scope terpisah
console.log("\nSOLUSI 2 - IIFE:");
var functionsIIFE = [];
for (var i = 0; i < 3; i++) {
    functionsIIFE[i] = (function(index) {
        return function() {
            return index;
        };
    })(i);
}

for (let j = 0; j < functionsIIFE.length; j++) {
    console.log(`Function ${j} returns:`, functionsIIFE[j]());
}
console.log();

// 7. MODULE PATTERN DENGAN CLOSURE
console.log("7. MODULE PATTERN DENGAN CLOSURE");
console.log("Membuat module dengan private dan public methods");
console.log();

const UserManager = (function() {
    // Private variables
    let users = [];
    let currentId = 1;
    
    // Private functions
    function generateId() {
        return currentId++;
    }
    
    function findUserById(id) {
        return users.find(user => user.id === id);
    }
    
    // Public API
    return {
        addUser: function(name, email) {
            const user = {
                id: generateId(),
                name: name,
                email: email,
                createdAt: new Date()
            };
            users.push(user);
            return user;
        },
        
        getUser: function(id) {
            return findUserById(id);
        },
        
        getAllUsers: function() {
            return [...users]; // Return copy to prevent external modification
        },
        
        updateUser: function(id, updates) {
            const user = findUserById(id);
            if (user) {
                Object.assign(user, updates);
                user.updatedAt = new Date();
                return user;
            }
            return null;
        },
        
        deleteUser: function(id) {
            const index = users.findIndex(user => user.id === id);
            if (index > -1) {
                return users.splice(index, 1)[0];
            }
            return null;
        },
        
        getUserCount: function() {
            return users.length;
        }
    };
})();

// Testing UserManager
let user1 = UserManager.addUser("Andi", "andi@email.com");
let user2 = UserManager.addUser("Budi", "budi@email.com");

console.log("User 1:", user1);
console.log("All users:", UserManager.getAllUsers());
console.log("User count:", UserManager.getUserCount());

UserManager.updateUser(1, {name: "Andi Wijaya"});
console.log("Updated user:", UserManager.getUser(1));

// Tidak bisa akses private variables
// console.log(UserManager.users); // undefined
// console.log(UserManager.currentId); // undefined
console.log();

// 8. CLOSURE UNTUK CACHING (MEMOIZATION)
console.log("8. CLOSURE UNTUK CACHING (MEMOIZATION)");
console.log("Mengoptimalkan function dengan caching hasil");
console.log();

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log(`Cache hit for ${key}`);
            return cache[key];
        }
        
        console.log(`Computing for ${key}`);
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Function yang expensive untuk compute
function expensiveCalculation(n) {
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
}

const memoizedCalc = memoize(expensiveCalculation);

console.time('First call');
console.log("Result:", memoizedCalc(100));
console.timeEnd('First call');

console.time('Second call (cached)');
console.log("Result:", memoizedCalc(100));
console.timeEnd('Second call (cached)');
console.log();

// 9. CLOSURE DENGAN SETTIMEOUT
console.log("9. CLOSURE DENGAN SETTIMEOUT");
console.log("Menggunakan closure untuk asynchronous operations");
console.log();

function createDelayedLogger(message) {
    let count = 0;
    
    return function(delay) {
        count++;
        setTimeout(() => {
            console.log(`[${count}] ${message} (after ${delay}ms)`);
        }, delay);
    };
}

let logger = createDelayedLogger("Hello from closure");
logger(100);
logger(200);
logger(300);

// 10. PRACTICAL EXAMPLE: SHOPPING CART
setTimeout(() => {
    console.log("\n10. PRACTICAL EXAMPLE: SHOPPING CART");
    console.log();
    
    function createShoppingCart() {
        let items = [];
        let nextId = 1;
        
        return {
            addItem: function(product, price, quantity = 1) {
                const item = {
                    id: nextId++,
                    product: product,
                    price: price,
                    quantity: quantity
                };
                items.push(item);
                return item;
            },
            
            removeItem: function(id) {
                const index = items.findIndex(item => item.id === id);
                if (index > -1) {
                    return items.splice(index, 1)[0];
                }
                return null;
            },
            
            updateQuantity: function(id, quantity) {
                const item = items.find(item => item.id === id);
                if (item && quantity > 0) {
                    item.quantity = quantity;
                    return item;
                }
                return null;
            },
            
            getItems: function() {
                return [...items];
            },
            
            getTotalPrice: function() {
                return items.reduce((total, item) => {
                    return total + (item.price * item.quantity);
                }, 0);
            },
            
            getItemCount: function() {
                return items.reduce((count, item) => count + item.quantity, 0);
            },
            
            clear: function() {
                items = [];
                return "Cart cleared";
            },
            
            getSummary: function() {
                return {
                    totalItems: this.getItemCount(),
                    uniqueProducts: items.length,
                    totalPrice: this.getTotalPrice(),
                    items: this.getItems()
                };
            }
        };
    }
    
    let cart = createShoppingCart();
    
    cart.addItem("Laptop", 10000000, 1);
    cart.addItem("Mouse", 250000, 2);
    cart.addItem("Keyboard", 750000, 1);
    
    console.log("Cart summary:", cart.getSummary());
    console.log();
    
}, 400);

// 11. MEMORY CONSIDERATIONS
setTimeout(() => {
    console.log("11. MEMORY CONSIDERATIONS");
    console.log();
    
    console.log("CLOSURE BENEFITS:");
    console.log("✓ Data encapsulation");
    console.log("✓ Private variables");
    console.log("✓ Function factories");
    console.log("✓ Module pattern");
    console.log();
    
    console.log("MEMORY CONCERNS:");
    console.log("⚠ Variables tetap di memory selama closure exists");
    console.log("⚠ Potential memory leaks jika tidak hati-hati");
    console.log("⚠ Perlu null assignment untuk cleanup");
    console.log();
    
    // Contoh cleanup
    function createTemporaryFunction() {
        let largeData = new Array(1000000).fill("data");
        
        return {
            process: function() {
                return "Processing " + largeData.length + " items";
            },
            
            cleanup: function() {
                largeData = null; // Release memory
                return "Cleanup completed";
            }
        };
    }
    
    let temp = createTemporaryFunction();
    console.log(temp.process());
    console.log(temp.cleanup());
    console.log();
    
}, 500);

setTimeout(() => {
    console.log("=== SELESAI: CLOSURES ===");
}, 600);