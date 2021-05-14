//you can't instantiate an interface. The following throws an error:
//let a: Animal = new Animal();
//interfaces shape objects, they don't create them.
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
//interfaces can only have method signatures in TS. Ex:
//1
sayHello(name, string);
string;
{
    //2
    var someNum = 1 + 2;
    var someOtherNum = 1 + 2;
    return name;
}
//1
var Apples = /** @class */ (function () {
    function Apples() {
    }
    //2
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on ", d);
    };
    return Apples;
}());
//3
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
/*
Notice that we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.

We implement the setTimeOfPurchase method in the class, and provide a basic implementation by logging the date to the console.

We then create a new instance of the Apples class and call the  setTimeOfPurchase method.
*/
//# sourceMappingURL=04-interfaces.js.map