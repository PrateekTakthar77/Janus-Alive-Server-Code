const mongoose = require("mongoose");

const queryForm = mongoose.Schema(
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
        ProductId: {
            type: mongoose.Schema.Types.ObjectId
        }
    }
)
const contact = mongoose.model("query", queryForm);
module.exports = contact