import {image,content,decision} from "../app.js";
import * as player from "../utils/player.js";
import { scene1 } from "./scenes/scene-1.js";

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
   let playerName = document.getElementById('name').value;

    // Check for Race and assign to playerRace
    if (document.getElementById('fairy').checked) {
        player.Race = document.getElementById('fairy').value;
        image.innerHTML = '<img class="imageSquare" src="/images/fairy.png" alt="fairy">';
    } else if (document.getElementById('elf').checked) {
        player.Race = document.getElementById('elf').value;
        image.innerHTML = '<img class="imageSquare" src="/images/elf.png" alt="elf">';
    } else {
        player.Race = document.getElementById('gnome').value;
        image.innerHTML = '<img class="imageSquare" src="/images/gnome.png" alt="gnome">';
    }

    // Check for Class and assign to playerClass
    if (document.getElementById('warrior').checked) {
        player.Class = document.getElementById('warrior').value;
    } else if (document.getElementById('mage').checked) {
        player.Class = document.getElementById('mage').value;
    } else {
        player.Class = document.getElementById('cleric').value;
    }

    // base player attributes for strengths, health, and magic
    player.Strength = 5;
    player.Health = 5;
    player.Magic = 5;
    player.Money = 15;


    // fairy attributes
    if (player.Race === "Fairy") {
        player.Health += 5;
        player.Magic += 10;
    }

    //elf attributes
    if (player.Race === "Elf") {
        player.Strength += 5;
        player.Health += 10;
    }

    //gnome attributes
    if (player.Race === "Gnome") {
        player.Strength += 10;
        player.Magic += 5;
    }

    //mage attributes
    if (player.Class === "Mage") {
        player.Health += 5;
        player.Magic += 10;
    }

    // cleric attributes
    if (player.Class === "Cleric") {
        player.Strength += 5;
        player.Health += 10;
    }

    // warrior attributes
    if (player.Class === "Warrior") {
        player.Strength += 10;
        player.Magic += 5;
    }

    image.innerHTML = '<img class="imageSquare" src="/images/please-register.jpg" alt="cave">';

    content.innerHTML = "Name: " + player.Name + "<br>Race: " + player.Race + "<Br>Class: " + player.Class +"<br>Strength Level: " + player.Strength + "<br>Magic Level: " + player.Magic + "<br>Health Level: " + player.Health;
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

