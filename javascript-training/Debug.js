console.log("exec 1");
console.log("exec 2");
console.log("exec 3");
console.log("exec 4");
console.log("exec 5");
sumofnumbers(5,10);
console.log("exec 6");
console.log("exec 7");
console.log("exec 8");

function sumofnumbers(a, b) {
    c = a + b;
    console.log("sum is:" + c);
}


// if you want to debug the code, put the break point whereever you want to put in the code
// Debugging is the process of manually controll and run the program line by line to find the error and fix it
// click Run and debug option in the left side panel -> click node js
// Debug console window will open

/* Debug options
  1. Continue- it continues the execution till the next breakpoint automatically
  2. Stop - it stops the execution process completely and terminate the execution process
  3. Restart - It stop the execution and restart from beginning
  4. Stepover- execute the current line and move to the next line
  5. Stepin- go inside the step and understand the background code
  6. Stepout - comeout of the background code by completing the execution

*/