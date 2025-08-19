function funcionalidadInicio() {
    const cardMovimientos = document.getElementById("movimientos");
    const cardStock = document.getElementById("stock");
    const cardGestion = document.getElementById("gestion-placas");

    cardStock.addEventListener('click', escribirStock);
    cardGestion.addEventListener('click',escribirGestionPlacas);
    cardMovimientos.addEventListener('click',escribirMovimientos);
}