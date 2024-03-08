const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");


const app = express();

admin.initializeApp({
  credential: admin.credential.cert("./permission.json"),
  databaseURL: "https://new-project-334f2-default-rtdb.firebaseio.com",
});

app.get("/hello-word", (req, res) => {
  return res.status(200).json({ message: "Hello word" });
});

app.use(require("./routes/products.routes"));

exports.app = functions.https.onRequest(app);
