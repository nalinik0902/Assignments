// primitive datatype in Typescript
// 1. Number
let a:number=10;
let b:number=20;
let z=a+b;
console.log("The value is"+z);

// 2. String
let empName:String="Bean";
console.log(empName);

// 3. Boolean
let x:number=10;
let y:number=15;
let Z:boolean=x>y;
console.log(Z);

// 4. null
let p:null=null;
console.log(p);

// 5. undefined
let s:undefined;
console.log(s);

// union - represents adding more than one datatype to the variable 
 let empAddress: string|number|boolean="123 pillaiyar nagar true";
 // empAddress="twadnagar";
 // empAddress=134;
 console.log(empAddress);

 // any - datatype that used to store any data
 let empinfo:any="ram";
 //empinfo=123;
 //empinfo=true;
 console.log(empinfo);








