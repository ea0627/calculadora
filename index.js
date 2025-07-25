// 🟢 Pedir números y validarlos
function pedirNumero(mensaje) {
    const valor = parseFloat(prompt(mensaje));
    return isNaN(valor) ? 0 : valor;
}

const numero1 = pedirNumero("Ingresa el primer número:");
const numero2 = pedirNumero("Ingresa el segundo número:");
const numero3 = pedirNumero("Ingresa el tercer número:");

console.log("Calculadora Nivel 1");
console.log("El número 1 es:", numero1);
console.log("El número 2 es:", numero2);
console.log("La suma es:", numero1 + numero2);
console.log("La resta es:", numero1 - numero2);
console.log("La multiplicación es:", numero1 * numero2);
console.log("La división es:", numero2 !== 0 ? numero1 / numero2 : "Error: división por cero");

console.log("-------------- Nivel 2 con funciones --------------");

function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "Error: división por cero"; }

console.log("Suma:", sumar(numero1, numero2));
console.log("Resta:", restar(numero1, numero2));
console.log("Multiplicación:", multiplicar(numero1, numero2));
console.log("División:", dividir(numero1, numero2));

console.log("-------------- Nivel 3 --------------");

const numero4 = pedirNumero("¿Qué porcentaje deseas calcular?");
const numero5 = pedirNumero("¿De qué número?");
const numero6 = pedirNumero("¿Qué porcentaje deseas generar?");
const numero7 = pedirNumero("¿De qué número?");

function cuadradoDeUnNumero(a) {
    return multiplicar(a, a);
}

function promedioDeTresNumeros(a, b, c) {
    return (a + b + c) / 3;
}

function calcularPorcentaje(porcentaje, numero) {
    return (porcentaje * numero) / 100;
}

function generarPorcentaje(valor, total) {
    return total !== 0 ? (valor * 100) / total : "Error: división por cero";
}

console.log("Cuadrado de", numero1, "es:", cuadradoDeUnNumero(numero1));
console.log("Promedio de", numero1, numero2, numero3, "es:", promedioDeTresNumeros(numero1, numero2, numero3));
console.log(numero4 + "% de", numero5, "es:", calcularPorcentaje(numero4, numero5));
console.log(generarPorcentaje(numero6, numero7), "corresponde al", numero6 + "% de", numero7);
