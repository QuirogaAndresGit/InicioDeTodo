function hayOtroCliente(respuesta) {
    return respuesta !== null && respuesta.toUpperCase() === "S";
}

function atenderCliente(numeroCliente) {
    console.log(`Cliente ${numeroCliente}`);
    let totalCliente = 0;
    let precio = parseFloat(prompt("Precio (0 para cerrar la cuenta):"));

    while (precio !== 0) {
        totalCliente += precio;
        precio = parseFloat(prompt("Precio (0 para cerrar la cuenta):"));
    }

    console.log(`Total cliente ${numeroCliente}: ${totalCliente}`);
    return totalCliente;
}

function procesarSupermercado() {
    let clientesAtendidos = 0;
    let totalCobrado = 0;
    let compraMasAlta = 0;
    let clienteMasAlto = 0;
    let continuar = true;

    while (continuar) {
        clientesAtendidos++;
        let totalCliente = atenderCliente(clientesAtendidos);
        totalCobrado += totalCliente;

        if (totalCliente > compraMasAlta) {
            compraMasAlta = totalCliente;
            clienteMasAlto = clientesAtendidos;
        }

        let resp = prompt("¿Hay otro cliente? (S/N):");
        continuar = hayOtroCliente(resp);
    }

    console.log(`Clientes atendidos: ${clientesAtendidos}`);
    console.log(`Total cobrado: ${totalCobrado}`);
    console.log(`Compra más alta: cliente ${clienteMasAlto} con ${compraMasAlta}`);
}

procesarSupermercado();