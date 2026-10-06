// Alterna entre el tema "día" y "noche" de la página,
// reflejando el concepto dual del negocio.
const boton = document.getElementById("toggleTema");

boton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
  const esNoche = document.body.classList.contains("night-mode");
  boton.textContent = esNoche ? "Modo Noche" : "Modo Día";
});