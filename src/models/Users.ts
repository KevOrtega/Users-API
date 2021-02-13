import { Schema, model } from 'mongoose'
import mongoosePaginate from "mongoose-paginate-v2"

const user_schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: JSON,
    }
}, {
    versionKey: false,
    timestamps: true
})

user_schema.plugin(mongoosePaginate)

export default model('Users', user_schema)