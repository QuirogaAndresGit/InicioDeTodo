function calcularHorasExtra(horas) {
    if (horas > 40) {
        return horas - 40;
    }
    return 0;
}

function calcularSalarioSemanal(horas) {
    let extras = calcularHorasExtra(horas);
    if (extras > 0) {
        return (40 * 12000) + (extras * 15000);
    }
    return horas * 12000;
}

let cantidadObreros = parseInt(prompt("¿Cuántos obreros?:"));
let totalNomina = 0;

for (let i = 1; i <= cantidadObreros; i++) {
    let horas = parseFloat(prompt(`Horas obrero ${i}:`));
    let salario = calcularSalarioSemanal(horas);
    totalNomina += salario;
    console.log(`Obrero ${i}: ${salario}`);
}

console.log(`Total nómina: ${totalNomina}`);