const { number } = require("joi");
const mongoose = require("mongoose");

const contactForm = mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: Number
        },
        message: {
            type: String
        },
        id: {
            type: mongoose.Schema.Types.ObjectId
        }
    }
)
const contact = mongoose.model("query", contactForm);
module.exports = contact