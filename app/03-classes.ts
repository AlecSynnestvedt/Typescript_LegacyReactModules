//1
class Person {
  //2 
  firstName: string;
  lastName: string;
}

//3
let phil: Person = new Person();

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
let someVariableName: Person = new Person(); 

//Analysis 

/*
We declare a variable with our own custom name.

We declare the type. It's a custom type of Person.

We use the new keyword to instantiate a new instance.

We call the class with parens. The parens invoke the constructor function.
*/


//METHODS
//let's add a method to the person class

class Person {
    //1
    firstName: string; 
    lastName: string;

    //2
    sayHello(){                 //3
      console.log('hello', this.firstName)
    }
}

//4
let kenn: Person = new Person();
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
class Game {
  constructor(name: string, maker: string){ //2
    this.gameName = name; //4
    this.gameMaker = maker;
  }
  gameName: string; //3
  gameMaker: string; //4
}

//5                               //6
let battleship: Game = new Game('Battleship', 'Hasbro');
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

class Vehicle {
  type: string;
  make: string;
  model: string;
  manufactureYear: number;
  runs: boolean; 
  topSpeed: number;
}

//eg1
                  //1
class Automobile extends Vehicle {
  isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = "Volvo";

//eg2
                  //1
class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180 //3

/*
Analysis
The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcycle and Automobile inherit from Vehicle.

Note that these are properties declared in the subclass. The Motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have access to easyToDoWheelie.

These are properties from the parent class, the Vehicle class. They are inherited properties.
*/

//PARAMETER PROPERTIES allow us to make our classes even more streamlined by allowing us to declare property types and accessors in our constructor parameters.

class Store {
  constructor(name: string, city: string){
    this.name = name;
    this.city = city;
  }
  name: string;
  city: string;
}

let ikea: Store = new Store('Ikea', 'Fishers');

//the above commonly found constructor pattern can be streamlined with TypeScript as follows: 

class Store {

  constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers');
/*
Analysis
Again, the code above is a shortified version of the first version of the Store class. Let's look at a few things:

  1. We add a public accessor. We'll talk about this in the next module. For now, know that it's required for this approach.

  2. With this approach, we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name.

TypeScript infers that there is a property called a name that will be the value of the argument that is passed into the constructor.
*/

//PUBLIC VS PRIVATE accessors
        //1
class Employee extends Person{
  //2     //3
  private _salary: number; 

  //5
  getSalary(): string {
    return this._salary.toString();
  }
        // 4
  setSalary(newSalary: number) {
    this._salary = newSalary;
  }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //this breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);

/*
We have a class called Employee that extends Person.

We create a private property, denoted by the private keyword.

It is common practice to see private properties in classes start with an underscore. This is not required. It is just a common convention.

We have a method called  that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types.

We have a method called  that returns a string. Inside the method, we perform so low-level business logic of converting the salary number value to a string in the return statement.
*/