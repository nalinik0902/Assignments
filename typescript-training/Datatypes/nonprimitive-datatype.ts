// 1. Array - collection of listed values, can store the value of same or different datatype
let fruits:string[]=["Mango","banana","pine"];
console.log(fruits);
let empIds:number[]=[1234,1256,1789];
console.log(empIds[1]);

// Union Type Array(|) - if you want to store multiple datatype in array .
let fruitsDetails:(String|number)[]=["Orange",150,"Banana",190];
console.log(fruitsDetails[1]);

// 2.Object - represents a collection of key -value pairs

// Interface is an template 

interface employee {name:string,
    id:number,
    job:string,
    address:{
        city: string,
        state: string,
        pincode: number

    }}
let empDetails:employee={name:"Raju",
    id:134,
    job:"tester",
    address:{
        city: "Madurai",
        state: "TN",
        pincode: 600014

    }}
     //empDetails.name="Bindu";
    console.log(empDetails);

// 3. Functions - reresents a block of code.
// In typescript, parameter type and return type must be defined

function launchTheApplication(browsername:String, url:String):void{
console.log("Launch the browser" +browsername);
    console.log("Enter url"+url+" and launch the app");
    console.log("Login into app");
}
function sumOfNumbers(a:number,b:number):number{
    let c:number=a+b;
    return c;
}
function getFullName(firstName:String,lastName:String):String{
    let fullName:String=firstName+""+lastName;
    return fullName;
}

launchTheApplication("chrome","www.google.com");
console.log("sum is" +sumOfNumbers(10,50));
console.log("The full name is" + getFullName("Nalini","kumari"));

// Map is the collection of key-value pairs
let empInfo:Map<string,string>=new Map();
empInfo.set("empName", "Ram");
empInfo.set("empId","101");
empInfo.set("empJob","Tester");
console.log(empInfo);
console.log(empInfo.get("empId"));
console.log(empInfo.delete("empName"));

// set - represents a collection of unique values
let empId:Set<number>=new Set();
empId.add(123);
empId.add(456);
empId.add(789);
console.log(empId.delete(456));
console.log(empId.size);
console.log(empId);

// Tuple - is as fixed size array where each element has its predefined datatype and order matters

 let address:[string,number,boolean]=["Twad colony",134,true];
 console.log(address[1]);
 







