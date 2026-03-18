// ==========================================
// OBJECT ITERATION DALAM JAVASCRIPT
// ==========================================

console.log("=== OBJECT ITERATION DALAM JAVASCRIPT ===\n");
console.log("Berbagai cara untuk melakukan iterasi (perulangan) pada object:");
console.log("1. for...in loop");
console.log("2. Object.keys()");
console.log("3. Object.values()");
console.log("4. Object.entries()");
console.log("5. Object.getOwnPropertyNames()");
console.log("6. Kombinasi dengan array methods\n");

// ==========================================
// SAMPLE OBJECTS UNTUK DEMONSTRASI
// ==========================================

// Object sederhana
let student = {
    name: "Alice Johnson",
    age: 22,
    major: "Computer Science",
    gpa: 3.85,
    active: true
};

// Object dengan nested properties
let company = {
    name: "Tech Corp",
    founded: 2010,
    employees: 150,
    headquarters: "Jakarta",
    departments: {
        engineering: 50,
        marketing: 25,
        sales: 30,
        hr: 15,
        finance: 10
    },
    revenue: 5000000,
    public: true
};

// Object dengan methods
let product = {
    id: 101,
    name: "Wireless Headphones",
    price: 299000,
    category: "Electronics",
    stock: 45,
    
    getInfo() {
        return `${this.name} - Rp${this.price.toLocaleString()}`;
    },
    
    updateStock(quantity) {
        this.stock += quantity;
        return this.stock;
    }
};

console.log("Sample objects untuk demonstrasi:");
console.log("Student:", student);
console.log("Company:", company);
console.log("Product:", product);

// ==========================================
// 1. FOR...IN LOOP
// ==========================================

console.log("\n=== 1. FOR...IN LOOP ===");
console.log("Iterasi melalui semua enumerable properties\n");

// Basic for...in dengan student object
console.log("Student properties dengan for...in:");
for (let property in student) {
    console.log(`${property}: ${student[property]}`);
}

// For...in dengan type checking
console.log("\nProduct properties dengan type info:");
for (let key in product) {
    let value = product[key];
    let type = typeof value;
    console.log(`${key}: ${value} (${type})`);
}

// For...in dengan nested object
console.log("\nCompany properties (termasuk nested):");
for (let prop in company) {
    let value = company[prop];
    if (typeof value === 'object' && value !== null) {
        console.log(`${prop}: [Object with ${Object.keys(value).length} properties]`);
        
        // Iterasi nested object
        for (let nestedProp in value) {
            console.log(`  ${prop}.${nestedProp}: ${value[nestedProp]}`);
        }
    } else {
        console.log(`${prop}: ${value}`);
    }
}

// Filtering properties dengan for...in
console.log("\nFiltering hanya numeric properties dari company:");
for (let key in company) {
    if (typeof company[key] === 'number') {
        console.log(`${key}: ${company[key]}`);
    }
}

// ==========================================
// 2. OBJECT.KEYS()
// ==========================================

console.log("\n=== 2. OBJECT.KEYS() ===");
console.log("Mendapatkan array dari semua property names\n");

// Basic Object.keys()
let studentKeys = Object.keys(student);
console.log("Student keys:", studentKeys);

// Menggunakan Object.keys() dengan forEach
console.log("\nStudent properties menggunakan Object.keys():");
Object.keys(student).forEach(key => {
    console.log(`${key}: ${student[key]}`);
});

// Object.keys() untuk counting
console.log("\nProperty counts:");
console.log(`Student has ${Object.keys(student).length} properties`);
console.log(`Company has ${Object.keys(company).length} properties`);
console.log(`Product has ${Object.keys(product).length} properties`);

// Filtering dengan Object.keys()
console.log("\nCompany properties yang mengandung 'e':");
Object.keys(company)
    .filter(key => key.includes('e'))
    .forEach(key => {
        console.log(`${key}: ${company[key]}`);
    });

// Sorting properties alphabetically
console.log("\nStudent properties (sorted alphabetically):");
Object.keys(student)
    .sort()
    .forEach(key => {
        console.log(`${key}: ${student[key]}`);
    });

// ==========================================
// 3. OBJECT.VALUES()
// ==========================================

console.log("\n=== 3. OBJECT.VALUES() ===");
console.log("Mendapatkan array dari semua property values\n");

// Basic Object.values()
let studentValues = Object.values(student);
console.log("Student values:", studentValues);

// Filtering values by type
console.log("\nCompany numeric values:");
Object.values(company)
    .filter(value => typeof value === 'number')
    .forEach((value, index) => {
        console.log(`Value ${index + 1}: ${value}`);
    });

