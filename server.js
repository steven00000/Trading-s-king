const express = require('express');
const app = express();
const path = require('path');

// Définir le dossier des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

// Démarrer le serveur
const port = 53134; // Choisissez un port disponible
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
