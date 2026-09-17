// Se dice que el precio de una pelota de tenis es el 20% de un balón de fútbol. Desarrolle un algoritmo
// que lea el precio del balón de fútbol y determine el precio de la pelota de tenis.

const precioBalon = parseInt(prompt("Digite el precio del balón de fútbol"))

const precioPelotaTenis = precioBalon * 0.20

console.log(`El precio del balón de fútbol es: ${precioBalon}`);
console.log(`El precio de la pelota de tenis es: ${precioPelotaTenis}`);