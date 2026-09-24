const obtenerValorAbsoluto = (numero) => (numero < 0 ? -numero : numero);
const generarLetrero = (diferencia) => {
    if (diferencia > 0) return "SUBIÓ";
    if (diferencia < 0) return "BAJÓ";
    return "SE MANTUVO";
};
function evaluarClub() {
    for (let m = 1; m <= 5; m++) {
        console.log(`Miembro ${m}`);
        let pesoAnterior = parseFloat(prompt("Peso anterior:"));
        let sumaPesos = 0;
        for (let b = 1; b <= 10; b++) {
            let peso = parseFloat(prompt(`Báscula ${b}:`));
            sumaPesos += peso;
        }
        let promedioActual = sumaPesos / 10;
        let diferencia = promedioActual - pesoAnterior;
        let letrero = generarLetrero(diferencia);
        let kilos = obtenerValorAbsoluto(diferencia);
        if (letrero === "SE MANTUVO") {
            console.log("SE MANTUVO");
        } else {
            console.log(`${letrero} ${kilos} kg`);
        }
    }
}
evaluarClub();