function calcTip() {
    var subtotalElem = document.getElementById('subtotal');
    var tipElem = document.getElementById('tip');
    var totalElem = document.getElementById('total');
    var subtotal = parseFloat(subtotalElem.value) || 0;
    var tip = ((parseFloat(tipElem.value) || 0) / 100) * subtotal;
    var total = subtotal + tip;
    totalElem.innerHTML = '$' + total;
}