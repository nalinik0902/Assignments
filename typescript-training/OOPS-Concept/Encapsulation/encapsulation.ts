/*
 Encapsulation is the concept of wrapping data(variable ) and methods (function) together into a single class .
 Encapsulation is for data hinding
 variables should be in private
 variabls can be only accessed through methods only from outside the class
 each variable has setters and getters method.




*/


class student{
    private marks:number=15;

    setMarks(m:number){
        this.marks=m;

    }
    getMarks(){
        return this.marks;
    }
    }

   let stu=new student();
   // stu.marks=100; This can't be accessed outside the class as the variable is private .
   stu.setMarks(15);
  console.log (stu.getMarks()); 
