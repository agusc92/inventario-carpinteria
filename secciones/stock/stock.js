if (scriptStock) {
  const tabla_stock = document.getElementById("tabla-stock");
  const filtro_color = document.getElementById("filtro-color");
  const filtro_fabricante = document.getElementById("filtro-fabricante");
  const boton_inicio = document.getElementById("boton-inicio");
  const filtro_materiales = document.getElementById("filtro-materiales");
  const filtro_espesor = document.getElementById("filtro-espesor");
  
  var placas_filtradas = [];
  
  //escriben las opciones de los filtros desplegables
  setearFiltroEspesor(filtro_espesor)
  setearFiltroFabricante(filtro_fabricante)
  setearFiltroMateriales(filtro_materiales)

  //asigna funcionalidad al boton de volver al inicio
  boton_inicio.addEventListener('click', escribirInicio)
  
  //Escribe las placas recibidas en la tabla
  function escribirTabla(placas) {
    tabla_stock.innerHTML = "";
    placas.forEach(placa => {
      tabla_stock.innerHTML += `<tr><td>${placa.Color}</td><td>${placa.Cantidad}</td><td>${placa.Material}</td>
        <td>${placa.Espesor}</td><td>${placa.Fabricante}</td><td>${placa.Altura}</td><td>${placa.Ancho}</td><td>${placa.Sector}</td> </tr>`
    });
  }
  escribirTabla(placas);
  
  //asigna los eventos a los filtros
  filtro_color.addEventListener('input', () => {
    aplicarFiltros();
  });
  filtro_fabricante.addEventListener('change', () => {
    aplicarFiltros();
  });
  filtro_materiales.addEventListener('change',()=>{
    aplicarFiltros();
  })
  filtro_espesor.addEventListener('change',()=>{
    aplicarFiltros();
  })

  //aplica los filtros a la lista de tablas y las escribe
  function aplicarFiltros() {
    placas_filtradas = placas.filter(placa =>
      placa.Color.toLowerCase().includes(filtro_color.value.toLowerCase())
    );
    placas_filtradas = placas_filtradas.filter(placa => placa.Fabricante.toLocaleLowerCase().includes(filtro_fabricante.value.toLocaleLowerCase()));
    
    placas_filtradas = placas_filtradas.filter(placa=>placa.Material.toLocaleLowerCase().includes(filtro_materiales.value.toLocaleLowerCase()))
    placas_filtradas = placas_filtradas.filter(placa=>placa.Espesor.toLocaleLowerCase().includes(filtro_espesor.value.toLocaleLowerCase()))
    escribirTabla(placas_filtradas);
  }
  
  

  
}

