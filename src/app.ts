import express from "express"
import usersRoutes from "./routes/users.routes"
import cors from "cors";

const app = express()


//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api', usersRoutes)

export default app