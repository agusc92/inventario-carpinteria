//Logica para escribir el contenido de el filtro de materiales
function setearFiltroMateriales(filtro_materiales){
    filtro_materiales.innerHTML ='';
    materiales.forEach(material=>{
      if(material !== 'TODOS')
      filtro_materiales.innerHTML +=  `<option value="${material}">${material}</option>`;
      else
      filtro_materiales.innerHTML +=  `<option value="">${material}</option>`;
    })
}

//Logica para escribir el diltro de fabricante
function setearFiltroFabricante(filtro_fabricante){
    filtro_fabricante.innerHTML ='';
    fabricantes.forEach(fabricante=>{
      if(fabricante !== 'TODOS')
      filtro_fabricante.innerHTML +=  `<option value="${fabricante}">${fabricante}</option>`;
      else
      filtro_fabricante.innerHTML +=  `<option value="">${fabricante}</option>`;
    })
}
 //Logica para escribir el filtro de espesor
function setearFiltroEspesor(filtro_espesor){
    filtro_espesor.innerHTML ='';
    espesores.forEach(espesor=>{
      if(espesor !== 'TODOS')
      filtro_espesor.innerHTML +=  `<option value="${espesor}">${espesor}</option>`;
      else
      filtro_espesor.innerHTML +=  `<option value="">${espesor}</option>`;
    })
}

function filtrarColor(placas,valor) {
    let placas_filtradas
    return placas_filtradas = placas.filter(placa =>placa.Color.toLowerCase().includes(valor.toLowerCase()));
}
function filtrarMaterial(placas,valor) {
    let placas_filtradas
    return placas_filtradas = placas.filter(placa =>placa.Material.toLowerCase().includes(valor.toLowerCase()));
}

function filtrarFabricante(placas,valor) {
    let placas_filtradas
    return placas_filtradas = placas.filter(placa =>placa.Fabricante.toLowerCase().includes(valor.toLowerCase()));
}
function filtrarEspesor(placas,valor) {
    let placas_filtradas
    return placas_filtradas = placas.filter(placa =>placa.Espesor.toLowerCase().includes(valor.toLowerCase()));
}