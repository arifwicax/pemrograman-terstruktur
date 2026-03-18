// ==========================================
// PROTOTYPE & INHERITANCE DALAM JAVASCRIPT
// ==========================================

console.log("=== PROTOTYPE & INHERITANCE DALAM JAVASCRIPT ===\n");
console.log("JavaScript menggunakan prototype-based inheritance.");
console.log("Topik yang akan dibahas:");
console.log("1. Konsep Prototype");
console.log("2. Prototype Chain");
console.log("3. Object.create() untuk inheritance");
console.log("4. Constructor dan prototype");
console.log("5. Prototype methods");
console.log("6. Modern inheritance dengan class\n");

// ==========================================
// 1. KONSEP PROTOTYPE
// ==========================================

console.log("=== 1. KONSEP PROTOTYPE ===");
console.log("Setiap object di JavaScript memiliki prototype\n");

// Basic prototype demonstration
let animal = {
    species: "Unknown",
    sound: "Silent",
    
    makeSound() {
        return `This ${this.species} makes ${this.sound}`;
    },
    
    getInfo() {
        return `Species: ${this.species}, Sound: ${this.sound}`;
    }
};

console.log("Animal prototype object:");
console.log(animal.getInfo());
console.log(animal.makeSound());

// Creating object with Object.create()
let dog = Object.create(animal);
dog.species = "Dog";
dog.sound = "Woof!";
dog.breed = "Golden Retriever";

console.log("\nDog object (inherits from animal):");
console.log(dog.getInfo()); // Inherited method
console.log(dog.makeSound()); // Inherited method
console.log("Breed:", dog.breed); // Own property

// Check prototype relationship
console.log("\nPrototype relationship:");
console.log("dog.__proto__ === animal:", dog.__proto__ === animal);
console.log("Object.getPrototypeOf(dog) === animal:", Object.getPrototypeOf(dog) === animal);
console.log("animal.isPrototypeOf(dog):", animal.isPrototypeOf(dog));

// Creating another object from the same prototype
let cat = Object.create(animal);
cat.species = "Cat";
cat.sound = "Meow!";
cat.climb = function() {
    return `${this.species} can climb trees`;
};

console.log("\nCat object (also inherits from animal):");
console.log(cat.getInfo());
console.log(cat.makeSound());
console.log(cat.climb());

// ==========================================
// 2. PROTOTYPE CHAIN
// ==========================================

console.log("\n=== 2. PROTOTYPE CHAIN ===");
console.log("Objects can inherit from other objects, forming a chain\n");

// Multi-level prototype chain
let livingBeing = {
    alive: true,
    breathe() {
        return "Breathing...";
    }
};

let mammal = Object.create(livingBeing);
mammal.warmBlooded = true;
mammal.giveBirth = function() {
    return "Giving birth to live babies";
};

let canine = Object.create(mammal);
canine.species = "Canine";
canine.pack = true;
canine.howl = function() {
    return "Howling at the moon";
};

let domesticDog = Object.create(canine);
domesticDog.species = "Domestic Dog";
domesticDog.loyal = true;
domesticDog.fetch = function() {
    return "Fetching the ball";
};

console.log("Multi-level inheritance chain:");
console.log("domesticDog.alive:", domesticDog.alive); // From livingBeing
console.log("domesticDog.breathe():", domesticDog.breathe()); // From livingBeing
console.log("domesticDog.warmBlooded:", domesticDog.warmBlooded); // From mammal
console.log("domesticDog.giveBirth():", domesticDog.giveBirth()); // From mammal
console.log("domesticDog.pack:", domesticDog.pack); // From canine
console.log("domesticDog.howl():", domesticDog.howl()); // From canine
console.log("domesticDog.loyal:", domesticDog.loyal); // Own property
console.log("domesticDog.fetch():", domesticDog.fetch()); // Own method

// Tracing the prototype chain
function tracePrototypeChain(obj) {
    console.log("\nPrototype chain for object:");
    let current = obj;
    let level = 0;
    
    while (current) {
        console.log(`Level ${level}: ${current.constructor?.name || 'Object'} - Properties: ${Object.getOwnPropertyNames(current).join(', ')}`);
        current = Object.getPrototypeOf(current);
        level++;
        
        // Safety check to avoid infinite loop
        if (level > 10) break;
    }
}

