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
    }
}

// {} -> objeto