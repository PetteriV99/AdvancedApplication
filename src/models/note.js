const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        author: {
            type: String, required: true
        },
        disabled: {
            type: Boolean, required: true
        }
    },
    {
        timestamps: true
    }
);

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
