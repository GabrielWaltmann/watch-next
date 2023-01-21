const mongoose = require('mongoose')

const User =  mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    titles: []
})

module.exports = User