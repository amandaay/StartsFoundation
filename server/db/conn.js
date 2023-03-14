import { MongoClient } from "mongodb";
import '../loadEnvironment.js';

const connectionString = process.env.ATLAS_URI || "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("startsfoundation");

export default db;