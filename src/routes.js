//const { Router } = require('express');
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    res.send("Server api iniciada");
})

routes.get('/contatos', (req, res) => {
    res.send("Usuario1, Usuario2, Usuario3, Usuario4");
})

//module.exports = routes;
export default routes;