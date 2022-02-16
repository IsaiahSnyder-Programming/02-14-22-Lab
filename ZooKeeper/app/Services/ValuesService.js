import { ProxyState } from "../AppState.js";
import { Alpaca } from "../Models/Alpaca.js";
import { Baboon } from "../Models/Baboon.js";
import { Chicken } from "../Models/Chicken.js";
import { Duck } from "../Models/Duck.js";
import { Emu } from "../Models/Emu.js";
import { Frog } from "../Models/Frog.js";
import { Guppy } from "../Models/Guppy.js";
import { Hedgehog } from "../Models/Hedgehog.js";
import { Iguana } from "../Models/Iguana.js";
import { Jackal } from "../Models/Jackal.js";
import { Kangaroo } from "../Models/Kangaroo.js";
import { Llama } from "../Models/Llama.js";
import { Mouse } from "../Models/Mouse.js";
import { Narwhal } from "../Models/Narwhal.js";
import { Ocelot } from "../Models/Ocelot.js";
import { Platypus } from "../Models/Platypus.js";
import { Quokka } from "../Models/Quokka.js";
import { Rat } from "../Models/Rat.js";
import { Snake } from "../Models/Snake.js";
import { Tarpon } from "../Models/Tarpon.js";
import { UmbrellaBird } from "../Models/UmbrellaBird.js";
import { Value } from "../Models/Value.js";
import { Vulture } from "../Models/Vulture.js";
import { Walrus } from "../Models/Walrus.js";
import { Xoloitzcuintli } from "../Models/Xoloitzcuintli.js";
import { Yak } from "../Models/Yak.js";
import { Zebra } from "../Models/Zebra.js";

// NOTE My Added Variables
let alpaca1 = new Alpaca('Annie', 12, 'Alpaca', false)
let baboon1 = new Baboon('Billie', 22, 'Baboon', true)
let chicken1 = new Chicken('Charlie', 1, 'Chicken', true)
let duck1 = new Duck('Donald', 23, 'Duck', true)
let emu1 = new Emu('Ellie', 14, 'Emu', false)
let frog1 = new Frog('Freddy', 3, 'Frog', true)
let guppy1 = new Guppy('Geraldine', 65, 'Guppy', false)
let hedgehog1 = new Hedgehog('Henry', 5, 'Hedgehog', true)
let iguana1 = new Iguana('Isabel', 17, 'Iguana', false)
let jackal1 = new Jackal('Jerry', 21, 'Jackal', true)
let kangaroo1 = new Kangaroo('Kyle', 16, 'Kangaroo', true)
let llama1 = new Llama('Larry', 56, 'Llama', true)
let mouse1 = new Mouse('Minnie', 22, 'Mouse', false)
let narwhal1 = new Narwhal('Nelly', 14, 'Narwhal', false)
let ocelot1 = new Ocelot('Ollie', 10, 'Ocelot', true)
let platypus1 = new Platypus('Perry', 10000002, 'Platypus', true)
let quokka1 = new Quokka('Quincy', 1, 'Quokka', true)
let rat1 = new Rat('Remi', 13, 'Rat', true)
let snake1 = new Snake('Sammy', 14, 'Snake', false)
let tarpon1 = new Tarpon('Tim', 20, 'Tarpon', true)
let umbrellaBird1 = new UmbrellaBird('Uncle', 99, 'Umbrella Bird', true)
let vulture1 = new Vulture('Vince', 55, 'Vulture', true)
let walrus1 = new Walrus('William', 45, 'Walrus', true)
let xoloitzcuintli1 = new Xoloitzcuintli('Xylo', 999, 'xoloitzcuintli', false)
let yak1 = new Yak('Yareli', 75, 'Yak', false)
let zebra1 = new Zebra('Zeus', 99999, 'Zebra', true)

let allAnimals = [alpaca1, baboon1, chicken1, duck1, emu1, frog1, guppy1, hedgehog1, iguana1, jackal1, kangaroo1, llama1, mouse1, narwhal1, ocelot1, platypus1, quokka1, rat1, snake1, tarpon1, umbrellaBird1, vulture1, walrus1, xoloitzcuintli1, yak1, zebra1]
// STUB End Of Added Animals


class ValuesService {

  // NOTE My Added Functions
  sayHelloToAllAnimals() {
    let template = ''
    allAnimals.forEach(v => v.hello())
    allAnimals.forEach(v => template += v.animalTemplate)
  }

  organizeMaleAnimals() {
    let filtered = allAnimals.filter(a => a.isMale)
    console.log(filtered);

  } 
  organizeFemaleAnimals() {
    let filtered = allAnimals.filter(a => !a.isMale)
    console.log(filtered);
  }
  // STUB End Of Added Functions

  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

