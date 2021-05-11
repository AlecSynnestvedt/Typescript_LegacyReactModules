interface Animal {
  name: string;
  numberOfLegs: number;
}

//you can't instantiate an interface. The following throws an error:
//let a: Animal = new Animal();
//interfaces shape objects, they don't create them.

let lassie: Animal = {
  name: 'Lassie', 
  numberOfLegs: 4
}

//interfaces can only have method signatures in TS. Ex:

//1
sayHello(name: string) : string {
  //2
  var someNum = 1 + 2;
  var someOtherNum = 1 + 2;
  return name;
}
//1: this whole line, up until the curly brace, is the method/function signature. It includes the functions name, a parameter and it's type, and a return type of string.
//2: the code within curlies is the method implementation. this is what will happen inside the function when it's called, and it includes the result. 

interface Product {
  name: string;
  price: number;
  setTimeOfPurchase(d: Date);
}
              //1
class Apples implements Product {
  name: 'Apples';
  price: 5.50;

  //2
  setTimeOfPurchase(d: Date) {
    console.log("Apples purchased on ", d);
  }
}

//3
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));

/*
Notice that we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.

We implement the setTimeOfPurchase method in the class, and provide a basic implementation by logging the date to the console.

We then create a new instance of the Apples class and call the  setTimeOfPurchase method.
*/
