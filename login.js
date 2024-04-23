// on déclare les 2 modules
const path = require('path');
const express = require('express');

//on crée une app express
const app = express();

//on dit à l'app de récupérer tout les éléments dans le dossier public
app.use('',express.static(path.join(__dirname, '/public')));

//on fait un app.get pour chaque fichier html présent dans le dossier (le mot entre '' dans la 1ere ligne de chaque app.get correspond à ce qui aura dans l'url après votre nom de domaine, exemple : goune.com/dashboard)
app.get('/', (request, response) => {
	return response.sendFile('login.html', { root: '.' });
});

app.get('/login', (request, response) => {
	return response.sendFile('login.html', { root: '.' });
});

app.get('/main', (request, response) => {
	return response.sendFile('main.html', { root: '.' });
});

//on  déclare le port sur lequel l'app va s'éxécuter
const port = '53134';
//on lance l'app
app.listen(port, () => console.log(`App listening at http://localhost:${port}`)); 