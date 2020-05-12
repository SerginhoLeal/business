const mongoose = require('mongoose');
const Bus = mongoose.model('Search');
const parseStrings = require('./parseString');

module.exports ={
    async index(req, res){
        const business = await Bus.find();
        return res.json(business);
    },

    async store(req, res){
        const {
            nome, 
            empresa, 
            desenvolvedor, 
            beneficios, 
            wpps,
            mai,
            latitude, 
            longitude ,
            latitudeDelta,
            longitudeDelta
        } = req.body;

    try{
        if(await Bus.findOne({empresa}))//se encontrar um email o cadastro não será realizado
            return res.status(400).send({error:'Empresa já em uso!'});

        const desc = parseStrings(empresa);


        const location = {
            type: 'Point',
            coordinates: [longitude, latitude, latitudeDelta, longitudeDelta],
        }

        const user = await Bus.create({
            nome, 
            empresa: desc,
            desenvolvedor, 
            beneficios, 
            wpps,
            mai, 
            location
        });
        
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