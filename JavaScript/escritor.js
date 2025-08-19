const contenedor = document.getElementById("contenedor");
var scriptStock = false;
var scriptGestionPlacas = false;
var scriptMovimientos =false;
async function escribirInicio() {
    
    try {
      const respuesta = await fetch("secciones/inicio/inincio.html");
      const html = await respuesta.text();
      contenedor.innerHTML = html;
      funcionalidadInicio()
    } catch (error) {
      console.error("Error al cargar el HTML:", error);
    }
  }
  async function escribirStock(){
    try {
        const respuesta = await fetch("secciones/stock/stock.html");
        const html = await respuesta.text();
        contenedor.innerHTML = html;

        if(!scriptStock){
        const script = document.createElement("script");
        script.src = "/secciones/stock/stock.js";
        document.body.appendChild(script);
        scriptStock=true;
        }
      } catch (error) {
        console.error("Error al cargar el HTML:", error);
      }
  }
  async function escribirGestionPlacas(){
    try {
        const respuesta = await fetch("/secciones/gestion-placas/gestion-placas.html");
        const html = await respuesta.text();
        contenedor.innerHTML = html;

        if(!scriptGestionPlacas){
        const script = document.createElement("script");
        script.src = "/secciones/gestion-placas/gestion-placas.js";
        document.body.appendChild(script);
        
        }
      } catch (error) {
        console.error("Error al cargar el HTML:", error);
      }
  }

  async function escribirMovimientos(){
    try {
        const respuesta = await fetch("/secciones/movimientos/movimientos.html");
        const html = await respuesta.text();
        contenedor.innerHTML = html;

        if(!scriptMovimientos){
        const script = document.createElement("script");
        script.src = "/secciones/movimientos/movimientos.js";
        document.body.appendChild(script);
        
        }
      } catch (error) {
        console.error("Error al cargar el HTML:", error);
      }
  }
  