function add() {
    var n1 = parseInt(document.getElementById("firstNumber").value);
    var n2 = parseInt(document.getElementById("secondNumber").value);

    var add = n1 + n2;
    document.getElementById("result").value=add; 
}

function subs() {
    var n1 = parseInt(document.getElementById("firstNumber").value);
    var n2 = parseInt(document.getElementById("secondNumber").value);
    var subs = n1 - n2;
    document.getElementById("result").value=subs;
}
function mult() {
    var n1 = parseInt(document.getElementById("firstNumber").value);
    var n2 = parseInt(document.getElementById("secondNumber").value);
    var mult = n1 * n2;
    document.getElementById("result").value=mult;
}
function division() {
    var n1 = parseInt(document.getElementById("firstNumber").value);
    var n2 = parseInt(document.getElementById("secondNumber").value);
    var division = n1 / n2;
    document.getElementById("result").value=division;
}