import express from "express";
import db from "../db/conn.js";

const router = express.Router();

// Get a list of 50 users
router.get("/", async (req, res) => {
  const collection = await db.collection("users");
  const results = await collection.find({}).limit(50).toArray();
  res.send(results).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  const collection = await db.collection("users");
  const query = { email: req.body.email };
  const user = await collection.findOne(query);
  if (!user) {
    const newDocument = req.body;
    newDocument.date = new Date();
    const result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  }
});

// Update the post with a new comment
router.patch("/", async (req, res) => {
  const collection = await db.collection("users");
  const query = { email: req.body.email };
  const user = await collection.findOne(query);
  try {
    if (user) {
      const updates = {
        $set: {
          lastName: req.body.lastName,
          firstName: req.body.firstName,
          phoneNumber: req.body.phoneNumber,
        }
      };
      const result = await collection.updateOne(query, updates);
      res.send(result).status(200);
    } else {
      const newDocument = req.body;
      newDocument.date = new Date();
      const result = await collection.insertOne(newDocument);
      res.send(result).status(204);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
