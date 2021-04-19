var btn_1 = document.getElementById("btn-1");
var btn_2 = document.getElementById("btn-2");
var btn_3 = document.getElementById("btn-3");
var btn_4 = document.getElementById("btn-4");
var btn_5 = document.getElementById("btn-5");
var btn_6 = document.getElementById("btn-6");
var btn_7 = document.getElementById("btn-7");
var btn_8 = document.getElementById("btn-8");
var btn_9 = document.getElementById("btn-9");
var btn_0 = document.getElementById("btn-0");

var btn_C = document.getElementById("btn-c");
var btn_dividir = document.getElementById("btn-dividir");
var btn_masmenos = document.getElementById("btn-masmenos");
var btn_multiplicar = document.getElementById("btn-multiplicar");
var btn_borrar = document.getElementById("btn-borrar");
var btn_restar= document.getElementById("btn-restar");
var btn_sumar = document.getElementById("btn-sumar");
var btn_resolver = document.getElementById("btn-resolver");
var btn_punto = document.getElementById("btn-punto");

var primer = '0';
var segundo = '0';

var primer_numero = document.getElementById("primer-numero");
var operacion = document.getElementById("operacion");
var segundo_numero = document.getElementById("segundo-numero");

var isOperacion = new Boolean(false);

var etiqueta_operacion = '';

btn_1.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        primer = primer+'1';
        primer_numero.innerHTML = primer; 
      
    }else{
        segundo = segundo+'1';
        segundo_numero.innerHTML = segundo;
    }
});
btn_2.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
       
        primer = primer+'2';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'2';
        segundo_numero.innerHTML = segundo;
    }
    
});
btn_3.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        
        primer = primer+'3';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'3';
        segundo_numero.innerHTML = segundo;
    }
});
btn_4.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        
        primer = primer+'4';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'4';
        segundo_numero.innerHTML = segundo;
    }
});
btn_5.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        
        primer = primer+'5';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'5';
        segundo_numero.innerHTML = segundo;
    }
});
btn_6.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
       
        primer = primer+'6';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'6';
        segundo_numero.innerHTML = segundo;
    }
});
btn_7.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
       
        primer = primer+'7';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'7';
        segundo_numero.innerHTML = segundo;
    }
});
btn_8.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        
        primer = primer+'8';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'8';
        segundo_numero.innerHTML = segundo;
    }
});
btn_9.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
     
        primer = primer+'9';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'9';
        segundo_numero.innerHTML = segundo;
    }
});
btn_0.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        if(primer=='0'){
            primer_numero.innerHTML= '0';
        }else{
        primer = primer+'0';
        primer_numero.innerHTML = primer;
        }
    }else{
        segundo = segundo+'0';
        segundo_numero.innerHTML = segundo;
    }
});


btn_C.addEventListener("click",function(){
    primer = 0;
    primer_numero.innerHTML = '&nbsp';
    operacion.innerHTML = '&nbsp';
    isOperacion = false;
    segundo = 0;
    segundo_numero.innerHTML = '&nbsp';
});
btn_dividir.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        isOperacion = true;
        etiqueta_operacion = 'dividir';
        operacion.innerHTML = '/';
    }
});
btn_masmenos.addEventListener("click",function(){
    
    if(isOperacion == false){
        if(primer != 0){
            primer = primer*-1;
            deleteCero();
            primer_numero.innerHTML = primero;
            
        }
        
    }else{
        if (segundo != 0){
            segundo = parseFloat(segundo) * -1;
            segundo_numero.innerHTML = segundo;
        }
    }
});
btn_multiplicar.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        isOperacion = true;
        etiqueta_operacion = 'multiplicar';
        operacion.innerHTML = 'x';
    }
});
btn_borrar.addEventListener("click",function(){
    
    if(isOperacion == false){
       
        const lista = primer.split('');
        lista.pop();
        primer = 0;
        primer = lista.join('');
        if(lista[0] = null){
            primer =  '&nbsp';
        }
        primer_numero.innerHTML = primer;

    
    }else{
        const lista = segundo.split('');
        lista.pop();
        segundo = 0;
        segundo = lista.join('');
        segundo_numero.innerHTML = segundo;
    }
    deleteCero();
});
btn_restar.addEventListener("click",function(){
    deleteCero();
    
    if(isOperacion == false){
        isOperacion = true;
        etiqueta_operacion = 'restar';
        operacion.innerHTML = '-';
    }
});

btn_sumar.addEventListener("click",function(){
    deleteCero();
    if(isOperacion == false){
        isOperacion = true;
        etiqueta_operacion = 'sumar';
        operacion.innerHTML = '+';
    }
});

btn_punto.addEventListener("click",function(){
    if(isOperacion == false){
        primer = primer+'.';
        primer_numero.innerHTML = primer;
    }else{
        segundo = segundo+'.';
        segundo_numero.innerHTML = segundo;
    }
});


btn_resolver.addEventListener("click",function(){
   
    switch(etiqueta_operacion){
        case 'restar':
            primer = restar(primer,segundo);
            segundo_numero.innerHTML = primer;
            resultado();
            break;
        case 'sumar':
            primer = sumar(primer,segundo);
            segundo_numero.innerHTML = primer;
            resultado();
            break;
        case 'multiplicar':
            primer = multiplicar(primer,segundo)
            segundo_numero.innerHTML = primer;
            resultado();
            break;
        case 'dividir':
            
            if(isDivisible(primer,segundo) == false){
                segundo_numero.innerHTML = 'No permitido';
                primer = 0;
                
            }else{
                primer = dividir(primer,segundo);
                segundo_numero.innerHTML = primer;
            }
            resultado();
            
            break;
    }

});

function resultado(){
    segundo_numero.style.color = 'red';
    primer_numero.innerHTML = '&nbsp';
    operacion.innerHTML = '&nbsp';
    isOperacion = false;
    segundo = 0;
    etiqueta_operacion = '';

}

function deleteCero(){
    //mejorar code smell
    if(isOperacion == false){
        segundo_numero.style.color = '#58B698';
        segundo_numero.innerHTML = '&nbsp';
        primer_numero.innerHTML = primer;
    }
    if(primer=='0'&& isOperacion == false){
        primer = '';    
    }else if(segundo == '0'){
        segundo = '';
    }
}
function sumar(n1,n2){
    return parseFloat(n1)+parseFloat(n2);
}
function restar(n1,n2){
    return parseFloat(n1)-parseFloat(n2);
}
function multiplicar(n1,n2){
    return parseFloat(n1) * parseFloat(n2);
}
function dividir(n1,n2){
    if(isDivisible(n1,n2)){
        return parseFloat(n1)/parseFloat(n2);
    }else{
        return 'No permitido';
    }
    
}

function isDivisible(n1,n2){
    if(n2!=0){
        return true;
    }else{
        return false;
    }
}