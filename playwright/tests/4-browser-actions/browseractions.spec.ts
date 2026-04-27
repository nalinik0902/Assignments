import test, { chromium, expect } from "@playwright/test";

test("Browser Actions",async({})=>{

     // Lauch the chrome browser engine
    const browserEngine=await chromium.launch({channel:'chrome',headless:false})

    // Launch the browser context/incognito window
    const browserContext=await browserEngine.newContext();

    // Launch the page/new tab
    const page=await browserContext.newPage(); 

    // Maximize the browser window to a specific resolution(1920 * 1080)
    await page.setViewportSize({width:1920,height:1080});

    // launch the application using url
    await page.goto("https://www.google.com");

    // verify the application launced successfully by using applictaion title
    await expect(page).toHaveTitle('Google');

    // launch another url in the same page
    await page.goto("https://playwright.dev");

    // go back to the previous application Google
    await page.goBack();

    // go to the plawright page
    await page.goForward();

    // Reload the page
    await page.reload();

    // Launch the new tab within the same browser
     const newpage=await browserContext.newPage();
    
    // launch url in the new tab
    await newpage.goto("https://www.selenium.dev");

    // go to the previous page/tab (playwright) tab 
    await page.bringToFront();

    // copy the current url and print it
    let currenturl=await page.url();
    console.log(currenturl);

    // close the current page
    await page.close();
    // close all the page
    await browserEngine.close();


})
