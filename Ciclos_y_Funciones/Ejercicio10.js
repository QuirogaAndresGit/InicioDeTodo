const convertirDolaresAPesos = (dolares) => dolares * 3550;
function procesarListado() {
    let personas = 0;
    let totalPesos = 0;
    let dolares = parseFloat(prompt("Dólares (0 para terminar):"));
    while (dolares !== 0) {
        let pesos = convertirDolaresAPesos(dolares);
        console.log(`Equivale a: ${pesos} pesos`);
        personas++;
        totalPesos += pesos;
        dolares = parseFloat(prompt("Dólares (0 para terminar):"));
    }
    console.log(`Personas atendidas: ${personas}`);
    console.log(`Total en pesos: ${totalPesos}`);
}
procesarListado();