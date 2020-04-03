const mongoose = require('mongoose');
const Bus = mongoose.model('Search');

module.exports ={
    async index(req, res){
        const business = await Bus.find();
        return res.json(business);
    },

    async store(req, res){
        const {empresa} = req.body;
    try{
        if(await Bus.findOne({empresa}))//se encontrar um email o cadastro não será realizado
            return res.status(400).send({error:'Empresa já em uso!'});

        const user = await Bus.create(req.body);

        // user.key = undefined;
        return res.send({user});

        }catch(err){
            return res.statusCode(400).send({error:'fail'});
        }
    },
    async destroy(req,res){
        await Bus.findByIdAndRemove(req.params.id);
        return res.send();
    },
}