// ==========================================
// OBJECT METHODS & FUNCTIONS DALAM JAVASCRIPT
// ==========================================

console.log("=== OBJECT METHODS & FUNCTIONS DALAM JAVASCRIPT ===\n");
console.log("Object methods adalah function yang menjadi property dari object.");
console.log("Topik yang akan dibahas:");
console.log("1. Membuat dan menggunakan methods");
console.log("2. Keyword 'this' dalam methods");
console.log("3. Getter dan Setter");
console.log("4. Function sebagai property");
console.log("5. Arrow functions dalam object\n");

// ==========================================
// 1. BASIC OBJECT METHODS
// ==========================================

console.log("=== 1. BASIC OBJECT METHODS ===");
console.log("Method adalah function yang didefinisikan sebagai property object\n");

// Object dengan berbagai methods
let calculator = {
    result: 0,
    history: [],
    
    // Method dengan function keyword
    add: function(a, b) {
        this.result = a + b;
        this.history.push(`${a} + ${b} = ${this.result}`);
        return this.result;
    },
    
    // Method dengan shorthand syntax (ES6)
    subtract(a, b) {
        this.result = a - b;
        this.history.push(`${a} - ${b} = ${this.result}`);
        return this.result;
    },
    
    multiply(a, b) {
        this.result = a * b;
        this.history.push(`${a} × ${b} = ${this.result}`);
        return this.result;
    },
    
    divide(a, b) {
        if (b === 0) {
            console.log("Error: Cannot divide by zero!");
            return null;
        }
        this.result = a / b;
        this.history.push(`${a} ÷ ${b} = ${this.result}`);
        return this.result;
    },
    
    getHistory() {
        return this.history.join('\n');
    },
    
    clear() {
        this.result = 0;
        this.history = [];
        console.log("Calculator cleared");
    },
    
    getLastResult() {
        return this.result;
    }
};

console.log("Calculator demonstration:");
console.log("10 + 5 =", calculator.add(10, 5));
console.log("20 - 8 =", calculator.subtract(20, 8));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("100 / 4 =", calculator.divide(100, 4));
calculator.divide(10, 0); // Error case

console.log("\nCalculation history:");
console.log(calculator.getHistory());
console.log("\nLast result:", calculator.getLastResult());

// ==========================================
// 2. KEYWORD 'THIS' DALAM METHODS
// ==========================================

console.log("\n=== 2. KEYWORD 'THIS' DALAM METHODS ===");
console.log("'this' mengacu pada object yang memiliki method tersebut\n");

// Object person dengan methods yang menggunakan this
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "Jakarta",
    hobbies: ["reading", "gaming", "cooking"],
    
    // Method untuk menampilkan informasi lengkap
    getFullInfo() {
        return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, City: ${this.city}`;
    },
    
    // Method untuk mengubah nama
    changeName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        return `Name changed to ${this.firstName} ${this.lastName}`;
    },
    
    // Method untuk menambah hobi
    addHobby(hobby) {
        if (!this.hobbies.includes(hobby)) {
            this.hobbies.push(hobby);
            return `Hobby '${hobby}' added`;
        } else {
            return `Hobby '${hobby}' already exists`;
        }
    },
    
    // Method untuk menghitung umur dalam hari
    getAgeInDays() {
        return this.age * 365;
    },
    
    // Method untuk greeting
    greet(name) {
        if (name) {
            return `Hello ${name}, I'm ${this.firstName} from ${this.city}`;
        } else {
            return `Hello, I'm ${this.firstName} ${this.lastName} from ${this.city}`;
        }
    },
    
    // Method untuk birthday
    haveBirthday() {
        this.age++;
        return `Happy birthday! ${this.firstName} is now ${this.age} years old`;
    }
};

console.log("Person object demonstration:");
console.log(person.getFullInfo());
console.log(person.greet("Alice"));
console.log(person.addHobby("traveling"));
console.log(person.addHobby("reading")); // Already exists
console.log("Age in days:", person.getAgeInDays());
console.log(person.haveBirthday());
console.log(person.changeName("Jane", "Smith"));
console.log(person.getFullInfo());

// Demonstrasi masalah dengan this dalam arrow function
let objectWithArrow = {
    name: "Test Object",
    regularMethod() {
        return `Regular method: ${this.name}`;
    },
    arrowMethod: () => {
        return `Arrow method: ${this.name}`; // this tidak mengacu ke object
    }
};

console.log("\nDemonstration of 'this' behavior:");
console.log(objectWithArrow.regularMethod()); // Works correctly
console.log(objectWithArrow.arrowMethod()); // 'this' is undefined or window

// ==========================================
// 3. GETTER DAN SETTER
// ==========================================

console.log("\n=== 3. GETTER DAN SETTER ===");
console.log("Getter dan Setter memungkinkan kita mengakses property seperti variabel\n");

