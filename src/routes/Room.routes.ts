import { Router } from "express";
import Authentication from "../middlewares/Authentication";
import roomController from "../controllers/room.controller";

const router = Router()

router.post('/', Authentication.ADMINAuthentic, roomController.CreateRoom)
router.get('/:id', Authentication.GUESTAuthentic, roomController.FindRoomById)
router.patch('/:id', Authentication.ADMINAuthentic, roomController.UpdateRoom)
router.delete('/:id', Authentication.ADMINAuthentic, roomController.DeleteRoom)
router.get('/', Authentication.GUESTAuthentic, roomController.FindRooms)

export default router