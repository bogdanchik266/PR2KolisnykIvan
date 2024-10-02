// Завдання 1: Функція для підрахунку літер
function countLetterInRow(row, letter) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter) {
    const countFirst = countLetterInRow(firstRow, letter);
    const countSecond = countLetterInRow(secondRow, letter);
    
    if (countFirst > countSecond) {
        return firstRow;
    } else if (countSecond > countFirst) {
        return secondRow;
    } else {
        return 'Both rows have equal number of letters';
    }
}

function startLetterCount() {
    const firstRow = 'Slow and steady wins the race';
    const secondRow = 'You can say that again';
    const letter = prompt('Enter the letter you want to count:', 'a');
    
    const result = getRow(firstRow, secondRow, letter);
    alert(`The row with more '${letter}' is: "${result}"`);
}

// Завдання 2: Форматування номеру телефону
function formattedPhone(phone) {
    let cleanPhone = phone.replace(/\D/g, ''); // Забираємо всі символи, окрім цифр
    if (cleanPhone.length === 12 && cleanPhone.startsWith('38')) {
        cleanPhone = '+' + cleanPhone;
    } else if (cleanPhone.length === 11 && cleanPhone.startsWith('8')) {
        cleanPhone = '+3' + cleanPhone;
    } else if (cleanPhone.length === 10) {
        cleanPhone = '+38' + cleanPhone;
    } else {
        return 'Incorrect phone format';
    }
    
    return cleanPhone.slice(0, 3) + ' (' + cleanPhone.slice(3, 6) + ') ' + 
           cleanPhone.slice(6, 9) + '-' + cleanPhone.slice(9, 11) + '-' + cleanPhone.slice(11, 13);
}

function formatPhone() {
    const phone = prompt('Enter the phone number to format:', '+380664567890');
    const result = formattedPhone(phone);
    alert(`Formatted phone: ${result}`);
}
