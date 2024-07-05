const numero1 = parseInt(prompt("Ingresa el primer numero"));
const numero2 = parseInt(prompt("Ingresa el segundo numero"));



const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multi = numero1 * numero2;
const div = numero1 / numero2;

console.log("El numero 1 es: ", numero1);
console.log("El numero 2 es: ", numero2); 
console.log("Calculadora Nivel 1");
console.log("La suma de los dos numeros es: ", suma);
console.log("La resta de los dos numeros es: ", resta);
console.log("La multiplicacin de los dos numeros es: ", multi);
console.log("la division de los dos numeros es: ", div);

console.log("Calculadora Nivel 2");
console.log("--------------Testeo de Operaciones / Calculadora--------------");

// Funciones

function sumar(a, b) {
    return a+b
}

function restar(a, b) {
    return a-b
}

function multiplicar(a, b) {
    return a*b
}

function dividir(a, b) {
    return a/b
}

const resultadosuma = sumar(numero1, numero2);
const resuladoresta = restar(numero1, numero2);
const resultadomultiplicar = multiplicar(numero1, numero2);
const resultadodividir = dividir(numero1, numero2);

console.log("El resultado de la suma de ", numero1, " y ", numero2, " Utilizando funciones es:", resultadosuma);
console.log("El resultado de la resta de ", numero1, " y ", numero2, " Utilizando funciones es:", resuladoresta);
console.log("El resultado de la multiplicacion de ", numero1, " y ", numero2, " Utilizando funciones es:", resultadomultiplicar);
console.log("El resultado de la division de ", numero1, " y ", numero2, " Utilizando funciones es:", resultadodividir);

