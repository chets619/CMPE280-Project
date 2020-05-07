const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var fireSchema = new Schema({
    cause: { type: String },
    loc: {
        lat: { type: Number },
        lng: { type: Number }
    },
    intensity: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, {
    versionKey: false
});

module.exports = mongoose.model('fire', fireSchema);
