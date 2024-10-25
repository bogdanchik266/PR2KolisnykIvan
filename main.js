// main.js
import { Pokemon } from './pokemon.js';
import { random, generateLog } from './utils.js';

const $btnKick = document.getElementById('btn-kick');
const $btnSpecialAttack = document.getElementById('btn-special-attack');
const $logs = document.getElementById('logs');
const $clickCounter = document.getElementById('click-counter');
const $remainingClicks = document.getElementById('remaining-clicks');

const maxClicks = 6; // Максимальна кількість натискань
let clickCount = 0; // Лічильник натискань

const character = new Pokemon(
    'Pikachu',
    100,
    document.getElementById('health-character'),
    document.getElementById('progressbar-character')
);

const enemy = new Pokemon(
    'Charmander',
    100,
    document.getElementById('health-enemy'),
    document.getElementById('progressbar-enemy')
);

// Attack logs
const logs = [
    `${character.name} вспомнил что-то важное, но неожиданно ${enemy.name}, не помня себя от испуга, ударил в предплечье врага.`,
    `${character.name} поперхнулся, и за это ${enemy.name} с испуга приложил прямой удар коленом в лоб врага.`,
    `${character.name} забылся, но в это время наглый ${enemy.name}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
    `${character.name} пришел в себя, но неожиданно ${enemy.name} случайно нанес мощнейший удар.`,
    `${character.name} поперхнулся, но в это время ${enemy.name} нехотя раздробил кулаком противника.`,
    `${character.name} удивился, а ${enemy.name} пошатнувшись влепил подлый удар.`,
    `${character.name} высморкался, но неожиданно ${enemy.name} провел дробящий удар.`,
    `${character.name} пошатнулся, и внезапно наглый ${enemy.name} беспричинно ударил в ногу противника.`,
    `${character.name} расстроился, как вдруг, неожиданно ${enemy.name} случайно влепил стопой в живот сопернику.`,
    `${character.name} пытался что-то сказать, но вдруг, неожиданно ${enemy.name} со скуки, разбил бровь сопернику.`
];

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
    updateRemainingClicks(); // Оновлюємо залишок натискань
}

function attackCharacter(attacker, defender, damage) {
    defender.changeHP(damage);
    return damage;
}

function handleAttack(isSpecialAttack = false) {
    const characterDamage = isSpecialAttack ? random(30) : random(20);
    const enemyDamage = random(20);

    attackCharacter(character, enemy, characterDamage);
    attackCharacter(enemy, character, enemyDamage);

    const logMessage = generateLog(character, enemy, characterDamage, character.damageHP, enemyDamage, enemy.damageHP);
    const randomLog = logs[random(logs.length) - 1]; // -1 for indexing

    $logs.innerHTML = `<p>${logMessage}</p><p>${randomLog}</p>` + $logs.innerHTML; // Add log at the top

    checkWinner();
}

function updateRemainingClicks() {
    const remainingClicks = maxClicks - clickCount; // Розрахунок залишкових натискань
    $remainingClicks.innerText = `Залишилося натискань: ${remainingClicks}`; // Виведення залишкових натискань
}

function createClickCounter() {
    return function () {
        if (clickCount < maxClicks) {
            clickCount++;
            $clickCounter.innerText = `Кількість натискань: ${clickCount}`; // Оновлення тексту на сторінці
            updateRemainingClicks(); // Оновлення залишкових натискань
            return true;
        } else {
            console.log('Досягнуто максимальну кількість натискань');
            $btnKick.disabled = true;
            $btnSpecialAttack.disabled = true;
            return false;
        }
    };
}

const clickHandler = createClickCounter();

$btnKick.addEventListener('click', function () {
    if (clickHandler()) {
        handleAttack(false); // Звичайна атака
    }
});

$btnSpecialAttack.addEventListener('click', function () {
    if (clickHandler()) {
        handleAttack(true); // Спеціальна атака
    }
});

function checkWinner() {
    if (character.damageHP === 0) {
        alert(enemy.name + ' wins!');
        $btnKick.disabled = true;
        $btnSpecialAttack.disabled = true;
    } else if (enemy.damageHP === 0) {
        alert(character.name + ' wins!');
        $btnKick.disabled = true;
        $btnSpecialAttack.disabled = true;
    }
}

init();
