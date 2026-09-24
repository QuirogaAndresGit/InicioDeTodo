function obtenerMenor(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

function obtenerMayor(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let sumaPuntos = 0;
let menorContaminacion = 0;
let mayorContaminacion = 0;

for (let i = 1; i <= 25; i++) {
    let puntos = parseFloat(prompt(`Puntos auto ${i}:`));
    sumaPuntos += puntos;

    if (i === 1) {
        menorContaminacion = puntos;
        mayorContaminacion = puntos;
    } else {
        menorContaminacion = obtenerMenor(menorContaminacion, puntos);
        mayorContaminacion = obtenerMayor(mayorContaminacion, puntos);
    }
}

console.log(`Promedio: ${calcularPromedio(sumaPuntos, 25)}`);
console.log(`Menor contaminación: ${menorContaminacion}`);
console.log(`Mayor contaminación: ${mayorContaminacion}`);