// A la mamá de Juan le preguntan su edad, y ella contesta: Tengo tres hijos, pregúntele la edad a Juan.
// Miguel tiene 2/3 la edad de Juan, margarita tiene 4/3 de la edad de Miguel y mi edad es la suma de
// las tres. Hacer un algoritmo que muestre la edad de los cuatro.

const edadJuan = parseInt(prompt("Digite la edad de Juan"))

const edadMiguel = (edadJuan * 2) / 3
const edadMargarita = (edadMiguel * 4) / 3
const edadMama = edadJuan + edadMiguel + edadMargarita

console.log(`La edad de Juan es: ${edadJuan}`);
console.log(`La edad de Miguel es: ${edadMiguel}`);
console.log(`La edad de Margarita es: ${edadMargarita}`);
console.log(`La edad de la mama es: ${edadMama}`);