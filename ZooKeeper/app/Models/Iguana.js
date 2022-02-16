
export class Iguana {
    constructor(name, age, type, gender){
        this.name = name
        this.age = age
        this.type = type
        this.isMale = gender
    }
    
    hello() {
        console.log(`${this.name} the ${this.age} year old ${this.type} says hello`)
    }

    get animalTemplate() {
        return `<h1>${this.name} the ${this.age} year old ${this.type} says hello.</h1>`
    }


}