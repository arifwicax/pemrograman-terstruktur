/*
=================================================
WEEK 10 - ARROW FUNCTIONS
=================================================
File: 5.function_arrow_functions.js
Materi: Arrow Functions dalam JavaScript (ES6)

Topik yang dibahas:
1. Sintaks Arrow Function
2. Arrow Function vs Regular Function
3. This binding dalam Arrow Function
4. Kapan menggunakan Arrow Function
5. Limitations Arrow Function
6. Array Methods dengan Arrow Function
=================================================
*/

console.log("=== ARROW FUNCTIONS ===\n");

// 1. SINTAKS ARROW FUNCTION
console.log("1. SINTAKS ARROW FUNCTION");
console.log("Cara penulisan function yang lebih ringkas (ES6)");
console.log();

// Regular function vs Arrow function
console.log("PERBANDINGAN SINTAKS:");

// Regular function
function regularAdd(a, b) {
    return a + b;
}

// Arrow function
const arrowAdd = (a, b) => {
    return a + b;
};

// Arrow function ringkas (satu expression)
const arrowAddShort = (a, b) => a + b;

console.log("Regular function:", regularAdd(5, 3));
console.log("Arrow function:", arrowAdd(5, 3));
console.log("Arrow function ringkas:", arrowAddShort(5, 3));
console.log();

// 2. VARIASI SINTAKS ARROW FUNCTION
console.log("2. VARIASI SINTAKS ARROW FUNCTION");
console.log();

// Tanpa parameter
const sayHello = () => "Hello World!";

// Satu parameter (tanda kurung opsional)
const square = x => x * x;
const squareWithParens = (x) => x * x;

// Multiple parameters
const multiply = (a, b) => a * b;

// Function body dengan block
const complexCalc = (a, b) => {
    let result = a * b;
    result += 10;
    return result;
};

// Return object literal (harus pakai parentheses)
const createPerson = (name, age) => ({
    name: name,
    age: age,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
});

console.log("Tanpa parameter:", sayHello());
console.log("Satu parameter:", square(4));
console.log("Satu parameter (dengan kurung):", squareWithParens(4));
console.log("Multiple parameters:", multiply(3, 7));
console.log("Complex calculation:", complexCalc(5, 2));
console.log("Object return:", createPerson("Andi", 25));
console.log();

// 3. ARROW FUNCTION DALAM BERBAGAI KONTEKS
console.log("3. ARROW FUNCTION DALAM BERBAGAI KONTEKS");
console.log();

// Sebagai callback function
const numbers = [1, 2, 3, 4, 5];

console.log("Array asli:", numbers);

// Array.map dengan arrow function
const doubled = numbers.map(x => x * 2);
console.log("Dikali dua:", doubled);

// Array.filter dengan arrow function  
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log("Bilangan genap:", evenNumbers);

// Array.reduce dengan arrow function
const sum = numbers.reduce((total, x) => total + x, 0);
console.log("Jumlah semua:", sum);

// Sort dengan arrow function
const fruits = ["banana", "apple", "cherry", "date"];
const sortedFruits = [...fruits].sort((a, b) => a.localeCompare(b));
console.log("Buah diurutkan:", sortedFruits);
console.log();

// 4. PERBEDAAN 'THIS' BINDING
console.log("4. PERBEDAAN 'THIS' BINDING");
console.log("Arrow function tidak memiliki 'this' sendiri");
console.log();

// Object dengan regular function dan arrow function
const person = {
    name: "Budi",
    age: 30,
    
    // Regular function - 'this' mengacu ke object
    introduce: function() {
        return `Hi, saya ${this.name}, umur ${this.age}`;
    },
    
    // Arrow function - 'this' diambil dari scope luar
    introduceArrow: () => {
        return `Hi, saya ${this.name}, umur ${this.age}`; // this = undefined/global
    },
    
    // Method menggunakan arrow function di dalam regular function
    getDetails: function() {
        // Arrow function di dalam regular function
        const getAge = () => this.age; // 'this' dari getDetails
        const getName = () => this.name; // 'this' dari getDetails
        
        return {
            name: getName(),
            age: getAge(),
            canVote: this.age >= 17
        };
    }
};

console.log("Regular method:", person.introduce());
console.log("Arrow method:", person.introduceArrow()); // Undefined karena 'this' bukan object
console.log("Arrow dalam regular:", person.getDetails());
console.log();

