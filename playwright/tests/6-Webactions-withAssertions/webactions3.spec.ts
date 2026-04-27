import test from "@playwright/test";

test('alert',async({page})=>{

    // 1. Launch the url

    await page.goto("https://demoqa.com/alerts");
    console.log("url is successfully launched");


   

   // 2.Locate Alert buttons whichtrigger alerts

   // 3.Click on the information alert and copy the alert message and then select OK button
   const informationAlertButton=page.locator('button#alertButton');

   // code to handle Alert (if Alert comes)
   await page.once('dialog', async dialog =>{
    
    // get message from the alert
    console.log(dialog.message());
    // click ok on the alert
    await dialog.accept();
   });
   await informationAlertButton.click();
   console.log("Successfully handled InformationAlert")

   // 4.  Click on the Confirmation alert, copy the alert message, and select the Cancel button.

   const confirmationAlertButton=page.locator('button#confirmButton');

   // code to handle Alert (if Alert comes)
   await page.once('dialog', async dialog =>{
    
    // get message from the alert
    console.log(dialog.message());
    // click cancel on the alert
    await dialog.dismiss();
   });
   await confirmationAlertButton.click();
   console.log("Successfully handled ConfirmationAlert")

   // 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
   const promptAlertButton=page.locator('button#promtButton');

   // code to handle Alert (if Alert comes)

   await page.once('dialog', async dialog =>{
    
    // get message from the alert
    console.log(dialog.message());
    // enter text in Alert text box
    await dialog.accept("Nalini");

    

   });
   await promptAlertButton.click();
   console.log("Successfully handled PromptAlert");


   





});
