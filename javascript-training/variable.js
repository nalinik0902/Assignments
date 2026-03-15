/* Declaration variable=data; ----> JavaScript
 Declaration variable:datatype=data; ----->Typescript
 Declaration means- nature of the DataTransfer
 In javascript, we declare the variable using three different keys
   - var  (avoid to use in modern Javascript)
   - let  
   - const
 These three variable declaration key will differ based on four parameter
  1. Initialization
  2. Reassignment
  3. Redeclaration
  4. Scope
  */

// Initialization - assigning values to the variable
const a = 10;  // for constant, assigning values at the beginning stage is important
let b;  // can be initialized later
var c;  // can be initialized later

//Reassignment - changing the value of the variable after it has declared
// a=20;  // this will throw error at runtime says const value cannot be changed.
b = 30;
c = 40;

// Redeclaration - using the same variable to store different data
// const a="Reddy";  // we cant redeclare if we use constant 
//let b="Gita";    // we cannot redeclare if we use let 
var c = "Sanju";  // it allows to store . This is disadvantage


//Scope
{
    const x = 10;
    let y = 20;
    var z = 30;

    /* console.log(x);
    console.log(y);
    console.log(z); */

}
console.log(x);  // "const" is block scope. we can't access outside of the block
console.log(y);  // "Let" is block scope. we can't access outside of the block. 
console.log(z);  // "var" variable can access outside of the block










