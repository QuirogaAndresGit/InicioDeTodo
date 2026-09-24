const calcularCubo = (numero) => numero ** 3;
function calcularCuartaParte(numero) {
    return numero / 4;
}
let sumaCubos = 0;
for (let i = 1; i <= 10; i++) {
    let num = parseFloat(prompt(`Número ${i}:`));
    let cubo = calcularCubo(num);
    let cuarta = calcularCuartaParte(num);
    sumaCubos += cubo;
    console.log(`Número: ${num} | Cubo: ${cubo} | Cuarta parte: ${cuarta}`);
}
console.log(`Suma de los cubos: ${sumaCubos}`);