import express from "express";
import router1 from "./User.routes";
import router2 from "./Room.routes";

const router = express.Router()

router.use('/users', router1)
router.use('/rooms', router2)

export default router