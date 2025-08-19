if (!scriptGestionPlacas) {


  const boton_inicio = document.getElementById("boton-inicio");
  boton_inicio.addEventListener('click', escribirInicio)
  document.getElementById("formNueva").addEventListener("submit", e => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    console.log("Nueva placa:", datos);
    let nuevaPlaca = {
      Color: datos.color,
      Cantidad: datos.cantidad,
      Material: datos.material,
      Espesor: datos.espesor,
      Fabricante: datos.fabricante,
      Altura: datos.alto,
      Ancho: datos.ancho,
      Sector: datos.sector
    }
    placas.push(nuevaPlaca);
  });

  // Formulario: Agregar Stock
  document.getElementById("formStock").addEventListener("submit", e => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    placas.forEach(placa => {
      if (placa.Color === datos.color) {
        if(placa.Material === datos.material){
          if(placa.Espesor === datos.espesor){
            placa.Cantidad = parseInt(placa.Cantidad) + parseInt(datos.cantidad);
          }
        }
      }
    });
  });

  // Formulario: Retirar Placa
  document.getElementById("formRetirar").addEventListener("submit", e => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    console.log("Retirar placa:", datos);
    // Tu lógica personalizada
  });


}



