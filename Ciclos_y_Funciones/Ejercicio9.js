const esHombre = (genero) => genero.toUpperCase() === "H";
function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}
let totalPersonas = parseInt(prompt("¿Cuántas personas?:"));
let cantHombres = 0;
let sumaEdadHombres = 0;
let cantMujeres = 0;
let sumaEdadMujeres = 0;
for (let i = 1; i <= totalPersonas; i++) {
    let genero = prompt(`Género persona ${i} (H/M):`);
    let edad = parseInt(prompt(`Edad persona ${i}:`));

    if (esHombre(genero)) {
        cantHombres++;
        sumaEdadHombres += edad;
    } else {
        cantMujeres++;
        sumaEdadMujeres += edad;
    }
}
console.log(`Hombres: ${cantHombres}`);
console.log(`Mujeres: ${cantMujeres}`);
if (cantHombres > 0) {
    console.log(`Promedio de edad hombres: ${calcularPromedio(sumaEdadHombres, cantHombres)}`);
} else {
    console.log("No hay hombres registrados");
}
if (cantMujeres > 0) {
    console.log(`Promedio de edad mujeres: ${calcularPromedio(sumaEdadMujeres, cantMujeres)}`);
} else {
    console.log("No hay mujeres registradas");
}
if (totalPersonas > 0) {
    let sumaTotal = sumaEdadHombres + sumaEdadMujeres;
    console.log(`Promedio del grupo: ${calcularPromedio(sumaTotal, totalPersonas)}`);
}