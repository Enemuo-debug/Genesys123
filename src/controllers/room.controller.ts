import { Request, Response } from "express";
import iRoom from "../interfaces/roomdata.interfaces";
import roomServices from "../services/room.services";

class RoomController {
    async CreateRoom(req: Request, res: Response){
        const data: iRoom = req.body
        const list = ['STANDARD SUITES', 'DELUXE', 'ECONOMICAL']
        const existingRoom = await roomServices.findByName(data.name)
        if(existingRoom){
            res.status(500).json({
                message: 'This Room exists on the DataBase',
                success: false,
            })
        }
        else if (!list.includes(data.kind)){
            res.status(500).json({
                message: 'The Room kind entered is invalid',
                success: false,
            })
        }
        else{
            const newRoom = await roomServices.createRoom(data)
            res.status(201).json({
                message: 'Room created successfully',
                success: true,
                data: newRoom
            })
        }
    }

    async UpdateRoom(req: Request, res: Response){
        const { id } = req.params
        const data: iRoom = req.body
        const list = ['STANDARD SUITES', 'DELUXE', 'ECONOMICAL']
        const existingRoom = await roomServices.findByName(data.name)
        if(existingRoom){
            res.status(500).json({
                message: 'This Room exists on the DataBase',
                success: false,
            })
        }
        else if (!list.includes(data.kind)){
            res.status(500).json({
                message: 'The Room kind entered is invalid',
                success: false,
            })
        }
        else{
            const UpdatedRoom = await roomServices.updateRoom(id, data)
            res.status(201).json({
                message: 'Update successful',
                success: true,
                data: UpdatedRoom
            })
        }
    }
    async DeleteRoom(req: Request, res: Response){
        const { id } = req.params
        const existingRoom = await roomServices.findByID(id)
        if(existingRoom){
            const deletedRoom = roomServices.deleteRoom(id)
            res.status(201).json({
                message: 'Delete successful',
                success: true,
                data: deletedRoom
            })
        }
        else{
            res.status(500).json({
                message: 'You are trying to delete a room which no longer exists on our DataBase',
                success: false,
            })
        }
    }
    
    async FindRooms(req: Request, res: Response){
        const AllRooms = await roomServices.findRooms()
        res.status(200).json({
            message: 'DATA FETCHED SUCCESSFULLY',
            success: true,
            data: AllRooms
        })
    }

    async FindRoomById(req: Request, res: Response){
        const { id } = req.params
        const existRoom = await roomServices.findByID(id)
        if(existRoom){
            res.status(200).json({
                message: 'DATA FETCHED SUCCESSFULLY',
                success: true,
                data: existRoom
            })
        }
        else{
            res.status(500).json({
                message: 'You are trying to find a room which no longer exists on our DataBase',
                success: false,
            })
        }
    }

}
export default new RoomController()