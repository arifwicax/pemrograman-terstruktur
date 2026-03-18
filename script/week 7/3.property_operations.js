// ==========================================
// PROPERTY OPERATIONS DALAM JAVASCRIPT
// ==========================================

console.log("=== PROPERTY OPERATIONS DALAM JAVASCRIPT ===\n");
console.log("Operasi yang dapat dilakukan pada property object:");
console.log("1. Mengakses property (read)");
console.log("2. Mengubah property (update)");
console.log("3. Menambah property (create)");
console.log("4. Menghapus property (delete)");
console.log("5. Mengecek keberadaan property\n");

// ==========================================
// 1. MENGAKSES PROPERTY
// ==========================================

console.log("=== 1. MENGAKSES PROPERTY ===");
console.log("Ada dua cara mengakses property: dot notation dan bracket notation\n");

// Sample object
let smartphone = {
    brand: "Samsung",
    model: "Galaxy S24",
    year: 2024,
    price: 12000000,
    specifications: {
        screen: "6.2 inch",
        camera: "50MP",
        battery: "4000 mAh",
        storage: "256GB"
    },
    colors: ["Black", "White", "Purple"],
    "warranty-period": "2 years"
};

console.log("Sample smartphone object:");
console.log(smartphone);

// Dot notation
console.log("\n--- DOT NOTATION ---");
console.log("Brand:", smartphone.brand);
console.log("Model:", smartphone.model);
console.log("Price:", smartphone.price.toLocaleString('id-ID'));
console.log("Screen:", smartphone.specifications.screen);
console.log("First color:", smartphone.colors[0]);

// Bracket notation
console.log("\n--- BRACKET NOTATION ---");
console.log("Brand:", smartphone["brand"]);
console.log("Model:", smartphone["model"]);
console.log("Warranty:", smartphone["warranty-period"]); // Property dengan dash
console.log("Camera:", smartphone["specifications"]["camera"]);

// Dynamic property access
console.log("\n--- DYNAMIC PROPERTY ACCESS ---");
let propertyName = "brand";
console.log(`Mengakses ${propertyName}:`, smartphone[propertyName]);

// Array of property names
let properties = ["brand", "model", "year", "price"];
console.log("\nMengakses multiple properties:");
for (let prop of properties) {
    console.log(`${prop}: ${smartphone[prop]}`);
}

// Function untuk mengakses nested property
function getNestedProperty(obj, path) {
    let keys = path.split('.');
    let result = obj;
    
    for (let key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = result[key];
        } else {
            return undefined;
        }
    }
    
    return result;
}

console.log("\nNested property access:");
console.log("specifications.camera:", getNestedProperty(smartphone, "specifications.camera"));
console.log("specifications.processor:", getNestedProperty(smartphone, "specifications.processor")); // undefined

// ==========================================
// 2. MENGUBAH PROPERTY
// ==========================================

console.log("\n=== 2. MENGUBAH PROPERTY ===");

// Membuat copy object untuk demonstrasi
let phone = { ...smartphone }; // Shallow copy
phone.specifications = { ...smartphone.specifications }; // Deep copy untuk nested object

console.log("\nPhone sebelum diubah:");
console.log("Price:", phone.price.toLocaleString('id-ID'));
console.log("Year:", phone.year);

// Mengubah dengan dot notation
phone.price = 10000000;
phone.year = 2025;

console.log("\nSetelah mengubah dengan dot notation:");
console.log("Price:", phone.price.toLocaleString('id-ID'));
console.log("Year:", phone.year);

// Mengubah dengan bracket notation
phone["brand"] = "iPhone";
phone["model"] = "15 Pro";
phone["specifications"]["camera"] = "48MP";

console.log("\nSetelah mengubah dengan bracket notation:");
console.log("Brand:", phone.brand);
console.log("Model:", phone.model);
console.log("Camera:", phone.specifications.camera);

// Batch update menggunakan Object.assign()
let updates = {
    price: 15000000,
    year: 2024,
    condition: "new"
};

Object.assign(phone, updates);

console.log("\nSetelah batch update dengan Object.assign():");
console.log("Price:", phone.price.toLocaleString('id-ID'));
console.log("Year:", phone.year);
console.log("Condition:", phone.condition);

// ==========================================
// 3. MENAMBAH PROPERTY
// ==========================================

console.log("\n=== 3. MENAMBAH PROPERTY ===");

// Menambah property baru
phone.inStock = true;
phone.seller = "Tech Store";
phone["review-count"] = 150;
phone.ratings = {
    average: 4.5,
    total: 150
};

console.log("\nProperty baru yang ditambahkan:");
console.log("In Stock:", phone.inStock);
console.log("Seller:", phone.seller);
console.log("Review Count:", phone["review-count"]);
console.log("Average Rating:", phone.ratings.average);