// 5. ARROW FUNCTION DENGAN SETTIMEOUT
console.log("5. ARROW FUNCTION DENGAN ASYNC OPERATIONS");
console.log();

const timer = {
    count: 0,
    
    // Dengan regular function (masalah 'this')
    startRegular: function() {
        console.log("Starting regular timer...");
        setTimeout(function() {
            this.count++; // 'this' bukan mengacu ke object timer
            console.log("Regular count:", this.count); // undefined
        }, 100);
    },
    
    // Dengan arrow function (solution)
    startArrow: function() {
        console.log("Starting arrow timer...");
        setTimeout(() => {
            this.count++; // 'this' mengacu ke object timer
            console.log("Arrow count:", this.count);
        }, 200);
    },
    
    // Alternative dengan bind
    startBind: function() {
        console.log("Starting bind timer...");
        setTimeout(function() {
            this.count++;
            console.log("Bind count:", this.count);
        }.bind(this), 300);
    }
};

timer.startRegular();
timer.startArrow();
timer.startBind();

// Tunggu sebentar untuk melihat hasil
setTimeout(() => {
    console.log("Final timer count:", timer.count);
    console.log();
}, 500);

// 6. HIGHER ORDER FUNCTIONS DENGAN ARROW FUNCTION
setTimeout(() => {
    console.log("6. HIGHER ORDER FUNCTIONS");
    console.log();
    
    // Function yang mengembalikan arrow function
    const createMultiplier = (factor) => (number) => number * factor;
    
    const double = createMultiplier(2);
    const triple = createMultiplier(3);
    
    console.log("Double 5:", double(5));
    console.log("Triple 4:", triple(4));
    
    // Chaining arrow functions
    const processNumber = (num) => (operation) => operation(num);
    
    const result = processNumber(10)(x => x * 2);
    console.log("Process number result:", result);
    
    // Array of functions
    const operations = [
        x => x + 1,
        x => x * 2,
        x => x - 3,
        x => x / 2
    ];
    
    let value = 5;
    operations.forEach(op => {
        value = op(value);
        console.log("After operation:", value);
    });
    console.log();
    
}, 600);

// 7. ARROW FUNCTION UNTUK FUNCTIONAL PROGRAMMING
setTimeout(() => {
    console.log("7. FUNCTIONAL PROGRAMMING STYLE");
    console.log();
    
    const data = [
        {name: "Andi", age: 25, salary: 5000000},
        {name: "Budi", age: 30, salary: 7000000},
        {name: "Cici", age: 28, salary: 6000000},
        {name: "Doni", age: 35, salary: 8000000}
    ];
    
    console.log("Data karyawan:", data);
    
    // Functional programming dengan arrow functions
    const highEarners = data
        .filter(person => person.salary > 6000000)
        .map(person => ({
            ...person,
            category: person.age > 30 ? 'Senior' : 'Junior'
        }))
        .sort((a, b) => b.salary - a.salary);
    
    console.log("High earners (>6jt):", highEarners);
    
    // Menghitung statistik
    const stats = data.reduce((acc, person) => ({
        total: acc.total + 1,
        totalSalary: acc.totalSalary + person.salary,
        avgAge: acc.avgAge + person.age
    }), {total: 0, totalSalary: 0, avgAge: 0});
    
    stats.avgSalary = stats.totalSalary / stats.total;
    stats.avgAge = stats.avgAge / stats.total;
    
    console.log("Statistik:", stats);
    console.log();
    
}, 700);

// 8. KAPAN MENGGUNAKAN ARROW FUNCTION
setTimeout(() => {
    console.log("8. KAPAN MENGGUNAKAN ARROW FUNCTION?");
    console.log();
    
    console.log("✅ GUNAKAN ARROW FUNCTION UNTUK:");
    console.log("- Callback functions yang pendek");
    console.log("- Array methods (map, filter, reduce, dll)");
    console.log("- Event handlers sederhana");
    console.log("- Function expressions pendek");
    console.log("- Ketika ingin mempertahankan 'this' dari scope luar");
    console.log();
    
    console.log("❌ HINDARI ARROW FUNCTION UNTUK:");
    console.log("- Object methods (gunakan regular function)");
    console.log("- Constructor functions");
    console.log("- Functions yang memerlukan 'arguments' object");
    console.log("- Ketika perlu function name untuk debugging");
    console.log();
    
}, 800);

