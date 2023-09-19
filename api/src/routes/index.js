const { Router } = require('express');
const pokemonsRoute = require('./pokemons.js');
const typesRoute = require('./types.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/pokemons', pokemonsRoute); //api pokemons
router.use('/types', typesRoute); //api types

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
