import test, { expect } from "@playwright/test";

test('frames',async({page})=>{

    // 1. Launch the URL
    await page.goto("https://demoqa.com/frames");
    console.log("url is successfully launced");

    // 2. Locate main window element
    const mainwinElement=page.locator('img[src="/assets/Toolsqa-DZdwt2ul.jpg"]');
   // await expect(mainwinElement).toBeVisible();
    // const text =await mainwinElement.textContent();
    console.log("Image is displayed as expected");


    // 2. Locate the frame and store in the variable
    const frame=page.frameLocator('iframe#frame1');

    // 3. Locate Frame Element
    const frameElement=await frame.locator('//h1[text()="This is a sample page"]').textContent();

    // 4. print text from frame element
    console.log(frameElement);

    // 5.Print text from main window element
    const text=await page.locator('img[src="/assets/Toolsqa-DZdwt2ul.jpg"]').textContent();
    console.log(text);
});

/*
Playwright automatically handle the shadow DOM element (unlike selenium)
Doesn't require any special code .
*/

