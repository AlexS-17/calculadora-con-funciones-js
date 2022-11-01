let repetir = "si";

// Funciones
function sumar (num1, num2){
    alert("El resultado de tu suma es: " + (num1+num2));
}

function restar (num1, num2){
    alert("El resultado de tu resta es: " + (num1-num2));
}

function multiplicar (num1, num2){
    alert("El resultado de tu multiplicación es: " + (num1*num2));
}

function dividir (num1, num2){
    alert("El resultado de tu división es: " + (num1/num2));
}

// Do / while
do{

//Variables
let operacion = prompt("¿Qué operación deseas realizar, sumar, restar multiplicar o dividir");

let op1 = parseInt(prompt("Introduce el primer número"));

let op2 = parseInt(prompt("Introduce el segundo número"));



// Condición

if (operacion == "sumar"){
    sumar(op1,op2)

}else if (operacion == "restar"){
    restar(op1,op2)
    
}else if (operacion == "multiplicar"){
    multiplicar(op1,op2)
    
}else if (operacion == "dividir"){
    dividir(op1,op2)
    
}else {
    alert("operación no disponible")
}

repetir = prompt("¿Deseas realizar otra operación?");

}while(repetir=="si");

