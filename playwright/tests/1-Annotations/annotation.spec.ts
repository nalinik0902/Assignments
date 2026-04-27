import {test, expect } from "@playwright/test";
// 1. test - default main method to run the test case
test('login',async({}) =>{
    console.log("LoginTestcase");
})
// 2. test.describe - is used to group the testcase
test.describe('Login Tests', () => {
test('valid login', async ({}) => {});
test('invalid login', async ({}) => {});
});

//3. test.skip - is used to skip the test case
test.skip('logout',async({}) =>{
    console.log("Logintestcase");
})
// 4. test.fixme - mark this as broken and needs to be fixed it later
test.fixme('search',async({})=>{
    console.log("clickonsearch");
})
// 5. test.slow -it increase the default test timeout and  will wait for 90 seconds
test('Log',async({})=>{
    test.slow();
 console.log("SlowTestcase");
})

/* //6. test.only - Run only selected tests
      // test.only should never be committed to version control
test.only('logs',async({})=>{
    console.log("Run this testcase only");
}) */

// 7. test.fail() -marks the test as expected to fail
      // If the test fails, test is reported as passed.
      // If the test pass, test is reported as failed.

      test.fail('number',async({})=>{
        expect(2).toBe(1); 
})

