import iUser from "../interfaces/userdata.interfaces";
import userServices from "../services/user.services";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

class UserController {
    async SignUp(req: Request, res: Response){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(500).json({
                message: errors.array()[0].msg,
                success: false,
            })
        }
        else {
            const data: iUser = req.body
            const list = ['GUEST', 'ADMIN']
            const existingUser = await userServices.findByName(data.name)
            if(existingUser){
                res.status(500).json({
                    message: 'This User exists on the DataBase',
                    success: false,
                })
            }
            else if (!list.includes(data.kind)){
                res.status(500).json({
                    message: 'The User kind entered is invalid',
                    success: false,
                })
            }
            else{
                const newUser = await userServices.createRoom(data)
                res.status(201).json({
                    message: 'User created successfully',
                    success: true,
                    data: newUser
                })
            }
        } 
    }
}

export default new UserController()