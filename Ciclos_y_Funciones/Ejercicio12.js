const esNotaValida = (nota) => nota >= 0 && nota <= 5;
const estaAprobado = (nota) => nota >= 3.0;
function procesarNotas() {
    let nota = parseFloat(prompt("Nota (-1 para terminar):"));
    let notasValidas = 0;
    let sumaNotas = 0;
    let notaMasBaja = 5.0;
    let aprobados = 0;
    while (nota !== -1) {
        if (esNotaValida(nota)) {
            notasValidas++;
            sumaNotas += nota;

            if (nota < notaMasBaja) {
                notaMasBaja = nota;
            }

            if (estaAprobado(nota)) {
                aprobados++;
            }
        } else {
            console.log("Nota inválida, debe estar entre 0 y 5");
        }
        nota = parseFloat(prompt("Nota (-1 para terminar):"));
    }
    if (notasValidas > 0) {
        let promedio = sumaNotas / notasValidas;
        console.log(`Notas válidas: ${notasValidas}`);
        console.log(`Promedio: ${promedio}`);
        console.log(`Nota más baja: ${notaMasBaja}`);
        console.log(`Aprobados: ${aprobados}`);
    } else {
        console.log("No se ingresaron notas válidas");
    }
}
procesarNotas();