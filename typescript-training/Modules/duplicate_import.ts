import{add,sub} from "./named-export.ts"
import{name,add as sum,sub as difference} from "./group_export.ts"

// Here, we imported two files which has same function which is duplicate.
// To handle this, we use "as"

console.log(sum(3,4));
console.log(difference(12,6));
console.log(name);


