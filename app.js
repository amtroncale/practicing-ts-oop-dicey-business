"use strict";
const diceArray = [];
class Die {
    constructor() {
        this.div = $('<div class="die"></div>');
        this.roll();
        $('#dice-container').append(this.div);
        this.div.click(() => this.roll());
        this.div.dblclick(() => this.destroy());
    }
    destroy() {
        this.div.remove();
        let index = diceArray.indexOf(this);
        diceArray.splice(index, 1);
    }
    roll() {
        this.randomVal = Math.floor((Math.random() * 6) + 1);
        $(this.div).text(this.randomVal);
    }
}
;
$('#gen-die').click(() => diceArray.push(new Die()));
$('#reroll-die').click(() => diceArray.forEach(die => die.roll()));
$('#sum-dice').click(() => {
    let sum = 0;
    diceArray.forEach(die => (sum += die.randomVal));
    alert(`Total sum of the die is: ${sum}`);
});