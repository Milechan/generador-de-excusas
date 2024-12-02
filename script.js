let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


let itemWho = Math.floor(Math.random()*who.length)
let whoSelecter = who[itemWho]


 let itemAction = Math.floor(Math.random()*action.length)
 let actionSelecter = action[itemAction]

 let itemWhat = Math.floor(Math.random()*what.length)
 let whatSelecter = what[itemWhat]

 let itemWhen = Math.floor(Math.random()*when.length)
 let whenSelecter = when[itemWhen]

console.log(whoSelecter);
console.log(actionSelecter);
console.log(whatSelecter);
console.log(whenSelecter);

let html = document.getElementById('excuse')
html.innerHTML= whoSelecter+" " + actionSelecter+" " + whatSelecter+ " " + whenSelecter