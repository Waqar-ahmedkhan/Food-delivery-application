import express from "express";
import CreatecurrentUser from "../Controllers/CreatecurrentUser";

const router = express.Router();

router.post("/", CreatecurrentUser)

export default  router;