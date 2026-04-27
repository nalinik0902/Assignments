import {test, expect } from "@playwright/test";

test('Parabank Login and Services',async({ page }) => {
    
    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.html)
    await page.goto("https://parabank.parasoft.com/parabank/index.html");
    
     // 2. Verify the application logo is displayed
     const logo=page.locator('//img[@class="logo"]');
     await expect(logo).toBeVisible();
     console.log("Logo image is displayed successfully");

     // 3. verify application caption is displayed as " Experience the difference"
     const caption=page.locator('//p[text()="Experience the difference"]');
     await expect(caption).toHaveText('Experience the difference');
     console.log("caption is displayed as expected");
             // or
             const captions=page.getByText('Experience the difference');
             await expect(captions).toBeVisible();

    // 4. Enter invalid username
    const usernameTxtbx=page.locator('//input[@name="username"]');
    await usernameTxtbx.clear();
    await usernameTxtbx.fill('invalid username');

    // 5. Enter empty password
    const passwordtxtbx=page.locator('//input[@name="password"]');
    // await passwordtxtbx.clear();
    await passwordtxtbx.fill("");
    console.log("updated username and password");

    // 6. click on login button
    const loginBtn=page.locator('//input[@value="Log In"]');
    await loginBtn.click();
    console.log("Clicked on login button successfully");

    //7. Verify the error message "Please enter a username and password."
    const errorMsg=page.getByText('Please enter a username and password.');
    await expect(errorMsg).toBeVisible();
    console.log("Error Message is displayed as expected.")

    // 8. Click on admin page link
    const link=page.locator('//a[text()="Admin Page"]');
    await link.click();
    console.log("Click on the admin page link successfully.")

    //9.  select the option "soap" from dba mode radio button
        await selectDbaMode(page, "jdbc");

    // 10. .Scroll to element " Loan provider dropdown" 
    const loanprovider=page.locator('//select[@name="loanProvider"]');
    await loanprovider.scrollIntoViewIfNeeded();
     console.log("Scrolled to loan provider dropdown successfully. ");

     // 11. Select the option web service from the dropdown
     await loanprovider.selectOption({value:'ws'});
     console.log("Selected the option 'Web Service' from the dropdown successfully. ");

  // 12.click on submit button
     const submitButton=page.locator('//input[@value="Submit"]');
     await submitButton.click();
   
     // 13.verify submission is successful by validating success message
     const successMessage = await page.locator('//div[@id="rightPanel"]//p//b');
    const expectedMessage = "Settings saved successfully.";
    const actualMessage =await successMessage.textContent();
    await expect(actualMessage).toBe(expectedMessage);
    console.log("Submission is successful and expected message is displayed. ")
   // 14. Click on services page link
   const servicelink=page.locator('//ul[@class="leftmenu"]//a[text()="Services"]');
   await servicelink.click();
   console.log("Service link is successfully clicked");
   // 15. wait for service page
   const bookstoreServicetableHeader=page.locator('//span[text()="Bookstore services:"]');
   await expect(bookstoreServicetableHeader).toBeVisible();
   console.log("Bookstore services header is visible and service page is loaded successfully. ");

   // 16. .Scroll down till bookstore services table
   await bookstoreServicetableHeader.scrollIntoViewIfNeeded();
    console.log("Scrolled down till bookstore services table successfully."); 

    // 17. get total rows of books store services table
    const rows =page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
    const totalRows=await rows.count();

    //18. get total columns of books store services table
    const columns = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]//td');
    const totalColumns=await columns.count();

    // 19. Print table data (row wise and column wise data)
    for(let r:number=1;r<=totalRows;r++){
        for(let c:number=1;c<=totalColumns;c++){
            const cell=page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[${r}]//td[${c}]`);
            console.log(`Row ${r} Column ${c} value is : `+await cell.textContent());
        }
        }

    




});

async function selectDbaMode(page: any, mode: string) {
    const dbaModeRadioBtn = page.locator(`input[value="${mode}"]`);
    dbaModeRadioBtn.click();
    console.log(`Selected the option ${mode} from dba mode radio button successfully. `)
}