// Menambah method ke object
phone.getInfo = function() {
    return `${this.brand} ${this.model} (${this.year}) - Rp ${this.price.toLocaleString('id-ID')}`;
};

phone.calculateDiscount = function(percentage) {
    let discount = this.price * (percentage / 100);
    let finalPrice = this.price - discount;
    return {
        originalPrice: this.price,
        discount: discount,
        finalPrice: finalPrice,
        percentage: percentage
    };
};

console.log("\nMethod yang ditambahkan:");
console.log(phone.getInfo());

let discountData = phone.calculateDiscount(15);
console.log("Discount 15%:", {
    original: discountData.originalPrice.toLocaleString('id-ID'),
    discount: discountData.discount.toLocaleString('id-ID'),
    final: discountData.finalPrice.toLocaleString('id-ID')
});

// ==========================================
// 4. MENGHAPUS PROPERTY
// ==========================================

console.log("\n=== 4. MENGHAPUS PROPERTY ===");

// Membuat test object
let testProduct = {
    id: 1001,
    name: "Test Product",
    price: 50000,
    category: "Electronics",
    temp: "temporary data",
    debug: true,
    internal: "for development only"
};

console.log("\nProduct sebelum dihapus property:");
console.log(testProduct);

// Menghapus property dengan delete
delete testProduct.temp;
delete testProduct.debug;
delete testProduct["internal"];

console.log("\nSetelah menghapus property temp, debug, internal:");
console.log(testProduct);

// Coba hapus property yang tidak ada
console.log("\nMenghapus property yang tidak ada:");
console.log("delete testProduct.nonexistent:", delete testProduct.nonexistent); // true

// Menghapus dengan setting undefined (tidak recommended)
testProduct.category = undefined;
console.log("\nSetelah set category = undefined:");
console.log("category in testProduct:", "category" in testProduct); // true, masih ada
console.log("testProduct.category:", testProduct.category); // undefined

// Menghapus dengan delete (recommended)
delete testProduct.category;
console.log("\nSetelah delete category:");
console.log("category in testProduct:", "category" in testProduct); // false

// ==========================================
// 5. MENGECEK KEBERADAAN PROPERTY
// ==========================================

console.log("\n=== 5. MENGECEK KEBERADAAN PROPERTY ===");

let product = {
    id: 2001,
    name: "Laptop",
    price: 8000000,
    available: true,
    stock: 0, // Zero value
    description: "" // Empty string
};

console.log("\nSample product:", product);

// Method 1: in operator
console.log("\n--- MENGGUNAKAN 'in' OPERATOR ---");
console.log("'id' in product:", "id" in product);
console.log("'name' in product:", "name" in product);
console.log("'color' in product:", "color" in product);
console.log("'stock' in product:", "stock" in product); // true meski value 0
console.log("'description' in product:", "description" in product); // true meski empty string

// Method 2: hasOwnProperty()
console.log("\n--- MENGGUNAKAN hasOwnProperty() ---");
console.log("product.hasOwnProperty('id'):", product.hasOwnProperty('id'));
console.log("product.hasOwnProperty('name'):", product.hasOwnProperty('name'));
console.log("product.hasOwnProperty('color'):", product.hasOwnProperty('color'));
console.log("product.hasOwnProperty('toString'):", product.hasOwnProperty('toString')); // false

// Method 3: !== undefined
console.log("\n--- MENGGUNAKAN !== undefined ---");
console.log("product.id !== undefined:", product.id !== undefined);
console.log("product.name !== undefined:", product.name !== undefined);
console.log("product.color !== undefined:", product.color !== undefined);
console.log("product.stock !== undefined:", product.stock !== undefined); // true
description
console.log("product.description !== undefined:", product.description !== undefined); // true

// Method 4: Object.hasOwn() (ES2022)
if (typeof Object.hasOwn === 'function') {
    console.log("\n--- MENGGUNAKAN Object.hasOwn() (ES2022) ---");
    console.log("Object.hasOwn(product, 'id'):", Object.hasOwn(product, 'id'));
    console.log("Object.hasOwn(product, 'color'):", Object.hasOwn(product, 'color'));
}

// Practical function untuk cek property
function hasProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

function hasTruthyProperty(obj, prop) {
    return hasProperty(obj, prop) && obj[prop];
}

console.log("\n--- CUSTOM CHECK FUNCTIONS ---");
console.log("hasProperty(product, 'stock'):", hasProperty(product, 'stock')); // true
console.log("hasTruthyProperty(product, 'stock'):", hasTruthyProperty(product, 'stock')); // false (karena 0)
console.log("hasTruthyProperty(product, 'available'):", hasTruthyProperty(product, 'available')); // true

// ==========================================
// 6. ADVANCED PROPERTY OPERATIONS
// ==========================================

