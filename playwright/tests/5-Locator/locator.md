WebElement : Element displayed in the UI.
Locator : The default method provided by Playwright to identify the location of web elements.
There are 9 different locator strategies we have to identify the location of web elements within the playwright.
//1.getByRole() //2.getByLabel() //3.getByPlaceholder() //4.getByText() //5.getByAltText() //6.getByTitle() //7.getByTestId() //8.locator() (css ) //9.locator() (xpath)

Syntax to Locate Element
const element = page.locator("locator-value");

1. getByRole() :This locator method is going to identify the location of a web element based on the nature of the element and its respective attribute values.
Syntax : page.getByRole(role, option) ;
/*

role = 'textbox' for text box , option = placeholder /aria-label
role = 'button' for button , option = text / value
role = 'link' for hyperlink , option = text
role = 'combobox' for dropdown , option = text
role = 'checkbox' for checkbox , option = text
role = 'radio' for radio button , option = text
role = 'switch' for toggle button , option = text
role = 'heading' for heading , option = text
role = 'list' for list, option = text */

<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwiGsYKizsaTAxX4ZmwGHThtM-0Q39UDCAs" aria-activedescendant="" style=""></textarea>
const googleSearchBox = page.getByRole('textbox' ,{name : 'Search'})

const firstName = page.getByRole('textbox' ,{name : 'First Name'})

const loginBtn = page.getByRole('button' ,{name : 'Login'})

const loginBtn = page.getByRole('button' ,{name : 'Log In'})


const gmailLink = page.getByRole('link' ,{name : 'Gmail'})

 
const soapRadioBtn = page.getByRole('radio' ,{name : 'SOAP'})

const loanProviderDropdown = page.getByRole('combobox').selectOption('Web Service')

2.getByLabel() => label element text value
Syntax : page.getByLabel('label-element-textvalue')


3.getByPlaceholder() => any element placeholder attribute value
const firstName = page.getByPlaceholder('First Name');

4.getByText() => any element text value
const gmailLink = page.getByText('Gmail');

5.getByAltText() => any element alt attribute value
const logo = page.getAltText('ParaBank')

6.getByTitle() => any element title attribute value
const homePageTitle = page.getByTitle('Home Page');

7.getByTestId() => any element testId/data-testId attribute value
 const homePageTitle = page.getByTestId('Home Page');
