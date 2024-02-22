const mongoose = require("mongoose");
const utilisateur = require("./utilisateur");

const ressourceSchema = mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  idUtilisateur: { type: mongoose.Schema.Types.ObjectId, ref: utilisateur },
});

module.exports = mongoose.model("ressource", ressourceSchema);
