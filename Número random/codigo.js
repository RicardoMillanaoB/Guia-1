var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado");

var input_min = document.getElementById("input-min");
var input_max = document.getElementById("input-max");

btn.addEventListener("click",function(){
    var n1 = input_min.value;
    var n2 = input_max.value;
    resultado.innerHTML = aleatorio(n1,n2);
    
    
});

function aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
}