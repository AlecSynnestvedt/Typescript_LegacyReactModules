function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - works 
addNumbers(1, 2);
//2 - errors
addNumbers(1, 2, 3);
addNumbers(1, 2, "foo");
//1             //2
function sayHello(name) {
    return ;
    name;
}
sayHello("Kenn"); //3
sayHello(1); //4
/*
Analysis
Let's look at what's happening:

We create a type for our parameter, a string.

We use the colon followed by a type to denote a return type.

We call the function and pass in a string argument. The argument satisfies the return type. So this function works.

We call the function and pass in the wrong return type. The argument does not satisfy the return type, and so this would break.

The great thing is that the compiler tells us that there is an error before we run the code!!!
*/
// 1                          //2
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2); // 3
addNumbersWithOptional(1, 2, "this is optional"); //4
/*
Analysis
The first two parameters, numeOne and numTwo  are not optional.

The someString parameter is optional.

Since someString is optional, it does not require an argument when the function is called.

We can also call the function with an argument provided for someString.

If you hover over the function call you'll notice the type on someString? is a union type of string | undefined
. If a value is passed in, it should be of type string. If a value is not passed in, it is of type undefined.

Key Rule
It's important to note the following rule:

Optional params must go after all required params

*/ 
//# sourceMappingURL=02-functions.js.map