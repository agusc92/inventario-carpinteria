if(!scriptMovimientos){
const botonInicio = document.getElementById("boton-inicio");
const tablaMovimientos = document.getElementById("tabla-movimientos")
escribirTablaMovimientos()
const filtros = {
    cliente: document.getElementById("filter-cliente"),
    anio: document.getElementById("filter-anio"),
    mes: document.getElementById("filter-mes"),
    color: document.getElementById("filter-color"),
    espesor: document.getElementById("filter-espesor"),
    material: document.getElementById("filter-material")
};

botonInicio.addEventListener('click',escribirInicio)

// Escucha los cambios en todos los filtros
Object.values(filtros).forEach(input => {
    input.addEventListener("input", () => {
        // Acá va tu lógica para procesar los filtros
        console.log("Filtros actuales:", {
            cliente: filtros.cliente.value,
            anio: filtros.anio.value,
            mes: filtros.mes.value,
            color: filtros.color.value,
            espesor: filtros.espesor.value,
            material: filtros.material.value
        });

        // Podés invocar tu función personalizada para filtrar la tabla
        // filtrarMovimientos(filtros.cliente.value, ...)
    });
});

function escribirTablaMovimientos() {
    tablaMovimientos.innerHTML = "";
    movimientosMock.forEach(movimiento=>{
        tablaMovimientos.innerHTML +=  `<tr><td>${movimiento.cliente}</td><td>${movimiento.cantidad}</td><td>${movimiento.color}</td>
        <td>${movimiento.material}</td><td>${movimiento.espesor}</td><td>${movimiento.fecha}</td> </tr>`
    })
}

}