

//select elements
let bun = document.getElementById('bun-select');
let patty = document.getElementById('patty-temp');
let side = document.getElementById('side-choice');

//vegetable input elements
let lettuce = document.getElementById('lettuce');
let tomato = document.getElementById('tomato');
let onion = document.getElementById('onion');
let spinach = document.getElementById('spinach');
let pickles = document.getElementById('pickle');

//condiment input elements
let ketchup = document.getElementById('ketchup');
let mustard = document.getElementById('mustard');
let mayo = document.getElementById('mayo');
let aioli = document.getElementById('aioli');
let secret = document.getElementById('secret');

//instruction text element
let instructions = document.getElementById('instructions');

//price related variables
let burgerPrice = 0;

const lettucePrice = 0.5;
const tomatoPrice = 0.3;
const onionPrice = 0.7;
const spinachPrice = 0.8;
const picklePrice = 0.4;

const ketchupPrice = 0.3;
const mustardPrice = 0.3;
const mayoPrice = 0.3;
const aioliPrice = 0.5;
const secretPrice = 0.5;

const toastPrice = 1;

const friesPrice = 2;
const chipsPrice = 1.5;
const saladPrice = 2.5;

let priceDiv = document.getElementById('price');
let form = document.getElementById('form');
form.onsubmit = submit;

function submit(event) {
    burgerPrice = 5;

    if (lettuce.checked) { burgerPrice += lettucePrice };
    if (tomato.checked) { burgerPrice += tomatoPrice };
    if (onion.checked) { burgerPrice += onionPrice };
    if (spinach.checked) { burgerPrice += spinachPrice };
    if (pickles.checked) { burgerPrice += picklePrice };

    if (ketchup.checked) { burgerPrice += ketchupPrice };
    if (mustard.checked) { burgerPrice += mustardPrice };
    if (mayo.checked) { burgerPrice += mayoPrice };
    if (aioli.checked) { burgerPrice += aioliPrice };
    if (secret.checked) { burgerPrice += secretPrice };

    if (bun.value == "texas toast") { burgerPrice += toastPrice }

    if (side.value == "fries") { burgerPrice += friesPrice };
    if (side.value == "chips") { burgerPrice += chipsPrice };
    if (side.value == "salad") { burgerPrice += saladPrice };

    console.log(patty.value);


    priceDiv.innerHTML = `$${burgerPrice.toFixed(2)}`
    event.preventDefault();
}