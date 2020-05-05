const mongoose = require('mongoose');
const Sea = mongoose.model('Search');
const parseStrings = require('./parseString');

module.exports = {
    async index(req, res){
        const {empresa} = req.query;

        const desc = parseStrings(empresa);

        const sens = await Sea.find({
            empresa:{
                $in:desc,
            },
        });

        return res.json({sens});
    },

    async index2(req, res){
        const {nome} = req.query;

        const desc2 = parseStrings(nome);

        const sens = await Sea.find({
            nome:{
                $in:desc2,
            },
        });

        return res.json({sens});
    }
    
}

// {} -> objeto