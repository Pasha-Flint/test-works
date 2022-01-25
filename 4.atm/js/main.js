document.getElementById('message').innerHTML = '';

var notesNominal = [10, 20, 50, 100],

    cash = {
        available: [180, 130, 70, 55],
        temp: 0,
        withdraw: 0,
        withdrawNotes: [0, 0, 0, 0],
        transitArray: [0, 0, 0, 0]
    },

    cashInStock = {
        ten: notesNominal[0] * cash.available[0],
        twenty: notesNominal[1] * cash.available[1],
        fifty: notesNominal[2] * cash.available[2],
        hundred: notesNominal[3] * cash.available[3]
    },

    balance = {
        value: getRandomInt(500, 7000),
        dollarSign: '$',
        coins: '.00',
        onScreen: ''
    },

    stock = {
        total: cashInStock.ten + cashInStock.twenty + cashInStock.fifty +  cashInStock.hundred,
        cashExist: true,
        minimal: 0
    };

cashExisting();

function cashExisting() {
    if        (cashInStock.ten !== 0) {
        stock.minimal = notesNominal[0];
        stock.cashExist = true;
    } else if (cashInStock.twenty !== 0) {
        stock.minimal = notesNominal[1];
        stock.cashExist = true;
    } else if (cashInStock.fifty !== 0) {
        stock.minimal = notesNominal[2];
        stock.cashExist = true;
    } else if (cashInStock.hundred !== 0) {
        stock.minimal = notesNominal[3];
        stock.cashExist = true;
    } else {
        stock.cashExist = false;
    }
}

function balanceOnScreen() {
    balance.onScreen = balance.dollarSign + balance.value + balance.coins;
}

function start() {
    document.getElementById('message').innerHTML = 'Welcome, customer!<br>Please choose an option:';
    document.getElementById('message').classList.remove('hide');
    document.getElementsByClassName('startBtn')[0].classList.add('hide');
    document.getElementsByClassName('balanceBtn')[0].classList.remove('hide');
    document.getElementsByClassName('withdrawBtn')[0].classList.remove('hide');
    document.getElementsByClassName('finishBtn')[0].classList.remove('hide');
}

function endWork() {
    document.getElementById('message').innerHTML = 'Have a nice day!';
    document.getElementsByClassName('balanceBtn')[0].classList.add('hide');
    document.getElementsByClassName('withdrawBtn')[0].classList.add('hide');
    document.getElementsByClassName('finishBtn')[0].classList.add('hide');
    document.getElementsByClassName('startBtn')[0].classList.remove('hide');
}

function balanceCheck() {
    balanceOnScreen();
    document.getElementById('message').innerHTML = 'Your balance is ' + balance.onScreen;
    document.getElementsByClassName('balanceBtn')[0].classList.add('hide');
    document.getElementsByClassName('withdrawBtn')[0].classList.add('hide');
    document.getElementsByClassName('finishBtn')[0].classList.add('hide');
    document.getElementsByClassName('balanceBack')[0].classList.remove('hide');
}

function balanceBack() {
    document.getElementById('message').innerHTML = 'Please choose an option:';
    document.getElementsByClassName('balanceBtn')[0].classList.remove('hide');
    document.getElementsByClassName('withdrawBtn')[0].classList.remove('hide');
    document.getElementsByClassName('finishBtn')[0].classList.remove('hide');
    document.getElementsByClassName('balanceBack')[0].classList.add('hide');
}

function withdraw() {
    if (stock.cashExist) {
        document.getElementById('message').innerHTML = 'Please enter the amount in multiplies of ' + stock.minimal + ' and less than $5000.00';
        document.getElementById('input').classList.remove('hide');
        document.getElementsByClassName('getCashBtn')[0].classList.remove('hide');
    } else {
        document.getElementById('message').innerHTML = 'Sorry, out of cash';
    }
    document.getElementsByClassName('field')[0].innerHTML = '&#62;&#62; ';
    document.getElementsByClassName('balanceBtn')[0].classList.add('hide');
    document.getElementsByClassName('withdrawBtn')[0].classList.add('hide');
    document.getElementsByClassName('finishBtn')[0].classList.add('hide');
    document.getElementsByClassName('withdrawBack')[0].classList.remove('hide');
}

function withdrawBack() {
    document.getElementById('message').innerHTML = 'Please choose an option:';
    document.getElementById('cash').classList.add('hide');
    document.getElementById('input').classList.add('hide');
    document.getElementsByClassName('getCashBtn')[0].classList.add('hide');
    document.getElementsByClassName('balanceBtn')[0].classList.remove('hide');
    document.getElementsByClassName('withdrawBtn')[0].classList.remove('hide');
    document.getElementsByClassName('finishBtn')[0].classList.remove('hide');
    document.getElementsByClassName('withdrawBack')[0].classList.add('hide');
}

function num1() {
    document.getElementsByClassName('field')[0].innerHTML += '1';
    limit();
}

