 
 export let name:string="playwright";
 
 export function add(a:number,b:number):number{
    return a+b;
}

export function sub(a:number,b:number):number{
    return a-b;

}
export default function mul(a:number,b:number):number{  // can have only one default export per file
    return a*b
}