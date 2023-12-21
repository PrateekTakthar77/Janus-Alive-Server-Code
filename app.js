require('dotenv').config();
const express = require('express');
const app = express();
const { Collection, default: mongoose } = require('mongoose');
const PORT = process.env.PORT || 3090
const MONGO_URL = process.env.MONGO_URL
const authRouter = require('./routes/Auth.routes')
const productRoute = require('./routes/product.routes')
const categoryRoute = require('./routes/Category.routes')
const cors = require("cors");

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
//cors
app.use(cors());
// app.get('/', (req, res) => {
//     res.status(200).json({
//         ok: true,
//         message: `working on ${PORT}`
//     });
// });
app.get("/", (req, res) => {
    res.send(`Welcome To Janus Alive Server managed by Prateek Takthar`);
});

app.use(
    "/api/auth",
    authRouter
);
app.use('/api/products', productRoute)
app.use('/api/category', categoryRoute)

// const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/your_database_name';
// const PORT = process.env.PORT || 3040;

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected successfully :)");
        app.listen(PORT, (err) => {
            if (err) {
                console.error('Error starting the server:', err.message);
            } else {
                console.log('App is running on port', PORT);
            }
        });
    })
    .catch((error) => {
        console.error("Error while connecting to the database:", error.message);
    });


// mongoose.connect(MONGO_URL)
//     .then(() => {
//         console.log("Database connected succesfully :)");
//         app.listen(PORT, (err) => {
//             if (err) console.log(err.message)
//             console.log('app is running on port', PORT)
//         })
//     }).catch((error) => {
//         console.log("error while connecting to the database ", error);
//     })