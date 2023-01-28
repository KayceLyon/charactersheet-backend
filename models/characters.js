const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema ({
    name: {type: String, required: true},
    class: {type: String, required: true}
})

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;