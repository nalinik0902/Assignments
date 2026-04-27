// In TypeScript, Interfaces DO NOT support implementation at all
// Interface supports multiple inheritance.


interface Login {
    login(username: string, password: string): void;
}

class WebLogin implements Login {
    login(username: string, password: string): void {
        console.log(`Logged in with username ${username} and password ${password}`);
    }
}

let web=new WebLogin();
web.login("Admin","Admin123");

