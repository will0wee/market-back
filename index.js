//const Express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/routes/route';
import database from './src/modeles/database';

//création de l'app
const app = express();

//Configuration du serveur avec Cors et Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

//Utilisation des routes
app.use('/', router);

//lancement du serveur
const port = 3012;

database().then(async () => {
	console.log('Database connected');
	app.listen(port, () =>
	{
		console.log(`serveur lancé sur le port ${port}...`);
	});
});

export default app;