let textoEntrada = document.getElementById('cajaTextoEntrada');
let btnEncriptar  = document.getElementById('btnEncriptar');
let btnDesencriptar = document.getElementById('btnDesencriptar');
let textoSalida = document.getElementById('msjFinal');
let btnCopiar = document.getElementById('btnCopiar');
let imgPersona = document.getElementById('imgPersona');
let msjFinal2 = document.getElementById('msjFinal2');
let seccDerecha = document.getElementById('seccDerecha');

function remplazar(salida){
    textoSalida.innerHTML = salida;
    msjFinal2.style.display = "none";
    btnCopiar.style.display = "block"
    seccDerecha.classList.add("ajuste");
    textoSalida.classList.add("ajusteFinal");
    textoEntrada.value = '';
    imgPersona.classList.add("oculto");
}

let cambio = [
    ['e', 'enter'],
    ['o', 'ober'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['u', 'ufat'],
];

function encriptar(){

    let texto = textoEntrada.value.toLowerCase();

    if(texto != ""){
        for(let i=0 ; i < cambio.length ; i++){
            if(texto.includes(cambio[i][0])){
                texto = texto.replaceAll(cambio[i][0], cambio[i][1]);
            }
        }
        remplazar(texto);
    } else {
        alert("Hace falta texto");
    }
}

function desencriptar(){

    let texto = textoEntrada.value.toLowerCase();

    if(texto != ""){
        for(let i=0 ; i < cambio.length ; i++){
            if(texto.includes(cambio[i][1])){
                texto = texto.replaceAll(cambio[i][1], cambio[i][0]);
            }
        }
        remplazar(texto);
    } else {
        alert("Hace falta texto");
    }
}

function copiar(){
    let texto = textoSalida;

    texto.select();
    document.execCommand('copy')
    textoSalida.innerHTML = "";
    imgPersona.classList.remove("oculto");
    btnCopiar.style.display = "none";
    seccDerecha.classList.remove("ajuste");
    textoSalida.classList.remove("ajusteFinal");
    textoEntrada.focus();
    msjFinal2.style.display = "flex";
}