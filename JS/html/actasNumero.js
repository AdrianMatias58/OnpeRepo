import verDetalleMesa from './DetalleActas.js';

document.addEventListener('DOMContentLoaded', () => {
    const btnBuscar = document.getElementById("btnBuscar");
    const inputMesa = document.getElementById("nroMesa");

    btnBuscar.addEventListener('click', async () => {
        const nroMesa = inputMesa.value;

        if (nroMesa.length === 6) {
            const errorMsg = document.getElementById("errorMsg");
            if (errorMsg) errorMsg.style.display = "none";
            await verDetalleMesa(nroMesa);
        } else {
            alert("Por favor, ingrese un número de mesa válido (6 dígitos)");
        }
    });
});