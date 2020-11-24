//const { Router } = require('express');
import { Router } from 'express';

import mongoose from 'mongoose';

import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);





/*routes.get('/', async (req, res) => {
    await User.create({
        nome: 'Barbara6',
        email: 'barbaraguieiro@gmail.com',
        senha: '123456'
    },function(err, small){
        if(err) return res.status(400).json({err: "Erro: Usuario não foi cadastrado com sucesso!"});
    
        return res.status(200).json({error:"Usuario cadastrado com sucesso!"});
        
});
})*/

routes.get('/contatos', (req, res) => {
    res.send("Usuario1, Usuario2, Usuario3, Usuario4");
})

//module.exports = routes;
export default routes;