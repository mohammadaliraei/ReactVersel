const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const userModel = require("./models/users");

// app.use(cors());

app.use(
  cors({
    origin: ["https://react-versel-api.vercel.app/"],
    methods: ["POST", "GET"],
    Credential: true,
  })
);
app.use(express.json());

const uri =
  "mongodb+srv://mdraei:Wi69nrRT16w0ubud@datashop.wg5bghu.mongodb.net/dataShop?retryWrites=true&w=majority&appName=dataShop";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connect to mongodb");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.post("/create-users", (req, res) => {
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server is running"));
