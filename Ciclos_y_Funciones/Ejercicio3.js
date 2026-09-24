const convertirAKelvin = (celsius) => celsius + 273.15;
const convertirAFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}
let dias = parseInt(prompt("¿Cuántos días?:"));
let sumaTemperaturas = 0;
for (let i = 1; i <= dias; i++) {
    let tempC = parseFloat(prompt(`Temperatura día ${i} (°C):`));
    sumaTemperaturas += tempC;
    let kelvin = convertirAKelvin(tempC);
    let fahrenheit = convertirAFahrenheit(tempC);
    console.log(`Día ${i}: ${tempC} °C = ${kelvin} K = ${fahrenheit} °F`);
}
if (dias > 0) {
    let promedio = calcularPromedio(sumaTemperaturas, dias);
    console.log(`Promedio: ${promedio} °C`);
}