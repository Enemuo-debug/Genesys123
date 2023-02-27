import PersonModel from "../models/user.models";
import iUser from "../interfaces/userdata.interfaces";

class UserServices {
    async createRoom(data: iUser){
        return await PersonModel.create(data)
    }

    async updateRoom(id: String, data: iUser){
        return await PersonModel.findByIdAndUpdate(id, data)
    }

    async deleteRoom(id: String){
        return await PersonModel.findByIdAndDelete(id)
    }

    async findRooms(){
        return await PersonModel.find()
    }

    async findByName(name: String){
        return await PersonModel.findOne({name: name})
    }

    async findByID(id: string){
        return await PersonModel.findById(id)
    }
}

export default new UserServices()