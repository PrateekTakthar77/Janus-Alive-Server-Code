const statesandcity = require("../model/Statesandcity.model")

const addData = async (req, res, next) => {
    try {
        const { city, state } = req.body;
        const data = new statesandcity({ city, state });
        await data.save();
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const getdata = async (req, res, next) => {
    try {
        const data = await statesandcity.find({})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}
module.exports = { addData, getdata }