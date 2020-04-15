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
        select:false,
    },
    funcao:{
        type: String,
        required: true,
        select:false,
    },
    desenvolvedor:{
        type: String,
        required: true,
        select:false,
    },
    beneficios:{
        type: String,
        required: true,
        select:false,
    },
    wpps:{
        type: String,
        required: true,
        select:false,
    },
    mai:{
        type: String,
        required: true,
        select:false,
    },
    location:{
        type: PointSchema,
        index:'2dsphere',
        select:false,
    },
    data:{
        type: Date,
        default:Date.now,
        select:false,
    },
});

mongoose.model('Search', SearchSchema);