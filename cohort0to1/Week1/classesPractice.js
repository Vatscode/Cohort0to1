// Classes and Objects 

/*
A class is a blueprint of an object and an object is an instance of that class.
*/


class Animal {
    constructor(names, legCount, speaks){
    this.names = names;
    this.legCount = legCount;
    this.speaks = speaks;
      }
      static myType(){
        console.log("Animal")
      }
    
      speak(){
        console.log("hi there" + this.speaks);
      }
      name(){
        console.log("I am an animal" + this.names)
      }
    }
    
    
    let dog = new Animal(" dog", 4, " woof"); // create object
    let cat = new Animal(" cat", 4, " meow");
    
    dog.speak() // call function on object
    cat.speak()
    dog.name()
    cat.name()
    
    // static ( If you want to call something directly on a class you make it a static mathod)
    Animal.myType();
    
    