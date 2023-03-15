import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import "express-async-errors";
import posts from "./routes/posts.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", posts);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
