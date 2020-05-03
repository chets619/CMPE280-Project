const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, required: true },
    pw: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    country: { type: String, required: false }

}, {
    versionKey: false
});

userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

module.exports = mongoose.model('user', userSchema);
