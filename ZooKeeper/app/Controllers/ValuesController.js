import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let cardsTemplate = ''
  values.forEach(v => cardsTemplate += v.CardTemplate)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.sayHelloToAllAnimals()">Say Hello To Animals</button>  
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.organizeMaleAnimals()">Organize The Males</button>  
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.organizeFemaleAnimals()">Organize The Females</button>  
    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `
}

//Public
export class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  // NOTE My Added Functions
  sayHelloToAllAnimals() {
    valuesService.sayHelloToAllAnimals()
  }

  organizeMaleAnimals() {
    valuesService.organizeMaleAnimals()
  }
  organizeFemaleAnimals() {
    valuesService.organizeFemaleAnimals()
  }
  // STUB End Of Added Functions

  addValue() {
    valuesService.addValue()
  }

  async removeValue(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      valuesService.removeValue(id)
    }
  }

}
