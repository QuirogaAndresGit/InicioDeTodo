// Haga un algoritmo que calcule el 80% del cuadrado de la suma de dos números. Y el 5% del doble
// del triple de la mitad de la suma de los mismos números.

const numeritoCog1 = parseInt(prompt("Ingresa el primer numero"))
const numeritoCog2 = parseInt(prompt("Ingresa el segundo numero"))

const larProc = numeritoCog1+numeritoCog2
const ValorCu = (larProc*larProc)*0.80
const dosTres = larProc/2
const dosTres1 = dosTres*3
const dosTres2 = (dosTres1*2)*0.05

console.log(`El valor del 80% es : ${ValorCu}`);
console.log(`El valor del 5% es: ${dosTres2}`);