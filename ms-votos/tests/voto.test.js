const { validarVoto } = require("../src/voto");

describe("validarVoto", () => {

  test("acepta un voto completo", () => {
    const voto = {
      eleccionId: 1,
      candidatoId: 10,
      votanteId: 100
    };

    const resultado = validarVoto(voto);

    expect(resultado.valido).toBe(true);
  });

  test("rechaza un voto sin eleccion", () => {
    expect(() =>
      validarVoto({
        candidatoId: 10,
        votanteId: 100
      })
    ).toThrow("La eleccion es obligatoria");
  });

  test("rechaza un voto sin candidato", () => {
    expect(() =>
      validarVoto({
        eleccionId: 1,
        votanteId: 100
      })
    ).toThrow("El candidato es obligatorio");
  });

  test("rechaza un voto sin votante", () => {
    expect(() =>
      validarVoto({
        eleccionId: 1,
        candidatoId: 10
      })
    ).toThrow("El votante es obligatorio");
  });

});
