//creation des instance de chaque dependance que nous avons besoins
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const utilisateurRouter = require("./routes/utilisateur.route");
const ressourceRouter = require("./routes/ressource.route");
const demandeRouter = require("./routes/demande.route");

//utilisation de dotenv pour avoir acces aux fonctions de dotenv
dotenv.config();

//utilisation de express pour la création de notre application
const app = express();
app.use(cors());

//les endpoint de notre application afin de gérer les URL de notre site
app.get("/", (req, res) => {
  res.send("Partage+");
});

// Connexion à la base données
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DataBase Successfully Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
    process.exit();
  });

app.use(express.json());
app.use("/api/utilisateurs", utilisateurRouter);
app.use("/api/ressources", ressourceRouter);
app.use("/api/demandes", demandeRouter);

//lancement de notre application au port configuré dans .env
app.listen(process.env.PORT, () => {
  console.log("Le serveur écoute au port " + process.env.PORT);
});

module.exports = app;
