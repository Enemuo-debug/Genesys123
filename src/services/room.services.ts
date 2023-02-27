import iRoom from '../interfaces/roomdata.interfaces';
import Apartment from '../models/room.models'

class RoomServices {
    async createRoom(data: iRoom){
        return await Apartment.create(data)
    }

    async updateRoom(id: String, data: iRoom){
        return await Apartment.findByIdAndUpdate(id, data)
    }

    async deleteRoom(id: String){
        return await Apartment.findByIdAndDelete(id)
    }

    async findRooms(){
        return await Apartment.find()
    }

    async findByName(name: String){
        return await Apartment.findOne({name: name})
    }

    async findByID(id: string){
        return await Apartment.findById(id)
    }
}
export default new RoomServices()