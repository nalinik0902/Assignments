// Hooks are special methods that run before/after the test. It helps to avoid repeating setup/cleanup code.
 /* beforeAll() - Runs before all the tests
 beforeEach() - Runs before each test
 afterAll() - Runs after all the tests
 afterEach()- Runs after each test
 */

import test from "@playwright/test";

 test.beforeAll(async({})=>{
  console.log("Run before all the tests");
 })

 test.afterAll(async({})=>{
  console.log("Run after all the tests");
 })

 test.beforeEach(async({})=>{
  console.log("Run before each  test");
 })

 test.afterEach(async({})=>{
  console.log("Run after each tests");
 })

test("Testcase1",async({page})=>{
    console.log("Run the Testcase1");
})

test("Testcase2",async({page})=>{
    console.log("Run the Testcase2");
})

// Note - updated fullyParallel to false.
// If it is enabled true, file is split across the workers,each test runs independently
// testbefore all and test after all runs two times 

/*Easy Rule to Remember

👉 fullyParallel: true
➡ Tests run in different workers
➡ Hooks run multiple times

👉 fullyParallel: false
➡ Tests share same worker
➡ Hooks run once
*/


