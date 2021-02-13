import mongoose, { ConnectionOptions } from "mongoose"
import config from "./config"

(async () => {
    try {
        const mongoose_config: ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        }
    
        const db = await mongoose.connect(`${config.mongodbURL}`, mongoose_config)
        console.log('database on', db.connection.name)
    } catch (error) {
        console.log(error.message)
    }
})()