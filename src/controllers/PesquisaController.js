const mongoose = require('mongoose');
const Sea = mongoose.model('Search');
const parseStrings = require('./parseString');

module.exports = {
    async index(req, res){
        const {latitude, longitude, empresa} = req.query;

        const desc = parseStrings(empresa);

        const sens = await Sea.find({
            empresa:{
                $in:desc,
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude, latitude],
                    },
                    $maxDistance:10000,
                },
            },
        });

        return res.json(sens);
    }
}

// {} -> objeto