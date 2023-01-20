const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamesRoutes = require('./videoGamesRoutes');
const genderRoutes = require("./gendersRoutes")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videoGamesRoutes);
router.use('/genders', genderRoutes);


module.exports = router;