// Statistical operations on numeric values
let companyNumbers = Object.values(company).filter(value => typeof value === 'number');
if (companyNumbers.length > 0) {
    console.log("\nCompany numeric statistics:");
    console.log(`Count: ${companyNumbers.length}`);
    console.log(`Sum: ${companyNumbers.reduce((sum, num) => sum + num, 0)}`);
    console.log(`Average: ${(companyNumbers.reduce((sum, num) => sum + num, 0) / companyNumbers.length).toFixed(2)}`);
    console.log(`Max: ${Math.max(...companyNumbers)}`);
    console.log(`Min: ${Math.min(...companyNumbers)}`);
}

// Checking for specific values
console.log("\nChecking for specific values in student:");
console.log(`Contains 'Computer Science': ${Object.values(student).includes('Computer Science')}`);
console.log(`Contains 3.85: ${Object.values(student).includes(3.85)}`);
console.log(`Contains 'Physics': ${Object.values(student).includes('Physics')}`);

// ==========================================
// 4. OBJECT.ENTRIES()
// ==========================================

console.log("\n=== 4. OBJECT.ENTRIES() ===");
console.log("Mendapatkan array dari [key, value] pairs\n");

// Basic Object.entries()
let studentEntries = Object.entries(student);
console.log("Student entries:", studentEntries);

// Iterating with Object.entries()
console.log("\nStudent data dengan destructuring:");
Object.entries(student).forEach(([key, value]) => {
    console.log(`Property "${key}" has value: ${value}`);
});

// Filtering entries
console.log("\nProduct entries (excluding methods):");
Object.entries(product)
    .filter(([key, value]) => typeof value !== 'function')
    .forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });

// Creating new object from filtered entries
console.log("\nCreating filtered objects:");

// Only string properties from student
let studentStrings = Object.fromEntries(
    Object.entries(student).filter(([key, value]) => typeof value === 'string')
);
console.log("Student string properties:", studentStrings);

// Only numeric properties from company
let companyNumbers2 = Object.fromEntries(
    Object.entries(company).filter(([key, value]) => typeof value === 'number')
);
console.log("Company numeric properties:", companyNumbers2);

// ==========================================
// 5. OBJECT.GETOWNPROPERTYNAMES()
// ==========================================

console.log("\n=== 5. OBJECT.GETOWNPROPERTYNAMES() ===");
console.log("Mendapatkan semua properties termasuk non-enumerable\n");

// Comparison between Object.keys() and Object.getOwnPropertyNames()
console.log("Comparison for student object:");
console.log("Object.keys():", Object.keys(student));
console.log("Object.getOwnPropertyNames():", Object.getOwnPropertyNames(student));

// Creating object with non-enumerable property
let specialObject = { a: 1, b: 2 };
Object.defineProperty(specialObject, 'hidden', {
    value: 'secret',
    enumerable: false
});

console.log("\nSpecial object with hidden property:");
console.log("Object.keys():", Object.keys(specialObject));
console.log("Object.getOwnPropertyNames():", Object.getOwnPropertyNames(specialObject));
console.log("Hidden property value:", specialObject.hidden);

// ==========================================
// 6. ADVANCED ITERATION TECHNIQUES
// ==========================================

console.log("\n=== 6. ADVANCED ITERATION TECHNIQUES ===");

// Creating object from arrays
let names = ['John', 'Jane', 'Bob', 'Alice'];
let ages = [25, 30, 35, 28];
let cities = ['Jakarta', 'Bali', 'Surabaya', 'Bandung'];

// Combining arrays into objects
let people = names.map((name, index) => ({
    name: name,
    age: ages[index],
    city: cities[index]
}));

console.log("\nPeople array created from separate arrays:");
people.forEach((person, index) => {
    console.log(`Person ${index + 1}: ${person.name}, ${person.age} years old, from ${person.city}`);
});

// Object transformation with map
console.log("\nTransforming objects with Object.entries() and map:");

// Convert all string values to uppercase
let studentUpperCase = Object.fromEntries(
    Object.entries(student).map(([key, value]) => [
        key, 
        typeof value === 'string' ? value.toUpperCase() : value
    ])
);
console.log("Student with uppercase strings:", studentUpperCase);

// Add prefix to all numeric values
let companyWithPrefix = Object.fromEntries(
    Object.entries(company).map(([key, value]) => [
        key,
        typeof value === 'number' ? `${value} (units)` : value
    ])
);
console.log("\nCompany with prefixed numbers:");
Object.entries(companyWithPrefix)
    .filter(([key, value]) => typeof value === 'string' && value.includes('units'))
    .forEach(([key, value]) => console.log(`${key}: ${value}`));

// ==========================================
// 7. PRAKTIK DENGAN REAL-WORLD EXAMPLES
// ==========================================

console.log("\n=== 7. PRAKTIK DENGAN REAL-WORLD EXAMPLES ===");

// Inventory management system
let inventory = {
    laptops: 15,
    mice: 50,
    keyboards: 30,
    monitors: 8,
    speakers: 12,
    webcams: 25,
    headphones: 35
};

