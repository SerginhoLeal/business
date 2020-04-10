const mongoose = require('mongoose');

const PointSchema = require('./PointSchema');

const SearchSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
        select:false,
    },
    empresa:{
        type: [String],
        required: true,
    },
    vagas:{
        type: String,
        required: true,
    },
    funcao:{
        type: String,
        required: true,
    },
    desenvolvedor:{
        type: String,
        required: true,
    },
    beneficios:{
        type: String,
        required: true,
    },
    formacao:{
        type: String,
        required: true,
    },
    curriculo:{
        type: String,
        required: true,
    },
    location:{
        type: PointSchema,
        index:'2dsphere'
    },
    data:{
        type: Date,
        default:Date.now,
    },
});

mongoose.model('Search', SearchSchema);