const mongoose = require("mongoose");

const utilisateurSchema = mongoose.Schema({
  nom: { type: String, required: true },
  addresse: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("utilisateur", utilisateurSchema);
