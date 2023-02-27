import { Router } from "express"
import { check } from "express-validator";
import userControllers from "../controllers/user.controllers"
const router = Router()

router.post('/', [
    check('name','The Username should be between 3 to 30 charachters').isLength({ min: 3}),
    check('name','The Username should be between 3 to 30 charachters').isLength({ max: 30}),
], userControllers.SignUp)

export default router