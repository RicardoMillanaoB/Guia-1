var btn_enviar = document.getElementById("btn-enviar");

var aut1 = document.getElementById("autor");
var com1 = document.getElementById("comentario");

var des_aut = document.getElementsByName("aut");
var des_com = document.getElementsByName("com");

var autores = new Array();
var comentarios = new Array();

btn_enviar.addEventListener("click",function(){
    autores.push(document.getElementById("autor").value);
    comentarios.push(document.getElementById("comentario").value)
    limpiar();
    limite();
})
function limpiar(){
    document.getElementById("autor").value = "";
    document.getElementById("comentario").value = "";
}
function limite(){
    if(autores.length>=4){
        for(var i = 0; i < autores.length;i++){
            des_aut[i].innerHTML = autores[autores.length-4+i];
            des_com[i].innerHTML = comentarios[comentarios.length-4+i];
        }
    }else{
        des_aut[autores.length-1].innerHTML = autores[autores.length-1];
        des_com[autores.length-1].innerHTML = comentarios[comentarios.length-1];
    }
}

function limitaAutor(min_caracteres){
    var autor_input = document.getElementById("autor");
    var autor_span = document.getElementById("span-autor");
    
    if(autor_input.value.length < min_caracteres){
        autor_span.innerHTML = "El campo Autor debe tener minímo 3 caracteres";
        return true;
    }else{
        autor_span.innerHTML = "&nbsp";       
    }

}

function limitaComentario(min_caracteres){
    var comentario_input = document.getElementById("comentario");
    var comentario_span = document.getElementById("span-comentario");

    if(comentario_input.value.length < min_caracteres){
        comentario_span.innerHTML = "El campo Comentario debe tener minímo 3 caracteres";
        return true;
    }else{
        comentario_span.innerHTML = "&nbsp";   
          
    }
}
