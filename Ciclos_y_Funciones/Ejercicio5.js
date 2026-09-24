const clasificarNumero = (numero) => {
    if (numero > 0) return "positivo";
    if (numero < 0) return "negativo";
    return "cero";
};
function contarNumeros(cantidad) {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for (let i = 1; i <= cantidad; i++) {
        let num = parseFloat(prompt(`Número ${i}:`));
        let tipo = clasificarNumero(num);

        if (tipo === "positivo") positivos++;
        else if (tipo === "negativo") negativos++;
        else ceros++;
    }
    console.log(`Positivos: ${positivos}`);
    console.log(`Negativos: ${negativos}`);
    console.log(`Ceros: ${ceros}`);
}
contarNumeros(20);