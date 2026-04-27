// 1.Single Inheritance- one parent → One child

class Animal {
    eat():void {
        console.log("Eating");
    }
}

class Dog extends Animal {}


// 2. Multilevel Inheritance- Chain of inheritance

class Animal1 {
    eat():void {}
}

class cat extends Animal1 {
    bark() {}
}

class Puppy extends cat {
    play() {}
}

// 3. Hierarchical Inheritance - One parent → Multiple children

class Animal2 {
    eat() {}
}

class Dog1 extends Animal {}
class Cat1 extends Animal {}

//4. Multiple Inheritance - One child → Multiple parents

//  Not supported in JavaScript/TypeScript with classes
class A {}
class B {}
// class C extends A, B {} // ❌ Error

// But possible using interfaces

interface A {
    a(): void;
}

interface B {
    b(): void;
}

class C implements A, B {
    a() {
        console.log("A");
    }
    b() {
        console.log("B");
    }
}
