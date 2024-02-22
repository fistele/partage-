const mongoose = require("mongoose");
const utilisateur = require("./utilisateur");
const ressource = require("./ressource");

const demandeSchema = mongoose.Schema({
  message: { type: String, required: true },
  idUtilisateur: { type: mongoose.Schema.Types.ObjectId, ref: utilisateur },
  idRessource: { type: mongoose.Schema.Types.ObjectId, ref: ressource },
});

module.exports = mongoose.model("demande", demandeSchema);
