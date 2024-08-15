import { app } from "./app.js"
import "dotenv/config"
import { connectDB } from "./db/index.js"

const PORT = process.env.PORT || 8006

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}........`)
    })
})
.catch((err) => {
    console.log("Error while connecting to DB.", err)
})