// Find low stock items (< 20)
console.log("\nLow stock items (< 20):");
Object.entries(inventory)
    .filter(([item, quantity]) => quantity < 20)
    .forEach(([item, quantity]) => {
        console.log(`${item}: ${quantity} (LOW STOCK)`);
    });

// Calculate total inventory value (assuming prices)
let prices = {
    laptops: 8000000,
    mice: 150000,
    keyboards: 500000,
    monitors: 2500000,
    speakers: 800000,
    webcams: 1200000,
    headphones: 300000
};

let totalValue = Object.entries(inventory)
    .reduce((total, [item, quantity]) => {
        return total + (quantity * (prices[item] || 0));
    }, 0);

console.log(`\nTotal inventory value: Rp ${totalValue.toLocaleString('id-ID')}`);

// Most and least stocked items
let stockEntries = Object.entries(inventory);
let maxStock = stockEntries.reduce((max, [item, qty]) => qty > max[1] ? [item, qty] : max);
let minStock = stockEntries.reduce((min, [item, qty]) => qty < min[1] ? [item, qty] : min);

console.log(`Most stocked: ${maxStock[0]} (${maxStock[1]} units)`);
console.log(`Least stocked: ${minStock[0]} (${minStock[1]} units)`);

// User activity analysis
let userActivity = {
    login: 145,
    profileView: 89,
    search: 234,
    purchase: 67,
    logout: 142,
    addToCart: 156,
    removeFromCart: 34,
    checkout: 71
};

console.log("\nUser Activity Analysis:");

// Sort activities by frequency
let sortedActivities = Object.entries(userActivity)
    .sort(([,a], [,b]) => b - a);

console.log("Activities sorted by frequency:");
sortedActivities.forEach(([activity, count], index) => {
    console.log(`${index + 1}. ${activity}: ${count}`);
});

// Calculate percentages
let totalActivities = Object.values(userActivity).reduce((sum, count) => sum + count, 0);
console.log("\nActivity percentages:");
Object.entries(userActivity).forEach(([activity, count]) => {
    let percentage = ((count / totalActivities) * 100).toFixed(1);
    console.log(`${activity}: ${percentage}%`);
});

// ==========================================
// 8. UTILITY FUNCTIONS FOR OBJECT ITERATION
// ==========================================

console.log("\n=== 8. UTILITY FUNCTIONS FOR OBJECT ITERATION ===");

// Utility functions untuk object operations
const ObjectUtils = {
    // Filter object by predicate function
    filter(obj, predicate) {
        return Object.fromEntries(
            Object.entries(obj).filter(([key, value]) => predicate(key, value))
        );
    },
    
    // Map object values
    mapValues(obj, mapper) {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, mapper(value, key)])
        );
    },
    
    // Map object keys
    mapKeys(obj, mapper) {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [mapper(key, value), value])
        );
    },
    
    // Pick specific keys from object
    pick(obj, keys) {
        return Object.fromEntries(
            keys.filter(key => key in obj).map(key => [key, obj[key]])
        );
    },
    
    // Omit specific keys from object
    omit(obj, keys) {
        return Object.fromEntries(
            Object.entries(obj).filter(([key]) => !keys.includes(key))
        );
    },
    
    // Count properties by type
    countByType(obj) {
        const counts = {};
        Object.values(obj).forEach(value => {
            const type = typeof value;
            counts[type] = (counts[type] || 0) + 1;
        });
        return counts;
    }
};

console.log("\nDemonstrating ObjectUtils:");

// Filter numeric properties
let numericProps = ObjectUtils.filter(company, (key, value) => typeof value === 'number');
console.log("Company numeric properties:", numericProps);

// Double all numeric values
let doubledValues = ObjectUtils.mapValues(numericProps, value => value * 2);
console.log("Doubled numeric values:", doubledValues);

// Pick specific properties
let basicInfo = ObjectUtils.pick(student, ['name', 'age', 'major']);
console.log("Student basic info:", basicInfo);

// Count property types
let typeCounts = ObjectUtils.countByType(product);
console.log("Product property types:", typeCounts);

console.log("\n=== TIPS OBJECT ITERATION ===");
console.log("💡 Gunakan for...in untuk iterasi sederhana semua properties");
console.log("💡 Gunakan Object.keys() saat hanya butuh property names");
console.log("💡 Gunakan Object.values() saat hanya butuh property values");
console.log("💡 Gunakan Object.entries() untuk akses key-value pairs");
console.log("💡 Kombinasikan dengan array methods untuk operasi yang powerful");
console.log("💡 Gunakan Object.fromEntries() untuk membuat object baru dari array");
console.log("💡 Hati-hati dengan inherited properties dalam for...in");

console.log("\n=== SELESAI - OBJECT ITERATION ===");