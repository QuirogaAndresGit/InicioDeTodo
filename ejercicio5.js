// 5. Leer un número. Descontarle el 67%. Imprima el número, el descuento y el número después del descuento.

const numero = parseInt(prompt("Digite un numero"))

const descuento = numero * 0.67
const numeroConDescuento = numero - descuento

console.log(`El numero ingresado es: ${numero}`);
console.log(`El valor del descuento (67%) es: ${descuento}`);
console.log(`El numero despues del descuento es: ${numeroConDescuento}`);