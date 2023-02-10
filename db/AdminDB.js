import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

function AdminDB() {
  const adminsDB = {};
  const url = process.env.MONGO_URI || "mongodb://localhost:27017";
  const DB_NAME = "StartsFoundation";
  const USER_COLLECTION = "Users";

  /**
   * create user function
   * @param {string} user id (email)
   * @param {string} hashed password
   * @returns
   */
  adminsDB.createUser = async (_user, _password) => {
    let client;
    try {
      client = new MongoClient(url);
      const db = client.db(DB_NAME);
      const usersCol = db.collection(USER_COLLECTION);
      const dbResponse = await usersCol.insertOne({
        user: _user,
        password: _password,
      });
      return dbResponse;
    } catch (err) {
      console.error(err);
      alert(`There was an error ${err}`);
    } finally {
      client.close();
    }
  };

  return adminsDB;
}

export default AdminDB();