tracePrototypeChain(domesticDog);

// ==========================================
// 3. CONSTRUCTOR FUNCTIONS & PROTOTYPE
// ==========================================

console.log("\n=== 3. CONSTRUCTOR FUNCTIONS & PROTOTYPE ===");
console.log("Constructor functions memiliki prototype property\n");

// Constructor function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// Adding methods to prototype
Person.prototype.introduce = function() {
    return `Hi, I'm ${this.name}, ${this.age} years old from ${this.city}`;
};

Person.prototype.haveBirthday = function() {
    this.age++;
    return `Happy birthday! ${this.name} is now ${this.age}`;
};

Person.prototype.moveTo = function(newCity) {
    let oldCity = this.city;
    this.city = newCity;
    return `${this.name} moved from ${oldCity} to ${newCity}`;
};

// Creating instances
let person1 = new Person("Alice", 25, "Jakarta");
let person2 = new Person("Bob", 30, "Bandung");

console.log("Person instances:");
console.log(person1.introduce());
console.log(person2.introduce());

console.log("\nUsing prototype methods:");
console.log(person1.haveBirthday());
console.log(person1.moveTo("Bali"));
console.log(person1.introduce());

// Check prototype relationship
console.log("\nPrototype relationships:");
console.log("person1 instanceof Person:", person1 instanceof Person);
console.log("person1.constructor === Person:", person1.constructor === Person);
console.log("Person.prototype.isPrototypeOf(person1):", Person.prototype.isPrototypeOf(person1));

// Adding method to existing prototype (affects all instances)
Person.prototype.getAge = function() {
    return `${this.name} is ${this.age} years old`;
};

console.log("\nMethod added to prototype (available to all instances):");
console.log(person1.getAge());
console.log(person2.getAge());

// ==========================================
// 4. INHERITANCE DENGAN CONSTRUCTOR FUNCTIONS
// ==========================================

console.log("\n=== 4. INHERITANCE DENGAN CONSTRUCTOR FUNCTIONS ===");

