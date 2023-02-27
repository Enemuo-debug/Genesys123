import { Request, Response, NextFunction } from "express";
import iUser from "../interfaces/userdata.interfaces";
// import PersonModel from "../src/models/user.models";
import userServices from "../services/user.services";

class Auths{
    async ADMINAuthentic(req: Request, res: Response, next: NextFunction){
    const data: iUser = req.body
    const User = await userServices.findByName(data.name)
    if(data.password === User?.password){
        if(User.kind === 'ADMIN'){
            next()
        }
        else{
            res.status(400).json({
                message: 'This feature is exclusive to ADMINS and you aren\'t one',
                success: false
            })
        }
    }
    else {
        res.status(400).json({
            message: 'This Username does not exist on our DataBase'
        })
    }}
    async GUESTAuthentic(req: Request, res: Response, next: NextFunction){
        const data: iUser = req.body
        const User = await userServices.findByName(data.name)
        if(data.password === User?.password){
            next()
        }
        else {
            res.status(400).json({
                message: 'This Username does not exist on our DataBase'
            })
        }}
}


export default new Auths()