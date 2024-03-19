const connectToMongo = require("./config/db")
const express= require("express")
const dotenv = require("dotenv")

const app = express()
dotenv.config()
const port = process.env.PORT
connectToMongo()

const userRoute = require("./routes/user")
const noteRoute = require("./routes/notes")

app.use(express.json())

app.use("/api/auth", userRoute)
app.use("/api/notes", noteRoute)

app.listen(port, ()=>{
    console.log(`Listening to port http://localhost:${port}`)
})
