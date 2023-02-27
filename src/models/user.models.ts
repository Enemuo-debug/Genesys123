import mongoose from "mongoose";
const Schema = mongoose.Schema


const PersonSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    kind: {
        type: String,
        required: true,
        enum: ['GUEST', 'ADMIN']
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const PersonModel = mongoose.model('Person', PersonSchema)

export default PersonModel