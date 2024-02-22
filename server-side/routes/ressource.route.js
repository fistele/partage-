const express = require("express");
const router = express.Router();
const Ressource = require("../models/ressource");

// afficher la liste des ressources.
router.get("/", async (req, res) => {
  try {
    const scat = await Ressource.find({}, null, {
      sort: { _id: -1 },
    }).populate("idUtilisateur");
    res.status(200).json(scat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// créer une nouvelle ressource
router.post("/", async (req, res) => {
  const { nomsressource, description, idUtilisateur } = req.body;
  const newRessource = new Ressource(req.body);
  try {
    await newRessource.save();
    res.status(200).json(newRessource);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// modifier une ressource
router.put("/:idRessource", async (req, res) => {
  try {
    const ressource = await Ressource.findByIdAndUpdate(
      req.params.idRessource,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(ressource);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Supprimer une ressource
router.delete("/:idRessource", async (req, res) => {
  const id = req.params.idRessource;
  await Ressource.findByIdAndDelete(id);
  res.json({ message: "Ressource deleted successfully." });
});

module.exports = router;
