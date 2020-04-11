const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Bus = mongoose.model('Business');

module.exports ={
    async index(req, res){
        const business = await Bus.find();
        return res.json(business);
    },

    async login(req, res){
        const {nome, password} = req.body;

        const user = await Bus.findOne({nome}).select('+password');
        
        if(!user)
            return res.status(400).send({error:'Nome inexistente'});
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error:'Senha invalida'});
        
        user.password = undefined;

        res.send({user});
    },

    async store(req, res){
        const {nome} = req.body;
    try{
        if(await Bus.findOne({nome}))//se encontrar um email o cadastro não será realizado
            return res.status(400).send({error:'Nome já em uso!'});

        const user = await Bus.create(req.body);

        user.password = undefined;
        return res.send({user});
        }catch(err){
            return res.statusCode(400).send({error:'fail'});
        }
    },

};