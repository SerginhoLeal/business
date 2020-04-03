const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    empresa:{
        type: String,
        required: false,
    },
    vagas:{
        type: String,
        required: false,
    },
    funcao:{
        type: String,
        required: false,
    },
    desenvolvedor:{
        type: String,
        required: false,
    },
    beneficios:{
        type: String,
        required: false,
    },
    formacao:{
        type: String,
        required: false,
    },
    curriculo:{
        type: String,
        required: false,
    },
    data:{
        type: Date,
        default:Date.now,
    },
});

mongoose.model('Search', SearchSchema);