// Parent constructor
function Employee(name, age, city, salary, department) {
    Person.call(this, name, age, city); // Call parent constructor
    this.salary = salary;
    this.department = department;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add Employee-specific methods
Employee.prototype.work = function() {
    return `${this.name} is working in ${this.department}`;
};

Employee.prototype.getSalary = function() {
    return `${this.name} earns Rp${this.salary.toLocaleString()} per month`;
};

Employee.prototype.promote = function(newSalary, newDepartment) {
    this.salary = newSalary;
    if (newDepartment) {
        this.department = newDepartment;
    }
    return `${this.name} promoted! New salary: Rp${this.salary.toLocaleString()}`;
};

// Override parent method
Employee.prototype.introduce = function() {
    return `Hi, I'm ${this.name}, ${this.age} years old from ${this.city}. I work in ${this.department}.`;
};

// Create Employee instances
let emp1 = new Employee("Charlie", 28, "Surabaya", 8000000, "Engineering");
let emp2 = new Employee("Diana", 32, "Medan", 12000000, "Marketing");

console.log("Employee instances:");
console.log(emp1.introduce()); // Overridden method
console.log(emp1.work());
console.log(emp1.getSalary());

console.log("\n" + emp2.introduce());
console.log(emp2.work());
console.log(emp2.promote(15000000, "Management"));

// Test inheritance
console.log("\nInheritance testing:");
console.log("emp1 instanceof Employee:", emp1 instanceof Employee);
console.log("emp1 instanceof Person:", emp1 instanceof Person);
console.log(emp1.haveBirthday()); // Inherited from Person
console.log(emp1.moveTo("Yogyakarta")); // Inherited from Person

// ==========================================
// 5. MODERN INHERITANCE DENGAN CLASS
// ==========================================

console.log("\n=== 5. MODERN INHERITANCE DENGAN CLASS ===");
console.log("ES6 Classes menyediakan syntax yang lebih clean\n");

// Base class
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    
    start() {
        return `${this.brand} ${this.model} started`;
    }
    
    accelerate(increment = 10) {
        this.speed += increment;
        return `Speed: ${this.speed} km/h`;
    }
    
    brake(decrement = 10) {
        this.speed = Math.max(0, this.speed - decrement);
        return `Speed: ${this.speed} km/h`;
    }
    
    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

// Derived class
class Car extends Vehicle {
    constructor(brand, model, year, doors, fuelType) {
        super(brand, model, year); // Call parent constructor
        this.doors = doors;
        this.fuelType = fuelType;
        this.fuel = 100; // Full tank
    }
    
    // Override parent method
    start() {
        if (this.fuel > 0) {
            return super.start() + " - Engine running";
        } else {
            return "Cannot start - No fuel!";
        }
    }
    
    // New methods
    refuel(amount = 100) {
        this.fuel = Math.min(100, this.fuel + amount);
        return `Refueled. Fuel level: ${this.fuel}%`;
    }
    
    drive(distance) {
        let fuelNeeded = distance / 10; // 1% fuel per 10km
        if (this.fuel >= fuelNeeded) {
            this.fuel -= fuelNeeded;
            return `Drove ${distance}km. Fuel remaining: ${this.fuel.toFixed(1)}%`;
        } else {
            return "Not enough fuel for this distance!";
        }
    }
    
    getInfo() {
        return `${super.getInfo()} - ${this.doors} doors, ${this.fuelType} fuel`;
    }
}

// Electric car class (another level of inheritance)
class ElectricCar extends Car {
    constructor(brand, model, year, doors, batteryCapacity) {
        super(brand, model, year, doors, "Electric");
        this.batteryCapacity = batteryCapacity;
        this.batteryLevel = 100;
    }
    
    // Override methods for electric car
    start() {
        if (this.batteryLevel > 0) {
            return `${this.brand} ${this.model} started silently - Electric motor running`;
        } else {
            return "Cannot start - Battery empty!";
        }
    }
    
    charge(amount = 20) {
        this.batteryLevel = Math.min(100, this.batteryLevel + amount);
        return `Charged. Battery level: ${this.batteryLevel}%`;
    }
    
    drive(distance) {
        let batteryNeeded = distance / 5; // 1% battery per 5km (more efficient)
        if (this.batteryLevel >= batteryNeeded) {
            this.batteryLevel -= batteryNeeded;
            return `Drove ${distance}km silently. Battery remaining: ${this.batteryLevel.toFixed(1)}%`;
        } else {
            return "Not enough battery for this distance!";
        }
    }
    
    getInfo() {
        return `${this.brand} ${this.model} (${this.year}) - Electric, ${this.batteryCapacity} kWh battery`;
    }
}

// Test the class hierarchy
console.log("Testing class inheritance:");

let genericVehicle = new Vehicle("Generic", "Vehicle", 2020);
let myCar = new Car("Toyota", "Camry", 2022, 4, "Gasoline");
let myElectricCar = new ElectricCar("Tesla", "Model 3", 2023, 4, 75);

console.log("\nGeneric Vehicle:");
console.log(genericVehicle.getInfo());
console.log(genericVehicle.start());
console.log(genericVehicle.accelerate(30));

console.log("\nGasoline Car:");
console.log(myCar.getInfo());
console.log(myCar.start());
console.log(myCar.drive(100));
console.log(myCar.refuel(50));

console.log("\nElectric Car:");
console.log(myElectricCar.getInfo());
console.log(myElectricCar.start());
console.log(myElectricCar.drive(200));
console.log(myElectricCar.charge(30));

// Instance checks
console.log("\nInstance relationship checks:");
console.log("myCar instanceof Car:", myCar instanceof Car);
console.log("myCar instanceof Vehicle:", myCar instanceof Vehicle);
console.log("myElectricCar instanceof ElectricCar:", myElectricCar instanceof ElectricCar);
console.log("myElectricCar instanceof Car:", myElectricCar instanceof Car);
console.log("myElectricCar instanceof Vehicle:", myElectricCar instanceof Vehicle);

// ==========================================
// 6. MIXIN PATTERN
// ==========================================

console.log("\n=== 6. MIXIN PATTERN ===");
console.log("Cara untuk menambahkan functionality dari multiple sources\n");

// Mixin objects
const Flyable = {
    fly() {
        return `${this.name} is flying`;
    },
    
    land() {
        return `${this.name} has landed`;
    }
};

const Swimmable = {
    swim() {
        return `${this.name} is swimming`;
    },
    
    dive() {
        return `${this.name} dived underwater`;
    }
};

const Walkable = {
    walk() {
        return `${this.name} is walking`;
    },
    
    run() {
        return `${this.name} is running`;
    }
};

// Mixin function
function mixin(target, ...sources) {
    Object.assign(target.prototype, ...sources);
}

// Animal class that can use mixins
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

// Different animals with different capabilities
class Bird extends Animal {
    constructor(name) {
        super(name, "Bird");
    }
}

class Fish extends Animal {
    constructor(name) {
        super(name, "Fish");
    }
}

class Duck extends Animal {
    constructor(name) {
        super(name, "Duck");
    }
}

// Apply mixins to different classes
mixin(Bird, Flyable, Walkable);
mixin(Fish, Swimmable);
mixin(Duck, Flyable, Swimmable, Walkable); // Duck can do everything!

// Test mixins
console.log("Testing mixins:");

let eagle = new Bird("Eagle");
let salmon = new Fish("Salmon");
let donald = new Duck("Donald");

console.log("\nEagle (Bird with Flyable + Walkable):");
console.log(eagle.getInfo());
console.log(eagle.fly());
console.log(eagle.walk());

console.log("\nSalmon (Fish with Swimmable):");
console.log(salmon.getInfo());
console.log(salmon.swim());
console.log(salmon.dive());

console.log("\nDonald (Duck with all abilities):");
console.log(donald.getInfo());
console.log(donald.fly());
console.log(donald.swim());
console.log(donald.walk());
console.log(donald.land());
console.log(donald.dive());
console.log(donald.run());

// ==========================================
// 7. PROTOTYPE UTILITY FUNCTIONS
// ==========================================

console.log("\n=== 7. PROTOTYPE UTILITY FUNCTIONS ===");

// Utility functions for prototype manipulation
const PrototypeUtils = {
    // Check if object has specific method in prototype chain
    hasMethod(obj, methodName) {
        return typeof obj[methodName] === 'function';
    },
    
    // Get all methods from prototype chain
    getAllMethods(obj) {
        let methods = [];
        let current = obj;
        
        while (current) {
            Object.getOwnPropertyNames(current).forEach(name => {
                if (typeof current[name] === 'function' && name !== 'constructor') {
                    methods.push(name);
                }
            });
            current = Object.getPrototypeOf(current);
        }
        
        return [...new Set(methods)]; // Remove duplicates
    },
    
    // Clone object with same prototype
    cloneWithPrototype(obj) {
        let clone = Object.create(Object.getPrototypeOf(obj));
        Object.assign(clone, obj);
        return clone;
    },
    
    // Check inheritance relationship
    isInstanceOf(obj, Constructor) {
        return obj instanceof Constructor;
    }
};

console.log("\nTesting prototype utilities:");

console.log("Donald has 'fly' method:", PrototypeUtils.hasMethod(donald, 'fly'));
console.log("Donald has 'bark' method:", PrototypeUtils.hasMethod(donald, 'bark'));

console.log("\nAll methods available to Donald:");
console.log(PrototypeUtils.getAllMethods(donald));

// Clone test
let donaldClone = PrototypeUtils.cloneWithPrototype(donald);
console.log("\nDonald clone:");
console.log(donaldClone.getInfo());
console.log("Clone can fly:", PrototypeUtils.hasMethod(donaldClone, 'fly'));

console.log("\n=== TIPS PROTOTYPE & INHERITANCE ===");
console.log("💡 Gunakan Object.create() untuk prototype-based inheritance");
console.log("💡 Gunakan ES6 classes untuk inheritance yang lebih clean");
console.log("💡 Selalu set constructor property saat membuat prototype chain");
console.log("💡 Gunakan super() untuk memanggil parent constructor/method");
console.log("💡 Mixins berguna untuk multiple inheritance-like behavior");
console.log("💡 Hati-hati dengan modifikasi prototype built-in objects");
console.log("💡 Gunakan instanceof untuk cek relationship, bukan typeof");

console.log("\n=== SELESAI - PROTOTYPE & INHERITANCE ===");