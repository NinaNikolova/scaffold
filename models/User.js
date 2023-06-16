const mongoose = require('moongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    }
})
// index allows to set unic in usarname
userSchema.index({username: 1 }, {
    collation:{
        locale: 'en',
        strength: 2
    }
})
const User = mongoose.model('User', userSchema);
module.exports =User;