import { image,content,decision } from "../app.js";
import { Money } from "./registration.js";

export function storeEquip(e){
    image.innerHTML = '<img class="imageSquare" src="/images/swordshield.png" alt="sword and shield">';

    content.innerHTML = `
    <h1> Equipment Rentals </h1>
    <p> Check out the various equipment you can rent. Prices and equipment detail are provided. Select which items you would like and let me know when you are done.<p>
    <p><strong> Your Wallet: ` + Money + ` coins </strong>
    <table>
        <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
        </tr>
        <tr>
            <td>Sword</td>
            <td>5 coins</td>
            <td>Increases Strength 5 points</td>
            <td><input type="checkbox" id="sword" name="sword" value="5"></td>
        </tr>
        <tr>
            <td>Dragon Heart</td>
            <td>10 coins</td>
            <td>Increases Health 10 points</td>
            <td><input type="checkbox" id="dragonHeart" name="dragonHeart" value="10"></td>
        </tr>
        <tr>
            <td>Witches Hat</td>
            <td>5 coins</td>
            <td>Increases Magic 8 points</td>
            <td><input type="checkbox" id="witchHat" name="witchHat" value="8"></td>
        </tr>
    </table>`;

    decision.innerHTML =
        `<div class="col-2">
            <button id='btnPurchase'>Checkout</button>
        </div>`;

    document.getElementById('btnPurchase').addEventListener('click', storePurchase);
}

function storePurchase()
{
    let sword = 0;
    let heart = 0;
    let hat = 0;

    image.innerHTML = '<img class="imageSquare" src="/images/swordshield.png" alt="sword and shield">';


    if(document.getElementById("sword").checked)
    {
        sword = 5;
    }
    if(document.getElementById("dragonHeart").checked)
    {
        heart = 10;
    }
    if(document.getElementById("witchHat").checked)
    {
        hat = 8;
    }

    let expense = (sword + heart + hat);

    if (Money >= expense )
    {
        playerStrength += sword;
        playerHealth += heart;
        playerMagic += hat;

        content.innerHTML = `Perfect. Lets checkout your updated Stats.<br>
        <button id="statsUpdate">Next</button>`;

        document.getElementById("statsUpdate").addEventListener('click', playerStats);

    } else
    {
        alert("You don't have enough money for all that. Try again.");

    }
}