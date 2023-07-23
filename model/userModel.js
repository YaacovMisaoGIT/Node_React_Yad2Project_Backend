const  mongoose = require('mongoose')  

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please add a username']
    },
    userContact: {
        type: String,
        required: [true, 'Please add your number']
    },
    userEmail: {
        type: String,
        lowercase: true,
        required: [true, 'Please add your email']
    }
    

})



module.exports = mongoose.model('User', userSchema)

