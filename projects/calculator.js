function addition() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let result = num1 + num2;

    if (result < 0) {
        document.getElementById('output').style.color = "red";
    } else {
        document.getElementById('output').style.color = "black";
    }

    document.getElementById("output").innerHTML = "Answer: " + result;
}

function subtraction() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let result = num1 - num2;

    if (result < 0) {
        document.getElementById('output').style.color = "red";
    } else {
        document.getElementById('output').style.color = "black";
    }

    document.getElementById("output").innerHTML = "Answer: " + result;
}

function multiplication() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let result = num1 * num2;

    if (result < 0) {
        document.getElementById('output').style.color = "red";
    } else {
        document.getElementById('output').style.color = "black";
    }

    document.getElementById("output").innerHTML = "Answer: " + result;
}

function division() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);

    if (num2 === 0) {
        document.getElementById('output').innerHTML = "CANNOT DIVIDE BY ZERO!!!";
        document.getElementById('output').style.color = "red";
        return;
    }

    let result = num1 / num2;

    if (result < 0) {
        document.getElementById('output').style.color = "red";
    } else {
        document.getElementById('output').style.color = "black";
    }

    document.getElementById("output").innerHTML = "Answer: " + result;
}

function powerbutton() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    num1=Number(num1);
    num2=Number(num2);
    let result = 1;


    for (let i = 0; i < num2; i++) {
        result *= num1;
    }

    if (result < 0) {
        document.getElementById('output').style.color = "red";
    } else {
        document.getElementById('output').style.color = "black";
    }

    document.getElementById("output").innerHTML = "Answer: " + result;
}

function clearall() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('output').innerHTML = "Answer: ";
    document.getElementById('output').style.color = 'black';
}
