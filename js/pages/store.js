import {image,content,decision} from "../app.js";
import {playerMoney} from "./registration.js";

export function storeEquip(){
    image.innerHTML = '<img class="imageSquare" src="/images/swordshield.png" alt="sword and shield">';

    content.innerHTML =
        `
    <h1> Equipment Rentals </h1>
    <p> Check out the various equipment you can rent. Prices and equipment detail are provided. Select which items you would like and let me know when you are done.<p>
    <p><strong> Your Wallet: ` + playerMoney + ` coins </strong>
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
//     <button id="btnPurchase">Checkout</button>
//     ` ;
//
//     document.getElementById('btnPurchase').addEventListener('click', storePurchase);
}