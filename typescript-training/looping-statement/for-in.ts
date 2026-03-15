// for in loop - used to iterate over the object

interface empdetails{
    name:string,
    age:number
    job:string}

let empInfo:empdetails={name: "Nalini",
             age: 32,
             job: "Tester"
}

for(let key in empInfo){
    // console.log(key);  //this will get only the keys
     let value = key as keyof empdetails;
     console.log(value,empInfo[value]);
}
