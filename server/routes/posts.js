import express from "express";
import db from "../db/conn.js";

const router = express.Router();

// Get a list of 50 users
router.get("/", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({}).limit(50).toArray();
  res.send(results).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection("users");
  let query = { email: req.body.email };
  let user = await collection.findOne(query);
  if (!user) {
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  }
});

// Update the post with a new comment
router.patch("/", async (req, res) => {
  let collection = await db.collection("users");
  let query = { email: req.body.email };
  let user = await collection.findOne(query);
  if(user){
    const updates = {
      $push: {
        lastName: req.body.lastName,
        firstName: req.body.firstName, 
        phoneNumber: req.body.phoneNumber
      },
    };
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  }else{
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  }
});

export default router;