function num2() {
    document.getElementsByClassName('field')[0].innerHTML += '2';
    limit();
}

function num3() {
    document.getElementsByClassName('field')[0].innerHTML += '3';
    limit();
}

function num4() {
    document.getElementsByClassName('field')[0].innerHTML += '4';
    limit();
}

function num5() {
    document.getElementsByClassName('field')[0].innerHTML += '5';
    limit();
}

function num6() {
    document.getElementsByClassName('field')[0].innerHTML += '6';
    limit();
}

function num7() {
    document.getElementsByClassName('field')[0].innerHTML += '7';
    limit();
}

function num8() {
    document.getElementsByClassName('field')[0].innerHTML += '8';
    limit();
}

function num9() {
    document.getElementsByClassName('field')[0].innerHTML += '9';
    limit();
}

function num0() {
    document.getElementsByClassName('field')[0].innerHTML += '0';
    limit();
}

function numClear() {
    var tempString = document.getElementsByClassName('field')[0].innerHTML;
    document.getElementsByClassName('field')[0].innerHTML = tempString.slice(0, -1);
}

function numClearAll() {
    document.getElementsByClassName('field')[0].innerHTML = '&#62;&#62; ';
}

function limit() {
    var maxChar = 59;
    if (document.getElementsByClassName('field')[0].innerHTML.length > maxChar) {
        var tempStr = document.getElementsByClassName('field')[0].innerHTML;
        document.getElementsByClassName('field')[0].innerHTML = tempStr.substr(0, maxChar);
    }
}

function getCash() {
    cash.withdraw = document.getElementsByClassName('field')[0].innerHTML;
    cash.withdraw = +(cash.withdraw.substr(9, cash.withdraw.length));
    cash.temp = cash.withdraw % stock.minimal;

    if(!cash.withdraw) {
        document.getElementsByClassName('field')[0].innerHTML = '&#62;&#62; ';
    }

    if (cash.temp > 0) {
        wrongAmount();
    }

    if (cash.withdraw > balance.value) {
        balanceEmpty();
        return;
    }

    if (cash.withdraw > 5000) {
        document.getElementById('message').innerHTML = 'Error<br>ATM can&#39;t cash out amount more than ' + balance.dollarSign + 5000 + balance.coins;
    }

    cashCalculation();

    giveCash();
}

function wrongAmount() {
    document.getElementById('message').innerHTML = 'Error<br>Please enter the amount in multiplies of ' + stock.minimal;
    document.getElementsByClassName('field')[0].innerHTML = '&#62;&#62; ';
}

function cashCalculation() {
    var temp = {
        main: 0,
        hundred: 0,
        fifty: 0,
        twenty: 0,
        left: 0
    };

    temp.main = cash.withdraw;
    temp.left = temp.main;

    temp.hundred = temp.main / 2;
    cash.withdrawNotes[3] = Math.floor(temp.hundred / notesNominal[3]);
    temp.left = temp.left - (notesNominal[3] * cash.withdrawNotes[3]);

    temp.fifty = temp.main / 10 * 3;
    cash.withdrawNotes[2] = Math.floor(temp.fifty / notesNominal[2]);
    temp.left = temp.left - (notesNominal[2] * cash.withdrawNotes[2]);

    temp.twenty = temp.main / 5;
    cash.withdrawNotes[1] = Math.floor(temp.twenty / notesNominal[1]);
    temp.left = temp.left - (notesNominal[1] * cash.withdrawNotes[1]);

    cash.withdrawNotes[0] = temp.left / notesNominal[0];
}

function giveCash() {
    balance.value = balance.value - cash.withdraw;
    document.getElementById('message').innerHTML = 'Here is your cash:';
    document.getElementsByClassName('field')[0].innerHTML = '&#62;&#62; ';
    document.getElementById('input').classList.add('hide');
    document.getElementsByClassName('getCashBtn')[0].classList.add('hide');
    document.getElementById('cash').classList.remove('hide');
    document.getElementById('cash').innerHTML = '$10:&nbsp;&nbsp;' + cash.withdrawNotes[0] + '<br>' + '$20:&nbsp;&nbsp;' + cash.withdrawNotes[1] + '<br>' + '$50:&nbsp;&nbsp;' + cash.withdrawNotes[2] + '<br>' + '$100:&nbsp;' + cash.withdrawNotes[3] + '<br><br>' + balance.dollarSign + cash.withdraw + balance.coins + ' in total';

    for (var i = 0; i < 4; i++) {
        cash.available[i] -= cash.withdrawNotes[i];
    }
}

function balanceEmpty() {
    document.getElementById('message').innerHTML = 'You don&#39;t have enough money';
    document.getElementById('input').classList.add('hide');
    document.getElementsByClassName('getCashBtn')[0].classList.add('hide');
}

function reloadPage() {
    location.reload(true);
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}