// 9. LIMITATIONS ARROW FUNCTION
setTimeout(() => {
    console.log("9. LIMITATIONS ARROW FUNCTION");
    console.log();
    
    // 1. Tidak memiliki 'arguments' object
    const regularFunc = function() {
        console.log("Regular function arguments:", arguments);
    };
    
    const arrowFunc = (...args) => {
        console.log("Arrow function args (rest parameter):", args);
    };
    
    regularFunc(1, 2, 3);
    arrowFunc(1, 2, 3);
    
    // 2. Tidak bisa digunakan sebagai constructor
    const RegularConstructor = function(name) {
        this.name = name;
    };
    
    const ArrowConstructor = (name) => {
        this.name = name; // Ini akan error jika dipanggil dengan 'new'
    };
    
    try {
        const obj1 = new RegularConstructor("Test"); // OK
        console.log("Regular constructor:", obj1);
    } catch (e) {
        console.log("Error:", e.message);
    }
    
    try {
        const obj2 = new ArrowConstructor("Test"); // Error
    } catch (e) {
        console.log("Arrow constructor error:", e.message);
    }
    
    // 3. Tidak memiliki prototype
    console.log("Regular function prototype:", RegularConstructor.prototype);
    console.log("Arrow function prototype:", ArrowConstructor.prototype); // undefined
    console.log();
    
}, 900);

// 10. CONTOH PRAKTIS: TODO LIST
setTimeout(() => {
    console.log("10. CONTOH PRAKTIS: TODO LIST dengan Arrow Functions");
    console.log();
    
    const TodoList = {
        items: [],
        
        // Method menggunakan regular function untuk akses 'this'
        add: function(task) {
            const newItem = {
                id: Date.now(),
                task: task,
                completed: false,
                createdAt: new Date()
            };
            this.items.push(newItem);
            return newItem;
        },
        
        // Arrow function untuk utility methods
        getAll: function() {
            return [...this.items];
        },
        
        getCompleted: function() {
            return this.items.filter(item => item.completed);
        },
        
        getPending: function() {
            return this.items.filter(item => !item.completed);
        },
        
        complete: function(id) {
            const item = this.items.find(item => item.id === id);
            if (item) {
                item.completed = true;
                item.completedAt = new Date();
            }
            return item;
        },
        
        remove: function(id) {
            const index = this.items.findIndex(item => item.id === id);
            if (index > -1) {
                return this.items.splice(index, 1)[0];
            }
        },
        
        getSummary: function() {
            const completed = this.items.filter(item => item.completed).length;
            const pending = this.items.length - completed;
            
            return {
                total: this.items.length,
                completed,
                pending,
                completionRate: this.items.length > 0 ? (completed / this.items.length * 100).toFixed(1) + '%' : '0%'
            };
        }
    };
    
    // Testing TodoList
    TodoList.add("Belajar JavaScript");
    TodoList.add("Mengerjakan tugas");
    TodoList.add("Olahraga");
    
    console.log("All todos:", TodoList.getAll());
    
    // Complete satu task
    const firstItem = TodoList.getAll()[0];
    TodoList.complete(firstItem.id);
    
    console.log("Completed todos:", TodoList.getCompleted());
    console.log("Pending todos:", TodoList.getPending());
    console.log("Summary:", TodoList.getSummary());
    console.log();
    
}, 1000);

// 11. PERFORMANCE DAN MEMORY
setTimeout(() => {
    console.log("11. PERFORMANCE DAN MEMORY");
    console.log();
    
    console.log("Arrow functions lebih efisien dalam:");
    console.log("✓ Penggunaan memory (tidak perlu bind)");
    console.log("✓ Parsing speed (sintaks lebih sederhana)");
    console.log("✓ Readability untuk function pendek");
    console.log();
    
    console.log("Regular functions lebih baik untuk:");
    console.log("✓ Object methods");
    console.log("✓ Event handlers yang complex");
    console.log("✓ Functions yang perlu nama untuk debugging");
    console.log();
    
}, 1100);

setTimeout(() => {
    console.log("=== SELESAI: ARROW FUNCTIONS ===");
}, 1200);