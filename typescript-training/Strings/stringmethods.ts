// length of the string
let empName:string="Pawankumar";
let stringLength:number=empName.length;
console.log(stringLength);

//String.charAt(index) - returns character at a specified index in string 
console.log(empName.charAt(4));

//Reverse a string
let message:string="Have a nice morning";
let revMessage:string="";
for(let i:number=message.length-1;i>=0;i--){
    revMessage=revMessage+message.charAt(i);
}
console.log(revMessage);

// string.trim() - this method removes whitespace from both ends of the string
let name:string=" Geetha ";
console.log(name.trim());

// string.replace()- is used to replace part of a string with another value.
 let quote:string="Good Morning";
let result=quote.replace("Morning","Evening");
console.log(result);
   // Replace all occurence with Regular expression
let text:string="Bh@r@th Reddy 123";
console.log(text.replace(/ /g,"")) // removes all the spaces in the string
console.log(text.replace(/[0-9]/g,"")); // removes all numeric values
console.log(text.replace(/[a-zA-Z]/g,"")); // removes all alphabets
console.log(text.replace(/[^a-zA-Z0-9 ]/g,"")); // removes only special characters except alpahbets,numbers and space

// string.substring()- used to extract the portion of 
// -strings using starting index(starts from zero) and ending index(starts from 1)
let tool:string="selemium";
console.log(tool.substring(2,4));

// string.split() - is used to split the string into array of substring based on a specified separator
let statement:string="Welcome to America";
let newstatement:string[]=statement.split(" ");
console.log(newstatement);
console.log(newstatement[2]);
console.log(newstatement[0]);

//13. Compare two different strings. 
//== (loose equality)==> compares the values of the strings and returns true if they are equal, otherwise false.
//=== (strict equality)==> compares both the values and the types of the strings and returns true if they are equal, otherwise false.
//includes() method is used to check if a string contains a specific substring. It returns true if the substring is found, otherwise false.
//startsWith() method is used to check if a string starts with a specific substring. It returns true if the string starts with the substring, otherwise false.
//endsWith() method is used to check if a string ends with a specific substring. It returns true if the string ends with the substring, otherwise false.
console.log("13. Compare two different strings.");
let string1:string = "100";
let number1:number = 100;
// console.log(string1 == number1); // Output: true (loose equality)
// console.log(string1 === number1); // Output: false (strict equality)
let string2:string = "Hello World";
console.log(string2.includes("ello")); // Output: true
console.log(string2.startsWith("Hello")); // Output: true
console.log(string2.endsWith("World")); // Output: true

//Convert other data type to string. 
let stdCode:number = 144 ;
let ph:number = 234567;
let StdCode:string = String(stdCode);
console.log(StdCode+ph);

// convert string into other datatype




