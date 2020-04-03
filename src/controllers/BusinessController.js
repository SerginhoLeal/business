const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Bus = mongoose.model('Business');

module.exports ={
    async index(req, res){
        const business = await Bus.find();
        return res.json(business);
    },

    async index(req, res){
        const business = await Bus.find();
        return res.json(business);
    },

    async login(req, res){
        const {email, password} = req.body;

        const user = await Bus.findOne({email}).select('+password');
        
        if(!user)
            return res.status(400).send({error:'Email inexistente'});
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error:'Senha invalida'});
        
        user.password = undefined;

        res.send({
            user,
            // token:generateToken({id:user.id}),
        });
    },

    async store(req, res){
        const {email} = req.body;
        // const desc = descript.split(',').map(no => no.trim());
    try{
        if(await Bus.findOne({email}))//se encontrar um email o cadastro não será realizado
            return res.status(400).send({error:'Email já em uso!'});

        const user = await Bus.create(req.body);

        user.password = undefined;
        return res.send({
            user,
            // token:generateToken({id:user.id}),
        });
        }catch(err){
            return res.statusCode(400).send({error:'fail'});
        }
    },

};