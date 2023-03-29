class Breakfast{
    constructor(food,drink){
        this.food= food;
        this.drink=drink;
    }
}
const buffet =new Breakfast("eggs","juice")


class Lunch{
    constructor(salad,soup,drink) {
        this.salad= salad;
        this.soup=soup;
        this.drink=drink;

    }
}
const foodie = new Lunch("chicken salad","pumpkin soup","passion juice")


class Dinner{
    #dessert;
    constructor(salad,soup,entree, dessert) {
        this.salad=salad;
        this.soup=soup;
        this.entree=entree;
        this.#dessert=dessert;
    }
}
const newDinner = new Dinner("balsamic salad","consomne","filet mignon")