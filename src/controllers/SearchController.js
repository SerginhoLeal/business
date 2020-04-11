const mongoose = require('mongoose');
const Bus = mongoose.model('Search');
const parseStrings = require('./parseString');

module.exports ={
    async index(req, res){
        const business = await Bus.find();
        return res.json(business);
    },

    async store(req, res){
        const { _id, 
            empresa, 
            funcao, 
            desenvolvedor, 
            beneficios, 
            curriculo, 
            latitude, 
            longitude 
        } = req.body;

    try{
        if(await Bus.findOne({empresa}))//se encontrar um email o cadastro não será realizado
            return res.status(400).send({error:'Empresa já em uso!'});

        if(await Bus.findOne({_id}))//se encontrar um email o cadastro não será realizado
            return res.status(400).send({error:'Tente outro'});

        const desc = parseStrings(empresa);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const user = await Bus.create({ 
            _id, 
            empresa: desc,
            funcao, 
            desenvolvedor, 
            beneficios, 
            curriculo, 
            location
        });
        
        // user.key = undefined;
        return res.send(user);

        }catch(err){
            return res.statusCode(400).send({error:'fail'});
        }
    },

    async destroy(req,res){
        await Bus.findByIdAndRemove(req.params.id);
        return res.send();
    },
}