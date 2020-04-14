const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const BusinessSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        select:false,
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

BusinessSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

mongoose.model('Business', BusinessSchema);