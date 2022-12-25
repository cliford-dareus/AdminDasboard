require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const clientRoutes =require("./routes/user");
const generalRoutes =require("./routes/general");
const managementRoutes =require("./routes/management");
const salesRoutes =require("./routes/sales");
const connectDB = require('./db/connect');

// data imports
const User =require("./models/User");
const Product =require("./models/Product");
const ProductStat =require("./models/ProductStat");
const Transaction =require("./models/Transaction");
const OverallStat =require("./models/OverallStat");
const AffiliateStat =require("./models/AffiliateStat");
const {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} =require("./data/index");


/* CONFIGURATION */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));

        /* ONLY ADD DATA ONE TIME */
        // AffiliateStat.insertMany(dataAffiliateStat);
        // OverallStat.insertMany(dataOverallStat);
        // Product.insertMany(dataProduct);
        // ProductStat.insertMany(dataProductStat);
        // Transaction.insertMany(dataTransaction);
        // User.insertMany(dataUser);
    } catch (error) {
        console.log(error);
    }
};

start();