console.log("\n=== 6. ADVANCED PROPERTY OPERATIONS ===");

// Property descriptor
let advancedProduct = {};

// Define property dengan descriptor
Object.defineProperty(advancedProduct, 'id', {
    value: 3001,
    writable: false, // Tidak bisa diubah
    enumerable: true, // Muncul di for...in
    configurable: false // Tidak bisa dihapus
});

Object.defineProperty(advancedProduct, 'name', {
    value: "Advanced Product",
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(advancedProduct, 'secret', {
    value: "Hidden value",
    writable: false,
    enumerable: false, // Tidak muncul di for...in
    configurable: false
});

console.log("\nAdvanced Product:");
console.log(advancedProduct);
console.log("\nSecret property (exist but not enumerable):", advancedProduct.secret);

// Coba ubah property yang tidak writable
advancedProduct.id = 9999;
console.log("\nSetelah coba ubah id (yang tidak writable):", advancedProduct.id);

// Coba hapus property yang tidak configurable
delete advancedProduct.id;
console.log("Setelah coba hapus id (yang tidak configurable):", advancedProduct.id);

// Property enumeration
console.log("\nEnumerable properties (for...in loop):");
for (let prop in advancedProduct) {
    console.log(`${prop}: ${advancedProduct[prop]}`);
}

// Get property descriptor
console.log("\nProperty descriptors:");
console.log("id descriptor:", Object.getOwnPropertyDescriptor(advancedProduct, 'id'));
console.log("name descriptor:", Object.getOwnPropertyDescriptor(advancedProduct, 'name'));
console.log("secret descriptor:", Object.getOwnPropertyDescriptor(advancedProduct, 'secret'));

// ==========================================
// 7. PRACTICAL EXAMPLES
// ==========================================

console.log("\n=== 7. PRACTICAL EXAMPLES ===");

// User management system
class UserManager {
    constructor() {
        this.users = {};
        this.idCounter = 1;
    }
    
    createUser(data) {
        const id = this.idCounter++;
        this.users[id] = {
            id: id,
            username: data.username,
            email: data.email,
            active: true,
            createdAt: new Date().toISOString(),
            profile: data.profile || {}
        };
        return this.users[id];
    }
    
    updateUser(id, updates) {
        if (!(id in this.users)) {
            return null;
        }
        
        // Only update allowed fields
        const allowedFields = ['username', 'email', 'active', 'profile'];
        for (let field of allowedFields) {
            if (field in updates) {
                this.users[id][field] = updates[field];
            }
        }
        
        this.users[id].updatedAt = new Date().toISOString();
        return this.users[id];
    }
    
    deleteUser(id) {
        if (id in this.users) {
            delete this.users[id];
            return true;
        }
        return false;
    }
    
    getUserProperty(id, property) {
        if (id in this.users && property in this.users[id]) {
            return this.users[id][property];
        }
        return undefined;
    }
    
    listUsers() {
        return Object.values(this.users);
    }
}

// Test user manager
let userManager = new UserManager();

console.log("\nTesting User Manager:");

// Create users
let user1 = userManager.createUser({
    username: "alice", 
    email: "alice@example.com",
    profile: { firstName: "Alice", lastName: "Johnson" }
});

let user2 = userManager.createUser({
    username: "bob",
    email: "bob@example.com"
});

console.log("User 1 created:", user1);
console.log("User 2 created:", user2);

// Update user
let updatedUser = userManager.updateUser(1, {
    email: "alice.johnson@example.com",
    profile: { firstName: "Alice", lastName: "Johnson", age: 28 }
});
console.log("\nUser 1 updated:", updatedUser);

// Get specific property
console.log("\nUser 1 email:", userManager.getUserProperty(1, "email"));
console.log("User 1 profile:", userManager.getUserProperty(1, "profile"));

// List all users
console.log("\nAll users:");
userManager.listUsers().forEach(user => {
    console.log(`- ${user.username} (${user.email})`);
});

// Delete user
let deleted = userManager.deleteUser(2);
console.log("\nUser 2 deleted:", deleted);
console.log("Remaining users:", userManager.listUsers().length);

console.log("\n=== TIPS PROPERTY OPERATIONS ===");
console.log("💡 Gunakan dot notation untuk property names yang valid");
console.log("💡 Gunakan bracket notation untuk dynamic access atau special characters");
console.log("💡 Selalu cek keberadaan property sebelum mengakses nested object");
console.log("💡 Gunakan delete operator untuk benar-benar menghapus property");
console.log("💡 Gunakan 'in' operator atau hasOwnProperty() untuk cek keberadaan");
console.log("💡 Hati-hati dengan falsy values saat cek property existence");

console.log("\n=== SELESAI - PROPERTY OPERATIONS ===");