const express = require("express");
const { validarVoto } = require("./voto");

const app = express();

app.use(express.json());

app.post("/votos", (req, res) => {
  try {
    const resultado = validarVoto(req.body);

    res.status(201).json({
      mensaje: "Voto registrado",
      resultado
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`ms-votos ejecutándose en el puerto ${PORT}`);
});
