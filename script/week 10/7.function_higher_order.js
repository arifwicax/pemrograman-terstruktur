/*
=================================================
WEEK 10 - HIGHER-ORDER FUNCTIONS
=================================================
File: 7.function_higher_order.js
Materi: Higher-Order Functions dalam JavaScript

Topik yang dibahas:
1. Konsep Higher-Order Function
2. Functions sebagai Arguments
3. Functions yang Return Functions
4. Array Methods (map, filter, reduce, dll)
5. Function Composition
6. Currying dan Partial Application
7. Functional Programming Patterns
=================================================
*/

console.log("=== HIGHER-ORDER FUNCTIONS ===\n");

// 1. KONSEP HIGHER-ORDER FUNCTION
console.log("1. KONSEP HIGHER-ORDER FUNCTION");
console.log("Function yang menerima function lain sebagai parameter atau mengembalikan function");
console.log();

// Function yang menerima function sebagai parameter
function processArray(array, processor) {
    let result = [];
    for (let item of array) {
        result.push(processor(item));
    }
    return result;
}

// Function sederhana untuk processing
function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);
console.log("Doubled:", processArray(numbers, double));
console.log("Squared:", processArray(numbers, square));
console.log("Custom (x + 10):", processArray(numbers, x => x + 10));
console.log();

// 2. FUNCTION YANG MENGEMBALIKAN FUNCTION
console.log("2. FUNCTION YANG MENGEMBALIKAN FUNCTION");
console.log();

