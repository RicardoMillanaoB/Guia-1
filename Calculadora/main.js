var btn_suma = document.getElementById("btn-suma");
var btn_resta = document.getElementById("btn-resta");
var btn_multiplicacion = document.getElementById("btn-multiplicacion");
var btn_division= document.getElementById("btn-division");

var operacion = document.getElementById("operacion");
var resultado = document.getElementById("resultado");
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");


btn_suma.addEventListener("click",function(){
    resultado.style.color = 'black';
    var n1 = inputUno.value;
    var n2 = inputDos.value;

    if(validarNumeros(n1,n2)){
        operacion.innerHTML = '+';
        resultado.innerHTML = suma(n1,n2);
    }else{
        resultado.style.color = 'red';
        resultado.innerHTML = 'operacion no valida';
    }
    
});
btn_resta.addEventListener("click",function(){
    resultado.style.color = 'black';
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    if(validarNumeros(n1,n2)){
        operacion.innerHTML = '-';
        resultado.innerHTML = restar(n1,n2);
    }else{
        resultado.style.color = 'red';
        resultado.innerHTML = 'operacion no valida';
    }
    
});
btn_multiplicacion.addEventListener("click",function(){
    resultado.style.color = 'black';
    var n1 = inputUno.value;
    var n2 = inputDos.value;
   
    if(validarNumeros(n1,n2)){
        operacion.innerHTML = 'x';
        resultado.innerHTML = multiplicar(n1,n2);
    }else{
        resultado.style.color = 'red';
        resultado.innerHTML = 'operacion no valida';
    }
    
});
btn_division.addEventListener("click",function(){
    resultado.style.color = 'black';
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    if(validarNumeros(n1,n2)){
        operacion.innerHTML = '÷';
        resultado.innerHTML = dividir(n1,n2);
    }else{
        resultado.style.color = 'red';
        resultado.innerHTML = 'operacion no valida';
        
    }
   

});
validarNumeros(inputUno.value,inputDos.value);

function suma(n1, n2){
    return parseInt(n1) + parseInt(n2);
}
function restar(n1, n2){
    return parseInt(n1) - parseInt(n2);
}
function multiplicar(n1, n2){
    return parseInt(n1) * parseInt(n2);
}
function dividir(n1, n2){

    if(n2 == 0){
        resultado.style.color = 'red';
        return 'división no permitida';
    }else{
        return parseInt(n1) / parseInt(n2);
    }
    
}
function validarNumeros(n1,n2){
    if(n1%1==0 && n2%1==0){
        return true;
    }else{
        return false;
    }
}