const Form = require("../model/contact.model")
const product = require("../model/Product.model")
const nodemailer = require("nodemailer")
require("dotenv").config();

const Getuserquery = async (req, res, next) => {
    try {
        const { name, email, phone, message, id } = req.body
        const data = new Form({ name, email, phone, message, id })
        const products = await product.findById(id)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: {
                name: 'Janus Alive',
                address: process.env.USER
            }, // sender address
            // to: email, // list of receivers
            to: 'prateek@januskoncepts.net', // list of receivers
            subject: "Thank You for contacting us",
            text:
                `Dear ${name},hello ${products.address}
             `,
        };

        const sendMail = async (transporter, mailOptions) => {
            try {
                await transporter.sendMail(mailOptions)
                console.log("Mail Sent succesfully")
            } catch (error) {
                console.log(error);
            }
        }

        sendMail(transporter, mailOptions)

        await data.save()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: error.message })
    }
}

module.exports = { Getuserquery };