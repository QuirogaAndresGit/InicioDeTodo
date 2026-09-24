const generarNumeroSecreto = (Min, Max) => Math.floor(Math.random() * 100) + 1
function evaluarIntento(intento, secreto) {
    if (intento === secreto) return "correcto";
    if (intento < secreto) return "Mayor";
    return "menor";
}
let secreto = generarNumeroSecreto(1, 100);
let intentos = 0;
let adivino = false;
while (intentos < 7 && !adivino) {
    intentos++;
    let intento = parseInt(prompt(`Intento ${intentos}:`));
    let resultado = evaluarIntento(intento, secreto);
    if (resultado === "correcto") {
        console.log(`¡Adivinaste en ${intentos} intentos!`);
        adivino = true;
    } else if (resultado === "mayor") {
        console.log("El número secreto es mayor");
    } else {
        console.log("El número secreto es menor");
    }
}
if (!adivino) {
    console.log(`Agotaste tus 7 intentos. El número era: ${secreto}`);
}