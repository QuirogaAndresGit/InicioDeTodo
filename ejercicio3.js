// Calcular el 0.8% de un número y el 98% del cuadrado del cuadrado del mismo número.

const numVal1 = parseInt(prompt("Digite el primer numero"))
const numVal2 = parseInt(prompt("Digite el segundo numero"))

const valResult1 = numVal1*0.008
const valResult2 =(numVal2*numVal2*numVal2*numVal2)*0.98

console.log(`El primer resultado es: ${valResult1}`);
console.log(`El segundo resultado es: ${valResult2}`);
