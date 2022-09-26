const express = require("express");
const cors = require("cors");
const config = require("./config/default.json");
const mongoose = require("mongoose");
const PORT = process.env.PORT || config.serverPort;
// const { MongoClient } = require("mongodb");
const uri =
	"mongodb+srv://Serhey:omega94cskill@skyscannerbd.0spkauc.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(cors());
app.use(require("morgan")("dev"));


const usersRouter = require("./routes/users");
app.use("/api", usersRouter);

const start = async () => {
	try {
		await mongoose.connect(uri);
		console.log("Success");
		app.listen(PORT, () => console.log(`Server strated on ${PORT}`));
	} catch (e) {
		console.log("asd", e);
	}
};
start();
