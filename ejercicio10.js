// La temperatura de hoy tuvo una disminución del 5% en la mañana, y en la tarde aumento un 40%
// luego de realizada esa disminución. Determinar y la temperatura actual.

const tempInicial = parseInt(prompt("Digite la temperatura inicial de hoy"))

const tempMañana = tempInicial - (tempInicial * 0.05)
const tempActual = tempMañana + (tempMañana * 0.40)

console.log(`La temperatura inicial era: ${tempInicial}`);
console.log(`La temperatura tras la disminucion de la mañana: ${tempMañana}`);
console.log(`La temperatura actual al final del dia es: ${tempActual}`);