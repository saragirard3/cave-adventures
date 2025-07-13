import {image,content,decision} from "../app.js";
import * as player from "../utils/player.js";
import {} from "../pages/store.js";
import { scene1 } from "./scenes/scene-1.js";

let playerName;
export let playerRace;
export let playerHealth;
export let playerMagic;
export let playerStrength;
export let playerMoney;
export let playerClass;

export function registration() {
    image.innerHTML = '<img class="imageSquare" src="/images/please-register.jpg" alt="cave">';

    content.innerHTML =
        `<h1>Hello!</h1>
        <p>Before you are able to enter the cave, you must do a quick registration process.</p>
        <p>Fill in the information below</p>

        <label for='name'>Name: </label>
            <input type='text' id='name' /> <br>
        <label for='race'>Race: </label>
            <input type='radio' name='race' id='fairy' value="Fairy">Fairy</input>
            <input type='radio' name='race' id='elf' value="Elf">Elf</input>
            <input type='radio' name='race' id='gnome' value="Gnome">Gnome</input> <br>
        <label for='class'>Class: </label>
            <input type='radio' class='class' id='warrior' value="Warrior">Warrior</input>
            <input type='radio' class='class' id='mage' value="Mage">Mage</input>
            <input type='radio' class='class' id='cleric' value="Cleric">Cleric</input>`;

    decision.innerHTML =
        `<div class="col-2">
            <button id='btnRegister'>Register</button>
        </div>`

    document.getElementById("btnRegister").addEventListener('click', playerReg );
}

export function playerReg() {
   playerName = document.getElementById('name').value;

    // Check for Race and assign to playerRace
    if (document.getElementById('fairy').checked) {
        playerRace = document.getElementById('fairy').value;
        image.innerHTML = '<img class="imageSquare" src="/images/fairy.png" alt="fairy">';
    } else if (document.getElementById('elf').checked) {
        playerRace = document.getElementById('elf').value;
        image.innerHTML = '<img class="imageSquare" src="/images/elf.png" alt="elf">';
    } else {
        playerRace = document.getElementById('gnome').value;
        image.innerHTML = '<img class="imageSquare" src="/images/gnome.png" alt="gnome">';
    }

    // Check for Class and assign to playerClass
    if (document.getElementById('warrior').checked) {
        playerClass = document.getElementById('warrior').value;
    } else if (document.getElementById('mage').checked) {
        playerClass = document.getElementById('mage').value;
    } else {
        playerClass = document.getElementById('cleric').value;
    }

    // base player attributes for strengths, health, and magic
    playerStrength = 5;
    playerHealth = 5;
    playerMagic = 5;
    playerMoney = 15;


    // fairy attributes
    if (playerRace === "Fairy") {
        playerHealth += 5;
        playerMagic += 10;
    }

    //elf attributes
    if (playerRace === "Elf") {
        playerStrength += 5;
        playerHealth += 10;
    }

    //gnome attributes
    if (playerRace === "Gnome") {
        playerStrength += 10;
        playerMagic += 5;
    }

    //mage attributes
    if (playerClass === "Mage") {
        playerHealth += 5;
        playerMagic += 10;
    }

    // cleric attributes
    if (playerClass === "Cleric") {
        playerStrength += 5;
        playerHealth += 10;
    }

    // warrior attributes
    if (playerClass === "Warrior") {
        playerStrength += 10;
        playerMagic += 5;
    }

    image.innerHTML = '<img class="imageSquare" src="/images/please-register.jpg" alt="cave">';

    content.innerHTML = "Name: " + playerName + "<br>Race: " + playerRace + "<Br>Class: " + playerClass +"<br>Strength Level: " + playerStrength + "<br>Magic Level: " + playerMagic + "<br>Health Level: " + playerHealth;
    content.innerHTML +=
        `
            <p> You are all registered. Before you go, look at what equipment we have. You may want something to help with your adventure.</p>
        `

    decision.innerHTML =
        `<div class="col-2">
            <button id="btnStore">Review Equipment</button>
        </div>
        <div class="col-2">
            <button id="btnStartCave">Head to the Cave</button>
        </div>`

    // document.getElementById("btnStore").addEventListener('click', storeEquip );
    document.getElementById('btnStartCave').addEventListener('click', finalReg );


}

export function finalReg() {
    // image.innerHTML = "<img src='./images/swordshield.png' />";
    image.innerHTML = "";

    content.innerHTML = `<p>Good luck on your adventure!</p>`

    decision.innerHTML =
        `<div class="col-2">
            <button id="scene1">Enter Cave</button>
        </div>
        `

    document.getElementById("scene1").addEventListener('click', scene1);

}

