// Abstraction = Hiding implementation details and showing only essential features. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.click = function (element) {
        console.log("clicking " + element);
    };
    return BasePage;
}());
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.open = function () {
        console.log("Opening the Login Page");
    };
    LoginPage.prototype.click = function (element) {
        console.log("clickon " + element);
        _super.prototype.click.call(this, "search"); // this will call the parent class method
    };
    return LoginPage;
}(BasePage));
var login = new LoginPage();
login.open();
login.click("search");
