// for-of is used to iterate from arrays ,map, set , strings
// In typescript, print all the data from array/set/map/strings using for-of loop 
let name:String[]=["nalini","kumari","Madhu"];
for(let list of name){
    console.log(list);
}

// set
let a:Set<number>=new Set();
a.add(123);
a.add(456);
a.add(789);
for(let b of a){
    console.log(b);
}

