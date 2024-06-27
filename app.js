let numeroSecreto = 0;
let intentos= 0; 
let listaNumeroSorteados = [];
let numeroMaximo= 10; 



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos==1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else{
        if (numeroDeUsuario < numeroSecreto){
            asignarTextoElemento("p","El numero es mayor");
        } else{
            asignarTextoElemento("p", "El numero es menor");
        }
        intentos ++;
        limpiarCaja(); 
    }
    return;
}; 

function limpiarCaja(){
    //asi se puede buscar por "id"
   document.querySelector("#valorUsuario").value="";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1 ; 
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")
    } else
        //si el numero generado esta incluido en la lista 
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
};

function condicionesInciales() {
    asignarTextoElemento("h1", "Juego del número secreto!"); 
    asignarTextoElemento("p", `Indica un numero del 1 al 10 ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1; 
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar el intervalo de numeros
    //Generar numero aleatorio
    //limpiar el numero de intentos
    condicionesInciales();
    //Desahabilitar el boton "nuevo juego"
    document.querySelector("#reiniciar").setAttribute("disabled","true")
    
    
}

condicionesInciales();