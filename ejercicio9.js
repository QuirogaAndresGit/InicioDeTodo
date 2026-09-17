// La temperatura de ayer tuvo una disminución del 23% en la mañana de hoy, y en la tarde aumento
// un 17% en relación a la misma temperatura de ayer. Determinar la disminución, el incremento y la
// temperatura actual.

const tempAyer = parseInt(prompt("Digite la temperatura de ayer"))

const disminucion = tempAyer * 0.23
const incremento = tempAyer * 0.17
const tempActual = tempAyer - disminucion + incremento

console.log(`La disminucion de la mañana fue: ${disminucion}`);
console.log(`El incremento de la tarde fue: ${incremento}`);
console.log(`La temperatura actual es: ${tempActual}`);