// Object dengan getter dan setter
let rectangle = {
    _width: 0,
    _height: 0,
    
    // Getter untuk width
    get width() {
        return this._width;
    },
    
    // Setter untuk width
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log("Width must be positive!");
        }
    },
    
    // Getter untuk height
    get height() {
        return this._height;
    },
    
    // Setter untuk height
    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("Height must be positive!");
        }
    },
    
    // Getter untuk calculated properties
    get area() {
        return this._width * this._height;
    },
    
    get perimeter() {
        return 2 * (this._width + this._height);
    },
    
    get aspectRatio() {
        if (this._height === 0) return 0;
        return this._width / this._height;
    },
    
    // Method untuk display info
    getInfo() {
        return `Rectangle: ${this.width} x ${this.height} (Area: ${this.area}, Perimeter: ${this.perimeter})`;
    }
};

console.log("Rectangle demonstration:");
rectangle.width = 10;
rectangle.height = 5;
console.log(rectangle.getInfo());
console.log("Aspect ratio:", rectangle.aspectRatio.toFixed(2));

// Mencoba set nilai negatif
rectangle.width = -3; // Error message
rectangle.height = 0;  // Error message

console.log("After invalid values:", rectangle.getInfo());

// Advanced getter/setter example - User account
let userAccount = {
    _balance: 0,
    _transactions: [],
    _accountNumber: null,
    
    // Getter untuk balance (formatted)
    get balance() {
        return this._balance;
    },
    
    get formattedBalance() {
        return `Rp ${this._balance.toLocaleString('id-ID')}`;
    },
    
    // Setter untuk initial balance
    set initialBalance(amount) {
        if (this._balance === 0 && amount >= 0) {
            this._balance = amount;
            this._transactions.push({
                type: 'initial',
                amount: amount,
                timestamp: new Date().toISOString()
            });
        } else {
            console.log("Initial balance can only be set once and must be positive");
        }
    },
    
    // Getter untuk account number
    get accountNumber() {
        if (!this._accountNumber) {
            this._accountNumber = 'ACC' + Math.random().toString(36).substr(2, 9).toUpperCase();
        }
        return this._accountNumber;
    },
    
    // Getter untuk transaction count
    get transactionCount() {
        return this._transactions.length;
    },
    
    // Methods untuk banking operations
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            this._transactions.push({
                type: 'deposit',
                amount: amount,
                balance: this._balance,
                timestamp: new Date().toISOString()
            });
            return `Deposited ${amount.toLocaleString('id-ID')}. New balance: ${this.formattedBalance}`;
        } else {
            return "Deposit amount must be positive";
        }
    },
    
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            this._transactions.push({
                type: 'withdrawal',
                amount: amount,
                balance: this._balance,
                timestamp: new Date().toISOString()
            });
            return `Withdrew ${amount.toLocaleString('id-ID')}. New balance: ${this.formattedBalance}`;
        } else if (amount > this._balance) {
            return "Insufficient funds";
        } else {
            return "Withdrawal amount must be positive";
        }
    },
    
    getTransactionHistory() {
        return this._transactions;
    }
};

console.log("\nUser Account demonstration:");
console.log("Account Number:", userAccount.accountNumber);
userAccount.initialBalance = 1000000;
console.log("Initial balance set:", userAccount.formattedBalance);
console.log(userAccount.deposit(500000));
console.log(userAccount.withdraw(200000));
console.log(userAccount.withdraw(2000000)); // Insufficient funds
console.log("Final balance:", userAccount.formattedBalance);
console.log("Total transactions:", userAccount.transactionCount);

// ==========================================
// 4. FUNCTION SEBAGAI PROPERTY
// ==========================================

console.log("\n=== 4. FUNCTION SEBAGAI PROPERTY ===");

// Function yang bisa diassign ke property
function greetFunction(name) {
    return `Hello ${name}!`;
}

function farewellFunction(name) {
    return `Goodbye ${name}!`;
}

// Object yang menerima function sebagai property
let messenger = {
    defaultGreeting: "Hi there!",
    greetingFunction: greetFunction,
    farewellFunction: farewellFunction,
    
    // Method yang menggunakan function property
    sendMessage(name, type = 'greeting') {
        if (type === 'greeting' && this.greetingFunction) {
            return this.greetingFunction(name);
        } else if (type === 'farewell' && this.farewellFunction) {
            return this.farewellFunction(name);
        } else {
            return this.defaultGreeting;
        }
    },
    
    // Method untuk mengubah function
    setGreetingFunction(fn) {
        if (typeof fn === 'function') {
            this.greetingFunction = fn;
            return "Greeting function updated";
        } else {
            return "Invalid function provided";
        }
    },
    
    // Higher-order method
    processNames(names, processorFunction) {
        return names.map(name => processorFunction(name));
    }
};

console.log("\nMessenger demonstration:");
console.log(messenger.sendMessage("Alice", "greeting"));
console.log(messenger.sendMessage("Bob", "farewell"));

