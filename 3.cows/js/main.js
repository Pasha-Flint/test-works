var cowsAndChickens = {
    headsNumber: 0,
    legsNumber: 0,
    cowsNumber: 0,
    chickensNumber: 0,
    cowsForm: '',
    chickensForm: ''
};

function getResult(){
    cowsAndChickens.headsNumber = parseInt(document.getElementById('headsNumber').value);
    cowsAndChickens.legsNumber = parseInt(document.getElementById('legsNumber').value);

    if (cowsAndChickens.headsNumber < 0 || cowsAndChickens.legsNumber < 0) {
        alert('Please insert numbers greater than zero only');
        clearMain();
    }

    cowsAndChickens.cowsNumber = (cowsAndChickens.legsNumber - (cowsAndChickens.headsNumber * 2)) / 2;
    cowsAndChickens.chickensNumber = cowsAndChickens.headsNumber - cowsAndChickens.cowsNumber;

    if (cowsAndChickens.cowsNumber === 1) {
        cowsAndChickens.cowsForm = ' cow & ';
    } else {
        cowsAndChickens.cowsForm = ' cows & ';
    }

    if (cowsAndChickens.chickensNumber === 1) {
        cowsAndChickens.chickensForm = ' chicken.';
    } else {
        cowsAndChickens.chickensForm = ' chickens.';
    }

    if (Number.isNaN(cowsAndChickens.cowsNumber) || Number.isNaN(cowsAndChickens.chickensNumber)) {
        alert('Please insert numbers only');
        clearMain();
    } else {
        document.getElementById('result').value = 'There are ' + cowsAndChickens.cowsNumber + cowsAndChickens.cowsForm + cowsAndChickens.chickensNumber + cowsAndChickens.chickensForm;
    }
}

function clearMain() {
    document.getElementById('headsNumber').value = '';
    document.getElementById('legsNumber').value = '';
    document.getElementById('result').value = '';
}

var calcObj = {
    cows: 0,
    chickens: 0,
    headsCalculated: 0,
    legsCalculated: 0
};

function getCalcResult() {
    calcObj.cows = parseInt(document.getElementById('cowsCalc').value);
    calcObj.chickens = parseInt(document.getElementById('chickensCalc').value);

    if (cowsAndChickens.headsNumber < 0 || cowsAndChickens.legsNumber < 0) {
        clearCalc();
    }

    calcObj.headsCalculated = calcObj.cows + calcObj.chickens;
    calcObj.legsCalculated = (calcObj.cows * 4) + (calcObj.chickens * 2);

    if (Number.isNaN(calcObj.headsCalculated) || Number.isNaN(calcObj.legsCalculated)) {
        clearCalc();
    } else {
        document.getElementById('calcResult').value = calcObj.headsCalculated + ' heads & ' + calcObj.legsCalculated + ' legs total.';
    }
}

function clearCalc() {
    document.getElementById('cowsCalc').value = '';
    document.getElementById('chickensCalc').value = '';
    document.getElementById('calcResult').value = '';
}

function showCalculator() {
    document.getElementById('calculator').classList.toggle('show');
}