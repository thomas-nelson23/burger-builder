//variables for dropdown select lists
let bun = document.getElementById('bun-select');
let patty = document.getElementById('patty-temp');
let side = document.getElementById('side-choice');

//variables for vegetable checkboxes
let lettuce = document.getElementById('lettuce');
let tomato = document.getElementById('tomato');
let onion = document.getElementById('onion');
let spinach = document.getElementById('spinach');
let pickles = document.getElementById('pickle');

//variables for condiment checkboxes
let ketchup = document.getElementById('ketchup');
let mustard = document.getElementById('mustard');
let mayo = document.getElementById('mayo');
let aioli = document.getElementById('aioli');
let secret = document.getElementById('secret');

//variable for instruction text area 
let instructions = document.getElementById('instructions');

//variable for total burger price
let burgerPrice = 0;

//variables for prices for each option
const whitePrice = 0.25;
const wheatPrice = 0.5;
const toastPrice = 1;

const lettucePrice = 0.3;
const tomatoPrice = 0.25;
const onionPrice = 0.4;
const spinachPrice = 0.85;
const picklePrice = 0.5;

const ketchupPrice = 0.15;
const mustardPrice = 0.25;
const mayoPrice = 0.2;
const aioliPrice = 0.5;
const secretPrice = 0.55;

const friesPrice = 2;
const chipsPrice = 1.5;
const saladPrice = 2.5;


let priceDiv = document.getElementById('price');
let form = document.getElementById('form');


//populates text on bun selector options
document.getElementById("white").innerHTML = `White + $${whitePrice.toFixed(2)}`
document.getElementById("wheat").innerHTML = `Wheat + $${wheatPrice.toFixed(2)}`
document.getElementById("toast").innerHTML = `Texas Toast + $${toastPrice.toFixed(2)}`

//populates vegetable checkboxes text
document.getElementById("lettuceLabel").innerHTML = `Lettuce + $${lettucePrice.toFixed(2)} <br>`;
document.getElementById("tomatoLabel").innerHTML = `Tomato + $${tomatoPrice.toFixed(2)} <br>`;
document.getElementById("onionLabel").innerHTML = `Onion + $${onionPrice.toFixed(2)} <br>`;
document.getElementById("spinachLabel").innerHTML = `Spinach + $${spinachPrice.toFixed(2)} <br>`;
document.getElementById("pickleLabel").innerHTML = `Pickle + $${picklePrice.toFixed(2)} <br>`;

//populates condiment checkboxes text
document.getElementById("ketchupLabel").innerHTML = `Ketchup + $${ketchupPrice.toFixed(2)} <br>`;
document.getElementById("mustardLabel").innerHTML = `Mustard + $${mustardPrice.toFixed(2)} <br>`;
document.getElementById("mayoLabel").innerHTML = `Mayo + $${mayoPrice.toFixed(2)} <br>`;
document.getElementById("aioliLabel").innerHTML = `Aioli + $${aioliPrice.toFixed(2)} <br>`;
document.getElementById("secretLabel").innerHTML = `Secret Sauce + $${secretPrice.toFixed(2)} <br>`;


form.onsubmit = submit;

function submit(event) {
    //base burger price
    burgerPrice = 5;

    //updates price for each option
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

    if (bun.value == "white") { burgerPrice += whitePrice }
    if (bun.value == "wheat") { burgerPrice += wheatPrice }
    if (bun.value == "texas toast") { burgerPrice += toastPrice }

    if (side.value == "fries") { burgerPrice += friesPrice };
    if (side.value == "chips") { burgerPrice += chipsPrice };
    if (side.value == "salad") { burgerPrice += saladPrice };


    //inserts price text
    priceDiv.innerHTML = `$${burgerPrice.toFixed(2)}`;
    event.preventDefault();
}