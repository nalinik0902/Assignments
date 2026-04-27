import {name,add,sub} from "./named-export.ts"
 import abc from "./named-export.ts"  // this is for importing default export. we can name anythng

console.log(name);
console.log(add(5,3));
console.log(sub(10,5));

console.log(abc(3,3));  // defaul export function. function name can be anything


