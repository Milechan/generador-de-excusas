let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


let itemWho = Math.floor(Math.random()*who.length)
let WhoSelecter = who[itemWho]


 let itemAction = Math.floor(Math.random()*action.length)
 let ActionSelecter = action[itemAction]

 let itemWhat = Math.floor(Math.random()*what.length)
 let WhatSelecter = what[itemWhat]

 let itemWhen = Math.floor(Math.random()*when.length)
 let WhenSelecter = when[itemWhen]

console.log(WhoSelecter);
console.log(ActionSelecter);
console.log(WhatSelecter);
console.log(WhenSelecter);

let Nombre = document.getElementById('excuse')
Nombre.innerHTML= WhoSelecter+" " + ActionSelecter+" " + WhatSelecter+ " " + WhenSelecter