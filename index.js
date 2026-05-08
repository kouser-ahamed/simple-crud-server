const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://simpleCrudUser:ib3eieJR8RJr8VMz@cluster0.sbrz6gk.mongodb.net/?appName=Cluster0`;
app.get("/", (req, res) => {
  res.send("Simple CRUD server is serving you!");
});

app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});
