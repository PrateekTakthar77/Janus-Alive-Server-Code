const mongoose = require("mongoose");

const contactForm = mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        }
    }
)
const contact = mongoose.model("contact", contactForm);
module.exports = contact