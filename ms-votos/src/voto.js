const pruebaBloqueo = "error";
function validarVoto(voto) {
  if (!voto) {
    throw new Error("El voto es obligatorio");
  }

  if (!voto.eleccionId) {
    throw new Error("La eleccion es obligatoria");
  }

  if (!voto.candidatoId) {
    throw new Error("El candidato es obligatorio");
  }

  if (!voto.votanteId) {
    throw new Error("El votante es obligatorio");
  }

  return {
    valido: true,
    mensaje: "Voto valido"
  };
}

module.exports = {
  validarVoto
};
