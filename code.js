let txtEncriptar = document.getElementById('textoEncriptar').value;
let munieco = document.getElementById('contenedormun');
let btnCopiar = document.getElementById("botonCopiar"); 
let contenedor = document.getElementById('contenedor-parrafos');
let resultado = document.getElementById('resultado');
let flag = false;


function obtenerEncriptado(){
    var cajaTexto = recuperaTexto();

    validarTexto(cajaTexto);

    if(cajaTexto){
        if(flag === false){
        ocultar();
        desocultar();
        resultado.textContent = encriptarTexto(cajaTexto);
        }else{
        alert ("Sólo letras minúsculas y sin acentos");
        flag = false;
        }
    }else{
        alert("No se ha encontrado información a encriptar o desencriptar");
        flag = false;
    }
}

function obtenerDesencriptado(){
   
    var cajaTexto = recuperaTexto();
    if(cajaTexto){
        ocultar();
        desocultar();
        resultado.textContent = desencriptarTexto(cajaTexto);
    }else{
        alert("No se ha encontrado información a encriptar o desencriptar");
        flag = false;
    }
}

function recuperaTexto(){
    let txtEncriptar = document.getElementById('textoEncriptar').value;
    return txtEncriptar;
}

function ocultar(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function desocultar(){
    btnCopiar.classList.add("desocultar");
}

function validarTexto(frase){
    var regEx = new RegExp("([a-z ])");
    if(frase.match(regEx)){
        console.log("formato correcto");
    }else {
        console.log("formato incorrecto");
        flag = true;
        return flag;
    }
    
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    

    for(let i = 0; i < texto.length; i++){

        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }else{
            textoFinal = textoFinal + texto[i]
        }

    }
    return textoFinal;
    
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){

        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }else{
            textoFinal = textoFinal + texto[i]
        }

    }
    return textoFinal;
    
}



    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
});