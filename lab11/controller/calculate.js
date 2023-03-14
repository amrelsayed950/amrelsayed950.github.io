function numberOperation(req, res) {

    let num1 = parseInt(req.body.number1);
    let num2 = parseInt(req.body.number2);
    let op = req.body.operation;

    let total;

    switch (op) {
        case 'add':
            total = add(num1, num2);
            break;
        case 'subtract':
            total = subtract(num1, num2);
            break;
        case 'multiply':
            total = multiply(num1, num2);
            break;

        case 'divide':
            total = divide(num1, num2);
            break;

        default:
            break;
    }
    res.redirect(`/results?results=${total}`);
}


function add(val1, val2) {

    return val1 + val2;
}

function subtract(val1, val2) {
    return val1 - val2;
}
function multiply(val1, val2) {
    return val1 * val2;
}
function divide(val1, val2) {

    return val1 / val2;
}

module.exports = {
    numberOperation
    // add,
    // subtract,
    // multiply,
    // divide
};