const mongoose = require('mongoose')
const schema = mongoose.Schema

const artworkschema = new schema({
    title: {
        type: String,
        required: true,
        unique: true  // Ensures that titles are unique in the collection
    },
    place_of_origin: {
        type: String,
        required: true
    },
    artist_display: {
        type: String,
        required: true
    },
    inscriptions: {
        type: String,
        default: "No inscription"
    },
    date_start: {
        type: Number,
        required: true
    },
    date_end: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('artwork', artworkschema)