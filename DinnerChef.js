
class Dinner {
    constructor (appetizer ,entre ,dessert) {
        this.appetizer = appetizer;
        this.entre = entre;
        this.dessert = dessert;
    }
}

class Chef {
    constructor (name ,age ,experience) {
        this.name = name ;
        this.age = age ;
        this.experience = experience;
        this.dinners = [];
    }

    makeDinner (appetizer ,entre ,dessert) {
      let dinner = new Dinner (appetizer ,entre ,dessert);
      this.dinners.push ("dinner " + (this.dinners.length+1) );
      return dinner ;
    }
}

const jef = new Chef ("jef" ,40 ,'10 years');
console.log (jef);

console.log( jef.makeDinner ("lentil-soup" ,"steak" ,"cheese-cake") );
console.log( jef.makeDinner ("salad" ,"grilled-chicken" ,"tiramusu") );
console.log( jef.makeDinner ("ring-onions" ,"turkey" ,"cheese-cake") );

console.log (jef);
