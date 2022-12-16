import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

//tWDkUoG2doTNEzsV

//mongodb+srv://admin:<password>@cluster0.n5blyco.mongodb.net/?retryWrites=true&w=majority
app.use(cors());

await mongoose.connect(
  "mongodb+srv://admin:tWDkUoG2doTNEzsV@cluster0.n5blyco.mongodb.net/?retryWrites=true&w=majority"
);
console.log("Mongodb connection is successful");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("Server is running on 4000");
});
