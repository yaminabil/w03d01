class Hamster {
    constructor (name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    wheelRun () {
        console.log ("squeak squeak");
    }

    eatFood () {
         console.log ("nibble nibble");
    }

    getPrice () {
        return this.price;
    }
}

class Person {
    constructor (name) {
     this.name = name;
     this.age = 0;
     this.height = 0;
     this.weight = 0;
     this.mood = 0;
     this.Hamster = [];
     this.bankAccount = 0;
    }
    
    getName () {
        return this.name;
    }
    
    getAge () {
        return this.age;
    }

    getWeight () {
        return this.weight ;
    }

    greet () {
        return console.log ("hello " + this.name);
    }

    eat () {
        this.weight++;
        this.mood++;
    }

    exercise () {
        this.weight--;
    }

    ageUp () {
      this.age++ ;
      this.height++ ;
      this.weight++ ; 
      this.mood-- ;
      this.bankAccount+=10;
    }
    buyHamster (Hamster) {
        if(typeof Hamster === 'Object'){
        this.Hamster.push (Hamster) ;
        this.mood += 10 ;
        this.bankAccount -= Hamster.getPrice();
    } else return console.log (hamster + " isnt an object ");

}
}