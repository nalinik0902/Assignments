// Abstraction = Hiding implementation details and showing only essential features. 

abstract class BasePage {
    abstract open(): void;     // Abstract method is a method which contains only method declaration not implementation.

    click(element: string):void {     // Normal Method
        console.log("clicking " + element);
    }

}

class LoginPage extends BasePage {      
    open(): void {                           // abstract method implementation
        console.log("Opening the Login Page");
    }
     click(element: string):void {    // method overriding 
        console.log("clickon " + element);
        super.click("search");  // this will call the parent class method
    }
 
}

let login = new LoginPage();
login.open();
login.click("search");