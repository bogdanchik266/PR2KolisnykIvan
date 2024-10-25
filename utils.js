// utils.js
function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, damageDealt, firstPersonRemainingHP, enemyDamage, enemyRemainingHP) {
    return `${firstPerson.name} атакував ${secondPerson.name} на ${damageDealt} HP. Залишилось HP у ${firstPerson.name}: ${firstPersonRemainingHP}. ${secondPerson.name} атакував ${firstPerson.name} на ${enemyDamage} HP. Залишилось HP у ${secondPerson.name}: ${enemyRemainingHP}.`;
}

export { random, generateLog };
