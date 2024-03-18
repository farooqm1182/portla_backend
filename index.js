require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Appointment = require("./models/Appointment"); // replace with the path to your Appointment model

const app = express();
app.use(cors());

app.use(express.json()); // for parsing application/json

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.post("/appointments", async (req, res) => {
  const appointment = new Appointment(req.body);
  try {
    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).send(appointments);
  } catch (error) {
    res.status(500).send(error);
  }
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
