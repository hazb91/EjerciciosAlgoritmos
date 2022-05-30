/* 1. Algoritmo para adivinar el mayor de 3 numeros
dados por el usuario

let num1 = prompt("Primer número entre 1 y 100");
if (num1<1 || num1>100){
    alert("Número incorrecto")
    let num1 = parseFloat ("Primer número")
}

let num2 = prompt("Segundo número entre 1 y 100");
if (num2<1 || num2>100){
    alert("Número incorrecto")
    let num2 = parseFloat ("Segundo número")
}

let num3 = prompt("Tercer número entre 1 y 100");
if (num3<1 || num3>100){
    alert("Número incorrecto")
    let num3 = parseFloat ("Tercer número")
}

else if ((num1>=num2) && (num1>=num3)){
    alert("El número mayor es: " + num1);
}

else if ((num2>=num1) && (num2>=num3)){
    alert("El número mayor es: " + num2);
}

else if ((num3>=num1) && (num3>=num2)){
alert("El número mayor es: " + num3);
}*/

/* 2. Algoritmo para adivinar el menor de 3 numeros
dados por el usuario


let num1 = prompt("Primer número entre 1 y 100");
if (num1<1 || num1>100){
    alert("Número incorrecto")
    let num1 = parseFloat ("Primer número")
}

let num2 = prompt("Segundo número entre 1 y 100");
if (num2<1 || num2>100){
    alert("Número incorrecto")
    let num2 = parseFloat ("Segundo número")
}

let num3 = prompt("Tercer número entre 1 y 100");
if (num3<1 || num3>100){
    alert("Número incorrecto")
    let num3 = parseFloat ("Tercer número")
}

if((num1<=num2) && (num1<=num3)){
    alert("El número menor es: " + num1);
}

else if ((num2<=num1) && (num2<=num3)){
        alert("El número menor es: " + num2);
}

else if ((num3<=num1) && (num3<=num2)){
    alert("El número menor es: " + num3);
}*/

// Adivinarl el numero entre 1 y 100 en el menor numero de intentos

function Adivinar() {
    let superior = 100;
    let inferior = 0;
    let noEncontrado = true;
    while (noEncontrado) {
        let mid = parseInt (inferior + ((superior - inferior) /2));
        console.log(mid);
        console.log((superior-inferior)/2);
        if (((superior-inferior)/2)<1) {
            noEncontrado = false;
            alert("Tu número es el " + (parseInt(mid) + 1));
            break;
        }
        let res = confirm ("Tu número es menor o igual a " + mid);
        if (res) {
            superior=mid;
        } else {
            inferior = mid;
        }
        console.log(inferior, superior);
    }
}
Adivinar();

/*4. Algoritmo para solicitar un numero entre 100 y 200 y saber 
si es multiplo de 3


let num1 = prompt("Ingresa un número entre 100 y 200");
if (num1<100 || num1>200){
    alert("Número incorrecto")
    let num1 = parseInt ("El numero es: " + num1)
}
console.log (num1)

if (num1%3 == 0){
    alert("El número es divisible entre 3");
}

else 
    alert("El número no es divisible entre 3");*/

//5. leer 3 números y determinar si uno es la suma de los otros 2

// let num1 = parseFloat (prompt("Primer número"));

// let num2 = parseFloat (prompt("Segundo número"));

// let num3 = parseFloat (prompt("Tercer número"));

// if ( (num1 + num2) == num3) {
//     alert ("el tercer número es suma de los otros dos");
// }

// else if ( (num1 + num3) == num2) {
//     alert ("el segundo número es suma de los otros dos");
// }

// else if ( (num2 + num3) == num1) {
//     alert ("el primer número es suma de los otros dos");
// }

// else  {
//     alert ("Ningun número es suma de los otros 2")
// }


//6. Algoritmo para leer un número y determinar si es par o impar

// let num1 = prompt("Ingresa un número");
// if (num1 == 0){
//     alert("numero invalido")
// }

// if (num1%2 == 0 && num1 != 0){
//     alert("El número es par");
// }

// else if (num1 != 0) {
//     alert("El número es impar")
// };
