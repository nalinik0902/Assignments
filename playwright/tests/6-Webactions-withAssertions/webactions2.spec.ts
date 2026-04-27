import test from "@playwright/test";

test('demoQA',async({page}) => {

    // 1.Enter URL and launch the application
    await page.goto('https://demoqa.com/automation-practice-form');
    console.log("Url is successfully launched");
    


    // 2. wait for pageload


    //3. enter firstname and last
    const firstname=page.locator('input#firstName');
    await firstname.fill('Nalini');
    const lastname=page.locator('input#lastName');
    await lastname.fill('Baskar');
    console.log("Enter first and lastname successfully");

    // 4. Enter email
    const email=page.locator('input#userEmail');
    await email.fill('nalinik0902@gmail.com');
    console.log("Email is entered successfuly");

    // 5. select Gender(male)
    await selectGender(page,'Male');
    console.log("Gender is successfully selected");

    // 6. Enter mobile number
    const mobileNum=page.locator('input#userNumber');
    await mobileNum.fill("8870313615");
    console.log("Mobile number is entered successfully");

    // 7. Select DOB (1-Feb-1991)
    await selectDOB(page,"February","1991","1");


    // 8. Search and Select Computer Science and English
    const subjects:string[]=["Computer Science","English"];
    await selectSubjects(page,subjects);


    // 9. Select Hobbies as Sports and Reading
    const Hobbies:string[]=["Sports","Reading"];
    await selectHobbies(page,Hobbies);

    // 10. upload
    const fileUpload = page.locator('input#uploadPicture');
     await fileUpload.setInputFiles('tests/test-data/image.png.jfif');
     console.log("picture is successfully uploaded");

     // 11. submit 
     const submitButton=page.locator('button[type="submit"]');
     await submitButton.click();
     
});

// Handling radio button dynamically
  async function selectGender(page:any,option:string) {
    const gender=page.locator(`//input[@value="${option}"]`);
    await gender.click();
     console.log('Selected the option ${option} from the Gender');

    
  }
// Handling dropdown
  async function selectDOB(page:any,month:string,year:string,Date:string){
     //Launch the calendar
    const dobField=page.locator('input#dateOfBirthInput');
    await dobField.click();
    // select month
    const monthPicker=page.locator('select.react-datepicker__month-select');
    await monthPicker.selectOption({label: month});
    // select year
    const yearPicker=page.locator('select.react-datepicker__year-select');
    await yearPicker.selectOption({label:year});
    // select date
    const datePicker=page.locator(`//div[text()="${Date}" and contains(@aria-label, "${month}")]`);
    await datePicker.click();
    console.log("DOB is successfully selected");

  }

  // suggestion dropdown
  async function selectSubjects(page:any,subjects:string[]) {
   // Locate the subject container
   const sub= page.locator('//div[contains(@class,"subjects-auto-complete__input-container")]');
   await sub.click();
   // Locate the subject input container
   const subjectInput=page.locator('#subjectsInput');
   // select the subjects
   for(let subject of subjects){

    // fill the subject container
    await subjectInput.fill(subject);

    // press enter
    await subjectInput.press('Enter');


   }

    
  }

  async function selectHobbies(page:any,Hobbies:string[]) {

    for(let hobby of Hobbies){
      const hobbyCheckbox=page.locator(`//label[text()="${hobby}"]//preceding-sibling::input`);
      await hobbyCheckbox.check();
    }
    
  }