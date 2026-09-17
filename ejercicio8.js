// Elaborar un algoritmo que lea de un mismo registro la cédula de un empleado, el nombre, el salario
// básico por hora y las horas trabajadas en la semana. Se debe imprimir la cédula, el nombre y el
// salario devengado en la semana.

const cedula = prompt("Digite la cedula del empleado")
const nombre = prompt("Digite el nombre del empleado")
const salarioHora = parseInt(prompt("Digite el salario basico por hora"))
const horasTrabajadas = parseInt(prompt("Digite las horas trabajadas en la semana"))

const salarioDevengado = salarioHora * horasTrabajadas

console.log(`Cedula del empleado: ${cedula}`);
console.log(`Nombre del empleado: ${nombre}`);
console.log(`El salario devengado en la semana es: ${salarioDevengado}`);