const express = require("express");
const router = express.Router();
const Utilisateur = require("../models/utilisateur");
const Ressource = require("../models/ressource");
const Demande = require("../models/demande");

// afficher la liste des demandes.
router.get("/", async (req, res) => {
    try {
      const demandes = await Demande.find({}, null, {
        sort: { _id: -1 },
      }).populate("idRessource");
      res.status(200).json(demandes);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

  // créer une nouvelle demande
router.post("/", async (req, res) => {
    const newDemande = new Demande(req.body);
    try {
      await newDemande.save();
      res.status(200).json(newDemande);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

  // modifier une demande
router.put("/:idDemande", async (req, res) => {
    try {
      const demande = await Demande.findByIdAndUpdate(
        req.params.idDemande,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(demande);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

  // Supprimer une demande
router.delete("/:idDemande", async (req, res) => {
    const id = req.params.idDemande;
    await Demande.findByIdAndDelete(id);
    res.json({ message: "Apply deleted successfully." });
  });

module.exports = router;
