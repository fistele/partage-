const express = require("express");
const router = express.Router();
const Utilisateur = require("../models/utilisateur");

// afficher la liste des utilisateurs.
router.get("/", async (req, res) => {
  try {
    const cat = await Utilisateur.find({}, null, { sort: { _id: -1 } });
    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// créer un nouveau utilisateur
router.post("/", async (req, res) => {
  const { nomUtilisateur, addresseUtilisateur, emailUtilisateur } = req.body;
  const newUser = new Utilisateur(req.body);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// modifier un utilisateur
router.put("/:idUtilisateur", async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndUpdate(
      req.params.idUtilisateur,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(utilisateur);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Supprimer un utilsateur
router.delete("/:idUtilisateur", async (req, res) => {
  const id = req.params.idUtilisateur;
  await Utilisateur.findByIdAndDelete(id);
  res.json({ message: "User deleted successfully." });
});

module.exports = router;
