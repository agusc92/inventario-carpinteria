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
    aplicarFiltros(placas);
  });
  filtro_fabricante.addEventListener('change', () => {
    aplicarFiltros(placas);
  });
  filtro_materiales.addEventListener('change',()=>{
    aplicarFiltros(placas);
  })
  filtro_espesor.addEventListener('change',()=>{
    aplicarFiltros(placas);
  })

  //aplica los filtros a la lista de tablas y las escribe
  function aplicarFiltros(placas) {
    placas_filtradas = filtrarColor(placas,filtro_color.value);
    placas_filtradas = filtrarFabricante(placas,filtro_fabricante.value);
    placas_filtradas = filtrarMaterial(placas_filtradas,filtro_materiales.value);
    placas_filtradas = filtrarEspesor(placas_filtradas,filtro_espesor.value);

    escribirTabla(placas_filtradas);
  }
  
  //Vuelve a setear el boolean en falso para que al salir de la seccion y volver a entrar se escriba correctamente
  scriptStock = false;

  
}

