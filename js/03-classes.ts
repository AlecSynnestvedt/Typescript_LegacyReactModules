var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//3
var phil = new Person();
//4
phil.firstName = "Phil";
phil.lastName = "Donahue";
/*
Analysis
Using the class keyword, we create a new class called Person. Just to be clear, this is not part of TypeScript. This is part of ES6.

We create 2 properties with types in that class. Here TypeScript allows us to set the types of our properties, as we would in a traditional OOP language like Java or C#. Dictating these types requires that when we instantiate the class and use these properties, they must hold string values.

We instantiate(create an instance) of the Person class by setting the type to Person and calling the new keyword to create a new instance of the class.

Back to the top code. We set the properties on the instance of the  property.
*/
//INSTANTIATION 
//1               //2   //3   //4
var someVariableName = new Person();
//Analysis 
/*
We declare a variable with our own custom name.

We declare the type. It's a custom type of Person.

We use the new keyword to instantiate a new instance.

We call the class with parens. The parens invoke the constructor function.
*/
//METHODS
//let's add a method to the person class
var Person = /** @class */ (function () {
    function Person() {
    }
    //2
    Person.prototype.sayHello = function () {
        console.log('hello', this.firstName);
    };
    return Person;
}());
//4
var kenn = new Person();
//5
kenn.firstName = "Kenn";
//6
kenn.sayHello();
/*
Analysis
These two variables are the properties of the class. They should be above the methods.

Here we have a method. This is a function that prints "Hello, " then a name to the console.

this.firstName will refer to the firstName for the specific instance.

We instantiate the Person() class with a variable name of kenn.

We set the property of firstName to "Kenn" for this specific instance.

We call the method on the kenn object. Because the firstName of kenn is set to "Kenn", this will print "Hello Kenn" to the console.

Key Rule
Notice that with methods in our class that you don't have to use the function keyword.
*/
//CONSTRUCTORS allow us to instantiate the class and set the properties at the same time
//1
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name; //4
        this.gameMaker = maker;
    }
    return Game;
}());
//5                               //6
var battleship = new Game('Battleship', 'Hasbro');
/*
Analysis
We create a new class called Game.

We create a constructor for the class that takes in a parameter that is of type string.

We set up a property called gameName.

We set the value of gameName equal to the value that is passed into the constructor's argument.

We create an instance of the gameName class called battleship.

We pass in values to satisfy the requirements of the constructor. If we do not pass values in for the constructor's arguments, we get an error. The following code throws a compile-time error:

let battleship: Game = nwe Game();
  --> errors bc two arguments are required in the parentheses.
*/
//Parent class, Vehicle, holds the properties that are going to be universally inherited by all vehicles. With inheritance, we can make subclasses of Vehicle that hold these properties along with the properties that are unique to the subclass. Here is the syntax for a subclass with two examples.
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//eg1
//1
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = "Volvo";
//eg2
//1
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3
/*
Analysis
The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcycle and Automobile inherit from Vehicle.

Note that these are properties declared in the subclass. The Motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have access to easyToDoWheelie.

These are properties from the parent class, the Vehicle class. They are inherited properties.
*/
//PARAMETER PROPERTIES allow us to make our classes even more streamlined by allowing us to declare property types and accessors in our constructor parameters.
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
//the above commonly found constructor pattern can be streamlined with TypeScript as follows: 
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
/*
Analysis
Again, the code above is a shortified version of the first version of the Store class. Let's look at a few things:

  1. We add a public accessor. We'll talk about this in the next module. For now, know that it's required for this approach.

  2. With this approach, we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name.

TypeScript infers that there is a property called a name that will be the value of the argument that is passed into the constructor.
*/
//PUBLIC VS PRIVATE accessors
//1
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //5
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    // 4
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //this breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
/*
We have a class called Employee that extends Person.

We create a private property, denoted by the private keyword.

It is common practice to see private properties in classes start with an underscore. This is not required. It is just a common convention.

We have a method called  that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types.

We have a method called  that returns a string. Inside the method, we perform so low-level business logic of converting the salary number value to a string in the return statement.
*/ 
//# sourceMappingURL=03-classes.js.map