const numero1 = parseInt(prompt("Ingresa el primer numero"));
const numero2 = parseInt(prompt("Ingresa el segundo numero"));
const numero3 = parseInt(prompt("Ingresa el tercer numero"));

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multi = numero1 * numero2;
const div = numero1 / numero2;
const prom = 100;
 
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


// Calculadora Nivel III
console.log("Calculadora Nivel 3");

const numero4 = parseInt(prompt("Que porcentaje desea calcular?"));
const numero5 = parseInt(prompt("De que numero?"));
const numero6 = parseInt(prompt("Que porcentaje desea generar?"));
const numero7 = parseInt(prompt("De que numero?"));


function cuadradoDeUnNumero(a,b) {
    const x= multiplicar(numero1,numero1);
    return x;
}


function promedioDeTresNumeros(a, b, c) {
    const suma = sumar(numero1, numero2, numero3);
    return suma / 3;
}

function calcularPorcentaje(a, b) {
    const producto = multiplicar(numero4, numero5);
    return producto / 100;
}

function GeneradorDePorcentaje(a, b) {
    const producto = multiplicar(numero6,100);
    return producto / numero7;
}


const promedio = promedioDeTresNumeros(numero1, numero2, numero3)
const cuadrado = cuadradoDeUnNumero(numero1)
const porcentaje = calcularPorcentaje(numero4, numero5)
const genporcentaje = GeneradorDePorcentaje(numero6, numero7);


console.log("El resultado del cuadrado de ", numero1, " es ", cuadrado);
console.log("El resultado del promedio de ", numero1, ",", numero2, " y ", numero3, " es: ", promedio);
console.log("El ", numero4, "% de ", numero5, " es: ", porcentaje);
console.log(genporcentaje, "corresponde al", numero6, "% de", numero7);

