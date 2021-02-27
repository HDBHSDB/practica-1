function formula(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    document.getElementById("x").innerHTML = sumar(a,c) - sumar(a,b) * sumar(c,b);
}

function sumar(a, b){
    var suma = a + b;
    return suma;
}