// Mengubah function property
let customGreet = function(name) {
    return `Welcome aboard, ${name}! 🚀`;
};

console.log(messenger.setGreetingFunction(customGreet));
console.log(messenger.sendMessage("Charlie", "greeting"));

// Higher-order function usage
let names = ["David", "Eve", "Frank"];
let upperCaseProcessor = name => name.toUpperCase();
let processedNames = messenger.processNames(names, upperCaseProcessor);
console.log("Processed names:", processedNames);

// ==========================================
// 5. METHOD CHAINING
// ==========================================

console.log("\n=== 5. METHOD CHAINING ===");

// Object yang mendukung method chaining
let stringBuilder = {
    _content: "",
    
    add(text) {
        this._content += text;
        return this; // Return this untuk chaining
    },
    
    addLine(text) {
        this._content += text + "\n";
        return this;
    },
    
    addSpace() {
        this._content += " ";
        return this;
    },
    
    toUpperCase() {
        this._content = this._content.toUpperCase();
        return this;
    },
    
    toLowerCase() {
        this._content = this._content.toLowerCase();
        return this;
    },
    
    repeat(times) {
        this._content = this._content.repeat(times);
        return this;
    },
    
    clear() {
        this._content = "";
        return this;
    },
    
    build() {
        return this._content;
    },
    
    length() {
        return this._content.length;
    }
};

console.log("\nString Builder with method chaining:");
let result = stringBuilder
    .add("Hello")
    .addSpace()
    .add("World")
    .addLine("!")
    .add("This is")
    .addSpace()
    .add("chaining")
    .toUpperCase()
    .build();

console.log("Chained result:");
console.log(result);

// Reset dan buat yang baru
stringBuilder.clear();
let result2 = stringBuilder
    .addLine("JavaScript")
    .addLine("is")
    .addLine("awesome")
    .build();

console.log("\nSecond chained result:");
console.log(result2);

// ==========================================
// 6. PRACTICAL EXAMPLES
// ==========================================

console.log("\n=== 6. PRACTICAL EXAMPLES ===");

// Shopping Cart dengan methods
let shoppingCart = {
    items: [],
    _taxRate: 0.1, // 10%
    
    addItem(product, quantity = 1, price = 0) {
        const existingItem = this.items.find(item => item.product === product);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity, price });
        }
        
        console.log(`Added ${quantity} ${product}(s) to cart`);
        return this;
    },
    
    removeItem(product) {
        const index = this.items.findIndex(item => item.product === product);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(`Removed ${product} from cart`);
        } else {
            console.log(`${product} not found in cart`);
        }
        return this;
    },
    
    updateQuantity(product, newQuantity) {
        const item = this.items.find(item => item.product === product);
        if (item) {
            item.quantity = newQuantity;
            console.log(`Updated ${product} quantity to ${newQuantity}`);
        } else {
            console.log(`${product} not found in cart`);
        }
        return this;
    },
    
    get subtotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    get tax() {
        return this.subtotal * this._taxRate;
    },
    
    get total() {
        return this.subtotal + this.tax;
    },
    
    get itemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    
    displayCart() {
        console.log("\n=== SHOPPING CART ===");
        if (this.items.length === 0) {
            console.log("Cart is empty");
            return this;
        }
        
        this.items.forEach(item => {
            const itemTotal = item.price * item.quantity;
            console.log(`${item.product} x${item.quantity} @ Rp${item.price.toLocaleString()} = Rp${itemTotal.toLocaleString()}`);
        });
        
        console.log("-------------------");
        console.log(`Subtotal: Rp${this.subtotal.toLocaleString()}`);
        console.log(`Tax (${(this._taxRate * 100)}%): Rp${this.tax.toLocaleString()}`);
        console.log(`Total: Rp${this.total.toLocaleString()}`);
        console.log(`Items: ${this.itemCount}`);
        
        return this;
    },
    
    clearCart() {
        this.items = [];
        console.log("Cart cleared");
        return this;
    }
};

console.log("\nShopping Cart demonstration:");
shoppingCart
    .addItem("Laptop", 1, 8000000)
    .addItem("Mouse", 2, 150000)
    .addItem("Keyboard", 1, 500000)
    .displayCart()
    .updateQuantity("Mouse", 3)
    .addItem("Monitor", 1, 2500000)
    .displayCart();

console.log("\n=== TIPS OBJECT METHODS ===");
console.log("💡 Gunakan shorthand method syntax (ES6) untuk cleaner code");
console.log("💡 Selalu gunakan 'this' untuk mengakses property object lain");
console.log("💡 Hindari arrow functions jika perlu akses 'this' context");
console.log("💡 Gunakan getter/setter untuk computed properties dan validation");
console.log("💡 Return 'this' dari methods untuk enable method chaining");
console.log("💡 Gunakan underscore prefix untuk private-like properties");

console.log("\n=== SELESAI - OBJECT METHODS & FUNCTIONS ===");