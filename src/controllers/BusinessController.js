const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const authConfig = require('../Config/auth.json');

const Bus = mongoose.model('Business');

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    });
}

module.exports = {
    // async index(req, res){
    //     const business = await Bus.find();
    //     return res.json(business);
    // },

    async login(req, res){
        const {nome, password} = req.body;

        const user = await Bus.findOne({nome}).select('+password');
        
        if(!user)
            return res.status(400).send({error:'Nome inexistente'});
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error:'Senha invalida'});
        
        user.password = undefined;

        res.send({
            user,
            token:generateToken({id: user.id}),
        });
    },

    async store(req, res){
        const {nome} = req.body;
    try{
        if(await Bus.findOne({nome}))//se encontrar um email o cadastro não será realizado
            return res.status(400).send({error:'Nome já em uso!'});

        const user = await Bus.create(req.body);

        user.password = undefined;

        res.send({
            user,
            token:generateToken({id: user.id}),//repassa para logar automaticamente
        });

        }catch(err){
            return res.statusCode(400).send({error:'fail'});
        }
    },

};