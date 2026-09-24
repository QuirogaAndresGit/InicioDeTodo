function tieneDescuento(kilos) {
    return kilos > 10;
}

function calcularTotalCliente(kilos, precioKilo) {
    let subtotal = kilos * precioKilo;
    if (tieneDescuento(kilos)) {
        return subtotal * 0.85;
    }
    return subtotal;
}

let precioKilo = parseFloat(prompt("Precio por kilo:"));
let totalRecaudado = 0;
let clientesConDescuento = 0;

for (let i = 1; i <= 15; i++) {
    let kilos = parseFloat(prompt(`Kilos cliente ${i}:`));
    let totalPagar = calcularTotalCliente(kilos, precioKilo);
    totalRecaudado += totalPagar;

    if (tieneDescuento(kilos)) {
        clientesConDescuento++;
        console.log(`Cliente ${i} paga: ${totalPagar} (con descuento)`);
    } else {
        console.log(`Cliente ${i} paga: ${totalPagar}`);
    }
}

console.log(`Total recaudado: ${totalRecaudado}`);
console.log(`Clientes con descuento: ${clientesConDescuento}`);