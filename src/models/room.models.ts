import mongoose from "mongoose";
const Schema = mongoose.Schema


const ApartmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    kind: {
        type: String,
        required: true,
        enum: ['STANDARD SUITES', 'DELUXE', 'ECONOMICAL']
    },
    cost: {
        type: Number,
        required: true,
    }
}, { timestamps: true })

const ApartmentModel = mongoose.model('Apartment', ApartmentSchema)

export default ApartmentModel