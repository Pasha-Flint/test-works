var fieldIsCorrect = {
        name: false,
        position: false,
        brand: false,
        phone: false,
        web: false,
        email: false,
        address: false,
        counter: 0
    },

    fieldContent = {
        name: '0',
        position: '0',
        brand: '0',
        phone: '0',
        web: '0',
        email: '0',
        address: '0'
    };

function popUp() {
    document.getElementById('popup').classList.remove('hide');
}

function closePopUp() {
    document.getElementById('popup').classList.add('hide');
}

function switchForm() {
    document.getElementById('initial').classList.toggle('hide');
}

function mainFunction() {
    closePopUp();
    verification();

    if (fieldIsCorrect.counter === 7) {
        colorFields();
        writeFields();
    } else {
        colorFields();
    }
}

function verification() {
    nameVerify();
    positionVerify();
    brandVerify();
    phoneVerify();
    webVerify();
    emailVeridy();
    addressVerify();

    if (fieldIsCorrect.name === true) {
        fieldIsCorrect.counter += 1;
    }

    if (fieldIsCorrect.position === true) {
        fieldIsCorrect.counter += 1;
    }

    if (fieldIsCorrect.brand === true) {
        fieldIsCorrect.counter += 1;
    }

    if (fieldIsCorrect.phone === true) {
        fieldIsCorrect.counter += 1;
    }

    if (fieldIsCorrect.web === true) {
        fieldIsCorrect.counter += 1;
    }

    if (fieldIsCorrect.email === true) {
        fieldIsCorrect.counter += 1;
    }

    if (fieldIsCorrect.address === true) {
        fieldIsCorrect.counter += 1;
    }
}

function writeFields() {
    document.getElementById('name').innerHTML = fieldContent.name;
    document.getElementById('position').innerHTML = fieldContent.position;
    document.getElementById('brand').innerHTML = fieldContent.brand;
    document.getElementById('phone').innerHTML = fieldContent.phone;
    document.getElementById('web').innerHTML = fieldContent.web;
    document.getElementById('web2').innerHTML = fieldContent.web;
    document.getElementById('email').innerHTML = fieldContent.email;
    document.getElementById('address').innerHTML = fieldContent.address;
    document.getElementsByClassName('main-card')[0].classList.remove('hide');
    document.getElementById('close').classList.remove('hide');
    document.getElementById('initial').classList.add('hide');
}

function colorFields() {
    if (fieldIsCorrect.name === false) {
        document.getElementById('name-field').classList.add('wrong-field');
        document.getElementById('name-field').classList.remove('correct-field');
    } else {
        document.getElementById('name-field').classList.add('correct-field');
        document.getElementById('name-field').classList.remove('wrong-field');
    }

    if (fieldIsCorrect.position === false) {
        document.getElementById('position-field').classList.add('wrong-field');
        document.getElementById('position-field').classList.remove('correct-field');
    } else {
        document.getElementById('position-field').classList.add('correct-field');
        document.getElementById('position-field').classList.remove('wrong-field');

    }

    if (fieldIsCorrect.brand === false) {
        document.getElementById('brand-field').classList.add('wrong-field');
        document.getElementById('brand-field').classList.remove('correct-field');
    } else {
        document.getElementById('brand-field').classList.add('correct-field');
        document.getElementById('brand-field').classList.remove('wrong-field');

    }

    if (fieldIsCorrect.phone === false) {
        document.getElementById('phone-field').classList.add('wrong-field');
        document.getElementById('phone-field').classList.remove('correct-field');
    } else {
        document.getElementById('phone-field').classList.add('correct-field');
        document.getElementById('phone-field').classList.remove('wrong-field');

    }

    if (fieldIsCorrect.web === false) {
        document.getElementById('web-field').classList.add('wrong-field');
        document.getElementById('web-field').classList.remove('correct-field');
    } else {
        document.getElementById('web-field').classList.add('correct-field');
        document.getElementById('web-field').classList.remove('wrong-field');
    }

    if (fieldIsCorrect.email === false) {
        document.getElementById('email-field').classList.add('wrong-field');
        document.getElementById('email-field').classList.remove('correct-field');
    } else {
        document.getElementById('email-field').classList.add('correct-field');
        document.getElementById('email-field').classList.remove('wrong-field');
    }

    if (fieldIsCorrect.address === false) {
        document.getElementById('address-field').classList.add('wrong-field');
        document.getElementById('address-field').classList.remove('correct-field');
    } else {
        document.getElementById('address-field').classList.add('correct-field');
        document.getElementById('address-field').classList.remove('wrong-field');
    }

    fieldIsCorrect.counter = 0;
}

function nameVerify() {
    var temp = document.getElementById('name-field').value;
    if (temp !== "") {
        fieldIsCorrect.name = true;
        fieldContent.name = temp;
    }
}

function positionVerify() {
    var temp = document.getElementById('position-field').value;
    if (temp !== "") {
        fieldIsCorrect.position = true;
        fieldContent.position = temp;
    }
}

function brandVerify() {
    var temp = document.getElementById('brand-field').value;
    if (temp !== "") {
        fieldIsCorrect.brand = true;
        fieldContent.brand = temp;
    }
}

function phoneVerify() {
    var temp = document.getElementById('phone-field').value;
    if (temp !== "") {
        var plus = temp.slice(0, 1);
        if (plus === '+') {
            var numbers = temp.slice(1);
            numbers = +numbers;
            var temp2 = 10;
            if ((typeof numbers) === (typeof temp2)) {
                fieldIsCorrect.phone = true;
                fieldContent.phone = temp;
            }
        }

    }
}

function addressVerify() {
    var temp = document.getElementById('address-field').value;
    if (temp !== "") {
        fieldIsCorrect.address = true;
        fieldContent.address = temp;
    }
}

function webVerify() {
    var temp = document.getElementById('web-field').value;
    if (temp !== "") {
        fieldIsCorrect.web = true;
        fieldContent.web = temp;
    }
}

function emailVeridy() {
    var temp = document.getElementById('email-field').value;
    if (temp !== "") {
        fieldIsCorrect.email = true;
        fieldContent.email = temp;
    }
}