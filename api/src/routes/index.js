const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamesRoutes = require('./videoGamesRoutes');
const GenresRoutes = require("./genresRoutes")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videoGamesRoutes);
router.use('/genres', GenresRoutes);


module.exports = router;