// Function factory untuk membuat operasi matematika
function createOperation(operator) {
    switch(operator) {
        case 'add':
            return (a, b) => a + b;
        case 'multiply':
            return (a, b) => a * b;
        case 'subtract':
            return (a, b) => a - b;
        case 'divide':
            return (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';
        default:
            return () => 'Invalid operation';
    }
}

let add = createOperation('add');
let multiply = createOperation('multiply');
let subtract = createOperation('subtract');

console.log("add(5, 3):", add(5, 3));
console.log("multiply(4, 7):", multiply(4, 7));
console.log("subtract(10, 4):", subtract(10, 4));
console.log();

// Function untuk membuat validator
function createValidator(rule) {
    switch(rule) {
        case 'email':
            return (email) => email.includes('@') && email.includes('.');
        case 'password':
            return (password) => password.length >= 8;
        case 'phone':
            return (phone) => /^\d{10,12}$/.test(phone);
        default:
            return () => true;
    }
}

let validateEmail = createValidator('email');
let validatePassword = createValidator('password');
let validatePhone = createValidator('phone');

console.log("Email validation:");
console.log("valid@email.com:", validateEmail('valid@email.com'));
console.log("invalid-email:", validateEmail('invalid-email'));

console.log("Password validation:");
console.log("password123:", validatePassword('password123'));
console.log("123:", validatePassword('123'));
console.log();

// 3. ARRAY METHODS SEBAGAI HIGHER-ORDER FUNCTIONS
console.log("3. ARRAY METHODS (HIGHER-ORDER FUNCTIONS)");
console.log();

let students = [
    {name: "Andi", age: 20, grade: 85},
    {name: "Budi", age: 22, grade: 90},
    {name: "Cici", age: 19, grade: 78},
    {name: "Doni", age: 21, grade: 92},
    {name: "Eka", age: 20, grade: 88}
];

console.log("Original students:", students);
console.log();

// MAP - Transform setiap element
console.log("MAP - Transform data:");
let studentNames = students.map(student => student.name);
console.log("Names only:", studentNames);

let studentInfo = students.map(student => ({
    name: student.name,
    status: student.grade >= 80 ? 'Pass' : 'Fail',
    category: student.age >= 21 ? 'Senior' : 'Junior'
}));
console.log("Student info:", studentInfo);
console.log();

// FILTER - Saring element berdasarkan kondisi
console.log("FILTER - Saring data:");
let passedStudents = students.filter(student => student.grade >= 80);
console.log("Passed students:", passedStudents);

let youngStudents = students.filter(student => student.age < 21);
console.log("Young students:", youngStudents);
console.log();

// REDUCE - Gabungkan element menjadi satu nilai
console.log("REDUCE - Gabungkan data:");
let totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
let averageGrade = totalGrades / students.length;
console.log("Total grades:", totalGrades);
console.log("Average grade:", averageGrade.toFixed(2));

let gradeStats = students.reduce((stats, student) => {
    stats.total++;
    stats.totalGrades += student.grade;
    stats.totalAge += student.age;
    if (student.grade >= 80) stats.passed++;
    return stats;
}, {total: 0, totalGrades: 0, totalAge: 0, passed: 0});

gradeStats.averageGrade = (gradeStats.totalGrades / gradeStats.total).toFixed(2);
gradeStats.averageAge = (gradeStats.totalAge / gradeStats.total).toFixed(1);
gradeStats.passRate = (gradeStats.passed / gradeStats.total * 100).toFixed(1) + '%';

console.log("Grade statistics:", gradeStats);
console.log();

// CHAINING ARRAY METHODS
console.log("CHAINING - Kombinasi methods:");
let topPerformers = students
    .filter(student => student.grade >= 85)  // Nilai tinggi
    .map(student => ({                       // Transform
        name: student.name,
        grade: student.grade,
        excellence: student.grade >= 90 ? 'Excellent' : 'Good'
    }))
    .sort((a, b) => b.grade - a.grade);      // Urutkan

console.log("Top performers:", topPerformers);
console.log();

// 4. CUSTOM HIGHER-ORDER FUNCTIONS
console.log("4. CUSTOM HIGHER-ORDER FUNCTIONS");
console.log();

// Function untuk retry operation
function withRetry(fn, maxAttempts = 3) {
    return function(...args) {
        let attempts = 0;
        
        while (attempts < maxAttempts) {
            try {
                return fn.apply(this, args);
            } catch (error) {
                attempts++;
                console.log(`Attempt ${attempts} failed:`, error.message);
                
                if (attempts >= maxAttempts) {
                    throw new Error(`Failed after ${maxAttempts} attempts`);
                }
            }
        }
    };
}

// Function yang bisa gagal
function unreliableFunction(x) {
    if (Math.random() < 0.7) { // 70% chance to fail
        throw new Error("Random failure");
    }
    return x * 2;
}

let reliableFunction = withRetry(unreliableFunction, 5);

try {
    console.log("Result with retry:", reliableFunction(5));
} catch (error) {
    console.log("Final error:", error.message);
}
console.log();

// Function untuk timing
function withTiming(fn, label = 'Operation') {
    return function(...args) {
        console.time(label);
        let result = fn.apply(this, args);
        console.timeEnd(label);
        return result;
    };
}

function slowCalculation(n) {
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
}

let timedCalculation = withTiming(slowCalculation, 'Slow Calculation');
console.log("Timed result:", timedCalculation(100));
console.log();

// 5. FUNCTION COMPOSITION
console.log("5. FUNCTION COMPOSITION");
console.log("Menggabungkan functions untuk membuat function baru");
console.log();

// Helper functions
const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const square = x => x * x;

// Manual composition
function manualCompose(x) {
    return square(multiplyByTwo(addOne(x)));
}

// Generic compose function
function compose(...functions) {
    return function(value) {
        return functions.reduceRight((acc, fn) => fn(acc), value);
    };
}

// Pipe function (left to right)
function pipe(...functions) {
    return function(value) {
        return functions.reduce((acc, fn) => fn(acc), value);
    };
}

let composedFunction = compose(square, multiplyByTwo, addOne);
let pipedFunction = pipe(addOne, multiplyByTwo, square);

console.log("Input: 3");
console.log("Manual compose:", manualCompose(3)); // (3+1)*2 = 8, 8² = 64
console.log("Compose function:", composedFunction(3)); // Same as above
console.log("Pipe function:", pipedFunction(3)); // Same as above
console.log();

// Practical composition example
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const removeSpaces = str => str.replace(/\s+/g, '');

const processUsername = pipe(
    trim,
    toLowerCase,
    removeSpaces
);

console.log("Process username:");
console.log("'  John Doe  ' ->", processUsername('  John Doe  '));
console.log();

// 6. CURRYING
console.log("6. CURRYING");
console.log("Mengubah function dengan multiple parameters menjadi chain of functions");
console.log();

// Regular function
function regularAdd(a, b, c) {
    return a + b + c;
}

// Curried version
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Curried dengan arrow functions
const curriedAddArrow = a => b => c => a + b + c;

console.log("Regular add(1, 2, 3):", regularAdd(1, 2, 3));
console.log("Curried add(1)(2)(3):", curriedAdd(1)(2)(3));
console.log("Curried arrow add(1)(2)(3):", curriedAddArrow(1)(2)(3));

// Partial application dengan curried function
let addFive = curriedAddArrow(5);
let addFiveAndThree = addFive(3);

console.log("Partial application:");
console.log("addFive(3)(2):", addFive(3)(2));
console.log("addFiveAndThree(2):", addFiveAndThree(2));
console.log();

// Generic curry function
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

const curriedMultiply = curry((a, b, c, d) => a * b * c * d);

console.log("Auto-curried multiply:");
console.log("curriedMultiply(2)(3)(4)(5):", curriedMultiply(2)(3)(4)(5));
console.log("curriedMultiply(2, 3)(4)(5):", curriedMultiply(2, 3)(4)(5));
console.log("curriedMultiply(2, 3, 4, 5):", curriedMultiply(2, 3, 4, 5));
console.log();

// 7. PRACTICAL EXAMPLE: DATA PROCESSING PIPELINE
console.log("7. PRACTICAL EXAMPLE: DATA PROCESSING PIPELINE");
console.log();

// Sample data
let sales = [
    {id: 1, product: "Laptop", price: 15000000, quantity: 2, date: "2024-01-15"},
    {id: 2, product: "Mouse", price: 250000, quantity: 5, date: "2024-01-16"},
    {id: 3, product: "Keyboard", price: 750000, quantity: 3, date: "2024-01-17"},
    {id: 4, product: "Monitor", price: 3000000, quantity: 1, date: "2024-01-18"},
    {id: 5, product: "Laptop", price: 15000000, quantity: 1, date: "2024-01-19"}
];

console.log("Raw sales data:", sales);
console.log();

// Higher-order functions for data processing
const calculateTotal = sale => ({
    ...sale,
    total: sale.price * sale.quantity
});

const filterByMinAmount = (minAmount) => (sale) => sale.total >= minAmount;

const groupByProduct = (sales) => {
    return sales.reduce((groups, sale) => {
        if (!groups[sale.product]) {
            groups[sale.product] = [];
        }
        groups[sale.product].push(sale);
        return groups;
    }, {});
};

const calculateSummary = (sales) => {
    return sales.reduce((summary, sale) => {
        summary.totalRevenue += sale.total;
        summary.totalQuantity += sale.quantity;
        summary.transactionCount++;
        return summary;
    }, {totalRevenue: 0, totalQuantity: 0, transactionCount: 0});
};

// Processing pipeline
const processedSales = sales
    .map(calculateTotal)
    .filter(filterByMinAmount(1000000))
    .sort((a, b) => b.total - a.total);

console.log("Processed sales (>1M, sorted):", processedSales);

const groupedSales = groupByProduct(processedSales);
console.log("Grouped by product:", groupedSales);

const summary = calculateSummary(processedSales);
console.log("Summary:", summary);
console.log();

// 8. FUNCTION FACTORIES DENGAN CONFIGURATION
console.log("8. FUNCTION FACTORIES DENGAN CONFIGURATION");
console.log();

function createAPIClient(baseURL, defaultHeaders = {}) {
    return {
        get: function(endpoint, headers = {}) {
            const url = baseURL + endpoint;
            const finalHeaders = {...defaultHeaders, ...headers};
            
            console.log(`GET ${url}`);
            console.log(`Headers:`, finalHeaders);
            return `Mock response from ${url}`;
        },
        
        post: function(endpoint, data, headers = {}) {
            const url = baseURL + endpoint;
            const finalHeaders = {...defaultHeaders, ...headers};
            
            console.log(`POST ${url}`);
            console.log(`Headers:`, finalHeaders);
            console.log(`Data:`, data);
            return `Mock POST response from ${url}`;
        }
    };
}

let apiClient = createAPIClient('https://api.example.com', {
    'Authorization': 'Bearer token123',
    'Content-Type': 'application/json'
});

console.log(apiClient.get('/users'));
console.log(apiClient.post('/users', {name: 'John'}));
console.log();

// 9. EVENT HANDLING DENGAN HIGHER-ORDER FUNCTIONS
console.log("9. EVENT HANDLING PATTERNS");
console.log();

// Event handler factory
function createEventHandler(eventType, selector) {
    return function(callback) {
        console.log(`Registering ${eventType} handler for ${selector}`);
        // Simulate event registration
        return {
            eventType,
            selector,
            callback,
            remove: () => console.log(`Removed ${eventType} handler for ${selector}`)
        };
    };
}

const onClick = createEventHandler('click', 'button');
const onSubmit = createEventHandler('submit', 'form');

let buttonHandler = onClick(function(event) {
    console.log('Button clicked!', event);
});

let formHandler = onSubmit(function(event) {
    console.log('Form submitted!', event);
});

console.log("Button handler:", buttonHandler);
console.log();

// 10. MEMOIZATION DENGAN HIGHER-ORDER FUNCTION
console.log("10. MEMOIZATION DENGAN HIGHER-ORDER FUNCTION");
console.log();

function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log(`Cache hit for ${key}`);
            return cache.get(key);
        }
        
        console.log(`Computing ${key}`);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Fibonacci with memoization
const fibonacci = memoize(function(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log("Fibonacci calculations:");
console.log("fibonacci(10):", fibonacci(10));
console.log("fibonacci(10) again:", fibonacci(10)); // Should be cached
console.log();

// 11. BEST PRACTICES
console.log("11. BEST PRACTICES UNTUK HIGHER-ORDER FUNCTIONS");
console.log();

console.log("✅ DO:");
console.log("- Gunakan untuk abstraksi yang masuk akal");
console.log("- Buat nama function yang deskriptif");
console.log("- Manfaatkan array methods bawaan JavaScript");
console.log("- Gunakan untuk code reusability");
console.log("- Implementasi error handling yang proper");
console.log();

console.log("❌ DON'T:");
console.log("- Over-engineering dengan terlalu banyak abstraksi");
console.log("- Membuat code sulit dibaca demi 'functional style'");
console.log("- Lupa performance implications");
console.log("- Ignore debugging complexity");
console.log();

console.log("=== SELESAI: HIGHER-ORDER FUNCTIONS ===");